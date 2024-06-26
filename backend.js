let TListaTarea=[];
let TlistaCompletadas=[];
let cont=0;

function agregar(){
var  res = document.getElementById("tar").value
 TListaTarea.push(res)
 var don = document.querySelector("#ContTar")
 document.getElementById("tar").value=  "" ;
 ListTar();
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
   
  /*
 let TListaTarea = [];
 let TlistaCompletadas = [];
 
 function agregar() {
     var res = document.getElementById("tar").value;
     if (res !== "") { // Asegúrate de no agregar tareas vacías
         TListaTarea.push(res);
         document.getElementById("tar").value = ""; // Limpiar el input
         ListTar();
     }
 }
 
 function completados(index) {
     TlistaCompletadas.push(TListaTarea[index]);
     TListaTarea.splice(index, 1);
     ListTar();
     ListComple();
 }
 
 function eliminarTarea(index) {
     TListaTarea.splice(index, 1);
     ListTar();
 }
 
 function ListTar() {
     var don = document.querySelector("#ContTar");
     don.innerHTML = "";
     TListaTarea.forEach((tarea, i) => {
         const eliminar = document.createElement("button");
         const completado = document.createElement("button");
         eliminar.textContent = "Eliminar";
         completado.textContent = "Completado";
         
         eliminar.addEventListener("click", () => eliminarTarea(i));
         completado.addEventListener("click", () => completados(i));
         
         var newtr = document.createElement("tr");
         var Valor = document.createElement("td");
         var Botones = document.createElement("td");
         var newContent = document.createTextNode(tarea);
         Valor.appendChild(newContent);
         Botones.appendChild(completado);
         Botones.appendChild(eliminar);
         newtr.appendChild(Valor);
         newtr.appendChild(Botones);
         don.appendChild(newtr);
     });
 }
 
 function ListComple() {
     var do1 = document.querySelector("#Comple");
     do1.innerHTML = "";
     TlistaCompletadas.forEach(tarea => {
         var newtr1 = document.createElement("tr");
         var newtd1 = document.createElement("td");
         var cont1 = document.createTextNode(tarea);
         newtd1.appendChild(cont1);
         newtr1.appendChild(newtd1);
         do1.appendChild(newtr1);
     });
 }
 
 function logevent(event) {
     console.log(event);
 }*/