const task= document.querySelector('.inputTask');
const datetime= document.querySelector('.inputDateTime');
const taskmanager= document.querySelector('.taskManager');

let genITEM= '';

let toDoList= JSON.parse(localStorage.getItem('LLIST'));
if (!toDoList) {
    toDoList = [];
};

let LIST= [];
let LLIST;

renderITEMS();

function renderITEMS(){

    if(toDoList.length!=0){
        for(i=0; i<= toDoList.length-1; i++){
            taskList= toDoList[i];
            displayTask= taskList.task;
            displayDateTime= taskList.datetime;
            LIST= toDoList.slice();
            localStorage.setItem('LLIST', JSON.stringify(LIST));
            console.log(LLIST);
    
    
            genHTML=`<div class="taskItemHolder"><div class="taskITEM">${displayTask}</div><div class="taskITEM">${displayDateTime}</div><button class="deleteITEM" onclick="deleteTask(${i});
            ">Remove<button></div>`;
            console.log(genHTML);
            genITEM+= genHTML;
    
            taskmanager.innerHTML= `${genITEM}`;
        }

    }
    else{
        taskmanager.innerHTML= ``;
        JSON.parse(localStorage.removeItem('LLIST'));

    }
   
}


function createTask(){
    myTask= task.value;
    myDateTime= datetime.value;

    task.value= '';
    
    console.log(myTask);
    console.log(myDateTime);

    const toDoObj={};

    toDoObj.task= myTask;
    toDoObj.datetime= myDateTime;

    console.log(toDoObj)

    toDoList.push(toDoObj);

    let genITEM= ``;

    if(toDoList.length!=0){
        for(i=0; i<= toDoList.length-1; i++){
            taskList= toDoList[i];
            displayTask= taskList.task;
            displayDateTime= taskList.datetime;
            LIST= toDoList.slice();
            localStorage.setItem('LLIST', JSON.stringify(LIST));
            console.log(LLIST);
    
    
            genHTML=`<div class="taskItemHolder"><div class="taskITEM">${displayTask}</div><div class="taskITEM">${displayDateTime}</div><button class="deleteITEM" onclick="deleteTask(${i});
            ">Remove<button></div>`;
            console.log(genHTML);
            genITEM+= genHTML;
    
            taskmanager.innerHTML= `${genITEM}`;
        }

    }
    else{
        taskmanager.innerHTML= ``;
        JSON.parse(localStorage.removeItem('LLIST'));

    }
   
}


function deleteTask(index){
    console.log(index);
    toDoList.splice(index, 1);
    JSON.parse(localStorage.getItem('LLIST')).splice(index, 1);
    console.log(LLIST);
    genITEM= ``;
    renderITEMS();

    // console.log(toDoList);
}

