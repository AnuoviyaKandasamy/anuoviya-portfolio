/* =========================================================
   Anuoviya Kandasamy — Portfolio
   Vanilla JS
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------------------------------------
     0. Config — update LinkedIn URL here once available
  --------------------------------------------------------- */
  const LINKEDIN_URL = ""; // e.g. "https://www.linkedin.com/in/anuoviya-kandasamy"

  const linkedinTargets = [
    document.getElementById("linkedinLink"),
    document.getElementById("linkedinCard"),
  ];
  linkedinTargets.forEach((el) => {
    if (!el) return;
    if (LINKEDIN_URL) {
      el.href = LINKEDIN_URL;
    } else {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        el.classList.add("shake");
        setTimeout(() => el.classList.remove("shake"), 400);
      });
    }
  });

  /* ---------------------------------------------------------
     1. Footer year
  --------------------------------------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     2. Navbar: scroll state + mobile menu + active link
  --------------------------------------------------------- */
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const navLinkItems = document.querySelectorAll(".nav-link");

  const setNavScrolled = () => {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
  };
  setNavScrolled();
  window.addEventListener("scroll", setNavScrolled, { passive: true });

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const highlightNav = () => {
    let current = sections[0]?.id;
    const scrollPos = window.scrollY + 140;
    sections.forEach((sec) => {
      if (scrollPos >= sec.offsetTop) current = sec.id;
    });
    navLinkItems.forEach((link) => {
      link.classList.toggle("active-link", link.getAttribute("href") === `#${current}`);
    });
  };
  window.addEventListener("scroll", highlightNav, { passive: true });
  highlightNav();

  /* ---------------------------------------------------------
     3. Scroll progress bar
  --------------------------------------------------------- */
  const progressBar = document.getElementById("scrollProgress");
  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", updateProgress, { passive: true });
  updateProgress();

  /* ---------------------------------------------------------
     4. Back to top
  --------------------------------------------------------- */
  document.getElementById("backToTop").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------------------------------------------------
     5. Cursor glow (desktop only)
  --------------------------------------------------------- */
  const glow = document.querySelector(".cursor-glow");
  if (glow) {
    window.addEventListener("mousemove", (e) => {
      glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });
  }

  /* ---------------------------------------------------------
     6. Hero typing effect — role titles
  --------------------------------------------------------- */
  const typedTextEl = document.getElementById("typedText");
  const roles = ["Full-Stack Java Developer", "Spring Boot Developer", "React.js Developer", "Java Backend Engineer"];
  let roleIndex = 0, charIndex = 0, deleting = false;

  const typeLoop = () => {
    const current = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      typedTextEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      charIndex--;
      typedTextEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(typeLoop, deleting ? 45 : 85);
  };
  typeLoop();

  /* ---------------------------------------------------------
     7. Hero code window — typing Java snippet
  --------------------------------------------------------- */
  const codeEl = document.getElementById("codeTyping");
  const javaSnippet =
`public class AnuoviyaKandasamy
    implements FullStackJavaDeveloper {

    private String role =
        "Full-Stack Java Developer";
    private String[] stack = {
        "Core Java", "Spring Boot",
        "React.js", "MySQL", "JWT"
    };

    @Override
    public void buildSolutions() {
        while (learning) {
            writeCleanCode();
            applySolidPrinciples();
            solveProblems();
        }
    }
}`;

  let codeIndex = 0;
  const typeCode = () => {
    if (codeIndex <= javaSnippet.length) {
      codeEl.textContent = javaSnippet.slice(0, codeIndex);
      codeIndex += 2;
      setTimeout(typeCode, 14);
    }
  };

  /* ---------------------------------------------------------
     8. Skill data — rendered as animated cards
  --------------------------------------------------------- */
  const skillGroups = [
    {
      title: "Core Java",
      icon: "fa-brands fa-java",
      type: "bars",
      items: [
        { name: "OOP & SOLID Principles", level: 98 },
        { name: "Collections & Generics", level: 97 },
        { name: "Stream API", level: 96 },
        { name: "Multithreading", level: 95 },
        { name: "Exception Handling", level: 98 },
      ],
    },
    {
      title: "Backend",
      icon: "fa-solid fa-server",
      type: "tags",
      items: ["Java Servlets", "Spring Boot", "JWT Authentication", "REST API Design"],
    },
    {
      title: "Frontend",
      icon: "fa-solid fa-code",
      type: "tags",
      items: ["React.js", "HTML5 & CSS3", "JavaScript (ES6+)"],
    },
    {
      title: "Database",
      icon: "fa-solid fa-database",
      type: "tags",
      items: ["MySQL", "JDBC Connectivity"],
    },
    {
      title: "Architecture",
      icon: "fa-solid fa-diagram-project",
      type: "tags",
      items: ["Layered Architecture", "MVC / MVP Patterns", "Design Patterns"],
    },
  ];

  const skillsGrid = document.getElementById("skillsGrid");
  skillGroups.forEach((group) => {
    const card = document.createElement("div");
    card.className = "skill-card glass";

    const head = document.createElement("div");
    head.className = "skill-card-head";
    head.innerHTML = `<i class="${group.icon}"></i><h3>${group.title}</h3>`;
    card.appendChild(head);

    if (group.type === "tags") {
      const wrap = document.createElement("div");
      wrap.className = "skill-tags";
      group.items.forEach((item) => {
        const tag = document.createElement("span");
        tag.className = "skill-tag";
        tag.textContent = item;
        wrap.appendChild(tag);
      });
      card.appendChild(wrap);
    } else {
      const wrap = document.createElement("div");
      wrap.className = "skill-bars";
      group.items.forEach((item) => {
        const row = document.createElement("div");
        row.innerHTML = `
          <div class="skill-bar-row"><span>${item.name}</span><span>${item.level}%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-level="${item.level}"></div></div>
        `;
        wrap.appendChild(row);
      });
      card.appendChild(wrap);
    }
    skillsGrid.appendChild(card);
  });

  /* ---------------------------------------------------------
     9. Scroll reveal (IntersectionObserver)
  --------------------------------------------------------- */
  const revealEls = document.querySelectorAll("[data-reveal]");
  const counterEls = document.querySelectorAll(".stat-number");
  const barEls = document.querySelectorAll(".skill-bar-fill");

  const animateCounter = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const duration = 1400;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");

          // Trigger hero code typing once its container is visible
          if (entry.target.classList.contains("hero-visual") && codeIndex === 0) {
            typeCode();
          }

          // Animate any counters within the revealed element
          entry.target.querySelectorAll(".stat-number").forEach((el) => {
            if (!el.classList.contains("counted")) {
              el.classList.add("counted");
              animateCounter(el);
            }
          });

          // Animate any skill bars within the revealed element
          entry.target.querySelectorAll(".skill-bar-fill").forEach((el) => {
            const level = el.getAttribute("data-level");
            requestAnimationFrame(() => { el.style.width = `${level}%`; });
          });

          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
  );

  revealEls.forEach((el) => revealObserver.observe(el));

  // Hero text/visual reveal immediately on load (above the fold)
  requestAnimationFrame(() => {
    document.querySelectorAll(".hero [data-reveal]").forEach((el) => el.classList.add("in-view"));
    if (codeIndex === 0) typeCode();
  });

  // Standalone counters/bars not wrapped by a [data-reveal] ancestor
  const standaloneObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("stat-number") && !entry.target.classList.contains("counted")) {
            entry.target.classList.add("counted");
            animateCounter(entry.target);
          }
          if (entry.target.classList.contains("skill-bar-fill")) {
            const level = entry.target.getAttribute("data-level");
            entry.target.style.width = `${level}%`;
          }
          standaloneObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );
  counterEls.forEach((el) => standaloneObserver.observe(el));
  document.querySelectorAll(".skill-bar-fill").forEach((el) => standaloneObserver.observe(el));

});
