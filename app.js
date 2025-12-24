let input=document.querySelector("input");
let button=document.querySelector("button");
let ul=document.querySelector("ul");
button.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let deletebutton=document.createElement("button");
    deletebutton.innerText="Delete";
    ul.appendChild(item);
    item.appendChild(deletebutton);
    input.value="";
})