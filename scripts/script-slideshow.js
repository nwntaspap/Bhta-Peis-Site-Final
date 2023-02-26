window.addEventListener('DOMContentLoaded', () => {
    const images = [
        '23-05-2015',
        '17-08-2015',
        '27-12-2015',
        '29-06-2018',
        '23-08-2018',
        '13-11-2021',
        '27-12-2021',
        '09-07-2022',
        '23-12-2022',
        '27-12-2022',

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

         slideImage.src = './images/Slideshow/' + currentImage;
         thubnailsContainer.innerHTML = '';
         images.forEach((image, index) => {
             let classNames = 'dot';
             if(index === currentImageIndex) {
                 classNames += ' active'
             }

             let img = document.createElement('img');
             img.className = classNames;
             img.onclick = () => makeImageCurrent(index);
             img.src = `./images/${image}`;

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