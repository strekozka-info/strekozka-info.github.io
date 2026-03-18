
const myVideos = [
    { 
        marker: 'n1', 
        url: 'https://youtube.com', 
        title: '001 <br> Первое видео', 
        img: 'img/n1.jpg' 
    },

 { 
        marker: 'n2', 
        url: 'https://youtube.com', 
        title: ' 002 <br>  второе', 
        img: 'img/n1.jpg' 
    },

  
    { 
        marker: 'n3', 
        url: 'https://youtube.com', 
        title: ' 003 <br>  третье комм', 
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










