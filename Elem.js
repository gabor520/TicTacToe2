class Elem{
    constructor(id, szuloElem){
        this.id = id;
        szuloElem.append("<div class='elem'><p></p></div>");
        this.elem =$("article div:last-child");

        this.pElem = this.elem.children("p");
        this.elem.on("click", () => {
         //   this.setElem("X")
         this.esemenyTrigger()
        });
    }
    setElem(ertek){

        this.pElem.html(ertek);

    }
    esemenyTrigger(){
        console.log("trigger",this.id);
        const esemeny = new CustomEvent("elemKattintas",{detail:this});
        window.dispatchEvent(esemeny);
    }
}
export default Elem;