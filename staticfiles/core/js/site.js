document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('[data-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isHidden = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!isHidden));
    });
  }

  document.querySelectorAll('[data-faq-button]').forEach((button) => {
    button.addEventListener('click', () => {
      const panel = button.parentElement.querySelector('[data-faq-panel]');
      const icon = button.querySelector('[data-faq-icon]');
      panel.classList.toggle('hidden');
      icon.textContent = panel.classList.contains('hidden') ? '+' : '−';
    });
  });

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent(`ติดต่อ DooDeeVision: ${data.get('interest') || 'สอบถามข้อมูล'}`);
      const body = encodeURIComponent(`ชื่อ: ${data.get('name')}\nองค์กร: ${data.get('company')}\nอีเมล: ${data.get('email')}\nเรื่องที่สนใจ: ${data.get('interest')}\n\nรายละเอียด:\n${data.get('message')}`);
      window.location.href = `mailto:doodeeontop01@gmail.com?subject=${subject}&body=${body}`;
    });
  }
});
