(function(){var t;try{t=localStorage.getItem('theme')}catch(e){}
if(t!=='light'&&t!=='dark')t='dark';
var r=document.documentElement;r.setAttribute('data-theme',t);
document.addEventListener('DOMContentLoaded',function(){var b=document.getElementById('theme');if(!b)return;
function label(){b.textContent=r.getAttribute('data-theme')==='dark'?'светлая':'тёмная'}
label();b.addEventListener('click',function(){var n=r.getAttribute('data-theme')==='dark'?'light':'dark';r.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}label()})})})();
