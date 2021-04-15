const inp = document.getElementById('todoInp');
const add = document.getElementById('addTodo');
const list = document.getElementById('list')
add.addEventListener('click',(e)=>{
    const textTodo=inp.value;
    const li = document.createElement('li');
    const removebtn = document.createElement('button')
    const editbtn = document.createElement('button')
    if(inp.value === ''){
        alert("Enter something in Todo list");
    }
    else{
        
       
        
        removebtn.innerText = "Remove";
        editbtn.innerText = "Edit";
        removebtn.classList.add('buttonstyle'); 
        editbtn.classList.add('buttonstyle');

                                             //add todo
        li.innerText=textTodo;
                                             //Remove todo        
      removebtn.addEventListener('click',(e)=>{
         list.removeChild(li); 
          e.target.remove();
          editbtn.remove();
    })                                          //edit todo
    editbtn.addEventListener('click',(e)=>{
      

        inp.value = textTodo;
        add.addEventListener('click',(e)=>{
            list.removeChild(li); 
            editbtn.remove();
            removebtn.remove();
        })
        
    }

    )
        list.append(li);
        list.append(removebtn); 
        list.append(editbtn); 
    
        inp.value="";
    }

})