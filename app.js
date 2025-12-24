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
// let lis=document.querySelectorAll(".delete");
// for(let i=0;i<lis.length;i++){
//     lis[i].addEventListener("click",function(){
//         console.log("deleted");
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }
ul.addEventListener("click",function(){
    if(event.target.nodeName=="BUTTON"){
        console.log("deleted");
        let listitem=event.target.parentElement;
        console.log(listitem);
        listitem.remove();
    }
})