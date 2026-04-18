


/* ============================================================
РАССТАНОВКА КАРТИНОК  И РЕПЛИК 
   ============================================================ */
   document.addEventListener('DOMContentLoaded', () => {
    fetch('data.txt')
        .then(res => res.text())
        .then(data => {
            // Добавил только !l.startsWith('#')
            const lines = data.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !l.startsWith('#'));
            const rows = document.querySelectorAll('.WRAPPER');

            rows.forEach((row, index) => {
                const line = lines[index];
                if (!line) return;

                const [imgL, imgR, txtL, txtR] = line.split('|').map(p => p.trim());
                if (!txtR) return; // Простая проверка на наличие всех частей

                const fillBlock = (selector, imgFile, text, isLeft) => {
                    const block = row.querySelector(selector);
                    if (!block) return;

                    const img = document.createElement('img');
                    img.onerror = function() { 
                        this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                    };
                    img.src = `img-video/${imgFile}`;

                    const span = document.createElement('span');
                    span.innerHTML = text;

                    if (isLeft) {
                        block.appendChild(img);
                        block.appendChild(span);
                    } else {
                        block.prepend(img);
                        block.prepend(span);
                    }
                };

                fillBlock('.LEFT', imgL, txtL, true);
                fillBlock('.RIGHT', imgR, txtR, false);
            });
        })
        .catch(err => console.log("Ошибка загрузки или файла нет"));
});



/* ============================================================
   КНОПКА ПЕРЕМОТКИ НАВЕРХ (SCROLL TO TOP)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const btnUp = document.querySelector('.arrow-box');

    if (btnUp) {
        btnUp.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth' // Плавный полет наверх
            });
        });
    }
});



/* ============================================================
  ВСТАВКА СТРАНИЦ МЕНЮ
   ============================================================ */


document.getElementById('sprite').addEventListener('click', async (e) => {
    const link = e.target.closest('[data-url]'); // Ищем элемент с нашим атрибутом
    if (!link) return;

    e.preventDefault();
    const url = link.getAttribute('data-url'); 

    try {
        const response = await fetch(url);
        const html = await response.text();

        const fullPage = document.createElement('div');
        fullPage.id = 'page-overlay';
        
        fullPage.innerHTML = `
            <button class="close-btn">✕</button>
            <div class="content-wrapper">${html}</div>
        `;

        document.body.appendChild(fullPage);

        // --- ВОТ ЭТИ 2 СТРОЧКИ ---
        const fullHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
        fullPage.style.height = fullHeight + 'px';
        // -------------------------

        fullPage.querySelector('.close-btn').onclick = () => {
            fullPage.remove();
        };
    } catch (err) {
        console.log('Ошибка загрузки файла из папки pages');
    }
});











