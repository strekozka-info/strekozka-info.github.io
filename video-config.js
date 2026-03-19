
const myVideos = [
    { 
        url: "https://www.youtube.com/embed/mVXXOCYSPfA?si=_XfhQOWG_zzg3IPv"  ,
        title: '001 <br> Дорожная песня', 
        img: 'img-video/1.webp' 
    },

 { 
        url: 'img-video/000.webp',
        title: ' 002 <br> Дорога', 
        url: 'img-video/000.webp', 
    },

   { 
        url: 'img-video/000.webp',
        title: ' 003 <br> Дорога', 
        url: 'img-video/000.webp', 
    },

    { 
        url: 'img-video/000.webp',
        title: ' 004 <br>  третье ', 
        img: 'img/n2.jpg' 
    }




  
];



        // ***********************************************************
/* 2. ДВИЖОК (Ниже ничего не трогай) ---------------------------------- */

document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.video-box');

    boxes.forEach((box, index) => {
        const data = myVideos[index];
        if (!data) return;

        // Рисуем заглушку (картинка фоном + кнопка + текст)
        box.innerHTML = `
            <div class="poster" style="background-image: url('${data.img}');">
                <div class="play-btn"></div>
                <h3>${data.title}</h3>
            </div>`;

        // ОБРАБОТЧИК КЛИКА: запуск плеера
        box.addEventListener('click', function() {
            // Просто вставляем твою готовую ссылку 'url' из конфига
            this.innerHTML = `
                <iframe src="${data.url}" 
                style="width:100%; height:100%; border:0;" 
                allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            
            this.classList.add('active');
        }, { once: true }); // Сработает один раз для каждого видео
    });
});










