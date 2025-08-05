
// Simple language/dark mode toggle placeholders
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("dark-toggle")?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});

// Login Logic
function studentLogin() {
  const users = ['Amanuel Tolessa', 'Zenab Fikradin', 'Hunde Dereje', 'Abakabegna Teshome', 'Israel Mengistu', 'Marsimoi Ababe', 'Latera Kefalew'];
  const name = document.getElementById('studentName').value.trim();
  if (users.includes(name)) {
    localStorage.setItem("studentName", name);
    window.location.href = "student-dashboard.html";
  } else {
    alert("Student not found");
  }
}

function adminLogin() {
  const u = document.getElementById('username').value;
  const p = document.getElementById('password').value;
  if (u === "ONESMOS" && p === "@266234300") {
    window.location.href = "admin-dashboard.html";
  } else {
    alert("Invalid admin credentials");
  }
}

// Grades Rendering
function loadGrades() {
  const student = localStorage.getItem("studentName") || "Unknown Student";
  document.getElementById("student-name").innerText = student;
  const grades = [
    { subject: "Math", m1: 18, m2: 19, final: 50 },
    { subject: "Biology", m1: 15, m2: 17, final: 45 },
    { subject: "Chemistry", m1: 16, m2: 18, final: 42 }
  ];
  const tbody = document.getElementById("grades");
  grades.forEach(g => {
    const avg = g.m1 + g.m2 + g.final;
    const tr = `<tr><td>${g.subject}</td><td>${g.m1}</td><td>${g.m2}</td><td>${g.final}</td><td>${avg}</td><td>${avg >= 60 ? "Pass" : "Fail"}</td></tr>`;
    tbody.innerHTML += tr;
  });
}
