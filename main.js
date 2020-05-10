const reviews = [
    {
        id: 1,
        name: 'Poseidon',
        job: 'God of sea',
        img: 'images/poseidon.jpg',
        text: '<strong>Power: </strong> 100% <br><strong>Strength: </strong> 100% <br><strong>Speed: </strong> 80% <br><strong>Inteligence: </strong> 80% <br>'
    },
    {
        id: 2,
        name: 'Atena',
        job: 'Goddess of wisdom',
        img: 'images/atena.jpg',
        text: '<strong>Power: </strong> 80% <br><strong>Strength: </strong> 90% <br><strong>Speed: </strong> 90% <br><strong>Inteligence: </strong> 100% <br>'
    },
    {
        id: 3,
        name: 'Apolon',
        job: 'God of beauty',
        img: 'images/apolon.jpg',
        text: '<strong>Power: </strong> 80% <br><strong>Strength: </strong> 80% <br><strong>Speed: </strong> 100% <br><strong>Inteligence: </strong> 80% <br>'
    },
    {
        id: 4,
        name: 'Ares',
        job: 'God of war',
        img: 'images/ares.jpg',
        text: '<strong>Power: </strong> 100% <br><strong>Strength: </strong> 100% <br><strong>Speed: </strong> 100% <br><strong>Inteligence: </strong> 30% <br>'
    },
    {
        id: 5,
        name: 'Artemida',
        job: 'God of hunt',
        img: 'images/artemida.jpg',
        text: '<strong>Power: </strong> 60% <br><strong>Strength: </strong> 70% <br><strong>Speed: </strong> 100% <br><strong>Inteligence: </strong> 100% <br>'
    },
    {
        id: 6,
        name: 'Had',
        job: 'God of dead',
        img: 'images/had.jpg',
        text:'<strong>Power: </strong> 100% <br><strong>Strength: </strong> 90% <br><strong>Speed: </strong> 80% <br><strong>Inteligence: </strong> 90% <br>'
    },
    {
        id: 7,
        name: 'Hera',
        job: 'Goddess of Jelousy',
        img: 'images/hear.jpg',
        text: '<strong>Power: </strong> 70% <br><strong>Strength: </strong> 80% <br><strong>Speed: </strong> 70% <br><strong>Inteligence: </strong> 90% <br>'
    },
    {
        id: 8,
        name: 'Zeus',
        job: 'God of Thunder',
        img: 'images/zeus.jpg',
        text: '<strong>Power: </strong> 100% <br><strong>Strength: </strong> 100% <br><strong>Speed: </strong> 100% <br><strong>Inteligence: </strong> 90% <br>'
    }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')



let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
   showPerson(currentItem);
})



function showPerson(){
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.innerHTML = item.text
}



nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem)
})

prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson()
})