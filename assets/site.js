  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // language toggle
  const langBtn = document.getElementById('langToggle');
  function applyLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('.t-ja').forEach(el => el.hidden = (lang === 'en'));
    document.querySelectorAll('.t-en').forEach(el => el.hidden = (lang === 'ja'));
    if (langBtn) langBtn.textContent = lang === 'ja' ? 'EN' : 'JA';
    try { localStorage.setItem('shigaki-lab-lang', lang); } catch(e){}
  }
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const current = document.documentElement.lang === 'en' ? 'en' : 'ja';
      applyLang(current === 'ja' ? 'en' : 'ja');
    });
  }
  let initialLang = 'ja';
  try { initialLang = localStorage.getItem('shigaki-lab-lang') || 'ja'; } catch(e){}
  applyLang(initialLang);

  // mobile nav (only present on the main page)
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }
