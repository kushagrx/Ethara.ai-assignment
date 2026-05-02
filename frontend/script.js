const API = "http://localhost:8000/api";

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const res = await fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "dashboard.html";
    } else {
      document.getElementById("msg").innerText = data.msg;
    }
  });
}

const taskList = document.getElementById("taskList");
if (taskList) {
  fetchTasks();
}
async function fetchTasks() {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API}/tasks`, {
    headers: {
      "Authorization": token
    }
  });
  const tasks = await res.json();
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    const isOverdue =
      new Date(task.deadline) < new Date() &&
      task.status !== "done";
    div.innerHTML = `
      <h3>${task.title}</h3>
      <p>Status: ${task.status}</p>
      <p>Deadline: ${task.deadline}</p>
      ${isOverdue ? "<p style='color:red'>Overdue</p>" : ""}
      <button onclick="markDone('${task._id}')">Mark Done</button>
    `;
    taskList.appendChild(div);
  });
}

async function markDone(id) {
  const token = localStorage.getItem("token");
  await fetch(`${API}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": token
    },
    body: JSON.stringify({ status: "done" })
  });
  fetchTasks();
}