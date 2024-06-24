let TListaTarea=[];
let TlistaCompletadas=[];
let cont=0;

function agregar(){
var  res = document.getElementById("tar").value
 TListaTarea.push(res)
 var don = document.querySelector("#ContTar")
 don.innerHTML= "";
 ListTar();
 }

function completados(i){
    TlistaCompletadas.push(i);
    TListaTarea.splice(i,1);
    ListTar();
    ListComple();
}


function ListComple(){
        var do1 = document.querySelector("#Comple")
        do1.innerHTML=""
        for (let i = 0; i < TlistaCompletadas.length; i++) {
           var newtr = document.createElement("tr")
        var newtd = document.createElement("td");
        var newContent = document.createTextNode(TlistaCompletadas[i]);
        newtd.appendChild(newContent)
        newtr.appendChild(newtd)
        do1.appendChild(newtr)
    }
       }

function ListTar(){
   var don = document.querySelector("#ContTar")
   don.innerHTML=""
 for (let i = 0; i < TListaTarea.length; i++) {
   
   
const elimiar =document.createElement("button");
const completado =document.createElement("button");
elimiar.textContent = "Eliminar";
completado.textContent = "Completado";
elimiar.addEventListener("click", function (i)  { eliminar(i); });
completado.addEventListener("click", function (i)  { completados(i); });
var newtr = document.createElement("tr")
 var Valor = document.createElement("td");
 var Botones = document.createElement("td");
 var newContent = document.createTextNode(TListaTarea[i]);
 Valor.appendChild(newContent)
Botones.appendChild(completado)
Botones.appendChild(elimiar)
 newtr.appendChild(Valor)
 newtr.appendChild(Botones)
 don.appendChild(newtr)}
}

 function eliminar(i){
   TListaTarea.splice(i, 1);
 ListTar();
  
 }

 function logevent(event){
   console.log(event)
 }
