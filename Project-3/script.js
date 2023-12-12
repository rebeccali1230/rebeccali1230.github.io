document.getElementById('dateInput').setAttribute('max', new Date().toISOString().split('T')[0]);
document.getElementById('apodForm').addEventListener('click', function(e) {
    e.preventDefault();
    fetchAPOD(selectedDate.value);
});
const showdataDom = document.getElementById("showdata")
let info = {}
const listDom = document.getElementById("list")
const apodDisplayDiv = document.getElementById('apodDisplay');
const titleDom = document.getElementById('title')
const dataDom = document.getElementById('data')
const img = document.getElementById('img');
const mainDom = document.getElementById('main')
const selectedDate = document.getElementById('dateInput');

async function fetchAPOD(date) {
    if(!data){
        return
    }
    const apiKey = 'Xap3ZTcrsUJVaDUZhMG1im1a6Ywt6ai5FpZg3iUf';
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data)
        if (data.media_type === 'image') {
            displayAPOD(data);
            info = data
        } else {
            displayErrorMessage('Received non-image media type');
        }
    } catch (error) {
        console.error('Error fetching APOD:', error);
        displayErrorMessage('Error fetching Astronomy Picture of the Day. Please try again later.');
    }
}

function displayAPOD(data) {
    apodDisplayDiv.style.display = 'flex'; 
    titleDom.innerText = data.title;
    dataDom.innerText = `Date: ${data.date}`;

    if (data.media_type === 'image') {
        img.src = data.url;
        img.alt = data.title;
        img.style.display = ''
        img.style.maxWidth = '100%'; 
        img.style.cursor = 'pointer'; 
        img.addEventListener('click', () => window.open(data.url, '_blank')); // Open the HD image in a new tab on click
    }else{
        img.style.display = 'none'
    }
    mainDom.innerText = data.explanation; 
}    

function displayErrorMessage(message) {
    const apodDisplayDiv = document.getElementById('apodDisplay');
    apodDisplayDiv.innerHTML = `<p class="error">${message}</p>`;
}

let favorites = JSON.parse(localStorage.getItem('favorites')) || {};

Object.keys(favorites).forEach((item,index) => {
        const data = favorites[item];
        const favDiv = document.createElement('li');
        favDiv.innerHTML =`<img src=${data.url} /> <div><div class="title">${data.title}</div><div class="data">${item}</div><button class="del" id="submit${item}" type="submit" >Delete</button></div>`

        listDom.appendChild(favDiv);
        document.getElementById(`submit${item}`).onclick = function () {
            delete favorites[item]
            favDiv.remove()
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    });
function saveToFavorites() {
    const date = info.date;
    favorites[date] = info;
    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

function displayFavorites() {
    if (Object.keys(favorites).length === 0) {
        favoritesSection.innerHTML = '<p>No favorites added yet.</p>';
        return;
    }
    if(Object.keys(favorites).includes(info.data)){
        return;
    }
    const favDiv = document.createElement('li');
    favDiv.innerHTML =`<img src=${info.url} /> <div><div class="title">${info.title}</div><div class="data">${info.date}</div><button class="del" id="submit${info.date}" type="submit" >Delete</button></div>`

    listDom.appendChild(favDiv);
    document.getElementById(`submit${info.date}`).onclick = function () {
        delete favorites[info.date]
        favDiv.remove()
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}
function delDom(index,key) {
    console.log(index,key)
}