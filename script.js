/**
 * Mohamed Sayed — Modern Personal Portfolio
 * Vanilla JavaScript Engine: Dynamic Typing, 3D Tilt, Particle Canvas, Projects Filter, Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------
  // 1. DATA: CURATED GITHUB PROJECTS FROM @MoSayed335
  // -------------------------------------------------------------
  const GITHUB_PROJECTS = [
    {
      id: 'servers-booking',
      title: 'Domestic Services Booking Platform',
      category: 'backend',
      language: 'C#',
      stars: 5,
      githubUrl: 'https://github.com/MoSayed335/Servers-Booking-Platform',
      demoUrl: 'https://github.com/MoSayed335/Servers-Booking-Platform',
      icon: 'fa-solid fa-server',
      gradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
      accentColor: '#38bdf8',
      description: 'Full-scale on-demand domestic services marketplace with 10 modules, Clean Architecture, and 3-tier access (Client/Worker/Admin). Features 5-step booking wizard, SignalR live chat, Stripe escrow payments, client/worker wallets, and real-time worker availability.',
      tags: ['C#', 'ASP.NET Core', 'Clean Architecture', 'CQRS', 'SignalR', 'Stripe', 'SQL Server', 'FCM']
    },
    {
      id: 'ecommerce-api',
      title: 'E-Commerce Enterprise Web API',
      category: 'backend',
      language: 'C#',
      stars: 4,
      githubUrl: 'https://github.com/MoSayed335/Ecommerce-API',
      demoUrl: 'https://github.com/MoSayed335/Ecommerce-API',
      icon: 'fa-solid fa-cart-shopping',
      gradient: 'linear-gradient(135deg, #09203f 0%, #537895 100%)',
      accentColor: '#00f5d4',
      description: 'Production-grade RESTful API with 34 endpoints across 6 core modules. Architected using Clean Architecture and Repository Pattern. Implements JWT Authentication with Refresh Token rotation, 3-tier RBAC, OTP email verification, and Stripe Checkout.',
      tags: ['ASP.NET Core Web API', 'Clean Architecture', 'JWT & Refresh Tokens', 'RBAC', 'Stripe', 'EF Core']
    },
    {
      id: 'cinema-system',
      title: 'Cinema Management & Ticketing',
      category: 'fullstack',
      language: 'C# / HTML',
      stars: 4,
      githubUrl: 'https://github.com/MoSayed335/Cinema',
      demoUrl: 'https://github.com/MoSayed335/Cinema',
      icon: 'fa-solid fa-film',
      gradient: 'linear-gradient(135deg, #240b36 0%, #c31432 100%)',
      accentColor: '#f43f5e',
      description: 'Comprehensive full-stack cinema ticketing system built in .NET 9 managing movies, dynamic showtimes, seat-type allocations, and automated tiered ticket pricing. Features 4-tier RBAC (SuperAdmin, Admin, Employee, Customer) and Stripe checkout.',
      tags: ['.NET 9', 'ASP.NET Core MVC', 'SQL Server', 'Stripe', 'Dynamic Pricing', 'RBAC']
    },
    {
      id: 'event-reg',
      title: 'Event Registration & Ticketing API',
      category: 'backend',
      language: 'C#',
      stars: 4,
      githubUrl: 'https://github.com/MoSayed335/CodeAlpha_Event_Registration_System',
      demoUrl: 'https://github.com/MoSayed335/CodeAlpha_Event_Registration_System',
      icon: 'fa-solid fa-calendar-check',
      gradient: 'linear-gradient(135deg, #134e5e 0%, #71b280 100%)',
      accentColor: '#10b981',
      description: 'Scalable event management system engineered during CodeAlpha internship. Handles attendee self-registration, capacity monitoring, ticket generation, QR validation, and event lifecycle coordination.',
      tags: ['C#', 'ASP.NET Core', 'EF Core', 'CodeAlpha', 'Event Management']
    },
    {
      id: 'job-board',
      title: 'Job Board & Recruitment Platform',
      category: 'backend',
      language: 'C#',
      stars: 3,
      githubUrl: 'https://github.com/MoSayed335/CodeAlpha_JobBoardPlatform',
      demoUrl: 'https://github.com/MoSayed335/CodeAlpha_JobBoardPlatform',
      icon: 'fa-solid fa-briefcase',
      gradient: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
      accentColor: '#60a5fa',
      description: 'Multi-tenant applicant tracking and job posting platform. Supports company profiles, candidate applications, automated resume parsing, status workflow tracking, and recruiter review dashboards.',
      tags: ['ASP.NET Core', 'SQL Server', 'Recruitment Workflow', 'Clean Code']
    },
    {
      id: 'restaurant-pos',
      title: 'Restaurant Order & Management POS',
      category: 'backend',
      language: 'C#',
      stars: 4,
      githubUrl: 'https://github.com/MoSayed335/CodeAlpha_RestaurantManagementSystem',
      demoUrl: 'https://github.com/MoSayed335/CodeAlpha_RestaurantManagementSystem',
      icon: 'fa-solid fa-utensils',
      gradient: 'linear-gradient(135deg, #42275a 0%, #734b6d 100%)',
      accentColor: '#c084fc',
      description: 'End-to-end restaurant management system controlling floor table reservations, menu categorization, automated billing calculations, real-time kitchen order dispatching, and sales analytics.',
      tags: ['C#', 'Order Dispatch', 'Table Reservations', 'POS Billing', 'EF Core']
    },
    {
      id: 'cqrs-architecture',
      title: 'CQRS & MediatR Architecture Engine',
      category: 'architecture',
      language: 'C#',
      stars: 3,
      githubUrl: 'https://github.com/MoSayed335/CQRS',
      demoUrl: 'https://github.com/MoSayed335/CQRS',
      icon: 'fa-solid fa-sitemap',
      gradient: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
      accentColor: '#a78bfa',
      description: 'Reference implementation of Command Query Responsibility Segregation (CQRS) with MediatR in ASP.NET Core. Decouples read and write workloads with pipeline behaviors, validation, and domain notifications.',
      tags: ['CQRS', 'MediatR', 'Clean Architecture', 'Pipeline Behaviors', 'SOLID']
    },
    {
      id: 'hangfire-worker',
      title: 'Hangfire Distributed Background Jobs',
      category: 'architecture',
      language: 'C#',
      stars: 3,
      githubUrl: 'https://github.com/MoSayed335/HANGFIRE',
      demoUrl: 'https://github.com/MoSayed335/HANGFIRE',
      icon: 'fa-solid fa-clock-rotate-left',
      gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
      accentColor: '#38bdf8',
      description: 'Asynchronous task runner and job scheduling architecture using Hangfire and SQL Server. Implements recurring cron jobs, delayed background workers, queue prioritization, and failure retry logic.',
      tags: ['Hangfire', 'Background Tasks', 'Distributed Queues', 'Cron Jobs', 'C#']
    },
    {
      id: 'student-attendance',
      title: 'Student Attendance Mobile Solution',
      category: 'mobile',
      language: 'Dart',
      stars: 5,
      githubUrl: 'https://github.com/MoSayed335/student_attendance',
      demoUrl: 'https://github.com/MoSayed335/student_attendance',
      icon: 'fa-solid fa-mobile-screen-button',
      gradient: 'linear-gradient(135deg, #004e92 0%, #000428 100%)',
      accentColor: '#00bbf9',
      description: 'Cross-platform mobile application designed for higher education institutes. Manages student lecture attendance verification, QR scanning, absence alerts, and automated academic reporting.',
      tags: ['Dart', 'Flutter', 'Mobile', 'QR Scanner', 'Academic System']
    },
    {
      id: 'lost-and-found',
      title: 'Lost & Found Intelligent Reporting API',
      category: 'backend',
      language: 'C#',
      stars: 2,
      githubUrl: 'https://github.com/MoSayed335/LostAndFound.API',
      demoUrl: 'https://github.com/MoSayed335/LostAndFound.API',
      icon: 'fa-solid fa-magnifying-glass-location',
      gradient: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 100%)',
      accentColor: '#fb7185',
      description: 'RESTful API for campus-wide lost and found item management. Includes photo attachments, item categorization, matching algorithm, ownership claim verifications, and email notifications.',
      tags: ['ASP.NET Core Web API', 'EF Core', 'File Upload', 'Notifications']
    },
    {
      id: 'exams-management',
      title: 'Examination & Grading Automation',
      category: 'backend',
      language: 'C#',
      stars: 4,
      githubUrl: 'https://github.com/MoSayed335/Exams_Manegment_System',
      demoUrl: 'https://github.com/MoSayed335/Exams_Manegment_System',
      icon: 'fa-solid fa-graduation-cap',
      gradient: 'linear-gradient(135deg, #1a2a6c 0%, #b21f1f 100%)',
      accentColor: '#f59e0b',
      description: 'Backend platform for online examination management, question banks, timed student test sessions, automated grading algorithms, and comprehensive statistical scorecards.',
      tags: ['C#', 'Automated Grading', 'Timers & Concurrency', 'SQL Server']
    },
    {
      id: 'ecommerce-mvc',
      title: 'E-Commerce Full-Stack MVC Portal',
      category: 'fullstack',
      language: 'C# / HTML',
      stars: 4,
      githubUrl: 'https://github.com/MoSayed335/Ecommerce',
      demoUrl: 'https://github.com/MoSayed335/Ecommerce',
      icon: 'fa-solid fa-bag-shopping',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      accentColor: '#10b981',
      description: 'Complete e-commerce web storefront built with ASP.NET Core MVC (.NET 9) and Bootstrap UI. Features dynamic product catalog, shopping cart sessions, customer accounts, and checkout workflows.',
      tags: ['ASP.NET Core MVC', '.NET 9', 'Session Cart', 'Bootstrap UI', 'SQL Server']
    }
  ];

  // -------------------------------------------------------------
  // 2. DYNAMIC TEXT TYPING EFFECT (HERO)
  // -------------------------------------------------------------
  const TYPING_TITLES = [
    'Backend .NET Developer',
    'ASP.NET Core & C# Architect',
    'Clean Architecture Specialist',
    'Full-Stack Software Engineer',
    'RESTful API Engineer'
  ];

  const typingElem = document.getElementById('typingEffect');
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typingElem) return;

    const currentTitle = TYPING_TITLES[titleIndex];

    if (isDeleting) {
      typingElem.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElem.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 1800; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % TYPING_TITLES.length;
      typingSpeed = 450;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  typeEffect();

  // -------------------------------------------------------------
  // 3. PROJECT GRID RENDERING & FILTERING
  // -------------------------------------------------------------
  const projectsGrid = document.getElementById('projectsGrid');
  const filterTabs = document.getElementById('projectFilterTabs');
  const searchInput = document.getElementById('projectSearchInput');
  const searchCountBadge = document.getElementById('searchResultCount');

  let activeFilter = 'all';
  let activeSearch = '';

  function renderProjects() {
    if (!projectsGrid) return;

    const filtered = GITHUB_PROJECTS.filter(p => {
      const matchesCategory = (activeFilter === 'all') || (p.category === activeFilter);
      const matchesSearch = activeSearch === '' || 
        p.title.toLowerCase().includes(activeSearch) ||
        p.description.toLowerCase().includes(activeSearch) ||
        p.tags.some(t => t.toLowerCase().includes(activeSearch)) ||
        p.language.toLowerCase().includes(activeSearch);
      return matchesCategory && matchesSearch;
    });

    if (searchCountBadge) {
      searchCountBadge.textContent = `${filtered.length} project${filtered.length === 1 ? '' : 's'}`;
    }

    if (filtered.length === 0) {
      projectsGrid.innerHTML = `
        <div class="no-projects-msg glass-panel text-center" style="grid-column: 1 / -1; padding: 48px 24px;">
          <i class="fa-solid fa-folder-open" style="font-size: 2.5rem; color: var(--text-subtle); margin-bottom: 16px; display: block;"></i>
          <h3 style="font-size: 1.3rem; margin-bottom: 8px;">No repositories matching your criteria</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Try refining your search keyword or selecting "All Projects".</p>
        </div>
      `;
      return;
    }

    projectsGrid.innerHTML = filtered.map(p => `
      <article class="project-card glass-panel" data-id="${p.id}" data-category="${p.category}">
        <!-- Visual Banner with Tech Logo & Ambient Mesh -->
        <div class="card-banner" style="background: ${p.gradient};">
          <div class="banner-ambient" style="background: radial-gradient(circle at 50% 50%, ${p.accentColor}33 0%, transparent 70%);"></div>
          <div class="banner-icon-badge" style="color: ${p.accentColor};">
            <i class="${p.icon}"></i>
          </div>
          <div class="banner-stars" title="${p.stars} GitHub Stars">
            <i class="fa-solid fa-star"></i>
            <span>${p.stars}</span>
          </div>
        </div>

        <div class="card-body">
          <div class="project-title-row">
            <h3 class="project-title">${p.title}</h3>
            <span class="project-lang-badge">${p.language}</span>
          </div>

          <p class="project-description">${p.description}</p>

          <div class="tech-tags-list">
            ${p.tags.map(t => `<span class="tech-pill">${t}</span>`).join('')}
          </div>

          <div class="project-actions">
            <a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-demo">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
              <span>Live Demo</span>
            </a>
            <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card btn-card-code">
              <i class="fa-brands fa-github"></i>
              <span>View Code</span>
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Reattach 3D tilt handlers to freshly rendered cards
    initCard3DTilt();
  }

  // Filter button click handler
  if (filterTabs) {
    filterTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterTabs.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter || 'all';
      playChime(440, 0.05);
      renderProjects();
    });
  }

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      activeSearch = e.target.value.trim().toLowerCase();
      renderProjects();
    });
  }

  // Initial render
  renderProjects();

  // -------------------------------------------------------------
  // 4. 3D PERSPECTIVE TILT EFFECT
  // -------------------------------------------------------------
  function initCard3DTilt() {
    const tiltElements = document.querySelectorAll('.project-card, .certificate-card, #heroProfileCard');

    tiltElements.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -9; // Max 9 deg
        const rotateY = ((x - centerX) / centerX) * 9;

        el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
      });

      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      });
    });
  }

  initCard3DTilt();

  // -------------------------------------------------------------
  // 5. LIGHTBOX / IMAGE MODAL
  // -------------------------------------------------------------
  const lightboxModal = document.getElementById('imageLightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  function openLightbox(imgSrc, captionText) {
    if (!lightboxModal || !lightboxImage) return;
    lightboxImage.src = imgSrc;
    if (lightboxCaption) {
      lightboxCaption.textContent = captionText || 'Image Preview';
    }
    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    playChime(580, 0.06);
  }

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
      closeLightbox();
    }
  });

  // Attach Lightbox triggers to Certificate cards & Campus photos & Journey thumbs
  document.querySelectorAll('.certificate-card').forEach(card => {
    card.addEventListener('click', () => {
      const src = card.dataset.img;
      const title = card.dataset.certTitle || 'Certificate Preview';
      if (src) openLightbox(src, title);
    });
  });

  document.querySelectorAll('.campus-photo-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.img;
      const caption = item.dataset.caption || 'Campus View';
      if (src) openLightbox(src, caption);
    });
  });

  document.querySelectorAll('.gallery-thumb-item').forEach(item => {
    item.addEventListener('click', () => {
      const src = item.dataset.img;
      const caption = item.dataset.caption || 'Highlight Moment';
      if (src) openLightbox(src, caption);
    });
  });

  // -------------------------------------------------------------
  // 6. SCROLL PROGRESS & NAVIGATION HIGHLIGHT
  // -------------------------------------------------------------
  const progressBar = document.getElementById('scrollProgressBar');
  const mainHeader = document.getElementById('mainHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / docHeight) * 100;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (mainHeader) {
      if (scrollTop > 40) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  // Scroll to top button
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      playChime(620, 0.08);
    });
  }

  // Active section indicator via IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.dataset.nav === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => navObserver.observe(sec));

  // Mobile menu toggle
  const mobileToggleBtn = document.getElementById('mobileMenuToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggleBtn && navMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking nav link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // -------------------------------------------------------------
  // 7. INTERACTIVE PARTICLES AMBIENT CANVAS
  // -------------------------------------------------------------
  const canvas = document.getElementById('ambientCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 18), 75);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.6;
        this.speedX = (Math.random() - 0.5) * 0.45;
        this.speedY = (Math.random() - 0.5) * 0.45;
        this.color = Math.random() > 0.4 ? 'rgba(0, 245, 212,' : 'rgba(157, 78, 221,';
        this.alpha = Math.random() * 0.5 + 0.15;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `${this.color}${this.alpha})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = 'rgba(0, 245, 212, 0.4)';
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      // Connect nearby particles with subtle glowing lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 245, 212, ${0.12 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // -------------------------------------------------------------
  // 8. INTERACTIVE CONTACT FORM HANDLER
  // -------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const subjectInput = document.getElementById('contactSubject');
      const messageInput = document.getElementById('contactMessage');

      let isValid = true;

      // Simple validation
      if (!nameInput.value.trim()) {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        isValid = false;
      } else {
        document.getElementById('nameError').textContent = '';
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        document.getElementById('emailError').textContent = '';
      }

      if (!subjectInput.value.trim()) {
        document.getElementById('subjectError').textContent = 'Please provide a subject.';
        isValid = false;
      } else {
        document.getElementById('subjectError').textContent = '';
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters.';
        isValid = false;
      } else {
        document.getElementById('messageError').textContent = '';
      }

      if (!isValid) return;

      const submitBtn = document.getElementById('contactSubmitBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> <span>Sending Message...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>Message Sent!</span>`;
        if (formFeedback) {
          formFeedback.className = 'form-feedback success';
          formFeedback.innerHTML = `
            <strong>Thank you, ${nameInput.value.trim()}!</strong><br>
            Your message has been received. I will review it and respond to <em>${emailInput.value.trim()}</em> shortly.
          `;
        }
        playChime(750, 0.12);
        contactForm.reset();

        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  // -------------------------------------------------------------
  // 9. SUBTLE SOUND SYNTHESIZER (WEB AUDIO API)
  // -------------------------------------------------------------
  let soundEnabled = false;
  let audioCtx = null;
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundIcon = document.getElementById('soundIcon');

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
  }

  function playChime(freq = 440, duration = 0.08) {
    if (!soundEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not permitted
    }
  }

  if (soundToggleBtn && soundIcon) {
    soundToggleBtn.addEventListener('click', () => {
      initAudio();
      soundEnabled = !soundEnabled;
      if (soundEnabled) {
        soundIcon.className = 'fa-solid fa-volume-high';
        soundToggleBtn.title = 'Sound Effects Enabled';
        playChime(660, 0.1);
      } else {
        soundIcon.className = 'fa-solid fa-volume-xmark';
        soundToggleBtn.title = 'Sound Effects Disabled';
      }
    });
  }

  // Mouse Glow Follower
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = `${e.clientX}px`;
      cursorGlow.style.top = `${e.clientY}px`;
    }, { passive: true });
  }

  console.log('%c Mohamed Sayed — Portfolio Engine Initialized ', 'background: #00f5d4; color: #07090e; font-weight: bold; border-radius: 4px; padding: 4px 8px;');
});
