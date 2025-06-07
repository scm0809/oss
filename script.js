document.addEventListener("DOMContentLoaded", () => {
    loadDDays();
});

function calculateDDay(targetDate) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    targetDate.setHours(0, 0, 0, 0);

    const diffTime = targetDate - today;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
        return `D-${diffDays}`;
    } else if (diffDays === 0) {
        return "D-Day";
    } else {
        return `D+${Math.abs(diffDays)}`;
    }
}

function addDDay() {
    const title = document.getElementById("titleInput").value.trim();
    const dateValue = document.getElementById("dateInput").value;

    if (!title || !dateValue) {
        alert("제목과 날짜를 모두 입력하세요.");
        return;
    }

    const ddayItem = {
        id: Date.now(),
        title: title,
        date: dateValue
    };

    saveDDay(ddayItem);
    renderDDay(ddayItem);

    document.getElementById("titleInput").value = "";
    document.getElementById("dateInput").value = "";
}

function saveDDay(ddayItem) {
    let ddayList = JSON.parse(localStorage.getItem("ddayList")) || [];
    ddayList.push(ddayItem);
    localStorage.setItem("ddayList", JSON.stringify(ddayList));
}

function loadDDays() {
    let ddayList = JSON.parse(localStorage.getItem("ddayList")) || [];
    ddayList.forEach(ddayItem => {
        renderDDay(ddayItem);
    });
}

function renderDDay(ddayItem) {
    const ddayListElement = document.getElementById("ddayList");
    const li = document.createElement("li");

    const targetDate = new Date(ddayItem.date);
    const ddayText = calculateDDay(targetDate);

    li.innerHTML = `
        <span>${ddayItem.title} | ${ddayText} (${ddayItem.date})</span>
        <button onclick="deleteDDay(${ddayItem.id})">삭제</button>
    `;
    li.setAttribute("data-id", ddayItem.id);
    ddayListElement.appendChild(li);
}

function deleteDDay(id) {
    let ddayList = JSON.parse(localStorage.getItem("ddayList")) || [];
    ddayList = ddayList.filter(item => item.id !== id);
    localStorage.setItem("ddayList", JSON.stringify(ddayList));

    const li = document.querySelector(`#ddayList li[data-id="${id}"]`);
    if (li) {
        li.remove();
    }
}



