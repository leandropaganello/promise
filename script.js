/* === Data === */
const songs = [
  { title: "Komm Heim", subtitle: "Single · 2026", embed: "https://open.spotify.com/embed/track/4IVqIl1RbgPOmZAv8kjqEk" },
  { title: "KAPITULIER", subtitle: "Single · 2026", embed: "https://open.spotify.com/embed/track/41tOVWJwYG1RhIU1fDpLvc" },
  { title: "Keine Luft", subtitle: "Single · 2025", embed: "https://open.spotify.com/embed/track/0RLlZai49wS0rKxEWQVtPr?si=27ea9c5e204d4ae7" },
  { title: "Geheilt", subtitle: "Single · 2025", embed: "https://open.spotify.com/embed/track/36u3gtiNn9FBzqQXZGfg0d?si=b0f4bd89c41947ba" },
];

const tour = [
  { city: "Leipzig", venue: "Evangelische Gemeinde ELIM Leipzig", date: "08.05.2026", day: "08", month: "Mai" },
  { city: "Potsdam", venue: "Evangelisch-Freikirchliche Gemeinde Potsdam", date: "09.05.2026", day: "09", month: "Mai" },
  { city: "Hamburg", venue: "Anksar Kirche", date: "10.05.2026", day: "10", month: "Mai" },
  { city: "Köln", venue: "Ecclesia Köln", date: "16.05.2026", day: "16", month: "Mai" },
];

/* === Render Music === */
const musicGrid = document.getElementById("musicGrid");
musicGrid.innerHTML = songs.map(s => `
  <div class="song-card reveal">
    <div class="song-head">
      <div>
        <h3>${s.title}</h3>
        <p>${s.subtitle}</p>
      </div>
      <div class="play-btn">▶</div>
    </div>
    <iframe
      title="${s.title}"
      src="${s.embed}"
      loading="lazy"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  </div>
`).join("");

/* === Render Tour === */
const tourList = document.getElementById("tourList");
tourList.innerHTML = tour.map(e => `
  <div class="tour-item reveal">
    <div class="tour-info">
      <div class="date-block">
        <span class="m">${e.month}</span>
        <span class="d">${e.day}</span>
      </div>
      <div>
        <h3>📍 ${e.city}</h3>
        <p class="venue">📅 ${e.venue} · ${e.date}</p>
      </div>
    </div>
    <a href="#" class="btn btn-light btn-sm">Tickets →</a>
  </div>
`).join("");

/* === Year === */
document.getElementById("year").textContent = new Date().getFullYear();

/* === Mobile Nav === */
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");
navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("open");
  navMobile.classList.toggle("open");
});
navMobile.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    navToggle.classList.remove("open");
    navMobile.classList.remove("open");
  });
});

/* === Scroll Effect on Nav === */
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

/* === Reveal on Scroll === */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));
