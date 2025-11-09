
document.addEventListener('DOMContentLoaded', function(){
  const opts = {threshold: 0.12};
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en => {
      if(en.isIntersecting){ en.target.classList.add('visible'); }
    });
  }, opts);
  document.querySelectorAll('.timeline-item').forEach(el=>io.observe(el));
  document.querySelectorAll('.project').forEach(el=>io.observe(el));
});
