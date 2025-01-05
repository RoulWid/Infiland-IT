const openNavBtn = document.getElementById('nav-btn')
const nav = document.getElementById('nav')
const navBtnImg = document.getElementById('nav-btn-img')

openNavBtn.onclick = function() {
   if(nav.classList.toggle('open')){
        navBtnImg.src = './img/media/NAV CLOSE.svg'
   }else{
        navBtnImg.src = './img/media/NAV.svg'
   }
}


AOS.init({
    // disable:'phone' //Не работает на телефоне
    // once: true //Анимация один раз
}
);