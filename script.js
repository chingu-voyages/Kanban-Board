function Show(){
    var x ;
    
    x=document.getElementById("create-new-task-block").style.display="flex";
    x=document.getElementById("overlay").style.display="block";
}
/*ADD NEW BOARD
function Show_board(){
    var x ;
    
    x=document.getElementById("create-new-board").style.display="flex";
    x=document.getElementById("overlay").style.display="block";
}*/
function Hide(){
    var x;
         x=document.getElementById('task-name').value = '';
         x=document.getElementById('task-description').value = '';
         x=document.getElementById('task-status').value = '';
    var y ;
    
    y=document.getElementById("create-new-task-block").style.display="none";
    y=document.getElementById("overlay").style.display="none";
}
function delete_task(el){
   /*var divId = document.getElementById('todo');*/
    var childId = document.getElementById(el); 
		/*divId.removeChild(childId);*/
        childId.parentNode.removeChild(childId);
      }
/*ADD NEW BOARD
function HideBoard(){
    var y ;
    
    y=document.getElementById("create-new-board").style.display="none";
    y=document.getElementById("overlay").style.display="none";

}*/

function openmenu(){
    var z;

    z=document.getElementById("myDropdown").style.display="flex";
    
}

function closemenu(){
    var m;

    m=document.getElementById("myDropdown").style.display="none";
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


// const dragtask = document.querySelector('.task');
// const block = document.getElementsByClassName('kanban-block');

// dragtask.addEventListener('dragstart', (e)=> {
//     console.log('Dragstart triggered');
//     e.target.className += ' hold';
//     setTimeout(()=>{
//         e.target.className = 'taskhide';
//     }, 0);
// });

// for( i of block){
//     i.addEventListener('drop',(e)=>{
//         console.log('Drop triggered');
//         e.target.append(dragtask);
//     });
// }



function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.currentTarget.appendChild(document.getElementById(data));
}
function pushData()
 {
    var new_field=[];
     // get value from the input text
     var status_option = document.getElementById('task-status').value;
     var task_name = document.getElementById('task-name').value;
     // append data to the array
     new_field.push(task_name);
     
     if((task_name.localeCompare("")!=0)&&(status_option.localeCompare("")!=0))
    {for(i = 0; i < new_field.length; i++)
     {
         
         const el = document.createElement('div');
         el.setAttribute("class","task");
         el.setAttribute("disabled", "");

         el.textContent = new_field[i];
         if(status_option.localeCompare("todo")==0)
         {
            var todo = document.getElementById("todo");
            var taskName = document.getElementById("task-name").value;
            todo.innerHTML += `<div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
                <span>${taskName}</span>
                <img src="images/closebutton.png" class="closebutton2" id="${taskName.toLowerCase().split(" ").join("")}" onclick="delete_task(this.id)">
            </div>
            `
             
         }
         else if(status_option.localeCompare("inprogress")==0)
         {
            var inprogress = document.getElementById("inprogress");
            var taskName = document.getElementById("task-name").value;
            inprogress.innerHTML += `<div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
                <span>${taskName}</span>
                <img src="images/closebutton.png" class="closebutton2" id="${taskName.toLowerCase().split(" ").join("")}" onclick="delete_task(this.id)">
            </div>
            `
         }
         else
         {
            var done = document.getElementById("done");
            var taskName = document.getElementById("task-name").value;
            done.innerHTML += `<div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
                <span>${taskName}</span>
                <img src="images/closebutton.png" class="closebutton2" id="${taskName.toLowerCase().split(" ").join("")}" onclick="delete_task(this.id)">
            </div>
            `
         }
         var x;
         x=document.getElementById('task-name').value = '';
         x=document.getElementById('task-description').value = '';
         x=document.getElementById('task-status').value = '';
              
         
         var y ;
    
    y=document.getElementById("create-new-task-block").style.display="none";
    y=document.getElementById("overlay").style.display="none";
        
    }
    
    }
   
        // append data to the array
     
    
    
     /*var makeBox = function(){
        var startMousePos = {x:0, y:0}
      var startDivPos = {x:0, y:0}
      var dragging = false;

      el.onmousedown = function(event) {
        startMousePos.x = event.clientX;
        startMousePos.y = event.clientY;
  
        startDivPos.x = el.offsetLeft;
        startDivPos.y = el.offsetTop;
  
        dragging = true;
      }
      el.onmousemove = function(event) {
        if(dragging){
          deltaX = event.clientX - startMousePos.x;
          deltaY = event.clientY - startMousePos.y;
  
          el.style.left = (deltaX + startDivPos.x) + "px";
          el.style.top = (deltaY + startDivPos.y) + "px";
        }
      }
  
      el.onmouseup = function(event) {
        dragging = false; 
      }
    }
    el.onclick=makeBox;*/
   /* const source = document.getElementById("fasna");
source.addEventListener("dragstart", (event) => {
  // make it half transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
});*/
     
} 
/* ADD NEW BOARD
function pushBoard(){

    var new_field=[];
     // get value from the input text
     var board_name = document.getElementById('board-name').value;
     // append data to the array
     new_field.push(board_name);
     if(board_name.localeCompare("")!=0)
    {for(i = 0; i < new_field.length; i++)
     {
         
        const el = document.createElement('li');
        
         el.setAttribute("class","tasklist li");
         el.setAttribute("disabled", "");
         var t = document.createTextNode(new_field[i]);
         el.appendChild(t);
         document.getElementById("tasklist").appendChild(el);
         
           /* var board_list = document.getElementById("tasklist");
            var taskName = document.getElementById("board-name").value;
            todo.innerHTML += `<div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
                <span>${taskName}</span>
            </div>
            `
             */
         /*const image=document.createElement('img');
         image.setAttribute("class","tasklogo");
         image.setAttribute("src","images/tasklogo.jpg")
         document.getElementById("tasklist").appendChild(image);
         }
    var x;
    x=document.getElementById('board_name').value = '';
    var y ;

y=document.getElementById("create-new-board").style.display="none";
y=document.getElementById("overlay").style.display="none";
   
}*/
 function editTask(){
    var y;
    y=document.getElementById('task-name').value = '';
    y=document.getElementById('task-description').value = '';
    y=document.getElementById('task-status').value = '';
    
 }
 /*
 ADD NEW BOARD
 function editBoard(){
    var y;
    y=document.getElementById('board-name').value = '';
    
 }*/


/*function saveTask(){
    // var saveButton = document.getElementById("save-button");
    // var editButton = document.getElementById("edit-button");
    // if (saveButton.style.display === "none") {
    //     saveButton.style.display = "block";
    //     editButton.style.display = "none";
    // } else{
    //     saveButton.style.display = "none";
    //     editButton.style.display = "block";
    // }

    var todo = document.getElementById("todo");
    var taskName = document.getElementById("task-name").value;
    todo.innerHTML += `
    <div class="task" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
        <span>${taskName}</span>
    </div>
    `
}*/

/*------------------------------ */


// Changing name of the board

function openchangetitle(){
    var x ;
    
    x=document.getElementById("changename").style.display="flex";
    x=document.getElementById("overlay2").style.display="block";
}

function closechangetitle(){
    var x ;
    
    x=document.getElementById("changename").style.display="none";
    
}

const txt1= document.getElementById('changetitle');

const title1= document.getElementById('task_title');

function newchange(){
  title1.innerHTML=txt1.value;
  var x ;
  x=document.getElementById("changename").style.display="none";
  x=document.getElementById("myDropdown").style.display="none";
}  

/*------------------------------ */



// DARK MODE TOGGLE


function darkmode() {
  // var element=document.body;
  // element.classList.toggle("dark-mode");

  var x;
  // for top panel
  x=document.getElementById("top_panel");
  x.classList.toggle("toppaneldarkmode");

  // for left panel
  x=document.getElementById("leftpanel");
  x.classList.toggle("toppaneldarkmode");

  // for main box
  x=document.getElementById("box");
  x.classList.toggle("toppaneldarkmode");
  
}

/*------------------------------ */