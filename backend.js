let TListaTarea=[];
let TlistaCompletadas=[];
let cont=0;

function agregar(){
var  res = document.getElementById("tar").value
if (res == ""){}else{
    TListaTarea.push(res)
 var don = document.querySelector("#ContTar")
 document.getElementById("tar").value=  "" ;
 ListTar();
}
 
 }

function completados(p) {

        TlistaCompletadas.push(TListaTarea[p]);
        TListaTarea.splice(p,1);
        ListTar();
        ListComple(); 
    }
    


function ListComple() {
  var do1 = document.querySelector("#Comple");
  do1.innerHTML = "";
  for (let i = 0; i < TlistaCompletadas.length; i++)
  {
      var newtr1 = document.createElement("tr");
      var newtd1 = document.createElement("td");
      var cont1 = document.createTextNode(TlistaCompletadas[i]);
      newtd1.appendChild(cont1);
      newtd1.classList.add("Valor_Botones")
      newtr1.appendChild(newtd1);
      do1.appendChild(newtr1);

  };
}

function ListTar(){
   var don = document.querySelector("#ContTar")
   don.innerHTML=""
 for (let i = 0; i < TListaTarea.length; i++) {
const elimiar =document.createElement("button");
const completado =document.createElement("button");
elimiar.textContent = "Eliminar";
completado.textContent = "Completado";
elimiar.addEventListener("click", function ()  { eliminar(i); });
completado.addEventListener("click", function ()  { completados(i); });
completado.style.backgroundColor = "rgba(231, 235, 144, 0.952)";
elimiar.style.backgroundColor = "rgba(222,107, 72, 0.952)"
var newtr = document.createElement("tr")
 var Valor = document.createElement("td");
 var Botones = document.createElement("td");
 Botones.attributes
 var newContent = document.createTextNode(TListaTarea[i]);
 Valor.appendChild(newContent)
 Valor.classList.add("Valores_tabla")
Botones.appendChild(completado)
Botones.appendChild(elimiar)
Botones.classList.add("Botones_cont");
 newtr.appendChild(Valor)
 newtr.appendChild(Botones)
 newtr.classList.add("Valor_Botones")
 don.appendChild(newtr)
 

}
}

 function eliminar(g){
   TListaTarea.splice(g, 1);
 ListTar();
  
 }

 function logevent(event){
   console.log(event)
 }
