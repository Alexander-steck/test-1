//import '../index.html';
//import font from"../font_Social/css/fontello.css";
//import css from"../style/css.css";
/*import background01 from "../img/background01.png";
import picture01 from "../img/picture01.png";
import picture02 from "../img/picture02.png";
import m01 from "../img/m01.png";
import m02 from "../img/m02.png";*/
//import stylesheetUrl from "file-loader!extract-loader!css-loader!main.css";

document.addEventListener("DOMContentLoaded", TabFunctional);



function TabFunctional() {
    (()=>{
        let blockTabs = document.querySelector(".section1__block-tabs");
        let buttons = blockTabs.getElementsByTagName("button");
        for (let index = 0; index < buttons.length; index++) {
            let atr = document.createAttribute("data-number");
            atr.value = [index];
            buttons[index].setAttributeNode(atr);
        };
        blockTabs.addEventListener("click",function(event) {
            let contents = document.querySelectorAll(".section1__block-text");
            for (let index = 0; index < buttons.length; index++) {
                
                if(event.target.getAttribute("data-number")==index){
                    buttons[index].classList.remove("section1__tab__inactive");
                    contents[index].classList.remove("section1__block-text__inactive");
                    buttons[index].classList.add("section1__tab__active");
                    contents[index].classList.add("section1__block-text__active");
                }else if(event.target.className == 'section1__block-tabs col3' &&  buttons[index].className == 'section1__tab section1__tab__active'){
                    buttons[index].classList.add("section1__tab__active");
                    contents[index].classList.add("section1__block-text__active");
                }else{
                    buttons[index].classList.remove("section1__tab__active");
                    contents[index].classList.remove("section1__block-text__active");
                    buttons[index].classList.add("section1__tab__inactive");
                    contents[index].classList.add("section1__block-text__inactive");
                }   
            };
            
        });
    })();     
};

console.log(blockTabs);