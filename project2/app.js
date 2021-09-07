// local reviews data
const reviews = [
    {
      id: 1,
      name: "Skepta",
      job: "Microphone Champion",
      img:
        "https://urbanislandz.com/wp-content/uploads/2021/08/Skepta.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "Frisco",
      job: "The Unfamiliar Stranger",
      img:
        "https://pbs.twimg.com/media/EiHRThrXcAAQ-Sl.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "Jammer",
      job: "Vybe with the Gyaldem",
      img:
        "https://img.redbull.com/images/c_fill,g_auto,w_530,h_795/q_auto,f_auto/redbullcom/2019/06/04/2c459e79-b751-4e1c-90cc-9de7cf3c45d1/jammer-lotm-staircase",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "Jme",
      job: "GRIME MC",
      img:
        "https://cdn.vox-cdn.com/thumbor/bCkHR_BcoXquqFEqDTAorXkjKCw=/0x0:1365x2048/1200x800/filters:focal(759x642:977x860)/cdn.vox-cdn.com/uploads/chorus_image/image/66685760/jme_jordan_hughes.0.jpg",
      text:
        "Since the release of Grime MC, JME has not released anymore albums however he has collaborated numerous times with other Grime Artists in the years of 2020 and 2021.",
    },
  ];

// Select items 
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
})

// show person based on item

function showPerson(person){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < reviews.length + 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    
    showPerson(currentItem);
});