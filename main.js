var config = {
  apiKey: "AIzaSyAWsbCfCDn3POZpns9P1haEQHAaRYHJvwQ",
  authDomain: "project-practice-ec42f.firebaseapp.com",
  databaseURL: "https://project-practice-ec42f.firebaseio.com",
  projectId: "project-practice-ec42f",
  storageBucket: "",
  messagingSenderId: "899501093845"
};
firebase.initializeApp(config);

const taskRef = firebase.database().ref('yourTasks');

document.getElementById('form').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault();
    let task = getInputVal('task');
    let name = getInputVal('name');
    let date = getInputVal('date');
    let colour = getInputVal('colour');
    // console.log(colour);
    
    saveInput(task, name, date, colour);
    document.getElementById('task').value = '';
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    // console.log(task, name)
    
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveInput(task, name, date, colour){
    let savedTasks = taskRef.push();
    savedTasks.set({
        task:task,
        name:name,
        date:date,
        colour:colour
    })
}


taskRef.on("child_added", snap => {
//     //grab data from Firebase
    const showTask = snap.child("task").val();
    const showName = snap.child("name").val();
    const showDate = snap.child("date").val();
    const getColour = snap.child("colour").val();


    //create elements based on FB data
    const taskList = document.querySelector('.messages');

    const newDate = document.createElement('p');
    const newHead = document.createElement('h3');
    const newBody = document.createElement('p');
    

    //add Data to page

    
    // THESE THREE WORK
    newDate.textContent = `${showDate}`;
    newHead.textContent = `${showName}`;
    newBody.textContent = `${showTask}`;
    // NOT SURE WHAT THIS WAS
    // taskList.appendChild(newTask);

    // THIS IS A TEST:

    $('.messages').prepend(`<div id="entry"><p class="date">${showDate}</p> <h3>${showName}</h3><p class="entryBody">${showTask}</p></div>`);



    // taskList.appendChild(newDate);
    // taskList.appendChild(newHead);
    // taskList.appendChild(newBody);
   
    
})

// function newColour(){
//     $('.entry').css('color', 'red');
// }

// let selectColor = $("#colour").val();
// console.log(selectColor);


// function changeColour(){
//     const color = document.getElementById("colour").value;
//     document.getElementById('entry').style.backgroundColor=color;
// }

// document.getElementById("post").addEventListener('click', changeColour);
// console.log('click');

// function changeClass(){ 
//    $('.messages').on('click', 'entry', function(){
//        console.log('esther');
//    })
// }
$('#write').click(function(){
    $('form').toggleClass('form-hide');
    
})


$(function(){
    // changeClass();
    // changeColour();
    // newColour();
    // makeTable();
})
    
