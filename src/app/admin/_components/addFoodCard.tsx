// Define a type for Todo items
type Todo = {
  name: string;
  status: "TODO" | "DONE" | "IN_PROGRESS" | "BLOCKED";
};

// const STATUS: "TODO" | "DONE" = "TODO" || "DONE";

let todos: Todo[] = [];

// todo add
function addOne(newTodo: Todo): void {
  todos.push(newTodo);
}

// Function to edit the status of a Todo item
function editStatus(
  index: number,
  status: "TODO" | "DONE" | "IN_PROGRESS" | "BLOCKED"
): void {
  let item = todos[index];
  item.status = status;
}

// Function to edit the name of a Todo item
function editName(index: number, name: string): void {
  let item = todos[index];
  item.name = name;
  render();
}

// Function to delete one Todo item
function deleteOne(index: number): void {
  console.log(index);
  todos = todos.filter((_, i) => i !== index);
  render();
}

// Function to delete all Todo items
function deleteAll(): void {
  todos = [];
  render();
}

// Function to count DONE Todos
function countDone(): number {
  return todos.filter((item) => item.status === "DONE").length;
}

// Function to render the Todo application UI
function render(): void {
  document.querySelector("#todos")!.innerHTML = "";
  document.querySelector("#inprogress")!.innerHTML = "";
  document.querySelector("#done")!.innerHTML = "";
  document.querySelector("#blocked")!.innerHTML = "";

  let todoCounter = 0;
  let inProgressCounter = 0;
  let doneCounter = 0;
  let blockedCounter = 0;

  todos.forEach((item, i) => {
    const todolist = document.querySelector(`#${item.status}`)!;

    // Increment counters based on status
    switch (item.status) {
      case "TODO":
        todoCounter++;
        break;
      case "IN_PROGRESS":
        inProgressCounter++;
        break;
      case "DONE":
        doneCounter++;
        break;
      case "BLOCKED":
        blockedCounter++;
        break;
    }

    // Create task item
    const element = document.createElement("div");
    element.classList.add("todo-item");

    // Create task name
    const titleEl = document.createElement("p");
    titleEl.style.color = "#ffffff";
    titleEl.innerText = item.name;

    // Create edit button
    const btnEl = document.createElement("i");
    btnEl.classList.add("fa-solid", "fa-pen");
    btnEl.onclick = function () {
      const newName = prompt("Enter new name");
      if (newName) {
        editName(i, newName);
      }
    };

    // Create delete button
    const btnDelete = document.createElement("i");
    btnDelete.classList.add("fa-solid", "fa-trash");
    btnDelete.onclick = function () {
      deleteOne(i);
    };

    element.appendChild(titleEl);
    element.appendChild(btnEl);
    element.appendChild(btnDelete);
    todolist.appendChild(element);
  });

  document.getElementById(
    "todoCounter"
  )!.innerHTML = `<span class="counter">${todoCounter}</span>`;
  document.getElementById(
    "inProgressCounter"
  )!.innerHTML = `<span class="counter">${inProgressCounter}</span>`;
  document.getElementById(
    "doneCounter"
  )!.innerHTML = `<span class="counter">${doneCounter}</span>`;
  document.getElementById(
    "blockedCounter"
  )!.innerHTML = `<span class="counter">${blockedCounter}</span>`;
}

// Function to show the add Todo modal
function addTodo(): void {
  const modal = document.querySelector("#modal")!;
  //   modal.style.display = "block";
}

// Function to save a new Todo
function saveTodo(): void {
  const inputValue = (document.getElementById("taskName") as HTMLInputElement)
    .value;
  const statusValue = (
    document.getElementById("task-status") as HTMLSelectElement
  ).value as "TODO" | "DONE" | "IN_PROGRESS" | "BLOCKED";

  todos.push({
    name: inputValue,
    status: statusValue,
  });

  const modal = document.querySelector("#modal")!;
  //   modal.style.display = "none";
  render();
}

// Function to log the counter variable
function meter(): void {
  console.log(todos.length);
}
