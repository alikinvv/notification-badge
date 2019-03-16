$(function () {
    let bubblesCount = 70;
    let bubbles = document.querySelector('.bubbles');

    let getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }   

    for (let i = 0; i < bubblesCount; i++) {
        let circle = document.createElement('circle');
        
        circle.setAttribute('r', getRandomInt(5, 15));
        circle.setAttribute('cy', 300);
        circle.setAttribute('cx', getRandomInt(40, 110));
        circle.setAttribute('fill', '#ff2900');
        bubbles.append(circle);
    }

    let html = $('.bubbles').html();
    $('.bubbles').html(html);     

    let circles = document.querySelectorAll('.bubbles circle');

    for (let i = 0; i < circles.length; i++) {
        let del = getRandomInt(0, 1000 * 3);
        let xv = getRandomInt(-35, 35);

        anime({
            targets: circles[i],
            r: {
                value: 0,
                duration: 500,
                delay: del + 1000
            },
            translateX: {
                value: xv,
                duration: 800,
                delay: del,
            },
            translateY: {
                value: [0, -150],
                duration: 2000,
                delay: del,
            },
            loop: true,
            easing: 'linear'
        })
    }
});
