function setupReveal(){
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const els = document.querySelectorAll('[data-reveal]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('is-visible');
    });
  },{threshold:0.08});
  els.forEach(el=>{
    el.classList.add('reveal');
    io.observe(el);
  });
}

if (typeof window !== 'undefined'){
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', setupReveal);
  else setupReveal();
}

export default setupReveal;
