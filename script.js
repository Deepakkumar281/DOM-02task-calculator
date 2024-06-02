document.addEventListener("DOMContentLoaded", function() {
  const screen = document.getElementById('calculator-screen');

  document.addEventListener('keydown', function(event) {
      const key = event.key;
      if (key >= '0' && key <= '9' || key === '+' || key === '-' || key === '*' || key === '/' || key === '.') {
          append(key);
      } else if (key === 'Enter') {
          calculateResult();
      } else if (key === 'Escape') {
          clearScreen();
      } else {
          alert("Only numbers are allowed");
      }
  });

  window.append = function(value) {
      screen.value += value;
  };

  window.calculateResult = function() {
      try {
          screen.value = eval(screen.value);
      } catch (e) {
          screen.value = "Error";
      }
  };

  window.clearScreen = function() {
      screen.value = '';
  };
});
