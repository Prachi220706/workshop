
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

var mynodelist = document.getElementsByTagName("LI");
var i;
for(i=0;i<mynodelist.length;i++)
{
    var span = document.createElement("SPAN")
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

var close =document.getElementByClassname("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function ()
{
    var div = this.parentElement ;
    div.style.display = "none";

};
}
