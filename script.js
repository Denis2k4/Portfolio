// Dark mode toggle
const darkBtn = document.getElementById('darkmode-toggle');
darkBtn.onclick = () => {
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')) localStorage.setItem('darkmode','1');
  else localStorage.removeItem('darkmode');
};
if(localStorage.getItem('darkmode')==='1') document.body.classList.add('dark');

// Hamburger menu close on nav click (mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.onclick = () => {
    const menu = document.getElementById('menu-toggle');
    if(menu && menu.checked) menu.checked = false;
  };
});


// Contact form - demo only (không gửi thực tế)
const form = document.getElementById('contact-form');
if(form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('form-status').textContent = "Cảm ơn bạn đã liên hệ!";
    form.reset();
  });
}