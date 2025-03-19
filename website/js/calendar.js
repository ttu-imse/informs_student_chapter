// Import Firebase functions from firebase.js
import { db, doc, getDoc, setDoc, deleteDoc } from './firebase.js';


// DOM Elements
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
        const dateDiv = document.createElement('div');
        dateDiv.dataset.date = dateKey;
        dateDiv.innerHTML = `${i}<br>`;

        // Fetch activity from Firestore
        const docRef = doc(db, 'calendar_activities', dateKey);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    dateDiv.innerHTML += docSnap.data().activity;
                }
            })
            .catch((error) => {
                console.error('Error fetching activity: ', error);
            });

        if (isLoggedIn) {
            dateDiv.innerHTML += `<button class="edit-button">Edit</button>`;
        }

        datesElement.appendChild(dateDiv);
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

// Open Modal
function openModal(date) {
    modalDate.textContent = `Activities for ${date}`;

    // Fetch activity from Firestore
    const docRef = doc(db, 'calendar_activities', date);
    getDoc(docRef)
        .then((docSnap) => {
            if (docSnap.exists()) {
                activityInput.value = docSnap.data().activity;
            } else {
                activityInput.value = '';
            }
        })
        .catch((error) => {
            console.error('Error fetching activity: ', error);
        });

    modal.style.display = 'block';
}

// Save Activity to Firestore
function saveActivity() {
    const date = modalDate.textContent.replace('Activities for ', '');
    const activity = activityInput.value.trim();
    const docRef = doc(db, 'calendar_activities', date);

    if (activity) {
        setDoc(docRef, { activity: activity }).then(() => {
            console.log('Activity saved to Firestore');
            modal.style.display = 'none';
            renderCalendar();
        }).catch((error) => {
            console.error('Error saving activity: ', error);
        });
    } else {
        // If activity is empty, delete the document
        deleteDoc(docRef).then(() => {
            console.log('Activity deleted from Firestore');
            modal.style.display = 'none';
            renderCalendar();
        }).catch((error) => {
            console.error('Error deleting activity: ', error);
        });
    }
}

// Close Modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Save Button Event Listener
saveButton.addEventListener('click', saveActivity);

// Previous Month Button
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

// Next Month Button
nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial render
renderCalendar();