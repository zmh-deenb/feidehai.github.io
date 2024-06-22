
let btn = document.querySelector('.btn');
let btns = document.querySelector('.btns');


// 用户登入

let list = [
    { username: "zmh666", paseword: "123456", uname: "原神职业哥" }
];
btn.addEventListener('click', () => {
    let username = document.getElementById('user').value;
    let paseword = document.getElementById('pase').value;
    let isAuthenticated = list.some(function (item) {
        return item.username === username && item.paseword === paseword;
    });

    if (isAuthenticated) {
        location.href = '../html/home.html';
        alert('登入成功');
    } else {
        document.getElementById('user').value = '';
        document.getElementById('pase').value = '';
        alert('账号或密码错误');
    }
});
// 键盘回车事件
document.getElementById('user').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        let username = document.getElementById('user').value;
        let paseword = document.getElementById('pase').value;
        let isAuthenticated = list.some(function (item) {
            return item.username === username && item.paseword === paseword;
        });

        if (isAuthenticated) {
            location.href = '../html/home.html';
            alert('登入成功');
        } else {
            document.getElementById('user').value = '';
            document.getElementById('pase').value = '';
            alert('账号或密码错误');
        }
    }

})

document.getElementById('pase').addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        let username = document.getElementById('user').value;
        let paseword = document.getElementById('pase').value;
        let isAuthenticated = list.some(function (item) {
            return item.username === username && item.paseword === paseword;
        });

        if (isAuthenticated) {
            location.href = '../html/home.html';
            alert('登入成功');
        } else {
            document.getElementById('user').value = '';
            document.getElementById('pase').value = '';
            alert('账号或密码错误');
        }
    }

})

// 用户注册
btns.addEventListener('click', () => {
    let newUsername = document.getElementById('user').value;
    let newPaseword = document.getElementById('pase').value;
    if (newUsername && newPaseword) {
        list.push({ username: newUsername, paseword: newPaseword, uname: '原神职业哥' });
        console.log(list);
        document.getElementById('user').value = '';
        document.getElementById('pase').value = '';
        alert('注册成功');
    } else {
        document.getElementById('pase').value = '';
        alert('请输入账号或密码');
    }
});
