


/* ============================================================
   АВТОРАССТАНОВКА КАРТИНОК (L1, R1, L2, R2...) В КОЛОНКИ
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.WRAPPER');

    rows.forEach((row, index) => {
        const n = index + 1; 
        
        const addIcon = (selector, prefix) => {
            const block = row.querySelector(selector);
            if (!block) return;

            const img = document.createElement('img');
            img.src = `img-video/${prefix}${n}.webp`;
            
            // Если файл найден — CSS через этот класс вернет высоту и покажет фото
            img.onload = function() { 
                this.classList.add('loaded'); 
            };

            block.prepend(img);
        };

        addIcon('.LEFT', 'l');   
        addIcon('.RIGHT', 'r');  
    });
});


/* ============================================================
   ЗАГРУЗКА ТЕКСТА ИЗ JSON (БОКОВЫЕ КОЛОНКИ L и R)
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    // Загружаем твой "блокнот"
    fetch('data.json')
        .then(res => res.json())
        .then(jsonData => {
            const rows = document.querySelectorAll('.WRAPPER');

            rows.forEach((row, index) => {
                const info = jsonData[index]; // Данные для текущего ряда
                if (!info) return;

                // Находим блоки, где уже лежат картинки l1 и r1
                const left = row.querySelector('.LEFT');
                const right = row.querySelector('.RIGHT');

                // 1. Добавляем текст в LEFT (после картинки)
                if (left && info.L) {
                    const spanL = document.createElement('span');
                    spanL.innerHTML = info.L; 
                    left.appendChild(spanL);
                }

                // 2. Добавляем текст в RIGHT (перед картинкой)
                if (right && info.R) {
                    const spanR = document.createElement('span');
                    spanR.innerHTML = info.R;
                    // prepend, чтобы текст встал ПЕРЕД иконкой r1
                    right.prepend(spanR);
                }
            });
        })
        .catch(err => console.log("JSON пока пуст или не найден, текст не загружен"));
});





