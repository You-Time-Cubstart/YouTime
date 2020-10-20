const WINDOW_LENGTH = window.innerWidth
const WINDOW_HEIGHT = window.innerHeight
const start_button = $(".btn")[0]
const backgrounds_url = ['../Img/Background_1.png', '../Img/Background_2.png']
// let scroll_icon = $('.fa-caret-down')[0]
// let scroll_icon_container = $('.scroll_icon')[0]

function setBackground(){
    background = Math.floor(Math.random() * backgrounds_url.length)
    document.body.style.backgroundImage = "url("+backgrounds_url[background]+")"
}

function onEnter(){
    scroll_icon.style.visibility = 'visible'
}
function onLeave(){
    scroll_icon.style.visibility = 'hidden'
}


// scroll_icon_container.addEventListener("mouseover", onEnter, false);
// scroll_icon_container.addEventListener("mouseout", onLeave, false);
setBackground()
start_button.addEventListener("click",function(){
    window.location.href = '../MainPage/index.html'
})
