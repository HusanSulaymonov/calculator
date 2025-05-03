document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn');
    const display = document.getElementById('display');
    let current = "";
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;
  
        if (value === 'AC') {
          current = "";
          display.textContent = "0";
        } else if (value === '⌫') {
          current = current.slice(0, -1);
          display.textContent = current || "0";
        } else if (value === '=') {
          try {
            let replaced = current
              .replace(/x/g, '*')
              .replace(/×/g, '*')
              .replace(/÷/g, '/')
              .replace(/−/g, '-');
            current = eval(replaced).toString();
            display.textContent = current;
          } catch {
            display.textContent = "Error";
            current = "";
          }
        } else {
          current += value;
          display.textContent = current;
        }
      });
    });
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('click', () => {
        handleInput(btn.textContent);
      });
    });
  
    // Keyboard event
    document.addEventListener('keydown', e => {
      const k = e.key;
      if (/\d/.test(k)) {
        handleInput(k);
      } else if (k === '+' || k === '-' || k === '*' || k === '/') {
        // klaviaturadagi * va /
        const map = {'*':'×', '/':'÷'};
        handleInput(map[k] || k);
      } else if (k === 'Enter') {
        handleInput('=');
      } else if (k === 'Backspace') {
        handleInput('⌫');
      } else if (k === 'Delete') {
        handleInput('AC');
      } else if (k === '%') {
        handleInput('%');
      } else if (k === '.') {
        handleInput('.');
      }
    });
  });