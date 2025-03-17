function changeColor(){
    let randomR = Math.random() * 255
    let randomG = Math.random() * 255
    let randomB = Math.random() * 255
    $("p").css("color","rgb("+randomR+", "+randomG+", "+randomB+")")
}

changeColor()

$(window).scroll(changeColor)