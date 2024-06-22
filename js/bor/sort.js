let lists = [
    { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: 68 },
    { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: 328 },
    { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: 98 },
    { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: 328 },
    { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: 198 },
    { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: 128 },
    { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: 648 },
    { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: 328 },
    { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: 128 },
    { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: 258 },
    { url: "#", img: "../tp/lol/荆棘之兴.jpg", uname: "荆棘之兴", money: 198 },
    { url: "#", img: "../tp/lol/狂野女猎手.png", uname: "狂野女猎手", money: 168 },
    { url: "#", img: "../tp/lol/狂战士.jpg", uname: "狂战士", money: 198 },
    { url: "#", img: "../tp/lol/麦林炮手.jpg", uname: "麦林炮手", money: 98 },
    { url: "#", img: "../tp/lol/魔法猫咪.jpg", uname: "魔法猫咪", money: 128 },
    { url: "#", img: "../tp/lol/众星之子.jpg", uname: "众星之子", money: 198 },
    { url: "#", img: "../tp/lol/战争女神.jpg", uname: "战争女神", money: 328 },
    { url: "#", img: "../tp/lol/虚空恐惧.jpg", uname: "虚空恐惧", money: 198 },
]
// 默认
let oldList = lists.slice().sort();
let oldLists = oldList.slice().sort();
console.log(oldLists);
let four = ''
lists.forEach(e => {
    four += `<div class="dd"><a href="${e.url}" target="_blank" class="abox"><img src="${e.img}" alt="${e.uname}">${e.uname}<div style="color:#b89a15;">￥${e.money}<div class="shadow"></div></div></a></div>`
})
document.querySelector('.c3').innerHTML = four


// 搜索

let intext = document.querySelector('.intext')

intext.addEventListener('input', function () {

    var inputValue = this.value;
    let sList = oldLists.filter(e => e.uname.includes(`${inputValue}`));
    let oldListss = sList.slice().sort();

    let four = ''
    sList.forEach(e => {
        four += `<div class="dd"><a href="${e.url}" target="_blank" class="abox"><img src="${e.img}" alt="${e.uname}">${e.uname}<div style="color:#b89a15;">￥${e.money}<div class="shadow"></div></div></a></div>`
    })
    document.querySelector('.c3').innerHTML = four

    paixu(sList)

    cz(oldListss)
});

// 重置
cz(oldList)
function cz(e) {
    document.querySelector('.reset').addEventListener('click', () => {
        let four = ''
        e.forEach(e => {
            four += `<div class="dd"><a href="${e.url}" target="_blank" class="abox"><img src="${e.img}" alt="${e.uname}">${e.uname}<div style="color:#b89a15;">￥${e.money}<div class="shadow"></div></div></a></div>`
        })
        document.querySelector('.c3').innerHTML = four
    })
}

paixu(lists)
// 排序

function paixu(e) {
    document.querySelector('.high').addEventListener('click', () => {

        let newList = e.sort(function (a, b) {
            return a.money - b.money;
        });
        let four = ''
        newList.forEach(e => {
            four += `<div class="dd"><a href="${e.url}" target="_blank" class="abox"><img src="${e.img}" alt="${e.uname}">${e.uname}<div style="color:#b89a15;">￥${e.money}<div class="shadow"></div></div></a></div>`
        })
        document.querySelector('.c3').innerHTML = four
    })
}