/**
 * =========================================================================
 * 🧪 MAIN CHEMISTRY EXHIBITION APPLICATION SCRIPT
 * Supports Dedicated Tab-Pane Switching + Deep-linking URL routing,
 * Interactive Timelines, Modals, Lightboxes, Diagram Zooming,
 * Floating Bubble Canvas & Micelle Visualizer.
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.CHEM_PROJECT_DATA || {};

  // 1. Initialize Canvas Ambient Particles
  initParticleCanvas();

  // 2. Initialize Dedicated Tab Switching & Routing
  initTabNavigation();

  // 3. Populate Hero Group Members & Photo
  initHeroSection(data);

  // 4. Render Ingredients (Tab 2)
  renderIngredients(data);

  // 5. Render Animated Video & Process Timeline (Tab 3)
  initProcessTimeline(data);

  // 6. Setup Diagrams & Zoom Modal (Tab 4)
  initDiagrams(data);

  // 7. Setup Real Experiment Gallery & Journey (Tab 5)
  initExperimentGallery(data);

  // 8. Render Applications, Advantages & Micelle Visualizer (Tab 6)
  initApplicationsAndSurfactant(data);

  // 9. Initialize Quiz (Tab 7)
  if (window.ChemistryQuiz) {
    new window.ChemistryQuiz(data);
  }

  // 10. Setup Scroll Reveal & Back to top
  initScrollEffects();
});

/* ==========================================================================
   1. PARTICLES CANVAS (Bubbles & Subtle Laboratory Particles)
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById("hero-particles-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = canvas.parentElement.offsetWidth || window.innerWidth);
  let height = (canvas.height = canvas.parentElement.offsetHeight || 500);

  window.addEventListener("resize", () => {
    if (canvas.parentElement) {
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 500;
    }
  });

  const particles = [];
  const particleCount = 28;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 6 + 2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.4 + 0.15,
      color: i % 2 === 0 ? "rgba(2, 132, 199," : "rgba(37, 99, 235,"
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color} ${p.opacity})`;
      ctx.fill();

      // Subtle bubble shine
      ctx.beginPath();
      ctx.arc(p.x - p.radius * 0.3, p.y - p.radius * 0.3, p.radius * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity + 0.2})`;
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. DEDICATED SEPARATE TAB NAVIGATION & ROUTING
   ========================================================================== */
function initTabNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const tabPanes = document.querySelectorAll(".tab-pane");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const navLinksContainer = document.getElementById("nav-links-menu");
  const brandLogo = document.querySelector(".brand-logo");

  function switchTab(targetTabId) {
    if (!targetTabId) targetTabId = "home";
    targetTabId = targetTabId.replace("#", "");

    let targetPane = document.getElementById(targetTabId);
    if (!targetPane) {
      targetTabId = "home";
      targetPane = document.getElementById("home");
    }

    // Hide all panes & deactivate all links
    tabPanes.forEach(pane => {
      pane.classList.remove("active");
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("data-tab") === targetTabId || link.getAttribute("href") === `#${targetTabId}`) {
        link.classList.add("active");
      }
    });

    // Activate selected pane
    if (targetPane) {
      targetPane.classList.add("active");
      window.scrollTo({ top: 0, behavior: "smooth" });
      
      // Trigger scroll-reveal inside newly activated tab
      const reveals = targetPane.querySelectorAll(".reveal-on-scroll");
      reveals.forEach(r => r.classList.add("revealed"));
    }

    // Update browser URL hash without jump
    history.replaceState(null, null, `#${targetTabId}`);

    // Close mobile menu if open
    if (navLinksContainer) {
      navLinksContainer.classList.remove("open");
    }
  }

  // Bind Navbar Tab Links
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute("data-tab") || link.getAttribute("href").replace("#", "");
      switchTab(targetTab);
    });
  });

  // Bind Brand Logo to Home tab
  if (brandLogo) {
    brandLogo.addEventListener("click", (e) => {
      e.preventDefault();
      switchTab("home");
    });
  }

  // Bind In-page buttons that switch tabs (e.g. CTA buttons, footer links)
  document.querySelectorAll("[data-switch-tab]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.getAttribute("data-switch-tab");
      switchTab(target);
    });
  });

  document.querySelectorAll(".footer-links-list a").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const target = el.getAttribute("href").replace("#", "");
      switchTab(target);
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navLinksContainer) {
    mobileToggle.addEventListener("click", () => {
      navLinksContainer.classList.toggle("open");
    });
  }

  // Handle Initial Load based on URL Hash
  const initialHash = window.location.hash.replace("#", "") || "home";
  switchTab(initialHash);

  // Handle Browser Back/Forward navigation
  window.addEventListener("popstate", () => {
    const hash = window.location.hash.replace("#", "") || "home";
    switchTab(hash);
  });
}

/* ==========================================================================
   3. HERO SECTION POPULATION WITH NAMES AND PRN (CLEAN FORMAT)
   ========================================================================== */
function initHeroSection(data) {
  const membersList = document.getElementById("hero-members-list");
  const footerMembersList = document.getElementById("footer-members-list");
  const members = (data.project && data.project.members) || [];

  if (membersList) {
    membersList.innerHTML = members.map((m, idx) => `
      <div class="member-chip">
        <span class="member-avatar">${m.initials || (idx + 1)}</span>
        <div style="flex-grow: 1;">
          <div style="font-size: 1rem; font-weight: 700; color: var(--text-main); line-height: 1.25;">${m.name}</div>
          <div style="margin-top: 4px;">
            <span class="member-prn-tag">PRN: ${m.prn}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  if (footerMembersList) {
    footerMembersList.innerHTML = members.map(m => `
      <li style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
        <div>
          <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: var(--accent-cyan); margin-right: 6px;"></span>
          <strong>${m.name}</strong>
        </div>
        <span style="font-family: monospace; font-size: 0.8125rem; color: var(--accent-blue); background: var(--accent-blue-light); padding: 1px 8px; border-radius: 4px;">PRN: ${m.prn}</span>
      </li>
    `).join('');
  }

  // Hero Group Photo Bind
  const heroImg = document.getElementById("hero-group-photo-img");
  const heroPlaceholder = document.getElementById("hero-group-photo-placeholder");
  if (heroImg && data.media && data.media.groupPhoto) {
    heroImg.src = data.media.groupPhoto;
    heroImg.onerror = () => {
      heroImg.style.display = "none";
      if (heroPlaceholder) heroPlaceholder.style.display = "flex";
    };
  }
}

/* ==========================================================================
   4. TAB 2: INGREDIENTS RENDERING & MODAL
   ========================================================================== */
function renderIngredients(data) {
  const grid = document.getElementById("ingredients-grid-root");
  const ingredients = data.ingredients || [];
  if (!grid) return;

  const colorMap = {
    water: { accent: "#0284c7", light: "#e0f2fe", icon: "💧" },
    "coconut-oil": { accent: "#0d9488", light: "#ccfbf1", icon: "🥥" },
    naoh: { accent: "#e11d48", light: "#ffe4e6", icon: "⚗️" },
    na2co3: { accent: "#2563eb", light: "#dbeafe", icon: "🧂" },
    stpp: { accent: "#7c3aed", light: "#ede9fe", icon: "🛡️" },
    sls: { accent: "#059669", light: "#d1fae5", icon: "🫧" },
    sles: { accent: "#d97706", light: "#fef3c7", icon: "✨" }
  };

  grid.innerHTML = ingredients.map((ing, idx) => {
    const c = colorMap[ing.id] || { accent: "#0284c7", light: "#e0f2fe", icon: "🧪" };
    return `
      <div class="ingredient-card reveal-on-scroll delay-${(idx % 4) * 100}" 
           style="--card-accent: ${c.accent}; --card-light: ${c.light};" 
           data-ingredient-id="${ing.id}">
        <div>
          <div class="ingredient-card-header">
            <div>
              <div class="ingredient-role-badge">${ing.role}</div>
              <h3 class="ingredient-chem-name">${ing.name}</h3>
            </div>
            <div class="ingredient-icon-badge">${c.icon}</div>
          </div>
          <div class="ingredient-formula">${ing.formula}</div>
          <p class="ingredient-summary">${ing.shortSummary}</p>
        </div>
        <div class="ingredient-card-footer">
          <span style="font-size: 0.8125rem; color: var(--text-muted); font-weight: 600;">${ing.commonName}</span>
          <span class="learn-more-btn">Learn More ➔</span>
        </div>
      </div>
    `;
  }).join('');

  // Click card to open detail modal
  const cards = grid.querySelectorAll(".ingredient-card");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const ingId = card.getAttribute("data-ingredient-id");
      const ing = ingredients.find(i => i.id === ingId);
      if (ing) openIngredientModal(ing);
    });
  });
}

function openIngredientModal(ing) {
  const modal = document.getElementById("global-modal");
  const modalBody = document.getElementById("global-modal-content");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 16px;">
      <div style="width: 52px; height: 52px; border-radius: 12px; background: var(--accent-cyan-light); color: var(--accent-cyan); display: flex; align-items: center; justify-content: center; font-size: 1.75rem;">
        🧪
      </div>
      <div>
        <h2 style="font-size: 1.5rem; color: var(--text-main);">${ing.name}</h2>
        <span style="font-family: monospace; font-size: 0.9375rem; color: var(--accent-blue); font-weight: 700;">${ing.formula}</span>
      </div>
    </div>

    <div style="margin-bottom: 20px; padding: 12px 16px; background-color: var(--bg-secondary); border-radius: var(--radius-md); font-size: 0.875rem;">
      <strong>Common / Trade Name:</strong> ${ing.commonName}<br>
      <strong>Chemical Classification:</strong> ${ing.details.chemicalType} (${ing.details.molecularWeight})
    </div>

    <h4 style="font-size: 1rem; margin-bottom: 8px; color: var(--text-main);">Role in Detergent Preparation:</h4>
    <p style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 16px; line-height: 1.6;">${ing.details.roleInDetergent}</p>

    <h4 style="font-size: 1rem; margin-bottom: 8px; color: var(--text-main);">Key Chemical Functions:</h4>
    <ul style="padding-left: 20px; margin-bottom: 20px; font-size: 0.9375rem; color: var(--text-secondary);">
      ${ing.details.functions.map(f => `<li style="margin-bottom: 6px;">${f}</li>`).join('')}
    </ul>

    <div style="padding: 12px 16px; background-color: #fff1f2; border: 1px solid #fecdd3; border-radius: var(--radius-md); font-size: 0.8125rem; color: #9f1239;">
      <strong>Safety & Handling Note:</strong> ${ing.details.safetyAndHandling}
    </div>
  `;

  modal.classList.add("active");
}

/* ==========================================================================
   5. TAB 3: STEP-BY-STEP PROCESS TIMELINE & ANIMATED VIDEO
   ========================================================================== */
function initProcessTimeline(data) {
  const steps = data.timelineSteps || [];
  let currentStep = 0;

  const tabsContainer = document.getElementById("timeline-nav-tabs");
  const displayContainer = document.getElementById("timeline-step-display-box");
  const videoEl = document.getElementById("animated-process-video-el");

  if (videoEl && data.media && data.media.processVideo) {
    const sourceEl = videoEl.querySelector("source");
    if (sourceEl) sourceEl.src = data.media.processVideo;
    if (data.media.processVideoPoster) videoEl.poster = data.media.processVideoPoster;
    videoEl.load();
  }

  if (!tabsContainer || !displayContainer || steps.length === 0) return;

  function renderTimelineUI() {
    // Render Step Tab Bullets
    tabsContainer.innerHTML = steps.map((s, idx) => `
      <button class="timeline-step-bullet ${idx === currentStep ? 'active' : ''}" data-step="${idx}">
        <span class="bullet-circle">${s.stepNumber}</span>
        <span class="bullet-label">${s.title.split(' ')[0]}</span>
      </button>
    `).join('');

    // Render Active Step Content
    const s = steps[currentStep];
    displayContainer.innerHTML = `
      <div class="step-card-header">
        <span class="step-number-pill">STAGE ${s.stepNumber} OF 05</span>
        <div>
          <h3 class="step-title">${s.title}</h3>
          <p class="step-subheading">${s.subheading}</p>
        </div>
      </div>

      <div class="step-body-grid">
        <div class="step-description-box">
          <p style="margin-bottom: 16px;"><strong>Procedure:</strong> ${s.description}</p>
          <div style="padding: 14px 18px; background-color: var(--accent-cyan-light); border-left: 4px solid var(--accent-cyan); border-radius: 4px; font-size: 0.9375rem; color: #0369a1;">
            <strong>Key Chemical Observation:</strong> ${s.observation}
          </div>
        </div>

        <div class="step-meta-box">
          <div class="step-meta-item">
            <div class="step-meta-title">🛠️ Apparatus & Reagents</div>
            <div class="step-meta-text">${s.equipment}</div>
          </div>
          <div class="step-meta-item">
            <div class="step-meta-title">🛡️ Safety & Precautions</div>
            <div class="step-meta-text">${s.safetyNote}</div>
          </div>
        </div>
      </div>

      <div class="timeline-nav-buttons">
        <button class="btn btn-secondary" id="timeline-prev-btn" ${currentStep === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
          ← Previous Step
        </button>
        <span style="font-size: 0.875rem; font-weight: 700; color: var(--text-muted);">Step ${currentStep + 1} / ${steps.length}</span>
        <button class="btn btn-primary" id="timeline-next-btn" ${currentStep === steps.length - 1 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
          Next Step →
        </button>
      </div>
    `;

    // Bind Bullet clicks
    tabsContainer.querySelectorAll(".timeline-step-bullet").forEach(bullet => {
      bullet.addEventListener("click", () => {
        currentStep = parseInt(bullet.getAttribute("data-step"), 10);
        renderTimelineUI();
      });
    });

    // Bind Next/Prev
    const prevBtn = document.getElementById("timeline-prev-btn");
    const nextBtn = document.getElementById("timeline-next-btn");
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        if (currentStep > 0) {
          currentStep--;
          renderTimelineUI();
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          renderTimelineUI();
        }
      });
    }
  }

  renderTimelineUI();
}

/* ==========================================================================
   6. TAB 4: DIAGRAMS & ZOOM LIGHTBOX
   ========================================================================== */
function initDiagrams(data) {
  const blockCard = document.getElementById("block-diagram-view");
  const flowCard = document.getElementById("process-flow-diagram-view");

  const blockImg = document.getElementById("block-diagram-img-el");
  const flowImg = document.getElementById("process-flow-img-el");

  if (blockImg && data.media && data.media.blockDiagram) {
    blockImg.src = data.media.blockDiagram;
  }
  if (flowImg && data.media && data.media.processFlowDiagram) {
    flowImg.src = data.media.processFlowDiagram;
  }

  if (blockCard) {
    blockCard.addEventListener("click", () => {
      openLightbox({
        src: data.media.blockDiagram,
        title: data.media.blockDiagramTitle,
        caption: data.media.blockDiagramDescription,
        counter: "Diagram 1 of 2"
      });
    });
  }

  if (flowCard) {
    flowCard.addEventListener("click", () => {
      openLightbox({
        src: data.media.processFlowDiagram,
        title: data.media.processFlowDiagramTitle,
        caption: data.media.processFlowDiagramDescription,
        counter: "Diagram 2 of 2"
      });
    });
  }
}

/* ==========================================================================
   7. TAB 5: EXPERIMENT IN ACTION (GALLERY & JOURNEY)
   ========================================================================== */
function initExperimentGallery(data) {
  const photos = (data.media && data.media.experimentPhotos) || [];
  const grid = document.getElementById("experiment-photos-grid-root");
  const stepperRow = document.getElementById("journey-stepper-row");
  const journeyDisplay = document.getElementById("journey-display-card-root");
  const realVidEl = document.getElementById("real-experiment-video-el");

  if (realVidEl && data.media && data.media.realExperimentVideo) {
    const sourceEl = realVidEl.querySelector("source");
    if (sourceEl) sourceEl.src = data.media.realExperimentVideo;
    realVidEl.load();
  }

  let activePhotoIdx = 0;

  if (grid) {
    grid.innerHTML = photos.map((p, idx) => `
      <div class="photo-card reveal-on-scroll delay-${(idx % 4) * 100}" data-photo-index="${idx}">
        <div class="photo-thumb-frame">
          <span class="photo-badge-num">${p.stageNum}</span>
          <img src="${p.media}" alt="${p.title}" class="photo-thumb-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\' viewBox=\\'0 0 400 300\\'><rect fill=\\'%23f1f5f9\\' width=\\'400\\' height=\\'300\\'/><text fill=\\'%2364748b\\' font-family=\\'sans-serif\\' font-size=\\'16\\' font-weight=\\'bold\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\'>Photo: ${p.title}</text><text fill=\\'%2394a3b8\\' font-family=\\'sans-serif\\' font-size=\\'12\\' x=\\'50%\\' y=\\'60%\\' text-anchor=\\'middle\\'>(${p.media})</text></svg>'">
          <div class="photo-hover-overlay">🔍</div>
        </div>
        <div class="photo-info-box">
          <h4 class="photo-title">${p.title}</h4>
          <p class="photo-desc-snippet">${p.description}</p>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll(".photo-card").forEach(card => {
      card.addEventListener("click", () => {
        const idx = parseInt(card.getAttribute("data-photo-index"), 10);
        openGalleryLightbox(photos, idx);
      });
    });
  }

  // Journey Stepper Setup
  if (stepperRow && journeyDisplay) {
    function renderJourney() {
      stepperRow.innerHTML = photos.map((p, idx) => `
        <button class="journey-step-btn ${idx === activePhotoIdx ? 'active' : ''}" data-index="${idx}">
          <span class="journey-step-dot">${p.stageNum}</span>
          <span class="journey-step-text">${p.stageName}</span>
        </button>
      `).join('');

      const p = photos[activePhotoIdx];
      journeyDisplay.innerHTML = `
        <div class="journey-preview-frame">
          <img src="${p.media}" alt="${p.title}" class="journey-preview-img" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'300\\' viewBox=\\'0 0 400 300\\'><rect fill=\\'%230f172a\\' width=\\'400\\' height=\\'300\\'/><text fill=\\'%23ffffff\\' font-family=\\'sans-serif\\' font-size=\\'18\\' font-weight=\\'bold\\' x=\\'50%\\' y=\\'50%\\' text-anchor=\\'middle\\'>Stage ${p.stageNum}: ${p.title}</text></svg>'">
        </div>
        <div>
          <span class="step-number-pill">JOURNEY STAGE ${p.stageNum}</span>
          <h3 style="font-size: 1.5rem; margin: 12px 0 8px;">${p.title}</h3>
          <p style="font-size: 0.9375rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 16px;">${p.description}</p>
          <div style="padding: 12px 16px; background-color: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); font-size: 0.875rem;">
            <strong>Laboratory Record:</strong> ${p.observation}
          </div>
        </div>
      `;

      stepperRow.querySelectorAll(".journey-step-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          activePhotoIdx = parseInt(btn.getAttribute("data-index"), 10);
          renderJourney();
        });
      });
    }

    renderJourney();
  }
}

function openGalleryLightbox(photos, startIndex) {
  let currentIndex = startIndex;

  function update() {
    const p = photos[currentIndex];
    openLightbox({
      src: p.media,
      title: p.title,
      caption: p.description,
      counter: `${currentIndex + 1} / ${photos.length} — ${p.title}`,
      onPrev: currentIndex > 0 ? () => { currentIndex--; update(); } : null,
      onNext: currentIndex < photos.length - 1 ? () => { currentIndex++; update(); } : null
    });
  }

  update();
}

/* ==========================================================================
   8. TAB 6: APPLICATIONS & SURFACTANT MICELLE INTERACTIVE VISUALIZER
   ========================================================================== */
function initApplicationsAndSurfactant(data) {
  const appsGrid = document.getElementById("applications-grid-root");
  const advGrid = document.getElementById("advantages-grid-root");

  const apps = data.applications || [];
  const advs = data.advantages || [];

  if (appsGrid) {
    const iconMap = { shirt: "👕", sparkles: "✨", utensils: "🍽️", home: "🏠" };
    appsGrid.innerHTML = apps.map((a, idx) => `
      <div class="app-card reveal-on-scroll delay-${(idx % 4) * 100}">
        <div class="app-icon">${iconMap[a.icon] || '🫧'}</div>
        <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent-cyan); text-transform: uppercase;">${a.tag}</span>
        <h4 style="font-size: 1.125rem; margin: 6px 0 10px; color: var(--text-main);">${a.title}</h4>
        <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55;">${a.description}</p>
      </div>
    `).join('');
  }

  if (advGrid) {
    const advIconMap = { zap: "⚡", "droplet-check": "💧", "shield-check": "🛡️", sliders: "🎛️", "book-open": "📖", "heart-handshake": "🤝" };
    advGrid.innerHTML = advs.map((ad, idx) => `
      <div class="advantage-card reveal-on-scroll delay-${(idx % 3) * 100}">
        <div class="advantage-icon-col">${advIconMap[ad.icon] || '✓'}</div>
        <div>
          <h4 style="font-size: 1.0625rem; font-weight: 700; margin-bottom: 6px; color: var(--text-main);">${ad.title}</h4>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55;">${ad.summary}</p>
        </div>
      </div>
    `).join('');
  }

  // Interactive Surfactant Micelle SVG Demo
  const micelleCanvas = document.getElementById("micelle-svg-canvas");
  const stageBtns = document.querySelectorAll(".micelle-tab-btn");
  const explainerText = document.getElementById("micelle-explainer-text");

  if (micelleCanvas && stageBtns.length > 0 && explainerText) {
    const stageDetails = {
      1: {
        text: "<strong>Stage 1 — Surfactant Dispersion:</strong> Surfactants have hydrophilic (water-loving) polar heads and hydrophobic (water-fearing) hydrocarbon tails. When added to water, they lower surface tension.",
        renderSvg: () => `
          <svg viewBox="0 0 300 300" width="100%" height="100%">
            <!-- Water Background -->
            <rect width="300" height="300" fill="#f0f9ff" />
            <!-- Water Molecules / Waves -->
            <path d="M 0 50 Q 75 40 150 50 T 300 50 L 300 300 L 0 300 Z" fill="#e0f2fe" opacity="0.6"/>
            <!-- Surfactant Molecules Floating -->
            ${[
              {x: 60, y: 70, angle: 30},
              {x: 140, y: 85, angle: -45},
              {x: 230, y: 65, angle: 15},
              {x: 80, y: 190, angle: 70},
              {x: 210, y: 200, angle: -80}
            ].map(m => `
              <g transform="translate(${m.x}, ${m.y}) rotate(${m.angle})">
                <circle cx="0" cy="0" r="10" fill="#0284c7" />
                <path d="M 0 10 Q 6 22 0 34 T 0 54" fill="none" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
              </g>
            `).join('')}
            <text x="150" y="275" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Hydrophilic Heads (Blue) &amp; Hydrophobic Tails (Grey)</text>
          </svg>
        `
      },
      2: {
        text: "<strong>Stage 2 — Dirt / Oil Contact:</strong> The hydrophobic non-polar tails are attracted to grease, oil, and sebum stains on the fabric or surface, anchoring themselves firmly inside the oily droplet.",
        renderSvg: () => `
          <svg viewBox="0 0 300 300" width="100%" height="100%">
            <rect width="300" height="300" fill="#f0f9ff" />
            <!-- Dirt Droplet -->
            <circle cx="150" cy="150" r="42" fill="#d97706" opacity="0.85" />
            <text x="150" y="154" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Oily Dirt</text>
            <!-- Surfactants attaching to oil -->
            ${[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
              const rad = (deg * Math.PI) / 180;
              const headX = 150 + Math.cos(rad) * 78;
              const headY = 150 + Math.sin(rad) * 78;
              const tailX = 150 + Math.cos(rad) * 44;
              const tailY = 150 + Math.sin(rad) * 44;
              return `
                <g>
                  <line x1="${headX}" y1="${headY}" x2="${tailX}" y2="${tailY}" stroke="#64748b" stroke-width="3.5" stroke-linecap="round"/>
                  <circle cx="${headX}" cy="${headY}" r="9" fill="#0284c7" />
                </g>
              `;
            }).join('')}
            <text x="150" y="275" font-family="sans-serif" font-size="12" font-weight="bold" fill="#0369a1" text-anchor="middle">Tails embed into oil; Heads remain in water</text>
          </svg>
        `
      },
      3: {
        text: "<strong>Stage 3 — Micelle Encapsulation & Rinsing:</strong> Surfactants completely encapsulate the oil droplet into a spherical colloidal structure called a <em>Micelle</em>. The hydrophilic exterior dissolves readily in rinse water, washing the dirt away.",
        renderSvg: () => `
          <svg viewBox="0 0 300 300" width="100%" height="100%">
            <rect width="300" height="300" fill="#f0f9ff" />
            <!-- Emulsified Micelle -->
            <circle cx="150" cy="140" r="32" fill="#d97706" />
            <text x="150" y="144" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Trapped Dirt</text>
            <!-- Dense Surfactant Sphere -->
            ${[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(deg => {
              const rad = (deg * Math.PI) / 180;
              const headX = 150 + Math.cos(rad) * 65;
              const headY = 140 + Math.sin(rad) * 65;
              const tailX = 150 + Math.cos(rad) * 33;
              const tailY = 140 + Math.sin(rad) * 33;
              return `
                <g>
                  <line x1="${headX}" y1="${headY}" x2="${tailX}" y2="${tailY}" stroke="#64748b" stroke-width="3" stroke-linecap="round"/>
                  <circle cx="${headX}" cy="${headY}" r="7.5" fill="#0284c7" />
                </g>
              `;
            }).join('')}
            <path d="M 50 240 Q 150 220 250 240" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6,6"/>
            <text x="150" y="275" font-family="sans-serif" font-size="12" font-weight="bold" fill="#059669" text-anchor="middle">Rinsed Clean with Water Flow ➔</text>
          </svg>
        `
      }
    };

    function setMicelleStage(stageNum) {
      stageBtns.forEach(btn => {
        if (btn.getAttribute("data-stage") === String(stageNum)) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      });

      const curr = stageDetails[stageNum];
      if (curr) {
        explainerText.innerHTML = curr.text;
        micelleCanvas.innerHTML = curr.renderSvg();
      }
    }

    stageBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const stageNum = parseInt(btn.getAttribute("data-stage"), 10);
        setMicelleStage(stageNum);
      });
    });

    setMicelleStage(1);
  }
}

/* ==========================================================================
   9. GLOBAL LIGHTBOX CONTROLLER
   ========================================================================== */
function openLightbox({ src, title, caption, counter, onPrev, onNext }) {
  const lightbox = document.getElementById("global-lightbox");
  if (!lightbox) return;

  const img = document.getElementById("lightbox-img");
  const captionEl = document.getElementById("lightbox-caption-text");
  const counterEl = document.getElementById("lightbox-counter");
  const prevBtn = document.getElementById("lightbox-prev-btn");
  const nextBtn = document.getElementById("lightbox-next-btn");
  const zoomInBtn = document.getElementById("lightbox-zoomin-btn");
  const zoomOutBtn = document.getElementById("lightbox-zoomout-btn");
  const resetBtn = document.getElementById("lightbox-reset-btn");

  let zoomLevel = 1;

  img.src = src;
  img.onerror = () => {
    img.src = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'><rect fill='%231e293b' width='800' height='600'/><text fill='%23ffffff' font-family='sans-serif' font-size='24' font-weight='bold' x='50%' y='48%' text-anchor='middle'>${title || 'High Resolution Diagram'}</text><text fill='%2394a3b8' font-family='sans-serif' font-size='16' x='50%' y='56%' text-anchor='middle'>Media location: ${src}</text></svg>`;
  };

  captionEl.innerHTML = `<strong>${title || ''}</strong><br>${caption || ''}`;
  counterEl.textContent = counter || "";

  // Reset zoom
  img.style.transform = `scale(1)`;
  zoomLevel = 1;

  if (zoomInBtn) {
    zoomInBtn.onclick = () => {
      if (zoomLevel < 2.5) {
        zoomLevel += 0.25;
        img.style.transform = `scale(${zoomLevel})`;
      }
    };
  }

  if (zoomOutBtn) {
    zoomOutBtn.onclick = () => {
      if (zoomLevel > 0.6) {
        zoomLevel -= 0.25;
        img.style.transform = `scale(${zoomLevel})`;
      }
    };
  }

  if (resetBtn) {
    resetBtn.onclick = () => {
      zoomLevel = 1;
      img.style.transform = `scale(1)`;
    };
  }

  if (prevBtn) {
    if (onPrev) {
      prevBtn.style.display = "flex";
      prevBtn.onclick = onPrev;
    } else {
      prevBtn.style.display = "none";
    }
  }

  if (nextBtn) {
    if (onNext) {
      nextBtn.style.display = "flex";
      nextBtn.onclick = onNext;
    } else {
      nextBtn.style.display = "none";
    }
  }

  lightbox.classList.add("active");
}

/* ==========================================================================
   10. SCROLL REVEAL & MODAL CLOSE HANDLERS
   ========================================================================== */
function initScrollEffects() {
  // Back to Top Button
  const bttBtn = document.getElementById("back-to-top-btn");
  if (bttBtn) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        bttBtn.classList.add("visible");
      } else {
        bttBtn.classList.remove("visible");
      }
    });

    bttBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Global Modal Close Handlers
  const modal = document.getElementById("global-modal");
  const modalClose = document.getElementById("global-modal-close");
  if (modal && modalClose) {
    modalClose.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }

  // Lightbox Close Handlers
  const lightbox = document.getElementById("global-lightbox");
  const lightboxClose = document.getElementById("lightbox-close-btn");
  if (lightbox && lightboxClose) {
    lightboxClose.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-body")) {
        lightbox.classList.remove("active");
      }
    });
  }

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (modal) modal.classList.remove("active");
      if (lightbox) lightbox.classList.remove("active");
    }
  });
}
