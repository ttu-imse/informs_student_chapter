// script.js
const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');
const loginError = document.getElementById('login-error');

const datesElement = document.getElementById('dates');
const currentMonthElement = document.getElementById('current-month');
const prevMonthButton = document.getElementById('prev-month');
const nextMonthButton = document.getElementById('next-month');
const modal = document.getElementById('modal');
const modalDate = document.getElementById('modal-date');
const activityInput = document.getElementById('activity-input');
const saveButton = document.getElementById('save-activity');
const closeModal = document.querySelector('.close');

let currentDate = new Date();
let activities = JSON.parse(localStorage.getItem('activities')) || {};
let isLoggedIn = false;

// Login Logic
loginButton.addEventListener('click', () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'adm' && password === '123') {
        isLoggedIn = true;
        loginForm.style.display = 'none';
        renderCalendar();
    } else {
        loginError.style.display = 'block';
    }
});

// Calendar Logic
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    currentMonthElement.textContent = `${new Intl.DateTimeFormat('en-US', { month: 'long' }).format(currentDate)} ${year}`;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDay = firstDay.getDay();

    datesElement.innerHTML = '';

    for (let i = 0; i < startDay; i++) {
        datesElement.innerHTML += `<div></div>`;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const dateKey = `${year}-${month + 1}-${i}`;
        const activity = activities[dateKey] || '';
        datesElement.innerHTML += `
            <div data-date="${dateKey}">
                ${i}<br>${activity}
                <button class="edit-button" style="display: ${isLoggedIn ? 'block' : 'none'};">Edit</button>
            </div>
        `;
    }

    document.querySelectorAll('.dates div').forEach(day => {
        if (day.dataset.date) {
            day.addEventListener('click', () => {
                if (isLoggedIn) {
                    openModal(day.dataset.date);
                }
            });
        }
    });
}

function openModal(date) {
    modalDate.textContent = `Activities for ${date}`;
    activityInput.value = activities[date] || '';
    modal.style.display = 'block';
}

function saveActivity() {
    const date = modalDate.textContent.replace('Activities for ', '');
    activities[date] = activityInput.value;
    localStorage.setItem('activities', JSON.stringify(activities));
    modal.style.display = 'none';
    renderCalendar();
}

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

saveButton.addEventListener('click', saveActivity);

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();