var color
function changeColor(){
    var indexColor = Math.floor(Math.random() * 11)
    switch(indexColor){
        case 0:
            color = "#FF0000"
            break
        ;
        case 1:
            color = "#8B0000"
            break
        ;
        case 2:
            color = "#8B008B"
            break
        ;
        case 3:
            color = "#4B0082"
            break
        ;
        case 4:
            color = "#00FF00"
            break
        ;
        case 5:
            color = "#006400"
            break
        ;
        case 6:
            color = "#00BFFF"
            break
        ;
        case 7:
            color = "#191970"
            break
        ;
        case 8:
            color = "#FF4500"
            break
        ;
        case 9:
            color = "#696969"
            break
        ;
        case 10:
            color = "#000000"
            break
        ;
    }
    document.querySelector("body").style.backgroundColor = color
}