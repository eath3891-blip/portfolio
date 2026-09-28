# 3D Character Model Configuration

To supply your custom 3D model for Manoj Bhatt:

1. Place your exported GLB file at:
   `/public/models/manoj-character.glb`

2. Eye and Head Rigging Requirements:
   - For interactive eye tracking, name your eye bones or meshes:
     - Left eye: `Eye_L`, `LeftEye`, or `eye.l`
     - Right eye: `Eye_R`, `RightEye`, or `eye.r`
   - For head tracking, name the head bone:
     - Head: `Head` or `neck`

3. Fallback:
   If `manoj-character.glb` is missing or does not include controllable eye meshes, the application automatically mounts the custom procedural Apple-studio stylized designer character with full eye and head tracking active.
