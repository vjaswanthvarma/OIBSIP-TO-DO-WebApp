function check(){
    var a=new Date();
var dtime = document.createElement("h3");
var dtitle=document.createElement("h3");
var dtext=document.createElement("h3");
dtime.innerText=a.getHours()+"-"+a.getMinutes()+"-"+a.getSeconds();
dtitle.innerText=document.getElementById("title").value;
dtext.innerHTML=document.getElementById("discription").value;
    datadisplay.insertAdjacentElement("beforeend",dtime);
    datadisplay1.insertAdjacentElement("beforeend",dtitle);
    datadisplay2.insertAdjacentElement("beforeend",dtext);
    dtime.addEventListener("click",function(){
        dtitle.classList.toggle("col");
        dtext.classList.toggle("col");
        this.classList.toggle("col");
    })
    dtitle.addEventListener("click",function(){
        dtime.classList.toggle("col");
        dtext.classList.toggle("col");
        this.classList.toggle("col");
    })
    dtext.addEventListener("click",function(){
        dtitle.classList.toggle("col");
        dtime.classList.toggle("col");
        this.classList.toggle("col");
    })
}