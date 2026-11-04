(() => {
  const el = id => document.getElementById(id);
  const tick = () => {
    const now = new Date();
    el('hq-time').textContent = new Intl.DateTimeFormat('en-GB',{timeZone:'Asia/Kolkata',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
    el('local-time').textContent = new Intl.DateTimeFormat('en-GB',{hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now);
    el('local-zone').textContent = Intl.DateTimeFormat().resolvedOptions().timeZone || 'LOCAL';
  };
  tick(); setInterval(tick,1000);
  const menu=el('menuToggle'), links=el('navLinks');
  menu?.addEventListener('click',()=>{const open=links.classList.toggle('show');menu.setAttribute('aria-expanded',String(open));});
  const toggle=el('hqToggle'), drop=el('hqMenu');
  toggle?.addEventListener('click',()=>{const open=drop.parentElement.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  document.addEventListener('click',event=>{if(drop&&!drop.parentElement.contains(event.target)){drop.parentElement.classList.remove('open');toggle?.setAttribute('aria-expanded','false');}});
})();
