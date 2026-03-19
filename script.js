



/* ============================================================
   АВТОРАССТАНОВКА КАРТИНОК (L1, R1, L2, R2...) В КОЛОНКИ
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.WRAPPER');

    rows.forEach((row, index) => {
        const n = index + 1; // Номер ряда по порядку в HTML
        
        const addIcon = (selector, prefix) => {
            const block = row.querySelector(selector);
            if (!block) return;

            const img = document.createElement('img');
            img.src = `img-video/${prefix}${n}.webp`;
            
            // Если картинки в папке нет — просто удаляем этот тег, чтобы не мешал
            img.onerror = function() { 
                this.remove(); 
            };

            // Вставляем картинку в начало блока (перед текстом "Инфо" или "Коммент")
            block.prepend(img);
        };

        addIcon('.LEFT', 'l');   // Ищем l1.webp, L2.webp...
        addIcon('.RIGHT', 'r');  // Ищем r1.webp, R2.webp...
    });
});
