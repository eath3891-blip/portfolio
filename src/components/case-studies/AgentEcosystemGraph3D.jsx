import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';
import { 
  RotateCcw, 
  Search, 
  ZoomIn, 
  ZoomOut, 
  ShieldCheck, 
  AlertTriangle, 
  Key, 
  Sliders, 
  Database, 
  Activity, 
  Users, 
  FileText, 
  Cpu, 
  Workflow, 
  X, 
  ArrowRight,
  Maximize2
} from 'lucide-react';

/**
 * ECOSYSTEM_NODES
 * Structured relational graph representing how an AI agent connects to
 * Identity, Permissions, Policies, Data Sources, Applications, Activity, Risk, Approvals, and Audit.
 * Strict Copy Rule: Zero em dashes or en dashes in visible text.
 */
const ECOSYSTEM_NODES = [
  // Central Core Node
  {
    id: 'core-agent',
    type: 'core',
    label: 'AI AGENTS',
    sublabel: '12 Active in Fleet',
    category: 'Core Entity',
    description: 'Central fleet of autonomous enterprise agents operating across production environments.',
    position: [0, 0, 0],
    color: '#2563eb',
    radius: 1.1,
    height: 0.35,
    icon: Cpu
  },

  // Primary Category 1: IDENTITY
  {
    id: 'cat-identity',
    type: 'category',
    label: 'IDENTITY',
    sublabel: 'Owners & Credentials',
    category: 'Identity Layer',
    description: 'Cryptographic identity, service account binding, model versioning, and team ownership attribution.',
    position: [0, 3.4, 0.4],
    color: '#3b82f6',
    radius: 0.75,
    height: 0.25,
    icon: Users,
    connections: ['core-agent']
  },
  {
    id: 'sub-id-finance',
    type: 'entity',
    label: 'Finance Analytics Agent',
    sublabel: 'Model: Claude 3.5 / GPT-4o',
    category: 'Agent Instance',
    description: 'Assigned to Finance Operations. Deployed in US-East-1 production cluster with SOC2 segregation.',
    position: [-1.4, 4.6, 0.8],
    color: '#60a5fa',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-identity']
  },
  {
    id: 'sub-id-secops',
    type: 'entity',
    label: 'SecOps Remediation Agent',
    sublabel: 'Model: Llama 3 70B',
    category: 'Agent Instance',
    description: 'Owned by Information Security. Scoped for zero-trust triage and network log parsing.',
    position: [1.4, 4.6, 0.8],
    color: '#60a5fa',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-identity']
  },

  // Primary Category 2: PERMISSIONS
  {
    id: 'cat-permissions',
    type: 'category',
    label: 'PERMISSIONS',
    sublabel: 'Capability Boundaries',
    category: 'Access Control',
    description: 'Fine-grained capability scopes bounding read access, write mutations, and external API invocation.',
    position: [3.3, 1.8, 0.3],
    color: '#38bdf8',
    radius: 0.75,
    height: 0.25,
    icon: Key,
    connections: ['core-agent']
  },
  {
    id: 'sub-perm-financial-db',
    type: 'entity',
    label: 'Read Financial Database',
    sublabel: 'Scope: read-only ledger',
    category: 'Capability Scope',
    description: 'Grants read access to customer balance tables and invoice line items. Mutations strictly prohibited.',
    position: [4.7, 2.6, 0.7],
    color: '#7dd3fc',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-permissions']
  },
  {
    id: 'sub-perm-customer-profile',
    type: 'entity',
    label: 'Read Customer Profile',
    sublabel: 'Scope: PII-masked read',
    category: 'Capability Scope',
    description: 'Allows querying customer contact metadata with automatic redaction of social security and payment tokens.',
    position: [4.8, 1.0, 0.6],
    color: '#7dd3fc',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-permissions']
  },

  // Primary Category 3: POLICIES
  {
    id: 'cat-policies',
    type: 'category',
    label: 'POLICIES',
    sublabel: 'Rules & Guardrails',
    category: 'Policy Gateway',
    description: 'Declarative organizational safety rules and transaction boundaries evaluated before every tool call.',
    position: [-3.3, 1.8, 0.3],
    color: '#8b5cf6',
    radius: 0.75,
    height: 0.25,
    icon: Sliders,
    connections: ['core-agent']
  },
  {
    id: 'sub-pol-fin-04',
    type: 'entity',
    label: 'POL-FIN-04: High Value Action Gate',
    sublabel: 'Threshold: >$10,000 mandates review',
    category: 'Policy Rule',
    description: 'Any database mutation or refund exceeding $10,000 automatically triggers a human-in-the-loop review docket.',
    position: [-4.7, 2.6, 0.7],
    color: '#a78bfa',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-policies']
  },
  {
    id: 'sub-pol-sec-01',
    type: 'entity',
    label: 'POL-SEC-01: Zero Direct Write',
    sublabel: 'Rule: REST intercept mandatory',
    category: 'Policy Rule',
    description: 'Agents cannot establish direct SQL write connections; mutations must pass through audited API proxies.',
    position: [-4.8, 1.0, 0.6],
    color: '#a78bfa',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-policies']
  },

  // Primary Category 4: DATA SOURCES
  {
    id: 'cat-data',
    type: 'category',
    label: 'DATA SOURCES',
    sublabel: 'Stores & APIs',
    category: 'Data Layer',
    description: 'Target databases, vector indices, and customer records exposed to the agent fleet.',
    position: [-3.5, -1.6, -0.4],
    color: '#06b6d4',
    radius: 0.75,
    height: 0.25,
    icon: Database,
    connections: ['core-agent', 'cat-policies']
  },
  {
    id: 'sub-data-ledger',
    type: 'entity',
    label: 'PostgreSQL Financial Ledger',
    sublabel: 'SOC2 Type II Certified',
    category: 'Database Target',
    description: 'Primary corporate ledger storing reconciled transaction records and audit event hashes.',
    position: [-4.9, -2.6, -0.6],
    color: '#67e8f9',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-data']
  },

  // Primary Category 5: APPLICATIONS
  {
    id: 'cat-applications',
    type: 'category',
    label: 'APPLICATIONS',
    sublabel: 'Integrated Tools',
    category: 'Tool Integrations',
    description: 'Enterprise platforms and SaaS applications callable by agent tools.',
    position: [3.5, -1.6, -0.4],
    color: '#10b981',
    radius: 0.75,
    height: 0.25,
    icon: Workflow,
    connections: ['core-agent', 'cat-permissions']
  },
  {
    id: 'sub-app-crm',
    type: 'entity',
    label: 'Salesforce CRM & Billing',
    sublabel: 'OAuth 2.0 Gateway',
    category: 'Application Tool',
    description: 'Customer dispute cases and invoice status queries handled via authenticated REST endpoints.',
    position: [4.9, -2.6, -0.6],
    color: '#6ee7b7',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-applications']
  },

  // Primary Category 6: ACTIVITY
  {
    id: 'cat-activity',
    type: 'category',
    label: 'ACTIVITY',
    sublabel: 'Live Event Stream',
    category: 'Observability',
    description: 'Real-time telemetry stream capturing tool calls, latency, payloads, and policy evaluation results.',
    position: [0, -1.4, 2.8],
    color: '#f59e0b',
    radius: 0.75,
    height: 0.25,
    icon: Activity,
    connections: ['core-agent']
  },
  {
    id: 'sub-act-webhook',
    type: 'entity',
    label: 'Anomaly #8912 Intercepted',
    sublabel: '10:36 UTC · Financial DB',
    category: 'Event Record',
    description: 'Attempted read on sensitive customer ledger flagged by Sentinel runtime interceptor.',
    position: [0, -2.8, 3.4],
    color: '#fbbf24',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-activity']
  },

  // Primary Category 7: RISK
  {
    id: 'cat-risk',
    type: 'category',
    label: 'RISK ENGINE',
    sublabel: 'Dynamic Scoring',
    category: 'Risk Evaluation',
    description: 'Multi-factor algorithm evaluating Impact, Exposure, and Autonomy to assess blast radius.',
    position: [-2.0, -3.4, 1.2],
    color: '#ef4444',
    radius: 0.75,
    height: 0.25,
    icon: AlertTriangle,
    connections: ['cat-activity']
  },
  {
    id: 'sub-risk-score80',
    type: 'entity',
    label: 'Score 80 (High Risk)',
    sublabel: 'Mandates human sign-off',
    category: 'Risk Assessment',
    description: 'High financial exposure triggers automatic escalation to human approval queue.',
    position: [-3.2, -4.6, 1.5],
    color: '#f87171',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-risk']
  },

  // Primary Category 8: APPROVALS
  {
    id: 'cat-approvals',
    type: 'category',
    label: 'APPROVALS',
    sublabel: 'Human Intervention',
    category: 'Decision Gate',
    description: 'Contextual review dockets presented to authorized humans before mutations are executed.',
    position: [0, -4.2, 0.9],
    color: '#f97316',
    radius: 0.75,
    height: 0.25,
    icon: ShieldCheck,
    connections: ['cat-risk']
  },
  {
    id: 'sub-appr-docket',
    type: 'entity',
    label: 'Docket #DKT-8912',
    sublabel: 'Assigned: Maya Sharma',
    category: 'Review Docket',
    description: 'Presents What, Why, Data, Policy, Risk, and 12 past precedents for one-click verification.',
    position: [0, -5.6, 1.2],
    color: '#fb923c',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-approvals']
  },

  // Primary Category 9: AUDIT
  {
    id: 'cat-audit',
    type: 'category',
    label: 'AUDIT ARCHIVE',
    sublabel: 'Cryptographic Proof',
    category: 'Compliance & Audit',
    description: 'Immutable append-only ledger of signed single-use execution tokens and human approvals.',
    position: [2.0, -3.4, 1.2],
    color: '#64748b',
    radius: 0.75,
    height: 0.25,
    icon: FileText,
    connections: ['cat-approvals', 'core-agent']
  },
  {
    id: 'sub-audit-hash',
    type: 'entity',
    label: 'Signed Trace 0x7f8a',
    sublabel: 'SHA-256: e3b0c442...',
    category: 'Audit Evidence',
    description: 'Cryptographically signed trace proving token authorization and target API response time.',
    position: [3.2, -4.6, 1.5],
    color: '#94a3b8',
    radius: 0.5,
    height: 0.18,
    connections: ['cat-audit']
  }
];

const checkWebGLSupport = () => {
  try {
    const testCanvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (testCanvas.getContext('webgl2') ||
       testCanvas.getContext('webgl') ||
       testCanvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

export default function AgentEcosystemGraph3D() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // State
  const [selectedNodeId, setSelectedNodeId] = useState('core-agent');
  const [activeFilter, setActiveFilter] = useState('all');
  const [hasWebGL, setHasWebGL] = useState(true);
  const [projectedCoords, setProjectedCoords] = useState({});
  const [isInteracting, setIsInteracting] = useState(false);

  // References for Three.js state
  const threeRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    meshMap: new Map(),
    linesGroup: null,
    labelsMap: new Map(),
    targetCameraPos: new THREE.Vector3(0, 0, 12),
    currentCameraPos: new THREE.Vector3(0, 0, 16),
    spherical: { radius: 12, theta: 0, phi: Math.PI / 2.2 },
    isDragging: false,
    prevPointer: { x: 0, y: 0 },
    pinchDist: null,
    reqId: null,
    isIdle: false,
    assemblyStartTime: 0
  });

  // Lookup map for fast connectivity queries
  const nodeMap = useMemo(() => {
    const map = new Map();
    ECOSYSTEM_NODES.forEach((node) => map.set(node.id, node));
    return map;
  }, []);

  // Compute active highlight set based on selected node and filter
  const highlightedNodeIds = useMemo(() => {
    if (activeFilter === 'financial-flow') {
      return new Set([
        'core-agent',
        'cat-identity',
        'sub-id-finance',
        'cat-permissions',
        'sub-perm-financial-db',
        'sub-perm-customer-profile',
        'cat-policies',
        'sub-pol-fin-04',
        'cat-data',
        'sub-data-ledger',
        'cat-activity',
        'sub-act-webhook',
        'cat-risk',
        'sub-risk-score80',
        'cat-approvals',
        'sub-appr-docket',
        'cat-audit',
        'sub-audit-hash'
      ]);
    }

    if (activeFilter === 'policies') {
      return new Set([
        'core-agent',
        'cat-policies',
        'sub-pol-fin-04',
        'sub-pol-sec-01',
        'cat-permissions',
        'sub-perm-financial-db',
        'cat-data',
        'sub-data-ledger'
      ]);
    }

    if (activeFilter === 'risk') {
      return new Set([
        'core-agent',
        'cat-activity',
        'sub-act-webhook',
        'cat-risk',
        'sub-risk-score80',
        'cat-approvals',
        'sub-appr-docket',
        'cat-audit',
        'sub-audit-hash'
      ]);
    }

    // Default: Highlight selected node and all its directly connected neighbors
    if (!selectedNodeId) return new Set(ECOSYSTEM_NODES.map((n) => n.id));

    const set = new Set([selectedNodeId]);
    const sel = nodeMap.get(selectedNodeId);
    if (sel) {
      if (sel.connections) {
        sel.connections.forEach((connId) => set.add(connId));
      }
      // Also add any node that lists selectedNodeId in its connections
      ECOSYSTEM_NODES.forEach((n) => {
        if (n.connections && n.connections.includes(selectedNodeId)) {
          set.add(n.id);
        }
      });
    }
    return set;
  }, [selectedNodeId, activeFilter, nodeMap]);

  // Selected node object for inspector panel
  const selectedNode = useMemo(() => {
    return nodeMap.get(selectedNodeId) || nodeMap.get('core-agent');
  }, [selectedNodeId, nodeMap]);

  // Initialize Three.js scene
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!checkWebGLSupport()) {
      setHasWebGL(false);
      return;
    }

    let renderer = null;
    let scene = null;
    let camera = null;
    let animId = null;
    let handleResize = null;

    try {
      const width = canvas.clientWidth || 800;
      const height = canvas.clientHeight || 560;

      scene = new THREE.Scene();
      scene.background = new THREE.Color('#0b0d14');

      camera = new THREE.PerspectiveCamera(45, Math.max(1, width) / Math.max(1, height), 0.1, 100);
      camera.position.set(0, 0, 16);

      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: false,
        powerPreference: 'default'
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

      // Subtle ambient & directional lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
      scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
      dirLight.position.set(10, 20, 15);
      scene.add(dirLight);

      const bluePointLight = new THREE.PointLight(0x3b82f6, 1.5, 25);
      bluePointLight.position.set(0, 0, 4);
      scene.add(bluePointLight);

      // Group for connection lines
      const linesGroup = new THREE.Group();
      scene.add(linesGroup);

      // Build procedural hexagonal node meshes
      const meshMap = new Map();
      const meshList = [];

      ECOSYSTEM_NODES.forEach((node) => {
        // 6-sided cylinder = hexagon prism
        const geom = new THREE.CylinderGeometry(node.radius, node.radius, node.height, 6);
        geom.rotateX(Math.PI / 2); // Face the camera
        geom.rotateZ(Math.PI / 6); // Pointy top / honeycomb alignment

        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color(node.color),
          roughness: 0.35,
          metalness: 0.25,
          transparent: true,
          opacity: 0.95
        });

        const mesh = new THREE.Mesh(geom, mat);
        mesh.position.set(...node.position);
        mesh.userData = { id: node.id };

        // Add crisp wireframe edge outline for refined technical finish
        const edgeGeom = new THREE.EdgesGeometry(geom);
        const edgeMat = new THREE.LineBasicMaterial({
          color: new THREE.Color(0xffffff),
          transparent: true,
          opacity: 0.45
        });
        const wireframe = new THREE.LineSegments(edgeGeom, edgeMat);
        mesh.add(wireframe);

        scene.add(mesh);
        meshMap.set(node.id, mesh);
        meshList.push(mesh);
      });

      // Store state in ref
      const s = threeRef.current;
      s.scene = scene;
      s.camera = camera;
      s.renderer = renderer;
      s.meshMap = meshMap;
      s.linesGroup = linesGroup;
      s.meshList = meshList;
      s.assemblyStartTime = performance.now();

      // Rebuild relationship lines
      const updateLines = () => {
        if (!linesGroup) return;
        while (linesGroup.children.length > 0) {
          const obj = linesGroup.children[0];
          linesGroup.remove(obj);
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        }

        ECOSYSTEM_NODES.forEach((node) => {
          if (!node.connections) return;
          node.connections.forEach((targetId) => {
            const targetNode = nodeMap.get(targetId);
            if (!targetNode) return;

            const p1 = new THREE.Vector3(...node.position);
            const p2 = new THREE.Vector3(...targetNode.position);

            const isConnectedHighlighted =
              highlightedNodeIds.has(node.id) && highlightedNodeIds.has(targetId);

            const lineGeom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
            const lineMat = new THREE.LineBasicMaterial({
              color: isConnectedHighlighted ? 0x60a5fa : 0x222634,
              transparent: true,
              opacity: isConnectedHighlighted ? 0.75 : 0.18,
              linewidth: isConnectedHighlighted ? 2 : 1
            });

            const line = new THREE.Line(lineGeom, lineMat);
            linesGroup.add(line);
          });
        });
      };

      updateLines();

      // Animation & Render Loop
      const render = () => {
        animId = requestAnimationFrame(render);

        const now = performance.now();
        const elapsed = (now - s.assemblyStartTime) / 1000;

        // Initial assembly animation (0 to 2.2 seconds)
        if (elapsed < 2.5) {
          const progress = Math.min(1, elapsed / 1.8);
          meshMap.forEach((mesh, id) => {
            const targetNode = nodeMap.get(id);
            if (!targetNode) return;
            const scale = targetNode.type === 'core' 
              ? Math.min(1, progress * 1.3)
              : Math.max(0.001, Math.min(1, (progress - 0.25) * 1.4));
            mesh.scale.set(scale, scale, scale);
          });
        }

        // Smooth camera position interpolation
        const targetPos = new THREE.Vector3();
        targetPos.x = s.spherical.radius * Math.sin(s.spherical.phi) * Math.sin(s.spherical.theta);
        targetPos.y = s.spherical.radius * Math.cos(s.spherical.phi);
        targetPos.z = s.spherical.radius * Math.sin(s.spherical.phi) * Math.cos(s.spherical.theta);

        camera.position.lerp(targetPos, 0.08);
        camera.lookAt(0, 0, 0);

        // Update 2D projected coordinates for HTML overlays
        const projected = {};
        const halfWidth = width / 2;
        const halfHeight = height / 2;

        meshMap.forEach((mesh, id) => {
          const tempV = new THREE.Vector3();
          mesh.getWorldPosition(tempV);
          tempV.project(camera);

          // Check if node is in front of camera
          if (tempV.z < 1) {
            const x = tempV.x * halfWidth + halfWidth;
            const y = -(tempV.y * halfHeight) + halfHeight;
            projected[id] = { x, y, visible: true };
          } else {
            projected[id] = { x: 0, y: 0, visible: false };
          }
        });

        setProjectedCoords(projected);

        // Render Three scene
        renderer.render(scene, camera);
      };

      render();

      // Resize observer
      handleResize = () => {
        if (!canvas || !renderer || !camera) return;
        const newWidth = canvas.clientWidth || 800;
        const newHeight = canvas.clientHeight || 560;
        camera.aspect = newWidth / Math.max(1, newHeight);
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to 2D view:', err);
      setHasWebGL(false);
      if (renderer) {
        try { renderer.dispose(); } catch (_) {}
      }
      return;
    }

    return () => {
      if (animId) cancelAnimationFrame(animId);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (renderer) {
        try { renderer.dispose(); } catch (_) {}
      }
    };
  }, []);

  // Update line highlights when highlightedNodeIds changes
  useEffect(() => {
    const s = threeRef.current;
    if (!s.linesGroup) return;

    while (s.linesGroup.children.length > 0) {
      const obj = s.linesGroup.children[0];
      s.linesGroup.remove(obj);
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    }

    ECOSYSTEM_NODES.forEach((node) => {
      if (!node.connections) return;
      node.connections.forEach((targetId) => {
        const targetNode = nodeMap.get(targetId);
        if (!targetNode) return;

        const p1 = new THREE.Vector3(...node.position);
        const p2 = new THREE.Vector3(...targetNode.position);

        const isConnectedHighlighted =
          highlightedNodeIds.has(node.id) && highlightedNodeIds.has(targetId);

        const lineGeom = new THREE.BufferGeometry().setFromPoints([p1, p2]);
        const lineMat = new THREE.LineBasicMaterial({
          color: isConnectedHighlighted ? 0x60a5fa : 0x222634,
          transparent: true,
          opacity: isConnectedHighlighted ? 0.85 : 0.15
        });

        const line = new THREE.Line(lineGeom, lineMat);
        s.linesGroup.add(line);
      });
    });

    // Update mesh opacity and highlight
    s.meshMap.forEach((mesh, id) => {
      const isHighlighted = highlightedNodeIds.has(id);
      const isSelected = selectedNodeId === id;
      mesh.material.opacity = isSelected ? 1.0 : isHighlighted ? 0.85 : 0.22;
      mesh.scale.setScalar(isSelected ? 1.12 : isHighlighted ? 1.0 : 0.88);
    });
  }, [highlightedNodeIds, selectedNodeId, nodeMap]);

  // Handle pointer interactions (mouse & touch)
  const handlePointerDown = (e) => {
    const s = threeRef.current;
    s.isDragging = true;
    s.prevPointer = { x: e.clientX, y: e.clientY };
    s.startPointer = { x: e.clientX, y: e.clientY };
    s.startTime = performance.now();
    setIsInteracting(true);
  };

  const handlePointerMove = (e) => {
    const s = threeRef.current;
    if (!s.isDragging) return;

    const deltaX = e.clientX - s.prevPointer.x;
    const deltaY = e.clientY - s.prevPointer.y;

    s.prevPointer = { x: e.clientX, y: e.clientY };

    s.spherical.theta -= deltaX * 0.007;
    s.spherical.phi = Math.max(
      0.15,
      Math.min(Math.PI - 0.15, s.spherical.phi - deltaY * 0.007)
    );
  };

  const handlePointerUp = (e) => {
    const s = threeRef.current;
    s.isDragging = false;
    setIsInteracting(false);

    // If it was a quick click without much drag, perform raycast picking
    const distMoved = Math.hypot(
      e.clientX - (s.startPointer?.x || 0),
      e.clientY - (s.startPointer?.y || 0)
    );

    if (distMoved < 6 && s.camera && s.meshList) {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(x, y), s.camera);

      const intersects = raycaster.intersectObjects(s.meshList);
      if (intersects.length > 0) {
        const clickedId = intersects[0].object.userData.id;
        if (clickedId) {
          setSelectedNodeId(clickedId);
        }
      }
    }
  };

  // Zoom via wheel
  const handleWheel = (e) => {
    e.preventDefault();
    const s = threeRef.current;
    s.spherical.radius = Math.max(6.5, Math.min(18.0, s.spherical.radius + e.deltaY * 0.01));
  };

  // Touch handlers for mobile
  const handleTouchStart = (e) => {
    const s = threeRef.current;
    if (e.touches.length === 1) {
      s.isDragging = true;
      s.prevPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      s.startPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    } else if (e.touches.length === 2) {
      s.pinchDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
    }
  };

  const handleTouchMove = (e) => {
    const s = threeRef.current;
    if (e.touches.length === 1 && s.isDragging) {
      // Prevent default page scroll only when dragging directly on canvas
      e.preventDefault();
      const deltaX = e.touches[0].clientX - s.prevPointer.x;
      const deltaY = e.touches[0].clientY - s.prevPointer.y;

      s.prevPointer = { x: e.touches[0].clientX, y: e.touches[0].clientY };

      s.spherical.theta -= deltaX * 0.008;
      s.spherical.phi = Math.max(
        0.15,
        Math.min(Math.PI - 0.15, s.spherical.phi - deltaY * 0.008)
      );
    } else if (e.touches.length === 2 && s.pinchDist) {
      e.preventDefault();
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const deltaDist = s.pinchDist - newDist;
      s.pinchDist = newDist;
      s.spherical.radius = Math.max(
        6.5,
        Math.min(18.0, s.spherical.radius + deltaDist * 0.03)
      );
    }
  };

  const handleTouchEnd = (e) => {
    const s = threeRef.current;
    s.isDragging = false;
    s.pinchDist = null;

    if (e.changedTouches.length === 1 && s.startPointer) {
      const touch = e.changedTouches[0];
      const distMoved = Math.hypot(
        touch.clientX - s.startPointer.x,
        touch.clientY - s.startPointer.y
      );

      if (distMoved < 10 && s.camera && s.meshList) {
        const rect = canvasRef.current.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(x, y), s.camera);

        const intersects = raycaster.intersectObjects(s.meshList);
        if (intersects.length > 0) {
          const clickedId = intersects[0].object.userData.id;
          if (clickedId) {
            setSelectedNodeId(clickedId);
          }
        }
      }
    }
  };

  // Reset Camera View
  const handleResetView = () => {
    const s = threeRef.current;
    s.spherical = { radius: 12, theta: 0, phi: Math.PI / 2.2 };
    setSelectedNodeId('core-agent');
    setActiveFilter('all');
  };

  // Zoom controls
  const handleZoomIn = () => {
    const s = threeRef.current;
    s.spherical.radius = Math.max(6.5, s.spherical.radius - 1.8);
  };

  const handleZoomOut = () => {
    const s = threeRef.current;
    s.spherical.radius = Math.min(18.0, s.spherical.radius + 1.8);
  };

  return (
    <div className="w-full flex flex-col gap-6 select-none">
      {/* 3D Canvas Viewport Container */}
      <div 
        ref={containerRef}
        className="w-full h-[580px] sm:h-[640px] md:h-[720px] rounded-[2.5rem] bg-[#0b0d14] border border-white/10 shadow-2xl relative overflow-hidden flex flex-col justify-between"
      >
        {/* Top Floating Control Bar */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
          {/* Preset Story Filters */}
          <div className="flex flex-wrap items-center gap-1.5 pointer-events-auto bg-black/50 backdrop-blur-md p-1.5 rounded-full border border-white/10">
            {[
              { id: 'all', label: 'All Ecosystem' },
              { id: 'financial-flow', label: 'Financial Agent Flow' },
              { id: 'policies', label: 'Policies & Data' },
              { id: 'risk', label: 'Risk & Approvals' }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => {
                  setActiveFilter(btn.id);
                  if (btn.id === 'financial-flow') {
                    setSelectedNodeId('sub-id-finance');
                  } else if (btn.id === 'policies') {
                    setSelectedNodeId('cat-policies');
                  } else if (btn.id === 'risk') {
                    setSelectedNodeId('cat-risk');
                  }
                }}
                className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                  activeFilter === btn.id
                    ? 'bg-blue-600 text-white font-semibold shadow-xs'
                    : 'text-neutral-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* Reset & Zoom Actions */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={handleZoomIn}
              className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom In"
              aria-label="Zoom in"
            >
              <ZoomIn size={14} />
            </button>
            <button
              onClick={handleZoomOut}
              className="p-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Zoom Out"
              aria-label="Zoom out"
            >
              <ZoomOut size={14} />
            </button>
            <button
              onClick={handleResetView}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <RotateCcw size={12} />
              <span>Reset view</span>
            </button>
          </div>
        </div>

        {/* 3D Canvas Element */}
        {hasWebGL ? (
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="w-full h-full cursor-grab active:cursor-grabbing touch-none"
          />
        ) : (
          /* Graceful 2D Fallback if WebGL is unavailable */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white font-mono text-center gap-6 overflow-y-auto">
            <div className="flex flex-col items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono border border-blue-400/20">
                2D ECOSYSTEM ARCHITECTURE
              </span>
              <h4 className="text-lg sm:text-xl font-semibold text-white tracking-tight">
                Enterprise AI Agent Governance Graph
              </h4>
              <p className="text-xs text-neutral-400 max-w-lg leading-relaxed">
                Select any node below to inspect its identity, capability bounds, policy gates, and audit trails.
              </p>
            </div>

            {/* Core Entity */}
            <button
              onClick={() => setSelectedNodeId('core-agent')}
              className={`px-5 py-3 rounded-2xl border transition-all flex items-center gap-3 ${
                selectedNodeId === 'core-agent'
                  ? 'bg-blue-600 text-white border-white/40 shadow-lg scale-105'
                  : 'bg-white/[0.06] text-neutral-200 border-white/10 hover:bg-white/10'
              }`}
            >
              <Cpu size={20} className="text-blue-300 shrink-0" />
              <div className="text-left">
                <span className="text-xs font-bold block">AI AGENTS FLEET</span>
                <span className="text-[10px] text-neutral-300 block">12 Active Production Agents</span>
              </div>
            </button>

            {/* Connected Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl w-full">
              {ECOSYSTEM_NODES.filter(n => n.type === 'category').map((cat) => {
                const isSelected = selectedNodeId === cat.id;
                const IconComponent = cat.icon || ShieldCheck;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedNodeId(cat.id)}
                    className={`p-2.5 rounded-xl border text-left flex items-start gap-2 transition-all ${
                      isSelected
                        ? 'bg-blue-500/25 border-blue-400 text-white shadow-sm'
                        : 'bg-white/[0.04] border-white/10 text-neutral-300 hover:bg-white/[0.08] hover:text-white'
                    }`}
                  >
                    <IconComponent size={14} className={isSelected ? 'text-blue-400 mt-0.5' : 'text-neutral-400 mt-0.5'} />
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold block truncate">{cat.label}</span>
                      <span className="text-[9px] text-neutral-400 block truncate">{cat.sublabel}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Projected 2D HTML Labels for Retina Precision */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {ECOSYSTEM_NODES.map((node) => {
            const coord = projectedCoords[node.id];
            if (!coord || !coord.visible) return null;

            const isSelected = selectedNodeId === node.id;
            const isHighlighted = highlightedNodeIds.has(node.id);

            // Hide secondary entity tags when completely unrelated
            if (!isHighlighted && node.type === 'entity') return null;

            return (
              <div
                key={node.id}
                style={{
                  transform: `translate3d(${coord.x}px, ${coord.y}px, 0) translate(-50%, -50%)`,
                  opacity: isSelected ? 1 : isHighlighted ? 0.9 : 0.25
                }}
                className="absolute transition-opacity duration-200 flex flex-col items-center"
              >
                <div
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono tracking-tight whitespace-nowrap shadow-md pointer-events-auto cursor-pointer transition-transform ${
                    isSelected
                      ? 'bg-blue-600 text-white font-semibold scale-110 ring-2 ring-white/50'
                      : node.type === 'core'
                      ? 'bg-white text-black font-bold'
                      : isHighlighted
                      ? 'bg-black/75 text-neutral-200 border border-white/20 backdrop-blur-xs'
                      : 'bg-black/40 text-neutral-400 border border-white/5'
                  }`}
                  onClick={() => setSelectedNodeId(node.id)}
                >
                  {node.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Floating Context Inspector Panel (Desktop: bottom-right; Mobile: bottom sheet) */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 md:left-auto md:w-[380px] z-20 pointer-events-auto">
          <AnimatePresence mode="wait">
            {selectedNode && (
              <motion.div
                key={selectedNode.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.25 }}
                className="p-5 sm:p-6 rounded-3xl bg-[#141824]/90 backdrop-blur-md border border-white/15 text-white shadow-2xl flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400">
                      {selectedNode.category}
                    </span>
                    <h4 className="text-base sm:text-lg font-semibold text-white tracking-tight">
                      {selectedNode.label}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-neutral-400 shrink-0">
                    {selectedNode.sublabel}
                  </span>
                </div>

                <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                  {selectedNode.description}
                </p>

                {/* Specific context tags depending on selection */}
                {selectedNode.id === 'sub-id-finance' && (
                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10 text-[11px] font-mono text-neutral-300">
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase">ACCESS SCOPE</span>
                      <p className="text-white font-semibold">Ledger Read (No Write)</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase">POLICY GATE</span>
                      <p className="text-amber-300 font-semibold">POL-FIN-04 (above $10k)</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase">RISK TIER</span>
                      <p className="text-red-400 font-semibold">Score 80 (High Risk)</p>
                    </div>
                    <div>
                      <span className="text-[10px] text-neutral-500 uppercase">AUTONOMY</span>
                      <p className="text-white font-semibold">Act with Approval</p>
                    </div>
                  </div>
                )}

                {/* Bottom Gesture Instruction */}
                <div className="pt-2 flex items-center justify-between text-[10px] font-mono text-neutral-400 border-t border-white/10">
                  <span className="hidden sm:inline">Drag to rotate · Scroll to zoom · Click node</span>
                  <span className="sm:hidden">Drag to rotate · Pinch to zoom · Tap node</span>
                  <span className="text-blue-400 font-semibold">Ecosystem Inspector</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
