const taskModal = document.getElementById("exampleModal");

const handleSave = (e) => {
  if (!e) e = window.event;
  e.preventDefault();

  // object to store all the task
  const taskInput = {
    imageUrl: document.getElementById("imageurl").value,
    taskTitle: document.getElementById("tasktitle").value,
    taskType: document.getElementById("tasktype").value,
    taskDescription: document.getElementById("taskdescription").value,
  };

  console.log(taskInput);
};
