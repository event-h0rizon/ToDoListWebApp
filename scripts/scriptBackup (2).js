const task= document.querySelector('.inputTask');
const datetime= document.querySelector('.inputDateTime');
const taskmanager= document.querySelector('.taskManager');


const toDoList= [];


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

    let genITEM= '';

    for(i=0; i< toDoList.length; i++){
        taskList= toDoList[i];
        displayTask= taskList.task;
        displayDateTime= taskList.datetime;


        genHTML=`<div class="taskItemHolder"><div class="taskITEM">${displayTask}</div><div class="taskITEM">${displayDateTime}</div></div>`;
        console.log(genHTML);
        genITEM+= genHTML;

        taskmanager.innerHTML= `${genITEM}`;



        // taskList.task= 
        // taskList.datetime=
    }

}

