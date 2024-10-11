
// document.getElementById("title").innerHTML = "New Title";
// const a = document.getElementById("myDIV");
const button = document.querySelector(".checked");
console.log(button);
var list = document.querySelector("ul");

list.addEventListener(
    "click",
    function (ev){
        if(ev.target.tagname==="LI"){
            ev.target.classicList.toggle("checked");

        }
    },
    false
);