/* =========================================================
   EVERWELL MEDICAL CENTER — SCRIPT
   ========================================================= */

/* =============== CONTENT DATA (modals) =============== */
const SERVICES = {
  'general-medicine': {
    title: 'General Medicine',
    icon: '🩹',
    description: 'Our General Medicine team handles everyday health concerns, ongoing conditions, and preventive screening — the first stop for most patients and the hub that coordinates referrals to specialists when needed.',
    treatments: ['Annual physicals & wellness exams', 'Cold, flu, and infection management', 'Chronic condition monitoring (diabetes, hypertension)', 'Preventive screenings & bloodwork', 'Referrals to specialists'],
    benefits: ['One consistent physician who knows your history', 'Same-week appointment availability', 'Direct digital access to results and notes'],
    whenToVisit: 'Book a visit for routine check-ups, unexplained symptoms, medication reviews, or whenever something feels off and you\'re not sure which specialist to see.'
  },
  'pediatrics': {
    title: 'Pediatrics',
    icon: '🧸',
    description: 'Gentle, thorough care for infants through adolescence, delivered in a calm environment designed to put both kids and parents at ease.',
    treatments: ['Well-child visits & growth tracking', 'Childhood vaccinations', 'Developmental screenings', 'Acute illness care', 'Adolescent health & counseling'],
    benefits: ['Child-friendly exam rooms and staff', 'Flexible scheduling around school hours', 'Parents included in every care decision'],
    whenToVisit: 'Schedule regular well-child visits on your pediatrician\'s recommended timeline, plus any time your child is unwell, injured, or due for vaccinations.'
  },
  'cardiology': {
    title: 'Cardiology',
    icon: '❤️',
    description: 'Comprehensive heart health monitoring, diagnostics, and long-term care for patients managing or preventing cardiovascular conditions.',
    treatments: ['ECG & echocardiogram', 'Blood pressure & cholesterol management', 'Arrhythmia evaluation', 'Cardiac stress testing', 'Post-cardiac-event follow-up'],
    benefits: ['On-site diagnostic equipment — no extra travel', 'Long-term care plans tailored to your risk profile', 'Coordination with your primary physician'],
    whenToVisit: 'See a cardiologist for chest discomfort, shortness of breath, irregular heartbeat, a family history of heart disease, or as part of routine risk screening after age 40.'
  },
  'dentistry': {
    title: 'Dentistry',
    icon: '🦷',
    description: 'Preventive and restorative dental care for the whole family, from routine cleanings to more involved restorative work.',
    treatments: ['Cleanings & exams', 'Fillings & restorations', 'Root canal therapy', 'Cosmetic consultations', 'Emergency dental care'],
    benefits: ['Modern, low-discomfort equipment', 'Transparent pricing before treatment begins', 'Same-day emergency slots when available'],
    whenToVisit: 'Visit twice a year for routine cleanings, and sooner for pain, sensitivity, swelling, or a damaged tooth.'
  },
  'womens-health': {
    title: "Women's Health",
    icon: '🌷',
    description: 'Comprehensive, respectful care across every stage of a woman\'s life — from adolescence through pregnancy and beyond.',
    treatments: ['Annual wellness exams', 'Prenatal & postnatal care', 'Family planning & contraception counseling', 'Menopause management', 'Reproductive health screening'],
    benefits: ['Private, comfortable exam environment', 'Continuity of care across life stages', 'Same-day results for most screenings'],
    whenToVisit: 'Schedule an annual wellness exam, or book sooner for pregnancy care, cycle irregularities, or any new symptoms you\'d like evaluated.'
  },
  'laboratory': {
    title: 'Laboratory Services',
    icon: '🧪',
    description: 'Fast, accurate diagnostic testing with results delivered securely to your patient portal — usually within 24–48 hours.',
    treatments: ['Bloodwork & metabolic panels', 'Urinalysis', 'Allergy & sensitivity testing', 'Rapid infectious disease testing', 'Specialist-ordered diagnostics'],
    benefits: ['On-site lab — no separate appointment needed', 'Digital results with physician notes', 'Fasting and non-fasting testing options'],
    whenToVisit: 'Come in whenever your physician orders labs, or proactively for annual bloodwork as part of a wellness exam.'
  },
  'vaccinations': {
    title: 'Vaccinations',
    icon: '💉',
    description: 'Routine, catch-up, and travel immunizations for every age group, administered by our clinical team with your full history on file.',
    treatments: ['Routine childhood & adult immunizations', 'Seasonal flu shots', 'Travel vaccinations', 'Booster tracking & reminders', 'Titer testing'],
    benefits: ['Digital vaccination records you can access anytime', 'Walk-in availability for seasonal shots', 'Guidance for international travel requirements'],
    whenToVisit: 'Book ahead of school enrollment, international travel, flu season, or whenever you\'re due for a booster.'
  },
  'emergency-care': {
    title: 'Emergency Care',
    icon: '🚑',
    description: '24/7 emergency response with a rapid-triage team on call, equipped to stabilize and treat urgent conditions the moment you arrive.',
    treatments: ['Rapid triage & stabilization', 'Trauma & injury care', 'Acute cardiac & respiratory response', 'Emergency diagnostics on-site', 'Coordination with specialist teams'],
    benefits: ['Care available every hour of every day', 'Direct hand-off to specialists when needed', 'Dedicated emergency hotline for urgent guidance'],
    whenToVisit: 'Go to Emergency Care immediately for chest pain, severe injury, difficulty breathing, or any symptom that feels life-threatening. For true emergencies, call our hotline first.'
  }
};

const DOCTORS = {
  'julian-marsh': {
    name: 'Dr. Julian Marsh',
    specialty: 'Cardiology',
    photo: 'https://images.pexels.com/photos/32160037/pexels-photo-32160037.jpeg?auto=compress&cs=tinysrgb&w=300',
    experience: '14 years experience',
    bio: 'Dr. Marsh focuses on preventive heart care and building long-term relationships with his patients, believing that consistency of care is as important as any single treatment.',
    qualifications: ['MD, Cardiovascular Medicine', 'Board Certified in Cardiology', 'Fellow, American College of Cardiology'],
    specialties: ['Preventive cardiology', 'Arrhythmia management', 'Cardiac stress testing'],
    languages: ['English', 'French'],
    days: 'Monday, Wednesday, Friday · 8am–4pm'
  },
  'amir-rahman': {
    name: 'Dr. Amir Rahman',
    specialty: 'General Medicine',
    photo: 'https://images.pexels.com/photos/19438566/pexels-photo-19438566.jpeg?auto=compress&cs=tinysrgb&w=300',
    experience: '11 years experience',
    bio: 'Dr. Rahman believes the best treatment plan starts with genuinely listening first. His practice emphasizes whole-person care over quick fixes.',
    qualifications: ['MD, Internal Medicine', 'Board Certified in Family Medicine'],
    specialties: ['Chronic disease management', 'Preventive screening', 'Adult wellness care'],
    languages: ['English', 'Urdu', 'Arabic'],
    days: 'Tuesday–Saturday · 7am–3pm'
  },
  'maya-chen': {
    name: 'Dr. Maya Chen',
    specialty: 'Pediatrics',
    photo: 'https://images.pexels.com/photos/32254655/pexels-photo-32254655.jpeg?auto=compress&cs=tinysrgb&w=300',
    experience: '9 years experience',
    bio: 'Dr. Chen specializes in making young patients feel calm, safe, and heard — and in keeping parents fully informed at every step.',
    qualifications: ['MD, Pediatrics', 'Board Certified in Pediatric Medicine'],
    specialties: ['Developmental screening', 'Childhood immunization', 'Adolescent health'],
    languages: ['English', 'Mandarin'],
    days: 'Monday–Thursday · 9am–5pm'
  },
  'robert-hale': {
    name: 'Dr. Robert Hale',
    specialty: 'Emergency Care',
    photo: 'https://images.pexels.com/photos/8460094/pexels-photo-8460094.jpeg?auto=compress&cs=tinysrgb&w=300',
    experience: '20 years experience',
    bio: 'Dr. Hale leads our emergency team with a calm, decisive approach under pressure, honed over two decades of frontline emergency medicine.',
    qualifications: ['MD, Emergency Medicine', 'Board Certified in Emergency Medicine', 'Advanced Trauma Life Support Certified'],
    specialties: ['Trauma response', 'Acute cardiac events', 'Rapid triage'],
    languages: ['English', 'Spanish'],
    days: 'On rotation · Emergency Care is staffed 24/7'
  }
};

const ARTICLES = {
  'preventive-healthcare': {
    title: 'Preventive Healthcare: Small Habits, Big Payoff',
    image: 'https://images.pexels.com/photos/4173316/pexels-photo-4173316.jpeg?auto=compress&cs=tinysrgb&w=1000',
    author: 'Everwell Care Team',
    date: 'July 14, 2026',
    readTime: '4 min read',
    body: [
      'Most serious health conditions don\'t announce themselves early. High blood pressure, elevated cholesterol, and early-stage diabetes often produce no symptoms at all until they\'ve been developing for years — which is exactly why routine screening matters more than how you feel on any given day.',
      'A good preventive schedule doesn\'t need to be complicated. Annual bloodwork, a blood pressure check at every visit, and age-appropriate screenings (colonoscopies, mammograms, skin checks) catch the vast majority of conditions while they\'re still highly treatable.',
      'The habit that makes the biggest difference isn\'t a specific test — it\'s consistency. Patients who keep a single annual wellness visit on the calendar, year after year, catch problems earlier than those who only come in when something already feels wrong.',
      'If it\'s been over a year since your last check-up, that\'s the single most useful thing you can book this month.'
    ]
  },
  'healthy-lifestyle': {
    title: 'Healthy Lifestyle Tips That Fit a Real Schedule',
    image: 'https://images.pexels.com/photos/5319373/pexels-photo-5319373.jpeg?auto=compress&cs=tinysrgb&w=1000',
    author: 'Everwell Care Team',
    date: 'July 2, 2026',
    readTime: '5 min read',
    body: [
      'Most lifestyle advice fails not because it\'s wrong, but because it assumes a life with far more free time than most people actually have. The changes that stick are the small, boring, repeatable ones.',
      'Movement: aim for 20–30 minutes of moderate activity most days — a brisk walk counts. Consistency beats intensity for long-term cardiovascular and metabolic health.',
      'Sleep: adults generally need 7–9 hours. A fixed wake-up time, even on weekends, does more for sleep quality than most supplements or gadgets.',
      'Food: rather than an overhaul, focus on one repeatable swap — more vegetables at dinner, water instead of a second soda — and let it become automatic before adding another.',
      'None of this needs to happen all at once. Patients who pick one habit and hold it for a month see better long-term results than those who try to change everything in a week.'
    ]
  },
  'regular-checkups': {
    title: 'Why Regular Checkups Matter More Than You Think',
    image: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=1000',
    author: 'Everwell Care Team',
    date: 'June 20, 2026',
    readTime: '4 min read',
    body: [
      'A checkup does more than confirm you\'re "fine." It builds a baseline — a record of what\'s normal for your body specifically — so that when something does change, your physician can catch the deviation early instead of discovering a problem only once it becomes serious.',
      'Conditions like hypertension, thyroid imbalances, and early kidney or liver changes are often only visible through routine labs and exams. By the time symptoms appear, they\'ve frequently been progressing for a long time.',
      'How often you should come in depends on age, risk factors, and history — but as a general guide, most healthy adults benefit from an annual visit, while those managing a chronic condition may need more frequent check-ins.',
      'If you\'re not sure when your last checkup was, that uncertainty is itself a good reason to book one.'
    ]
  }
};

/* =============== INIT =============== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Loading Screen ---------- */
  const loadingScreen = document.getElementById('loading-screen');
  const hideLoader = () => loadingScreen && loadingScreen.classList.add('hidden');
  window.addEventListener('load', () => setTimeout(hideLoader, 350));
  setTimeout(hideLoader, 2500); // fallback in case 'load' already fired

  /* ---------- Footer Year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Sticky Nav + Back-to-top visibility on Scroll ---------- */
  const header = document.getElementById('site-header');
  const backToTop = document.getElementById('back-to-top');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
    backToTop.classList.toggle('visible', window.scrollY > 500);
  };
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile Hamburger Menu ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');
  const closeMobileMenu = () => {
    navLinks.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  const navAnchors = Array.from(navLinks.querySelectorAll('a'));
  navAnchors.forEach(link => link.addEventListener('click', closeMobileMenu));

  /* ---------- Active Section Highlighting ---------- */
  const sectionIds = navAnchors
    .map(a => a.getAttribute('href'))
    .filter(href => href && href.startsWith('#'))
    .map(href => href.slice(1));
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const setActiveLink = (id) => {
    navAnchors.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  };

  if (sections.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    sections.forEach(sec => navObserver.observe(sec));
  }

  /* ---------- Dark Mode Toggle (saved preference) ---------- */
  const darkToggle = document.getElementById('dark-toggle');
  const root = document.documentElement;
  const savedTheme = localStorage.getItem('everwell-theme');
  if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    darkToggle.setAttribute('aria-pressed', String(savedTheme === 'dark'));
  }
  darkToggle.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('everwell-theme', next);
    darkToggle.setAttribute('aria-pressed', String(next === 'dark'));
  });

  /* ---------- Scroll Reveal Animations ---------- */
  const revealEls = document.querySelectorAll('.reveal-up');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  /* ---------- Animated Counters ---------- */
  const counters = document.querySelectorAll('[data-count]');
  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1600;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  };
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => counterObserver.observe(el));

  /* ---------- Testimonial Slider ---------- */
  const track = document.getElementById('testimonial-track');
  const slides = track ? Array.from(track.children) : [];
  const dotsWrap = document.getElementById('testimonial-dots');
  let activeSlide = 0;
  let sliderTimer;

  if (track && slides.length) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsWrap.appendChild(dot);
    });

    function goToSlide(index) {
      activeSlide = (index + slides.length) % slides.length;
      track.style.transform = `translateX(-${activeSlide * 100}%)`;
      Array.from(dotsWrap.children).forEach((d, i) => d.classList.toggle('active', i === activeSlide));
      resetSliderTimer();
    }
    function resetSliderTimer() {
      clearInterval(sliderTimer);
      sliderTimer = setInterval(() => goToSlide(activeSlide + 1), 6000);
    }

    document.getElementById('testi-next').addEventListener('click', () => goToSlide(activeSlide + 1));
    document.getElementById('testi-prev').addEventListener('click', () => goToSlide(activeSlide - 1));
    resetSliderTimer();
  }

  /* ---------- FAQ Accordion (single-open) ---------- */
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const panel = item.querySelector('.accordion-panel');
    trigger.addEventListener('click', () => {
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      accordionItems.forEach(other => {
        other.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
        other.querySelector('.accordion-panel').style.maxHeight = null;
      });
      if (!isOpen) {
        trigger.setAttribute('aria-expanded', 'true');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  /* ---------- Toast Notification ---------- */
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(message, type = 'success') {
    clearTimeout(toastTimer);
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4500);
  }

  /* =========================================================
     MODAL SYSTEM (services / doctors / articles)
     ========================================================= */
  const modalOverlay = document.getElementById('site-modal');
  const modalPanel = modalOverlay.querySelector('.modal-panel');
  const modalBody = document.getElementById('modal-body');
  const modalCloseBtn = document.getElementById('modal-close');
  let lastFocusedEl = null;

  function buildServiceModal(key) {
    const s = SERVICES[key];
    if (!s) return '<p>Details for this service are coming soon.</p>';
    return `
      <p class="modal-eyebrow">${s.icon} Service</p>
      <h2 id="modal-title">${s.title}</h2>
      <p>${s.description}</p>
      <h3 class="modal-section-title">Common Treatments</h3>
      <ul class="modal-list">${s.treatments.map(t => `<li>${t}</li>`).join('')}</ul>
      <h3 class="modal-section-title">Benefits</h3>
      <ul class="modal-list">${s.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
      <h3 class="modal-section-title">When to Visit</h3>
      <p>${s.whenToVisit}</p>
      <a href="#appointment" class="btn btn-primary modal-cta" data-modal-cta>Book an Appointment</a>
    `;
  }

  function buildDoctorModal(key) {
    const d = DOCTORS[key];
    if (!d) return '<p>Profile details are coming soon.</p>';
    return `
      <div class="modal-doctor-head">
        <img src="${d.photo}" alt="${d.name}">
        <div>
          <p class="modal-eyebrow">${d.specialty}</p>
          <h2 id="modal-title" style="margin-bottom:.15em;">${d.name}</h2>
          <p style="margin:0; color:var(--text-muted); font-size:.88rem;">${d.experience}</p>
        </div>
      </div>
      <p>${d.bio}</p>
      <h3 class="modal-section-title">Qualifications</h3>
      <ul class="modal-list">${d.qualifications.map(q => `<li>${q}</li>`).join('')}</ul>
      <h3 class="modal-section-title">Specialties</h3>
      <ul class="modal-list">${d.specialties.map(sp => `<li>${sp}</li>`).join('')}</ul>
      <div class="modal-meta">
        <span>🗣️ ${d.languages.join(', ')}</span>
        <span>📅 ${d.days}</span>
      </div>
      <a href="#appointment" class="btn btn-primary modal-cta" data-modal-cta>Book with ${d.name}</a>
    `;
  }

  function buildArticleModal(key) {
    const a = ARTICLES[key];
    if (!a) return '<p>This article is coming soon.</p>';
    return `
      <img class="modal-hero" src="${a.image}" alt="${a.title}">
      <p class="modal-eyebrow">Health Library</p>
      <h2 id="modal-title">${a.title}</h2>
      <div class="modal-meta">
        <span>✍️ ${a.author}</span>
        <span>🗓️ ${a.date}</span>
        <span>⏱️ ${a.readTime}</span>
      </div>
      ${a.body.map(p => `<p>${p}</p>`).join('')}
      <div class="modal-disclaimer">This article is for general educational purposes and isn't a substitute for personalized medical advice. Please consult your physician about your specific situation.</div>
      <a href="#appointment" class="btn btn-primary modal-cta" data-modal-cta>Talk to a Physician</a>
    `;
  }

  const MODAL_BUILDERS = {
    service: (key) => buildServiceModal(key),
    doctor: (key) => buildDoctorModal(key),
    article: (key) => buildArticleModal(key)
  };
  const MODAL_KEY_ATTR = { service: 'service', doctor: 'doctor', article: 'article' };

  function openModal(type, key) {
    const builder = MODAL_BUILDERS[type];
    if (!builder) return;
    lastFocusedEl = document.activeElement;
    modalBody.innerHTML = builder(key);
    modalOverlay.classList.add('open');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modalPanel.scrollTop = 0;
    modalPanel.focus();
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  document.querySelectorAll('[data-modal-open]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const type = trigger.getAttribute('data-modal-open');
      const key = trigger.getAttribute(`data-${MODAL_KEY_ATTR[type]}`);
      openModal(type, key);
    });
  });

  // Close on the CTA link inside the modal (it just scrolls to #appointment)
  modalBody.addEventListener('click', (e) => {
    if (e.target.closest('[data-modal-cta]')) closeModal();
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal();
    // Basic focus trap
    if (e.key === 'Tab' && modalOverlay.classList.contains('open')) {
      const focusable = modalPanel.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });

  /* =========================================================
     APPOINTMENT FORM — validation + loading state + Netlify
     ========================================================= */
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    const submitBtn = document.getElementById('appointment-submit');
    const dateInput = document.getElementById('date');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

    const FIELD_RULES = {
      fullname: (v) => v.trim().length >= 2 || 'Please enter your full name.',
      phone: (v) => /^[0-9+()\-\s]{7,20}$/.test(v.trim()) || 'Enter a valid phone number.',
      email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Enter a valid email address.',
      department: (v) => v.trim().length > 0 || 'Please select a department.',
      date: (v) => v.trim().length > 0 || 'Please choose a preferred date.'
    };

    function validateField(field) {
      const rule = FIELD_RULES[field.name];
      const errorEl = document.getElementById(`err-${field.name}`);
      if (!rule) return true;
      const result = rule(field.value);
      if (result === true) {
        field.classList.remove('invalid');
        if (errorEl) errorEl.textContent = '';
        return true;
      }
      field.classList.add('invalid');
      if (errorEl) errorEl.textContent = result;
      return false;
    }

    Object.keys(FIELD_RULES).forEach(name => {
      const field = appointmentForm.elements[name];
      if (field) {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => {
          if (field.classList.contains('invalid')) validateField(field);
        });
      }
    });

    appointmentForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      Object.keys(FIELD_RULES).forEach(name => {
        const field = appointmentForm.elements[name];
        if (field && !validateField(field)) isValid = false;
      });

      if (!isValid) {
        showToast('Please fix the highlighted fields and try again.', 'error');
        const firstInvalid = appointmentForm.querySelector('.invalid');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      const data = new FormData(appointmentForm);
      const encoded = new URLSearchParams(data).toString();

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encoded
      })
        .then(() => {
          showToast('Appointment request sent — we\'ll confirm within one business day.', 'success');
          appointmentForm.reset();
        })
        .catch(() => {
          showToast('Something went wrong. Please call us to book directly.', 'error');
        })
        .finally(() => {
          submitBtn.classList.remove('loading');
          submitBtn.disabled = false;
        });
    });
  }

  /* ---------- Newsletter Form ---------- */
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      if (emailInput && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
        showToast('Please enter a valid email address.', 'error');
        emailInput.focus();
        return;
      }
      showToast('Thanks for subscribing to Everwell health tips!', 'success');
      newsletterForm.reset();
    });
  }

  /* ---------- Back to Top ---------- */
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

});
