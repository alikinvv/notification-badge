$(function () {
    var bubblesCount = 70;

    for (var i = 0; i < bubblesCount; i++) {
        $('.bubbles').append('<circle r="' + getRandomInt(5, 15) + '" cy="300" fill="#ff2900" cx="' + getRandomInt(40, 110) + '"></circle>');
    }

    var html = $('.bubbles').html();

    $('.bubbles').html(html);

    function getRandomInt (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    

    $('.bubbles circle').each(function () {
        var del = getRandomInt(0, 1000 * 3);
        var xv = getRandomInt(-35, 35);
        
        anime({
            targets: $(this)[0], 
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
    });
});
