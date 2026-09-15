const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const backTop = document.getElementById("backTop");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const opened = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", opened);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const sections = document.querySelectorAll("main section, header");
const links = document.querySelectorAll(".nav-links a");

const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${id}`));
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

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

const projects = {
  stock: {
    title: "StockControl",
    text: "Application web de gestion de stock conçue pour centraliser les produits, suivre les quantités et faciliter les opérations de gestion.",
    tags: ["PHP", "Laravel", "MySQL", "HTML", "CSS", "JavaScript"]
  },
  portfolio: {
    title: "Portfolio personnel",
    text: "Interface responsive pensée pour présenter mon profil, mes compétences, mes expériences et mes projets sur ordinateur comme sur mobile.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"]
  },
  server: {
    title: "Lab Windows Server",
    text: "Environnement d'apprentissage consacré aux fondamentaux de l'administration système : domaine, Active Directory, utilisateurs, groupes et DNS.",
    tags: ["Windows Server", "Active Directory", "DNS", "Réseaux"]
  }
};

const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalTags = document.getElementById("modalTags");

function openModal(key) {
  const project = projects[key];
  modalTitle.textContent = project.title;
  modalText.textContent = project.text;
  modalTags.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join("");
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
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

  status.textContent = `Merci ${name} ! Votre message est prêt à être envoyé.`;
  e.target.reset();
});
