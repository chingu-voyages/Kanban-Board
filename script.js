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