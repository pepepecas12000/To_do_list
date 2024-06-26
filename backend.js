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

function completados(i) {
  
  var do1 = document.querySelector("#Comple")
  var lol = document.createTextNode(TListaTarea[i]);
  var newtr1 = document.createElement("tr")
  var newtd1 = document.createElement("td");
  var cont1 = document.createTextNode(lol);
  newtd1.appendChild(lol)
  newtr1.appendChild(newtd1)
  do1.appendChild(newtr1)

    TListaTarea.splice(i,1);
    ListTar();
    
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
 don.appendChild(newtr)
 

}
}

 function eliminar(i){
   TListaTarea.splice(i, 1);
 ListTar();
  
 }

 function logevent(event){
   console.log(event)
 }
   