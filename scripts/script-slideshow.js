window.addEventListener('DOMContentLoaded', () => {
    const images = [

        "10175032_1021767277887362_2116005801278748435_n.jpg",
        "10257681_693597100704383_3044022837109853148_n.jpg",
        "10293592_710050782392348_2661702912602225989_o.jpg",
        "10379792_720460764684683_2923294556692325036_o.jpg",
        "10675577_828930987170993_3407514007128249125_n.jpg" ,
        "11214074_920349728029118_5308694713849927621_n.jpg",
        "12342610_1007916912605732_6987583324987426393_n.jpg" ,
        "13524346_1139356139461808_1786388938349425221_n.jpg",
        "1398807_613248085405952_692651599_o.jpg",
        "737741_457415094322586_1910692280_o.jpg",
        "75497675_2687070171357056_9141408053503983616_n.jpg",
        "904716_604159192981508_1897617339_o.jpg"
    ];
    let currentImageIndex = 0;
    let sliderInterval = null;

    const previousBtn = document.querySelector("#previousBtn");
    const nextBtn = document.querySelector("#nextBtn");
    const thubnailsContainer = document.querySelector('#thubnailsContainer');
    const playBtn = document.querySelector('#play');
    const pauseBtn = document.querySelector('#pause');


    const print = () => {
         const currentImage = images[currentImageIndex];
         const slideImage = document.querySelector('#carousel img.slide');
        //  const thubnailsContainer = document.querySelector('#thubnailsContainer');

         slideImage.src = './images/Συναυλίες/' + currentImage;
         thubnailsContainer.innerHTML = '';
         images.forEach((image, index) => {
             let classNames = 'dot';
             if(index === currentImageIndex) {
                 classNames += ' active'
             }

             let img = document.createElement('img');
             img.className = classNames;
             img.onclick = () => makeImageCurrent(index);
             img.src = `./images/Συναυλίες/${image}`;

             thubnailsContainer.appendChild(img)
         });
    }

    const previewNextImage = () => {
        if(currentImageIndex === images.length -1) {
            currentImageIndex = 0;
        } else {
            currentImageIndex++;
        }
        print();
    }
    const previewPreviousImage = () => {
        if(currentImageIndex === 0) {
            currentImageIndex = images.length - 1;
        } else {
            currentImageIndex--;
        }
        print();
    }
    const makeImageCurrent = imageindex => {
        currentImageIndex = imageindex;
        print();

    }


    nextBtn.addEventListener('click', previewNextImage);

    previousBtn.addEventListener('click', previewPreviousImage);

    playBtn.addEventListener('click', () => {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline';
        sliderInterval = setInterval(previewNextImage, 3000);
    })

    pauseBtn.addEventListener('click', () => {
        pauseBtn.style.display = 'none';
        playBtn.style.display = 'inline';
        clearInterval(sliderInterval);
    })

    print();
})