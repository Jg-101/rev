document.querySelectorAll('.answer-btn').forEach(button => {
    button.addEventListener('click', function() {
      if (this.id === 'yes-btn') {
        window.location.href = 'celebration.html';
      } else {
        window.location.href = 'dull.html';
      }
    });
  });