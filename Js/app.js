// const productList = [
//   {
//     id: 0,
//     category: "Skills",
//     img: "Img/css-3.png",
//     title: "CSS 3",
//     description: "More info",
//   },
//   {
//     id: 1,
//     category: "Skills",
//     img: "Img/html-5.png",
//     title: "HTML 5",
//     description: "More info",
//   },
//   {
//     id: 2,
//     category: "Skills",
//     img: "Img/js 3.png",
//     title: "Javascript",
//     description: "More info",
//   },
//   {
//     id: 3,
//     category: "Skills",
//     img: "Img/nodejs.png",
//     title: "Node JS",
//     description: "More info",
//   },
//   {
//     id: 4,
//     category: "Skills",
//     img: "Img/React-icon.png",
//     title: "React",
//     description: "More info",
//   },
//   {
//     id: 5,
//     category: "Skills",
//     img: "Img/TS-typeScript.png",
//     title: "Typescript",
//     description: "More info",
//   },
//   {
//     id: 6,
//     category: "Hobbies",
//     img: "Img/cargando.gif",
//     title: "None",
//     description: "More info",
//   },
//   {
//     id: 7,
//     category: "Hobbies",
//     img: "Img/cargando.gif",
//     title: "None",
//     description: "More info",
//   },
//   {
//     id: 8,
//     category: "Hobbies",
//     img: "Img/cargando.gif",
//     title: "None",
//     description: "More info",
//   },
//   {
//     id: 9,
//     category: "Hobbies",
//     img: "Img/cargando.gif",
//     title: "None",
//     description: "More info",
//   },
//   {
//     id: 10,
//     category: "Hobbies",
//     img: "Img/cargando.gif",
//     title: "None",
//     description: "More info",
//   },
//   {
//     id: 11,
//     category: "Hobbies",
//     img: "Img/cargando.gif",
//     title: "None",
//     description: "More info",
//   }
// ];
// const categories = [];

// productList.forEach((product) => {
//   if (!categories.includes(product.category)) {
//     categories.push(product.category);
//   }

// });

// categories.forEach((category) => {
//   const newCards = productList.filter((newCategory) => {
//     return newCategory.category === category;
//   });
//   createCategories(newCards)
// });

// function createCategories(cards) {
//   const section = document.createElement("section");
//   section.classList.add("section-skills-Hobbies");

//   section.innerHTML += `
//      <div class="cards-container">${createCards(cards)}</div>
//   `;

//   const main = document.querySelector("main");
//   let sectionAboutMe = main.childNodes[3];

//   main.insertBefore(section, sectionAboutMe.nextSibling);
// }

// function createCards(newCards) {
//   const newCard = newCards.map((card) => {
//     return `
//           <div class="card-body">
//             <img class="card-img-top" src="${card.img}" alt="" />
//             <div class="card-text">
//               <h4 class="card-title">${card.title}</h4>
//               <p class="card-text-p">${card.description}</p>
//             </div>
//           </div>

// `;
//   });
//   return newCard.join('');
// }


const btnLeft1 = document.querySelector("#arrow-left-1");
const btnRight1 = document.querySelector("#arrow-right-1");
const slider1 = document.querySelectorAll("#slider-1");

slider1.forEach((slider) => {
  let sliderSection = document.querySelectorAll(".card-imagen-1");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function next() {
    let sliderSectionFirst = document.querySelectorAll(".card-imagen-1")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  function previous() {
    let sliderSection = document.querySelectorAll(".card-imagen-1");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  btnRight1.addEventListener("click", () => {
    next();
  });

  btnLeft1.addEventListener("click", () => {
    previous();
  });

  setInterval(() => {
    previous();
  }, 4000);
});


const btnLeft2 = document.querySelector("#arrow-left-2");
const btnRight2 = document.querySelector("#arrow-right-2");
const slider2 = document.querySelectorAll("#slider-2");


slider2.forEach((slider) => {
  let sliderSection = document.querySelectorAll(".card-imagen-2");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function next() {
    let sliderSectionFirst = document.querySelectorAll(".card-imagen-2")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  function previous() {
    let sliderSection = document.querySelectorAll(".card-imagen-2");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  btnRight2.addEventListener("click", () => {
    next();
  });

  btnLeft2.addEventListener("click", () => {
    previous();
  });

  setInterval(() => {
    next();
  }, 4000);
});

const btnLeft3 = document.querySelector("#arrow-left-3");
const btnRight3 = document.querySelector("#arrow-right-3");
const slider3 = document.querySelectorAll("#slider-3");

slider3.forEach((slider) => {
  let sliderSection = document.querySelectorAll(".card-imagen-3");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.insertAdjacentElement("afterbegin", sliderSectionLast);

  function next() {
    let sliderSectionFirst = document.querySelectorAll(".card-imagen-3")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  function previous() {
    let sliderSection = document.querySelectorAll(".card-imagen-3");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionLast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  btnRight3.addEventListener("click", () => {
    next();
  });

  btnLeft3.addEventListener("click", () => {
    previous();
  });

  setInterval(() => {
    previous();
  }, 4000);
});


// Scroll-Header  \\
let navBarContainer = document.querySelector(".navbar-container");
let navBarItemContainer = document.querySelector(".circle-container");
let navBarItemImagen = document.getElementById("mi-imagen");
let logo = document.getElementById("img-logo");
const header = document.getElementById("header");
const btnNavOpenClosed = document.querySelector(".btn-open-menu");

window.addEventListener("scroll", () => {
  let scrollPosition = window.scrollY;
  let screenWidth = window.screenX;
  console.log(screenWidth);
  if (scrollPosition > 1200) {
    navBarItemImagen.style.display = "flex";
    navBarContainer.classList.remove("navbar-container");
    navBarContainer.classList.add("navbar-container-2");

    navBarItemContainer.classList.remove("circle-container");
    navBarItemContainer.classList.add("navbar-item-container");
    header.style.display = "flex";
    logo.style.display = "unset";
  } else {
    navBarItemImagen.style.display = "none";
    navBarContainer.classList.remove("navbar-container-2");
    navBarContainer.classList.add("navbar-container");

    navBarItemContainer.classList.remove("navbar-item-container");
    navBarItemContainer.classList.add("circle-container");
    logo.style.display = "none";
    header.style.display = "none";
  }
});

// Navigation Bar button \\
btnNavOpenClosed.addEventListener("click", () => {
  navBarContainer.classList.toggle("navbar-container-visible");
  btnNavOpenClosed.children[0].classList.toggle("bi-list");
  btnNavOpenClosed.children[0].classList.toggle("bi-x-square");
  btnNavOpenClosed.classList.toggle("bi-x-square-clicked");
});
