function addTask() {
  // const taskInput = document.getElementById('taskInputId');
  // const taskDiv = document.getElementById('taskId');
  // taskDiv.innerHTML = taskInput.value;
  // taskDiv.className = 'task';
  // taskInput.value = '';
  creatediv();
}

function creatediv() {
  const newdiv = document.createElement('div');
  newdiv.setAttribute('id', Math.random());
  newdiv.className = 'task';
  const taskInput = document.getElementById('taskInputId');
  newdiv.innerHTML = '♡ ' + taskInput.value;
  taskInput.value = '';

  const taskList = document.getElementById('taskList');

  taskList.appendChild(newdiv);

  function completeTask() {
    newdiv.className += ' complete';
    // taskList.removeChild(newdiv);
    // newdiv.remove()
  }

  newdiv.addEventListener('click', completeTask, false);
}

function clearCompleteTasks() {
  document.body.getElementsByClassName('complete');
}
