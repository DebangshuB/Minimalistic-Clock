let clock = document.querySelector(".clock");
let date = document.querySelector(".date");
let button = document.querySelector(".btn-theme");
let parent = document.querySelector(".parent");
let body = document.querySelector("body");

fetch('./style.css')
    .then(response => response.text())
    .then((data) => {
        themes = data.match(/[.]([-].+)\s[{]/g)
    })


pos = 1;

// Theme changer
button.onclick = function() {
    button.innerHTML = themes[pos % themes.length].slice(2, -2);
    body.className = themes[pos++ % themes.length].slice(1, -2)
};

// Date updater
setInterval(() => {

    let timestamp = new Date();

    let h = ('0' + timestamp.getHours()).slice(-2);
    let m = ('0' + timestamp.getMinutes()).slice(-2);
    let s = ('0' + timestamp.getSeconds()).slice(-2);

    clock.innerHTML = h + ':' + m + ':' + s;
    date.innerHTML = timestamp.toDateString();;

}, 1000);