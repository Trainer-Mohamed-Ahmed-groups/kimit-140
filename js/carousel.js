var next_btn = document.getElementById('next'),
    prev_btn = document.getElementById('prev'),
    images = [
        {
            src: '1.jpg',
            alt: 'zippra'
        },
        {
            src: '2.jpg',
            alt: 'chetta'
        },
        {
            src: '3.jpg',
            alt: 'fox'
        },
        {
            src: '4.jpg',
            alt: 'rakon'
        }],
    image_tag = document.images[0],
    main_path = './images/',
    index = 0;

setAttributes();

next_btn.onclick = function () {
    if (index < images.length - 1) index++;
    else index = 0;
    setAttributes()
}

prev_btn.onclick = function () {
    if (index > 0) index--;
    else index = images.length - 1;
    setAttributes()
}

function setAttributes() {
    image_tag.setAttribute('src', main_path + images[index].src)
    image_tag.setAttribute('alt', images[index].alt)
}