const imageAnimation = () => {
    let sectionForAnimation = document.querySelector('.doctor .slika')
    let sectionPosition = sectionForAnimation.getBoundingClientRect().top
    let screenPosition = window.innerHeight / 1.2


    console.log('sectionp:' + sectionPosition)

    console.log('screenp:' + screenPosition)


    let imagesLeft = document.querySelector('.slideFromLeft')

    if (sectionPosition < screenPosition) {
        imagesLeft.classList.add('animated')

        
            imagesLeft.classList.add('animated')
        
    }
}

AOS.init();