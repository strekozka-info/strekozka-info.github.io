
const myVideos = [
    { 
        url: "https://www.youtube.com/embed/fOhwAdbrUOs?si=SlpTDC6iWV8KGHOX",
        title: '001 <br> Дорожная песня', 
        img: 'img-video/1.webp' 
    },

 { 
        url: "https://www.youtube.com/embed/SolZbSxvJ1s?si=ZznZClDuwkafBD60",
        title: ' 002 <br> Дорога', 
        img:'img-video/2.webp', 
    },

   { 
        url: "https://www.youtube.com/embed/jIZgFfyh0mQ?si=vbvqwxrrUuRr6DTC",
        title: ' 003 <br> Прибытие', 
        img: 'img-video/3.webp', 
    },

    { 
        url: "https://www.youtube.com/embed/_qH4kLW4YbQ?si=cnx6j-5T9GdsDqWv",
        title: ' 004 <br>  Собеседование ', 
         img: 'img-video/4.webp', 
    }, 


 { 
        url:"https://www.youtube.com/embed/a266VkHwi-U?si=DASlvs6rKq_iUtSs",
        title: ' 005 <br>  Вводная лекция ', 
         img: 'img-video/5.webp', 
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
                <iframe src="${data.url}" scrolling="no"
                style="width:100%; height:100%; border:0;" 
                allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
            
            this.classList.add('active');
        }, { once: true }); // Сработает один раз для каждого видео
    });
});










