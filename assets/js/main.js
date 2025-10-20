document.addEventListener('DOMContentLoaded',function(){
  // year
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // mobile nav toggle
  var btn = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if(btn && nav){
    btn.addEventListener('click',function(){
      if(nav.style.display==='block') nav.style.display=''; else nav.style.display='block';
    });
  }
});
