import React, { useEffect } from 'react';
import SentinelAICaseStudy from './case-studies/SentinelAICaseStudy';
import FixoraCaseStudy from './case-studies/FixoraCaseStudy';
import CodashCaseStudy from './case-studies/CodashCaseStudy';
import RegisterKaroCaseStudy from './case-studies/RegisterKaroCaseStudy';

/**
 * CaseStudyPage:
 * Dedicated full-page editorial case study router for Manoj Bhatt's Featured Projects.
 * Seamlessly routes between the four core case studies:
 * 1. Sentinel AI (Governance and Observability)
 * 2. Codash / Coinvervue (AI Interview Platform)
 * 3. Fixora (AI-Powered UX Auditing)
 * 4. RegisterKaro (Customer Onboarding Portal)
 */
export default function CaseStudyPage({ projectId, onBackToProjects, onNavigateCaseStudy }) {
  // Scroll to top whenever the case study changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  // If Sentinel AI is selected, render the full bespoke Sentinel AI Senior Case Study
  if (projectId === 'sentinel-ai' || projectId === 'transorg-iq') {
    return (
      <SentinelAICaseStudy
        onBackToProjects={onBackToProjects}
        onNavigateCaseStudy={onNavigateCaseStudy}
      />
    );
  }

  // If Codash is selected, render the full bespoke Codash Senior Case Study
  if (projectId === 'codash') {
    return (
      <CodashCaseStudy
        onBackToProjects={onBackToProjects}
        onNavigateCaseStudy={onNavigateCaseStudy}
      />
    );
  }

  // If Fixora is selected, render the full bespoke Fixora Senior Case Study
  if (projectId === 'fixora') {
    return (
      <FixoraCaseStudy
        onBackToProjects={onBackToProjects}
        onNavigateCaseStudy={onNavigateCaseStudy}
      />
    );
  }

  // If RegisterKaro is selected, render the full bespoke RegisterKaro Senior Case Study
  if (projectId === 'registerkaro') {
    return (
      <RegisterKaroCaseStudy
        onBackToProjects={onBackToProjects}
        onNavigateCaseStudy={onNavigateCaseStudy}
      />
    );
  }

  // Fallback to Sentinel AI for any unhandled or deleted route
  return (
    <SentinelAICaseStudy
      onBackToProjects={onBackToProjects}
      onNavigateCaseStudy={onNavigateCaseStudy}
    />
  );
}
