  document.querySelectorAll('.toggle-btn').forEach(button => {
      button.addEventListener('click', () => {
        const text = button.previousElementSibling;
        const hidden = text.classList.toggle('hidden-text');
        button.textContent = hidden ? 'Ver más' : 'Ver menos';
      });
    });