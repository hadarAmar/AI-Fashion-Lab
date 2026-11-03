/**
 * AI FASHION LAB - Three.js 3D Garment Studio
 * Milestone 2: Interactive 3D Digital Haute Couture Atelier
 */

class GarmentStudio3D {
  constructor(containerId = 'studio-webgl-container') {
    this.container = document.getElementById(containerId);
    this.canvas = null;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.garmentGroup = null;
    this.garmentMesh = null;
    this.pedestalMesh = null;
    this.mannequinTopMesh = null;
    
    // Materials
    this.fabrics = {};
    this.currentFabricKey = 'silk';
    this.currentColorHex = 0xC5A059; // Champagne Gold
    this.currentSilhouetteKey = 'evening'; // 'evening', 'column', 'avantgarde'
    
    // Interaction & Animation
    this.isRotating = true;
    this.autoRotateSpeed = 0.006;
    this.isDragging = false;
    this.previousPointerPosition = { x: 0, y: 0 };
    this.targetRotationY = 0;
    this.targetRotationX = 0;
    this.rotationY = 0;
    this.rotationX = 0;
    this.animationFrameId = null;
    this.isVisible = false;
    
    // Initialize
    this.init();
  }

  init() {
    if (!this.container) return;

    // Check WebGL availability
    if (!this.isWebGLAvailable()) {
      this.renderFallback('דפדפן זה אינו תומך ב-WebGL או שההאצה הגרפית מבוטלת.');
      return;
    }

    try {
      this.setupScene();
      this.setupLights();
      this.setupMaterials();
      this.createPedestal();
      this.buildGarment(this.currentSilhouetteKey);
      this.setupEventListeners();
      this.setupUIControls();
      
      // Save initial state
      this.saveState();
      
      // Start loop
      this.animate();
      console.log('[GarmentStudio3D] Interactive 3D Studio initialized successfully.');
    } catch (err) {
      console.error('[GarmentStudio3D] Failed to initialize Three.js:', err);
      this.renderFallback('אירעה שגיאה בטעינת מודל התלת-ממד. אנא רענן את הדף.');
    }
  }

  isWebGLAvailable() {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGLRenderingContext && 
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    } catch (e) {
      return false;
    }
  }

  renderFallback(message) {
    if (!this.container) return;
    this.container.innerHTML = `
      <div class="webgl-fallback-card">
        <div class="fallback-icon">⚠️</div>
        <h4>מצב תלת-ממד אינו זמין כעת</h4>
        <p>${message}</p>
        <button class="btn-nav" onclick="location.reload()">רענן דף</button>
      </div>
    `;
  }

  setupScene() {
    this.scene = new THREE.Scene();
    
    const width = this.container.clientWidth || 640;
    const height = this.container.clientHeight || 420;

    this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    this.camera.position.set(0, 0.0, 4.5);
    this.camera.lookAt(0, -0.15, 0);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);
    this.canvas = this.renderer.domElement;

    this.garmentGroup = new THREE.Group();
    this.scene.add(this.garmentGroup);
  }

  setupLights() {
    // Ambient Light (warm luxury glow)
    const ambientLight = new THREE.AmbientLight(0xFFF9F0, 0.85);
    this.scene.add(ambientLight);

    // Key Light (Main soft directional shadow)
    const keyLight = new THREE.DirectionalLight(0xFFFAEE, 1.2);
    keyLight.position.set(3, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    this.scene.add(keyLight);

    // Fill Light (Cool lavender fill from side)
    const fillLight = new THREE.DirectionalLight(0xE0D4FA, 0.65);
    fillLight.position.set(-3, 2, 2);
    this.scene.add(fillLight);

    // Rim / Back Light (Haute Couture silhouette rim glow)
    const rimLight = new THREE.DirectionalLight(0xC5A059, 1.4);
    rimLight.position.set(0, 3, -4);
    this.scene.add(rimLight);
  }

  setupMaterials() {
    // 1. Silk Satin: Smooth, high specular sheen, low roughness
    const silk = new THREE.MeshPhysicalMaterial({
      color: this.currentColorHex,
      roughness: 0.18,
      metalness: 0.12,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      reflectivity: 0.8,
      side: THREE.DoubleSide
    });

    // 2. Matte Crepe / Linen: High roughness, soft diffuse, zero clearcoat
    const matte = new THREE.MeshStandardMaterial({
      color: this.currentColorHex,
      roughness: 0.82,
      metalness: 0.02,
      side: THREE.DoubleSide
    });

    // 3. Velvet Shimmer: Deep softness with warm sheen
    const velvet = new THREE.MeshStandardMaterial({
      color: this.currentColorHex,
      roughness: 0.52,
      metalness: 0.18,
      side: THREE.DoubleSide
    });

    this.fabrics = { silk, matte, velvet };

    // Pedestal & Stand Materials
    this.goldMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0xC5A059,
      roughness: 0.28,
      metalness: 0.85
    });

    this.blackMarbleMaterial = new THREE.MeshStandardMaterial({
      color: 0x1A1918,
      roughness: 0.35,
      metalness: 0.1
    });
  }

  createPedestal() {
    const standGroup = new THREE.Group();

    // Base Cylinder
    const baseGeo = new THREE.CylinderGeometry(0.85, 0.95, 0.08, 48);
    const base = new THREE.Mesh(baseGeo, this.blackMarbleMaterial);
    base.position.y = -1.45;
    base.receiveShadow = true;
    standGroup.add(base);

    // Gold trim ring
    const ringGeo = new THREE.TorusGeometry(0.85, 0.025, 16, 64);
    const ring = new THREE.Mesh(ringGeo, this.goldMetalMaterial);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -1.41;
    standGroup.add(ring);

    // Vertical Stand Pole
    const poleGeo = new THREE.CylinderGeometry(0.025, 0.025, 2.2, 24);
    const pole = new THREE.Mesh(poleGeo, this.goldMetalMaterial);
    pole.position.y = -0.35;
    standGroup.add(pole);

    // Mannequin Neck Finial (Top crown)
    const finialGeo = new THREE.SphereGeometry(0.09, 32, 24);
    this.mannequinTopMesh = new THREE.Mesh(finialGeo, this.goldMetalMaterial);
    this.mannequinTopMesh.position.y = 1.05;
    standGroup.add(this.mannequinTopMesh);

    this.garmentGroup.add(standGroup);
  }

  /**
   * Generates recognizable haute couture 3D dresses using parametric curves & lathes
   */
  buildGarment(silhouetteType = 'evening') {
    // Remove previous garment if exists
    if (this.garmentMesh) {
      this.garmentGroup.remove(this.garmentMesh);
      if (this.garmentMesh.geometry) this.garmentMesh.geometry.dispose();
      this.garmentMesh = null;
    }

    const currentMaterial = this.fabrics[this.currentFabricKey] || this.fabrics.silk;
    const garmentContainer = new THREE.Group();

    if (silhouetteType === 'evening') {
      // Elegant Flowing Evening Gown (Corset bodice + dramatic flared floor-length pleated skirt)
      const points = [];
      // Neckline
      points.push(new THREE.Vector2(0.18, 0.92));
      points.push(new THREE.Vector2(0.24, 0.85));
      // Bust / Bodice
      points.push(new THREE.Vector2(0.32, 0.65));
      points.push(new THREE.Vector2(0.29, 0.45));
      // Waist Cinch
      points.push(new THREE.Vector2(0.22, 0.28));
      // High Hip
      points.push(new THREE.Vector2(0.28, 0.1));
      // Skirt flare curves
      points.push(new THREE.Vector2(0.40, -0.2));
      points.push(new THREE.Vector2(0.55, -0.55));
      points.push(new THREE.Vector2(0.72, -0.95));
      points.push(new THREE.Vector2(0.88, -1.35));

      const latheGeo = new THREE.LatheGeometry(points, 48);
      
      // Sculpt undulating cloth folds by displacing vertices
      const pos = latheGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        if (y < 0.2) { // Skirt area
          const angle = Math.atan2(pos.getZ(i), pos.getX(i));
          const foldWave = Math.sin(angle * 12) * 0.045 * (0.2 - y);
          pos.setX(i, pos.getX(i) + Math.cos(angle) * foldWave);
          pos.setZ(i, pos.getZ(i) + Math.sin(angle) * foldWave);
        }
      }
      latheGeo.computeVertexNormals();

      const mainDress = new THREE.Mesh(latheGeo, currentMaterial);
      mainDress.castShadow = true;
      mainDress.receiveShadow = true;
      garmentContainer.add(mainDress);

      // Gold Belt / Waist Accent
      const beltGeo = new THREE.TorusGeometry(0.23, 0.02, 16, 48);
      const belt = new THREE.Mesh(beltGeo, this.goldMetalMaterial);
      belt.rotation.x = Math.PI / 2;
      belt.position.y = 0.28;
      garmentContainer.add(belt);

    } else if (silhouetteType === 'column') {
      // Minimalist Architectural Column / Sheath Dress
      const points = [];
      points.push(new THREE.Vector2(0.17, 0.95));
      points.push(new THREE.Vector2(0.26, 0.8));
      points.push(new THREE.Vector2(0.30, 0.62));
      points.push(new THREE.Vector2(0.25, 0.35));
      points.push(new THREE.Vector2(0.24, 0.15));
      points.push(new THREE.Vector2(0.26, -0.4));
      points.push(new THREE.Vector2(0.28, -0.95));
      points.push(new THREE.Vector2(0.32, -1.35));

      const latheGeo = new THREE.LatheGeometry(points, 40);
      latheGeo.computeVertexNormals();

      const mainDress = new THREE.Mesh(latheGeo, currentMaterial);
      mainDress.castShadow = true;
      mainDress.receiveShadow = true;
      garmentContainer.add(mainDress);

      // Asymmetric Shoulder Strap
      const strapGeo = new THREE.TorusGeometry(0.22, 0.03, 16, 32, Math.PI * 0.85);
      const strap = new THREE.Mesh(strapGeo, currentMaterial);
      strap.position.set(0.06, 0.85, 0.05);
      strap.rotation.z = -Math.PI / 4;
      garmentContainer.add(strap);

    } else if (silhouetteType === 'avantgarde') {
      // Avant-Garde Sculptural Tiered Gown
      const points = [];
      points.push(new THREE.Vector2(0.18, 0.95));
      points.push(new THREE.Vector2(0.30, 0.75));
      points.push(new THREE.Vector2(0.24, 0.38));
      points.push(new THREE.Vector2(0.48, 0.05));
      points.push(new THREE.Vector2(0.26, -0.05));
      points.push(new THREE.Vector2(0.65, -0.45));
      points.push(new THREE.Vector2(0.32, -0.55));
      points.push(new THREE.Vector2(0.82, -1.1));
      points.push(new THREE.Vector2(0.92, -1.35));

      const latheGeo = new THREE.LatheGeometry(points, 48);
      const pos = latheGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const y = pos.getY(i);
        const angle = Math.atan2(pos.getZ(i), pos.getX(i));
        // Geometric Origami Folds
        const origamiWave = Math.sin(angle * 8) * 0.065 * Math.abs(y);
        pos.setX(i, pos.getX(i) + Math.cos(angle) * origamiWave);
        pos.setZ(i, pos.getZ(i) + Math.sin(angle) * origamiWave);
      }
      latheGeo.computeVertexNormals();

      const mainDress = new THREE.Mesh(latheGeo, currentMaterial);
      mainDress.castShadow = true;
      mainDress.receiveShadow = true;
      garmentContainer.add(mainDress);
    }

    this.garmentMesh = garmentContainer;
    this.garmentGroup.add(this.garmentMesh);
  }

  setColor(hexColor) {
    this.currentColorHex = hexColor;
    Object.values(this.fabrics).forEach(mat => {
      mat.color.setHex(hexColor);
    });
    this.saveState();
  }

  setFabric(fabricKey) {
    if (!this.fabrics[fabricKey]) return;
    this.currentFabricKey = fabricKey;
    
    // Re-apply material to garment children
    if (this.garmentMesh) {
      this.garmentMesh.traverse(child => {
        if (child.isMesh && child.material !== this.goldMetalMaterial && child.material !== this.blackMarbleMaterial) {
          child.material = this.fabrics[fabricKey];
        }
      });
    }
    this.saveState();
  }

  setSilhouette(silhouetteKey) {
    if (this.currentSilhouetteKey === silhouetteKey) return;
    this.currentSilhouetteKey = silhouetteKey;
    this.buildGarment(silhouetteKey);
    this.saveState();
  }

  saveState() {
    if (window.aiFashionLab) {
      window.aiFashionLab.state = {
        ...window.aiFashionLab.state,
        colorHex: this.currentColorHex,
        fabric: this.currentFabricKey,
        silhouette: this.currentSilhouetteKey,
        updatedAt: new Date().toISOString()
      };
      
      // Dispatch event for other slide listeners (Slide 7 Pyodide & Slide 10 Passport)
      window.dispatchEvent(new CustomEvent('garmentUpdated', {
        detail: window.aiFashionLab.state
      }));
    }
  }

  setupEventListeners() {
    // Window Resize
    window.addEventListener('resize', () => this.onResize());

    // Slide visibility awareness
    window.addEventListener('slidechange', (e) => {
      this.isVisible = (e.detail.slideNumber === 6);
      if (this.isVisible) {
        setTimeout(() => this.onResize(), 60);
      }
    });

    // Initial visibility check
    const activeSlide = document.querySelector('.slide.active');
    if (activeSlide && activeSlide.id === 'slide-6') {
      this.isVisible = true;
      setTimeout(() => this.onResize(), 60);
    }

    // Pointer Drag Interaction
    const dom = this.renderer.domElement;

    const onPointerDown = (e) => {
      this.isDragging = true;
      this.isRotating = false; // Pause auto-rotation during user drag
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      this.previousPointerPosition = { x: clientX, y: clientY };
    };

    const onPointerMove = (e) => {
      if (!this.isDragging) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      
      const deltaX = clientX - this.previousPointerPosition.x;
      const deltaY = clientY - this.previousPointerPosition.y;

      this.targetRotationY += deltaX * 0.008;
      this.targetRotationX += deltaY * 0.004;

      // Clamp vertical tilt
      this.targetRotationX = Math.max(-0.25, Math.min(0.35, this.targetRotationX));

      this.previousPointerPosition = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      this.isDragging = false;
      // Resume gentle auto-rotation after 2 seconds idle
      clearTimeout(this.resumeRotateTimer);
      this.resumeRotateTimer = setTimeout(() => {
        this.isRotating = true;
      }, 1800);
    };

    dom.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    dom.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  }

  setupUIControls() {
    // Color Swatches
    const colorButtons = document.querySelectorAll('[data-color]');
    colorButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        colorButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const hex = parseInt(btn.dataset.color.replace('#', '0x'), 16);
        this.setColor(hex);
      });
    });

    // Fabric Finish Pills
    const fabricButtons = document.querySelectorAll('[data-fabric]');
    fabricButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        fabricButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.setFabric(btn.dataset.fabric);
      });
    });

    // Silhouette Pills
    const silhouetteButtons = document.querySelectorAll('[data-silhouette]');
    silhouetteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        silhouetteButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.setSilhouette(btn.dataset.silhouette);
      });
    });

    // Reset Camera / Rotation Button
    const resetBtn = document.getElementById('btn-reset-3d');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.targetRotationY = 0;
        this.targetRotationX = 0;
        this.isRotating = true;
      });
    }
  }

  onResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (width === 0 || height === 0) return;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    // Only render and calculate when container is visible
    if (!this.isVisible) return;

    // Auto-rotation when not interacting
    if (this.isRotating) {
      this.targetRotationY += this.autoRotateSpeed;
    }

    // Smooth inertia interpolation (damping)
    this.rotationY += (this.targetRotationY - this.rotationY) * 0.08;
    this.rotationX += (this.targetRotationX - this.rotationX) * 0.08;

    if (this.garmentGroup) {
      this.garmentGroup.rotation.y = this.rotationY;
      this.garmentGroup.rotation.x = this.rotationX;
    }

    this.camera.lookAt(0, -0.15, 0);
    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.renderer) {
      this.renderer.dispose();
    }
  }
}

// Global exposure
if (typeof window !== 'undefined') {
  window.GarmentStudio3D = GarmentStudio3D;
}
