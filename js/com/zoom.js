var mask = document.querySelector('.mask');
var box = document.querySelector('.boxTp');
var big = document.querySelector('.big');
var img = document.querySelector('.big .img');

box.addEventListener('mouseover', function () {
    mask.style.display = 'block';
    big.style.opacity = '100%';
});

box.addEventListener('mouseout', function () {
    mask.style.display = 'none';
    big.style.opacity = '0';
});

box.addEventListener('mousemove', function (e) {
    var boxRect = this.getBoundingClientRect();
    var x = e.pageX - boxRect.left;
    var y = e.pageY - boxRect.top;

    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;

    var maskWidth = box.offsetWidth - mask.offsetWidth;
    var maskHeight = box.offsetHeight - mask.offsetHeight;

    if (maskX <= 0) {
        maskX = 0;
    }
    else if (maskX >= maskWidth) {
        maskX = maskWidth;
    }
    if (maskY <= 0) {
        maskY = 0;
    }
    else if (maskY >= maskHeight) {
        maskY = maskHeight;
    }
    mask.style.left = maskX + 'px';
    mask.style.top = maskY + 'px';

    var imgWidth = img.offsetWidth - big.offsetWidth;
    var imgHeight = img.offsetHeight - big.offsetHeight;

    var bigX = maskX * imgWidth / maskWidth;
    var bigY = maskY * imgHeight / maskHeight;

    img.style.left = (-bigX) + 'px';
    img.style.top = (-bigY) + 'px';
});

let mg = document.querySelector('.mg')
document.querySelector('.imgs1').addEventListener('mouseover', () => {
    mg.src = '../tp/lol/幻灵战斗蝠 薇恩.png'
    img.src = '../tp/lol/big/幻灵战斗蝠 薇恩b.png'
})
document.querySelector('.imgs2').addEventListener('mouseover', () => {
    mg.src = '../tp/lol/摄魂使者 薇恩.png'
    img.src = '../tp/lol/big/摄魂使者 薇恩b.png'
})
document.querySelector('.imgs3').addEventListener('mouseover', () => {
    mg.src = '../tp/lol/黎明使者 薇恩.png'
    img.src = '../tp/lol/big/黎明使者 薇恩b.png'
})
document.querySelector('.imgs4').addEventListener('mouseover', () => {
    mg.src = '../tp/lol/光明哨兵 薇恩.png'
    img.src = '../tp/lol/big/光明哨兵 薇恩b.png'
})
document.querySelector('.imgs5').addEventListener('mouseover', () => {
    mg.src = '../tp/lol/至臻 烈焰美人 薇恩.png'
    img.src = '../tp/lol/big/至臻 烈焰美人 薇恩b.png'
})
document.querySelector('.imgs6').addEventListener('mouseover', () => {
    mg.src = '../tp/lol/源计划：净化 薇恩.png'
    img.src = '../tp/lol/big/源计划：净化 薇恩b.png'
})
document.querySelector('.imgs7').addEventListener('mouseover', () => {
    mg.src = '../tp/lol/暗夜猎手.png'
    img.src = '../tp/lol/big/暗夜猎手b.png'
})
