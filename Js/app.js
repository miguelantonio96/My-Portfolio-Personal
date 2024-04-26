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

// let cardTextContainer = document.querySelectorAll(".Alura-container");

// cardTextContainer.forEach(() => {
//   const btnLeft = document.querySelector("#arrow-left");
//   const btnRight = document.querySelector("#arrow-right");
//   const sliders = document.querySelectorAll("#slider");

//   sliders.forEach((slider, index) => {
//     let sliderSection = document.querySelectorAll(`.card-imagen-${index + 1}`);

//     console.log({ sliderSection });
//     let sliderSectionLast = sliderSection[sliderSection.length - 1];
//     slider.insertAdjacentElement("afterbegin", sliderSectionLast);

//     function next() {
//       let sliderSectionFirst = document.querySelectorAll(
//         `.card-imagen-${index + 1}`
//       )[0];
//       slider.style.marginLeft = "-200%";
//       slider.style.transition = "all 0.5s";
//       setTimeout(() => {
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("beforeend", sliderSectionFirst);
//         slider.style.marginLeft = "-100%";
//       }, 500);
//     }

//     function previous() {
//       let sliderSection = document.querySelectorAll(
//         `.card-imagen-${index + 1}`
//       )[0];
//       let sliderSectionLast = sliderSection[sliderSection.length - 1];
//       slider.style.marginLeft = "0";
//       slider.style.transition = "all 0.5s";
//       setTimeout(() => {
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("afterbegin", sliderSectionLast);
//         slider.style.marginLeft = "-100%";
//       }, 500);
//     }

//     btnRight.addEventListener("click", () => {
//       next();
//     });

//     btnLeft.addEventListener("click", () => {
//       previous();
//     });

//     // setInterval(() => {
//     //   next();
//     // }, 4000);
//   });
// });

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
  if (scrollPosition > 1200 && screenWidth < 1307) {
    navBarItemImagen.style.display = "flex";
    navBarContainer.classList.remove("navbar-container");
    navBarContainer.classList.add("navbar-container-2");

    navBarItemContainer.classList.remove("circle-container");
    navBarItemContainer.classList.add("navbar-item-container");
    header.style.display = "flex";
    logo.style.display = "unset";

    if (screenWidth <= 680) {
      navBarContainer.classList.remove("navbar-container-2");
    }
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

btnNavOpenClosed.addEventListener("click", () => {
  navBarContainer.classList.toggle("navbar-container-visible");
  btnNavOpenClosed.children[0].classList.toggle("bi-list");
  btnNavOpenClosed.children[0].classList.toggle("bi-x-square");
});

// window.addEventListener('click', ()=>{
//   if (window.target !== navBarItemContainer){
//     navBarContainer.classList.remove('navbar-container-visible')
//   }

// })
