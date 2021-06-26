// document.getElementById("name").addEventListener("click",function(){
//    // this.style.fontSize="25px";
//   console.log(this.setAttribute("class","inputClick")); 
// })

const date = new Date;
const dated =date.toLocaleDateString();

const mainDate = document.getElementById("date");
console.log(mainDate);
mainDate.append(dated);

const taskArr =[];


let named = document.getElementById("name");
const btn =document.getElementById("btn");
const taskContainer = document.getElementById("taskContainer");


named.focus();








function handleTaskClick(){
   this.classList.toggle("completed"); 
   const taskValue = this.innerText;


   const taskId = this.id.toString();
   for(let i=0; i< taskArr.length; i++){
       const taskObj = taskArr[i];
       if(taskObj.id.toString() === taskId){
           taskObj.isCompleted = !taskObj.isCompleted;
       }
   }
   setTask();
}

function handleRemove(){
    const taskValue = this.innerText;
    const taskId = this.id.toString();
    for(let i=0;i<taskArr.length;i++){
        const taskObj = taskArr[i];
        if(taskObj.id.toString() ===taskId) taskArr.splice(i,1);
    }
    this.remove();
    setTask();
}

function setTask(){
    localStorage.setItem("tasks",JSON.stringify(taskArr));
}

function getTask(){
  let tasks =localStorage.getItem("tasks");
   if(!tasks){
       return;
   }

   tasks = JSON.parse(tasks);
   //console.log(tasks);

   for(index in tasks){
       const taskObj =tasks[index];
       createTask(taskObj.value, taskObj.isCompleted,taskObj.id);  
       taskArr.push(tasks[index]);
   }
}

getTask();

function deleteTask(){
    localStorage.clear();
    taskContainer.remove();
    window.location.reload();
}

const deleted = document.getElementById("delete");
      deleted.addEventListener("click", deleteTask);
   

document.addEventListener("click",function(){
    named.style.fontSize="21px";
    named.style.borderColor="deeppink"
})

function createTask(userInput, isCompleted,taskId){

    const newElement =document.createElement("div");
    newElement.innerText=userInput;

    newElement.setAttribute("id",taskId);
    if(isCompleted)
     newElement.setAttribute("class","task completed"); 
else
newElement.setAttribute("class","task "); 

newElement.addEventListener("click",handleTaskClick);
  newElement.addEventListener("dblclick",handleRemove);

   taskContainer.append(newElement);
}

function addTask(){
    let userInput = named.value;
   
     
    if(userInput.length===0) 
    return    alert("Enter the task"); 
    


const inputLength = userInput.length;
console.log(inputLength);
let count = 0;
for(i=0; i< inputLength;i++){
    if(userInput[i] ==" "){
        count+=1;
    }

}

if(inputLength=== count){
 alert("please enter valid task");
 return
}
 

    let taskId = Math.random();
    let taskObj = {};
    taskObj.value = userInput;
    taskObj.isCompleted = false;
    taskObj.id= taskId;
     taskArr.push(taskObj);
     
     
     setTask();
     createTask(userInput,false, taskId);
     let a = document.getElementById("name").value='';
     taskTime();
     
}
function handleEnter(e){
    if(e.keyCode===13){
        addTask();
    }
   
}

btn.addEventListener("click",addTask);
named.addEventListener("keyup",handleEnter);






// function practise method




function darkMode(){
    let dark = document.getElementById("darkMode")
    dark.style.backgroundColor=" rgb(5, 1, 22)";
    named.style.boxShadow = "1px 1px 20px #aaaaaa";
     btn.style.boxShadow= "1px 1px 20px #aaaaaa";
     deleted.style.boxShadow= "1px 1px 20px #aaaaaa";
     dark.style.color="white";
}

const time = new Date;
const realTime = time.getHours();
console.log(realTime);




if(realTime < 24 && realTime >17 || realTime >= 0 && realTime < 7){
     darkMode();    
}








// else if(realTime >= 0 &&realTime <7){
//     console.log("x");
// }




function taskTime(){
    
var fromTime = document.getElementById("hours");
var toTime = document.getElementById("noon");
//console.log(fromTime.value);
var createTime = document.getElementById("createTime");

    let from = fromTime.value;
    let to = toTime.value;
    fromTo = from + to;
    let newDa = document.createElement("div");
      newDa.innerText = fromTo ;

     if(from.length == 0) return;
    let aaa = createTime.append(newDa);
   createTime.style.textAlign="center";
   createTime.style.marginTop="10px";
   createTime.style.marginBottom="10px";
      let fr = document.getElementById("hours").value='';
      let t = document.getElementById("noon").value='';

}

// function example for arguments and parameters


// function bikeWorld(a,b){
//     console.log(a+b);


// }


// function carWorld(){

// let volvo = 10;
// let ferrari = 20;

// console.log(volvo+ferrari); 
// bikeWorld(volvo,ferrari);

// }

// carWorld();


// function hello(name){
//     console.log(`hello ${name}`);
// }

// let abc= prompt("Enter the name")
// hello(abc);


// return function 

// function hello(a,b){
//     let c = a+b;
//     return c;
// }

// let ab = hello(10,20);
// console.log(ab);
// let bc = hello(ab,10);
// console.log(bc);


/ user defined function /

/*
1.switch is also user fedined function eg: switch(){}
2. console.log is also a function(method)
*/


// const someThing = {
//     name: "prakash",
//     age: 22,
//     details: function(a,b,c){
//         address: 344,
//         dd = a+b+c;
//         console.log(dd);
//         return dd;
//     }
// }

// let abcd = someThing.details(10,10,10);
    
// someThing.details(abcd,10,10);


//TODO finding a array position 

//   