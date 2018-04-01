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
    
    saveInput(task, name, date);
    document.getElementById('task').value = '';
    document.getElementById('name').value = '';
    document.getElementById('date').value = '';
    
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveInput(task, name, date){
    let savedTasks = taskRef.push();
    savedTasks.set({
        task:task,
        name:name,
        date:date   
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

    //DISPLAYING ENTRIES

    $(".messages").prepend(`<div id="entry">
            <div>
                <p class="date">${showDate}</p> 
                <h3>${showName}</h3>
                <p class="entryBody">${showTask}</p>
            </div>
                <div><input type="checkbox" id="remove" name="remove"><label for="remove" class="removeMe">Remove</label></div>
            </div>`);

    
})


// $('.messages').on('click', 'input', function(id){
//     const itemRef = firebase.database().ref(`/yourTask/${id}`);
//     itemRef.remove();
//     removeItem();
//     console.log(removeItem)
// })

$(function(){

})
    
