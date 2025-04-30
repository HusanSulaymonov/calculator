const buttons = document.querySelectorAll('btn');
const display = document.getElementById('display');

let current = "";

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            current = "";
            display.textContent = "0";
        } else if (value === "⌫") {
            current = current.slice(0, -1);
            display.textContent = current || "0";
        } else if (value === "=") {
            try {
                let replaced = current.replace(/x/g, '*').replace(/×/g, '*').replace(/÷/g, '/').replace(/−/g, '-');
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