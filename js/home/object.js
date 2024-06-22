
let listTwo = [
    { uname: "A", text: "-a" },
    { uname: "B", text: "-b" },
    { uname: "C", text: "-c" },
];

let two = ''
listTwo.forEach(e => {
    two += ` 
        <div class="bbb0">
            <ul>
                    <li>
                        <h1>${e.uname}</h1>
                    </li>
                    <li class="bbb1"><span>name</span>${e.text}</li>
            </ul>
        </div>
        <hr width="180px">`
})
document.querySelector('.bb2').innerHTML = two + '<div ><a href="../html/cart.html" class="bbb2 bbb0" target="_blank">查看全部</a></div>'


let hoverOut1 = document.querySelector('.hoverOut1')
let hoverOut2 = document.querySelector('.hoverOut2')
let hoverOut3 = document.querySelector('.hoverOut3')
let hoverOut4 = document.querySelector('.hoverOut4')
let hoverOut5 = document.querySelector('.hoverOut5')
let hoverOut6 = document.querySelector('.hoverOut6')
let hoverOut7 = document.querySelector('.hoverOut7')
let hoverOut8 = document.querySelector('.hoverOut8')
let hoverOut9 = document.querySelector('.hoverOut9')
let hoverOut10 = document.querySelector('.hoverOut10')
let hoverOut11 = document.querySelector('.hoverOut11')
let hoverOut12 = document.querySelector('.hoverOut12')

let numx = 0

hoverOut1.addEventListener('click', () => {
    let listFour = [
        { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥68" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut2.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        { url: "#", img: "../tp/lol/猩红收割者.jpg", uname: "猩红收割者", money: "￥328" },
        { url: "#", img: "../tp/lol/亡灵战神.jpg", uname: "亡灵战神", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut3.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut4.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut5.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        { url: "#", img: "../tp/lol/远古巫灵.jpg", uname: "远古巫灵", money: "￥328" },
        { url: "#", img: "../tp/lol/战争女神.jpg", uname: "战争女神", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut6.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        { url: "#", img: "../tp/lol/众星之子.jpg", uname: "众星之子", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut7.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        { url: "#", img: "../tp/lol/虚空恐惧.jpg", uname: "虚空恐惧", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut8.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut9.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        { url: "#", img: "../tp/lol/戏命师.jpg", uname: "戏命师", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut10.addEventListener('click', () => {
    let listFour = [
        { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥68" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut11.addEventListener('click', () => {
    let listFour = [
        // { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥198" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        { url: "#", img: "../tp/lol/狂战士.jpg", uname: "狂战士", money: "￥198" },
        { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)
})
hoverOut12.addEventListener('click', () => {
    let listFour = [
        { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥68" },
        // { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
        // { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
        // { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
        // { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
        // { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
        // { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
        // { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
        // { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
        // { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
    ]
    obj(listFour)

})
console.log(numx);
// 对象
let listFour = [
    { url: "../html/com.html", img: "../tp/lol/暗夜猎手.png", uname: "暗夜猎手", money: "￥68" },
    { url: "#", img: "../tp/lol/暴走萝莉.png", uname: "暴走萝莉", money: "￥328" },
    { url: "#", img: "../tp/lol/残月之肃.png", uname: "残月之肃", money: "￥98" },
    { url: "#", img: "../tp/lol/德邦总管.png", uname: "德邦总管", money: "￥328" },
    { url: "#", img: "../tp/lol/复仇焰魂.png", uname: "复仇焰魂", money: "￥198" },
    { url: "#", img: "../tp/lol/寒冰射手.png", uname: "寒冰射手", money: "￥128" },
    { url: "#", img: "../tp/lol/破败之王.png", uname: "破败之王", money: "￥648" },
    { url: "#", img: "../tp/lol/魂锁典狱长.png", uname: "魂锁典狱长", money: "￥328" },
    { url: "#", img: "../tp/lol/皮城女警.png", uname: "皮城女警", money: "￥128" },
    { url: "#", img: "../tp/lol/龙血武姬.png", uname: "龙血武姬", money: "￥198" }
]

function obj(listFour) {
    let four = ''
    listFour.forEach(e => {
        four += `<div class="dd"><a href="${e.url}" target="_blank" class="abox"><img src="${e.img}" alt="${e.uname}">${e.uname}<div style="color:#b89a15;">${e.money}<div class="shadow"></div></div></a></div>`

    })
    document.querySelector('.c3').innerHTML = four
}
// 默认
obj(listFour)
document.querySelector('.cx13').addEventListener('click', () => {
    obj(listFour)
})

