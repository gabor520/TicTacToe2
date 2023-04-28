import Elem from "./Elem.js"
$(function(){
    let lepes = 0;
    const szuloElem = $("article");
    for (let index = 0; index < 9; index++) {
        const elem = new Elem(index, szuloElem);
        
    }
    //main js-nek kell tudnia hogy hol all a jatek
    $(window).on("elemKattintas",(event)=>{
        console.log(event.detail)

        if(lepes % 2=== 0){
        event.detail.setElem("X");
    } else{
        event.detail.setElem("O");
    }
    lepes++;
    });
    
});