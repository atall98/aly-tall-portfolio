const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");
const year = document.getElementById("year");
const languageToggle = document.getElementById("languageToggle");

year.textContent = new Date().getFullYear();

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.experience": "Expérience",
    "nav.contact": "Contact",
    "nav.cta": "Me contacter",

    "hero.eyebrow": "DÉVELOPPEUR WEB • SI • CYBERSÉCURITÉ",
    "hero.title": "Je transforme les idées en <span>solutions digitales</span>.",
    "hero.text": "Bonjour, je suis <strong>Aly Tall</strong>. Je conçois des applications web modernes, performantes et sécurisées, avec un intérêt particulier pour les systèmes d'information et la cybersécurité.",
    "hero.projects": "Voir mes projets",
    "hero.work": "Travaillons ensemble",

    "about.eyebrow": "01 — À PROPOS",
    "about.title": "Un profil à la croisée du développement et de la sécurité.",
    "about.p1": "Diplômé d'une Licence en Génie Logiciel et Sécurité des Technologies de l'Information, je développe mes compétences dans le développement web, les systèmes d'information et la cybersécurité.",
    "about.p2": "Mon parcours comprend une expérience en développement web chez <strong>DEFAR SCI</strong> et une expérience au sein de la <strong>Direction des Systèmes d'Information d'Invictus Capital Finance (ICF)</strong>.",
    "about.p3": "Curieux, rigoureux et orienté solution, j'aime apprendre de nouvelles technologies et transformer des besoins concrets en solutions simples et efficaces.",

    "skills.eyebrow": "02 — COMPÉTENCES",
    "skills.title": "Mes compétences techniques",
    "skills.intro": "Un socle polyvalent pour développer, administrer et sécuriser des solutions informatiques.",
    "skills.web.title": "Développement Web",
    "skills.web.text": "Création d'interfaces modernes et d'applications web fonctionnelles.",
    "skills.db.title": "Bases de données",
    "skills.db.text": "Conception, manipulation et gestion des données applicatives.",
    "skills.systems.title": "Systèmes & Réseaux",
    "skills.systems.text": "Compréhension des environnements systèmes et des infrastructures IT.",
    "skills.cyber.title": "Cybersécurité",
    "skills.cyber.text": "Bonnes pratiques de protection, authentification et contrôle d'accès.",

    "projects.eyebrow": "03 — PROJETS",
    "projects.title": "Quelques réalisations",
    "projects.intro": "Des projets qui illustrent mon approche du développement et des technologies.",
    "projects.stock.text": "Application de gestion de stock permettant de gérer produits, quantités et opérations.",
    "projects.portfolio.title": "Portfolio personnel",
    "projects.portfolio.text": "Site vitrine responsive présentant mon parcours, mes compétences et mes projets.",
    "projects.server.text": "Travaux pratiques autour des domaines, utilisateurs, groupes, Active Directory et DNS.",
    "projects.view": "Voir le projet",

    "experience.eyebrow": "04 — EXPÉRIENCE",
    "experience.title": "Mon parcours professionnel",
    "experience.icf.title": "Stagiaire — Direction des Systèmes d'Information",
    "experience.icf.text": "Participation aux activités de la DSI, découverte de l'administration des systèmes, des réseaux et des bonnes pratiques de sécurité informatique.",
    "experience.exp": "EXPÉRIENCE",
    "experience.defar.title": "Stagiaire Développeur Web",
    "experience.defar.text": "Participation au développement de solutions web, conception d'interfaces et utilisation de HTML, CSS, JavaScript, PHP, Laravel et MySQL.",
    "experience.training": "FORMATION",
    "experience.degree": "Génie Logiciel et Sécurité des Technologies de l'Information",
    "experience.degreeText": "Formation en informatique, développement logiciel et sécurité des technologies de l'information.",

    "contact.eyebrow": "05 — CONTACT",
    "contact.title": "Un projet ? Parlons-en.",
    "contact.intro": "Vous pouvez me contacter pour une opportunité, un projet ou une collaboration.",
    "contact.name": "Nom",
    "contact.namePlaceholder": "Votre nom",
    "contact.email": "Email",
    "contact.emailPlaceholder": "votre@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Parlez-moi de votre projet...",
    "contact.send": "Envoyer le message",

    "footer.rights": "Tous droits réservés.",
    "footer.top": "Retour en haut ↑",

    "modal.label": "PROJET",
    "modal.close": "Fermer",
    "form.success": "Merci {name} ! Votre message est prêt à être envoyé.",
    "menu.open": "Ouvrir le menu",
    "menu.close": "Fermer le menu",
    "language.aria": "Passer en anglais"
  },

  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.cta": "Contact me",

    "hero.eyebrow": "WEB DEVELOPER • IT SYSTEMS • CYBERSECURITY",
    "hero.title": "I turn ideas into <span>digital solutions</span>.",
    "hero.text": "Hello, I'm <strong>Aly Tall</strong>. I build modern, high-performance and secure web applications, with a strong interest in information systems and cybersecurity.",
    "hero.projects": "View my projects",
    "hero.work": "Let's work together",

    "about.eyebrow": "01 — ABOUT",
    "about.title": "A profile at the intersection of development and security.",
    "about.p1": "I hold a Bachelor's degree in Software Engineering and Information Technology Security, and I am developing my skills in web development, information systems and cybersecurity.",
    "about.p2": "My background includes web development experience at <strong>DEFAR SCI</strong> and experience within the <strong>Information Systems Department of Invictus Capital Finance (ICF)</strong>.",
    "about.p3": "Curious, rigorous and solution-oriented, I enjoy learning new technologies and turning real-world needs into simple and effective solutions.",

    "skills.eyebrow": "02 — SKILLS",
    "skills.title": "My technical skills",
    "skills.intro": "A versatile foundation for developing, administering and securing IT solutions.",
    "skills.web.title": "Web Development",
    "skills.web.text": "Building modern interfaces and functional web applications.",
    "skills.db.title": "Databases",
    "skills.db.text": "Designing, manipulating and managing application data.",
    "skills.systems.title": "Systems & Networks",
    "skills.systems.text": "Understanding system environments and IT infrastructure.",
    "skills.cyber.title": "Cybersecurity",
    "skills.cyber.text": "Best practices for protection, authentication and access control.",

    "projects.eyebrow": "03 — PROJECTS",
    "projects.title": "Selected projects",
    "projects.intro": "Projects that showcase my approach to development and technology.",
    "projects.stock.text": "Inventory management application designed to manage products, quantities and operations.",
    "projects.portfolio.title": "Personal Portfolio",
    "projects.portfolio.text": "Responsive showcase website presenting my background, skills and projects.",
    "projects.server.text": "Practical work focused on domains, users, groups, Active Directory and DNS.",
    "projects.view": "View project",

    "experience.eyebrow": "04 — EXPERIENCE",
    "experience.title": "My professional journey",
    "experience.icf.title": "Intern — Information Systems Department",
    "experience.icf.text": "Participated in IT department activities and explored systems administration, networking and cybersecurity best practices.",
    "experience.exp": "EXPERIENCE",
    "experience.defar.title": "Web Developer Intern",
    "experience.defar.text": "Participated in web solution development, interface design and the use of HTML, CSS, JavaScript, PHP, Laravel and MySQL.",
    "experience.training": "EDUCATION",
    "experience.degree": "Software Engineering and Information Technology Security",
    "experience.degreeText": "Training in computer science, software development and information technology security.",

    "contact.eyebrow": "05 — CONTACT",
    "contact.title": "Have a project? Let's talk.",
    "contact.intro": "Feel free to contact me about an opportunity, project or collaboration.",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.email": "Email",
    "contact.emailPlaceholder": "your@email.com",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send message",

    "footer.rights": "All rights reserved.",
    "footer.top": "Back to top ↑",

    "modal.label": "PROJECT",
    "modal.close": "Close",
    "form.success": "Thank you {name}! Your message is ready to be sent.",
    "menu.open": "Open menu",
    "menu.close": "Close menu",
    "language.aria": "Switch to French"
  }
};

const projects = {
  stock: {
    title: { fr: "StockControl", en: "StockControl" },
    text: {
      fr: "Application web de gestion de stock conçue pour centraliser les produits, suivre les quantités et faciliter les opérations de gestion.",
      en: "Inventory management web application designed to centralize products, track quantities and simplify management operations."
    },
    tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  portfolio: {
    title: { fr: "Portfolio personnel", en: "Personal Portfolio" },
    text: {
      fr: "Interface responsive pensée pour présenter mon profil, mes compétences, mes expériences et mes projets sur ordinateur comme sur mobile.",
      en: "Responsive interface designed to showcase my profile, skills, experience and projects on both desktop and mobile."
    },
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"]
  },
  server: {
    title: { fr: "Lab Windows Server", en: "Windows Server Lab" },
    text: {
      fr: "Environnement d'apprentissage consacré aux fondamentaux de l'administration système : domaine, Active Directory, utilisateurs, groupes et DNS.",
      en: "Learning environment focused on system administration fundamentals: domains, Active Directory, users, groups and DNS."
    },
    tags: ["Windows Server", "Active Directory", "DNS", "Networking"]
  }
};

let currentLanguage = localStorage.getItem("portfolioLanguage") || "fr";

function t(key) {
  return translations[currentLanguage][key] || key;
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach(element => {
    element.innerHTML = t(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach(element => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  menuToggle.setAttribute(
    "aria-label",
    navLinks.classList.contains("open") ? t("menu.close") : t("menu.open")
  );

  languageToggle.setAttribute("aria-label", t("language.aria"));
  languageToggle.classList.toggle("english", currentLanguage === "en");

  if (modal.classList.contains("open") && modal.dataset.projectKey) {
    renderModal(modal.dataset.projectKey);
  }
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("portfolioLanguage", currentLanguage);
  applyTranslations();
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLanguage === "fr" ? "en" : "fr");
});

menuToggle.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", opened);
  menuToggle.setAttribute("aria-label", opened ? t("menu.close") : t("menu.open"));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", t("menu.open"));
  });
});

const sections = document.querySelectorAll("main section, header");
const links = document.querySelectorAll(".nav-links a");

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => activeObserver.observe(section));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 500);
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalTags = document.getElementById("modalTags");

function renderModal(key) {
  const project = projects[key];
  if (!project) return;

  modalTitle.textContent = project.title[currentLanguage];
  modalText.textContent = project.text[currentLanguage];
  modalTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
}

function openModal(key) {
  renderModal(key);
  modal.dataset.projectKey = key;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  delete modal.dataset.projectKey;
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-link").forEach(button => {
  button.addEventListener("click", () => openModal(button.dataset.project));
});

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalOverlay").addEventListener("click", closeModal);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const status = document.getElementById("formStatus");

  status.textContent = t("form.success").replace("{name}", name);
  e.target.reset();
});

applyTranslations();
