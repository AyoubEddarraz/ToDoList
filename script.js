// Declaration of Varibales 

let task = document.getElementById("task"),
    sound1 = document.getElementById("sound1"),
    timeTask = document.getElementById("timeTask"),
    addTask = document.getElementById("addTask"),
    empty = document.getElementById("empty"),
    infoTask = document.querySelector(".info-task"),
    save = document.getElementById("save"),
    cancel = document.getElementById("cancel"),
    complatedTaskIcone = document.getElementById("complatedTaskIcone"),
    numberOfTask = document.getElementById("numberOfTask"),
    completedTask = document.getElementById("completedTask"),
    Showexsiste = document.getElementById("Showexsiste"),
    daleteTask = document.getElementById("daleteTask"),
    showtaskcontainer = document.querySelector(".show-task-container");

// End Declaration of Varibales 


// Array From complted Task
let iconeComplted = document.querySelectorAll("#complatedTaskIcone");
let iconeCompltedArray = Array.from(iconeComplted);
// Array from Dalete Button for the Remove the Task
let btnDalete = document.querySelectorAll("#daleteTask");
let arrayFromspanDalete = Array.from(btnDalete);
// All Task
let AllTask = [];


// time option 

let createOption = (() => {
    for(let i = 1 ; i <= 360 ; i++){
        let option = document.createElement("option");
        option.setAttribute("value" , i);
        option.textContent = (i + " minutes");
        timeTask.appendChild(option);
    }
})();

// End time option 

// Creation the Task Function 

let creationTask = () => {

    // Create Element
    let taskDiv = document.createElement("div"),
        span1 = document.createElement("span"),
        span2 = document.createElement("span"),
        span3 = document.createElement("span"),
        icone = document.createElement("i"),
        taskParagraphe = document.createElement("p");

    // add text Node
    let text1 = document.createTextNode("delete"),
        text2 = document.createTextNode(task.value);
    
    // Add Class And Id For Element
    taskDiv.classList.add("task");
    span3.setAttribute("id" , "daleteTask");
    icone.classList.add("fas" , "fa-check" , "icone");

    // Append Child
    icone.setAttribute("style" , "color: #4cd137");
    taskDiv.appendChild(span1);
    span1.setAttribute("id" , "complatedTaskIcone");
    span1.appendChild(icone);
    taskDiv.appendChild(span2);
    taskParagraphe.appendChild(text2);
    span2.appendChild(taskParagraphe);
    span3.appendChild(text1);
    taskDiv.appendChild(span3);

    showtaskcontainer.appendChild(taskDiv);

    arrayFromspanDalete.push(taskDiv.children[2]);

    iconeCompltedArray.push(taskDiv.children[0]);


};


// show Info Task

addTask.addEventListener('click' , () => {
    infoTask.classList.add("showAsk");
})

// End show Info Task

// Add task (save)

save.addEventListener('click' , () => {

    // Check Element If You Exsiste
    let z = AllTask.indexOf(task.value);

    if(task.value != ''){
        if(z == -1){
            AllTask.push(task.value);
            creationTask();
            task.value = "";
            infoTask.classList.remove("showAsk");
            dalete();
            NumberOfTaskFun();
            completedTaskFun();

            if(timeTask.value != "not"){
                timeRappelle(parseInt(timeTask.value));
            }else{
                console.log("Rappelle Not Active");
            }

        }else{
            setTimeout(function () {
                Showexsiste.classList.add("showmsgNotExsiste");
                setTimeout(function () {
                    Showexsiste.classList.remove("showmsgNotExsiste");
                } , 4000);
            } , 0);
        }
    }else{
        setTimeout(function () {
            empty.classList.toggle("showmsgNotExsiste");
            setTimeout(function () {
                empty.classList.remove("showmsgNotExsiste");
            } , 4000);
        } , 0);
    }
})

// End Add task (save)

// cancel add task (save)

cancel.addEventListener('click' , () => {
    infoTask.classList.remove("showAsk");
})

// End cancel Add task (save)

// Remove task 

let dalete = () => {
    for(let z = 0 ; z < arrayFromspanDalete.length ; z++){
        arrayFromspanDalete[z].onclick = function () {
            arrayFromspanDalete[z].parentElement.remove();
            let x = arrayFromspanDalete[z].parentElement.children[1].children[0].textContent;
            let f = AllTask.indexOf(x);
            AllTask.splice(f , 1);
            NumberOfTaskFun();
            finishTaskFun();
        }
    }
}

// End Remove task 

// Number Of Task

let NumberOfTaskFun = () => {
    let numberTask = showtaskcontainer.children.length;
    numberOfTask.textContent = numberTask;
}

// End Number Of Task

// complted Task

let completedTaskFun = () => {
    for(let n = 0 ; n < iconeCompltedArray.length ; n++){
        iconeCompltedArray[n].onclick = function () {
            iconeCompltedArray[n].parentElement.children[1].classList.toggle("complatedTask");
            iconeCompltedArray[n].parentElement.children[0].children[0].classList.toggle("icone");
            // finish task
            finishTaskFun();
            sound1.play();
        }
    }
}

// End complted Task

// Setinterval Time Clock

let sound2 = document.getElementById("sound2"),
    iconeVolume = document.getElementById("iconeVolume"),
    rappelleTask = document.querySelector(".rappelleTask"),
    closeRappelle = document.getElementById("closeRappelle");

let timeRappelle = (time) => {
    let rappelleAsk = setTimeout(function () {
        rappelleTask.classList.add("showAsk");
        sound2.play();
    } , time * 1000 * 60);
}

closeRappelle.addEventListener('click' , () => {
    rappelleTask.classList.remove("showAsk");
    sound2.pause();
})

// End Setinterval Time Clock

// Complated Task

let finishTaskFun = () => {
    let taskFinish = document.querySelectorAll(".complatedTask").length;
    completedTask.textContent = (taskFinish);
}

// End Complated Task


// Settings Box Section

let settingsBox = document.querySelector(".settingsBox"),
    iconeSettingsBox = document.querySelector(".iconeSettingsBox");

iconeSettingsBox.addEventListener('click' , () => {
    settingsBox.classList.toggle('settingsBoxShow');
    settingsBox.children[0].children[0].classList.toggle("fa-spin");
})


// End Settings Box Section

// Change Color 

let colorNow = document.getElementById("ChangeColor");
let colorNow2 = document.getElementById("ChangeColor2");

colorNow.addEventListener('click' , () => {
    document.body.style.background = "black";
})

colorNow2.addEventListener('click' , () => {
    document.body.style.background = "white";
})

// End Change Color 