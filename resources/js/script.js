document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.about__intro__name--full-name');
    const fullName = nameElement.textContent.trim();
    nameElement.innerHTML = '';
    let index = 0;

    function typeWriter() {
        if (index < fullName.length) {
            nameElement.innerHTML += fullName.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        } else {
            nameElement.innerHTML += `<span class="header__full-stop">.</span>`;

            setTimeout(blinkFullStop, 150);
          }
    }

    function blinkFullStop() {
        const fullStop = nameElement.querySelector('.header__full-stop');
        let blinkCount = 0;
        
        function blink() {
            if (blinkCount < 8) { // 4 full blinks (on and off is 2 counts)
              fullStop.style.opacity = fullStop.style.opacity === '0' ? '1' : '0';
                blinkCount++;
                setTimeout(blink, 500); // Adjust blink speed here (300ms)
            } else {
              fullStop.style.opacity = '1';
            }
        }
        
        blink();
    }

    typeWriter();
});