function Show(){
    var x ;
    
    x=document.getElementById("create-new-task-block").style.display="flex";
    x=document.getElementById("overlay").style.display="block";
}

function Hide(){
    var y ;
    
    y=document.getElementById("create-new-task-block").style.display="none";
    y=document.getElementById("overlay").style.display="none";
}

function openmenu(){
    var z;

    z=document.getElementById("myDropdown").style.display="flex";
    
}

function closemenu(){
    var m;

    m=document.getElementById("myDropdown").style.display="none";
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

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

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
     
    
     
     for(i = 0; i < new_field.length; i++)
     {
         
         const el = document.createElement('div');
         el.setAttribute("class","task");
         el.setAttribute("disabled", "");
         el.setAttribute("draggable","true");
         /*el.setAttribute("ondragstart","drag(Event)");
        el.ondragstart=drag;*/
        el.addEventListener("dragstart",drag);

         el.textContent = new_field[i];
         if(status_option.localeCompare("todo")==0)
         {
            const box = document.getElementById('todo');
            box.appendChild(el); 
         }
         else if(status_option.localeCompare("inprogress")==0)
         {
            const box = document.getElementById('inprogress');
            box.appendChild(el);
         }
         else
         {
            const box = document.getElementById('done');
            box.appendChild(el);
         }
        // append data to the array
     }
     var m;

     m=document.getElementById("overlay").style.display="none";
     
     
 }   