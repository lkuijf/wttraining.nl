// const statNumbers = document.querySelectorAll('.statNumber');
const articles = document.querySelectorAll('article:not(.notClickable)');
const toTopBtn = document.querySelector('#toTop');
const headerWrap = document.querySelector('.headerInnerWrap');
const mainLogo = document.querySelector('.mainLogoWrap img');
const mainLogoInitialHeight = mainLogo.style.height;
const anchors = document.querySelectorAll('.anchorPoint');
const buttons = document.querySelectorAll('.mainNav ul li a');
const burgerMenuLabel = document.querySelector('.burger-label');
const subsribeForm = document.querySelector('.subscriptionForm');
const sfInputEmail = document.querySelector('input[name=Email]');
const sfInputValkuil = document.querySelector('input[name=valkuil]');
const sfInputValstrik = document.querySelector('input[name=valstrik]');
const csrfToken = document.querySelector('meta[name="_token"]').content;
const xhrErrorAlert = document.querySelector('.hideXhrError');
const xhrSuccessAlert = document.querySelector('.hideXhrSuccess');
const faqBoxes = document.querySelectorAll('.faqs > div');

let anchorsInViewport = [];

const heroSlideshowImages = document.querySelectorAll('.contentWrapper .hero .heroImages div picture img');

setArticlesClickable();
initFaqs();
setFaqsToggle();
// upCountNumbers();

setAfterScrollAttributes(); // when page is loaded at some scroll position. scroll event will not fire.

/***** Activate navigation button when anchor is in viewport *************************/
const observerOptionsAnchor = {
    root: null,
    threshold: 0.9 // 1 can sometimes not give the desired result
};
// setTimeout(() => { // using setTimeout for elements that are directly in viewport, so they show the effect
    const observer = new IntersectionObserver(observerAnchorCallback, observerOptionsAnchor);
    anchors.forEach(el => {
        observer.observe(el);
    });
// }, 1);
function observerAnchorCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            anchorsInViewport.push(entry.target.id);
        } else {
            var index = anchorsInViewport.indexOf(entry.target.id);
            if (index !== -1) {
                anchorsInViewport.splice(index, 1);
            }
        }
    });
    setActiveButtons(anchorsInViewport);
}
function setActiveButtons(activeAnchors) {
    if(activeAnchors.length) {
        let alreadyActivated = false;
        buttons.forEach((btnEl, i) => {
            var hash = btnEl.href.substring(btnEl.href.indexOf('#')+1);
            btnEl.classList.remove("active");
            if(activeAnchors.indexOf(hash) !== -1 && !alreadyActivated) {
                btnEl.classList.add("active");
                alreadyActivated = true;
            }
        });
    }
}
/************************************************************************************/

/***** To Top Button *************************/
toTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
});
if(window.scrollY > 800) {
    toTopBtn.classList.add('show');
}
/*********************************************/
/***** When user scrolls *********************/
window.addEventListener("scroll",debounce(function(e){
    setAfterScrollAttributes();
}));
function setAfterScrollAttributes() {
    let fromTop = window.scrollY;
    if(fromTop > 400) {
        toTopBtn.classList.add('show');
    } else {
        toTopBtn.classList.remove('show');
    }
    if(fromTop > 200) {
        mainLogo.classList.add('afterScroll');
        headerWrap.classList.add('afterScroll');
        burgerMenuLabel.classList.add('afterScroll');
   } else {
        mainLogo.classList.remove('afterScroll');
        headerWrap.classList.remove('afterScroll');
        burgerMenuLabel.classList.remove('afterScroll');
    }
}
function debounce(func){
    var timer;
    return function(event){
        if(timer) clearTimeout(timer);
        timer = setTimeout(func,10,event);
    };
}
/*********************************************/
/***** Hero slideshow ************************/
let curIndex = 0;
let imgDuration = 6000;

// console.log(heroSlideshowImages);
function slideShow() {
    curIndex++;
// console.log('_slideShow()');
// console.log(curIndex);
    if (curIndex == heroSlideshowImages.length) {
        curIndex = 0;
        heroSlideshowImages.forEach((element,i) => {
            if(i != 0) {
                element.style.opacity = 0;
            }
        });
    }
    heroSlideshowImages[curIndex].style.opacity = 1;
    if(heroSlideshowImages[curIndex-1]) heroSlideshowImages[curIndex-1].style.opacity = 0;
    setTimeout(slideShow, imgDuration);
}
if(heroSlideshowImages && heroSlideshowImages.length > 1) setTimeout(slideShow, imgDuration);
/*********************************************/
/***** Fade in elements when in viewport *****/
// Beware of user has disabled JS; do not hide elements using CSS
const ctaBtnElms = document.querySelectorAll('.ctaBtnWrap');
const serviceBtns = document.querySelectorAll('.serviceBtnWrap');
const headers = document.querySelectorAll('.contentWrapper h1');
const sectionImages = document.querySelectorAll('.fullw img, .twoColumns img');
const observerOptions = {
    root: null,
    threshold: 0.3
};
function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // entry.target.classList.replace('fadeOut', 'fadeIn');
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translate(0px, 0px)";

            // if(entry.target.classList.contains('imgHolder')) {
            //     entry.target.querySelector('img:first-of-type').style.height = entry.target.querySelector('img:first-of-type').dataset.originalHeight + 'px';
            // }
            
        } else {
            // entry.target.classList.replace('fadeIn', 'fadeOut');
        }
    });
}
ctaBtnElms.forEach(el => {
    el.style.opacity = 0; // Beware of user has disabled JS; do not hide elements using CSS
    el.style.transform = "translate(0px, 50px)";
});
serviceBtns.forEach(el => {
    el.style.opacity = 0; // Beware of user has disabled JS; do not hide elements using CSS
    el.style.transform = "translate(0px, 50px)";
});
headers.forEach(el => {
    el.style.opacity = 0; // Beware of user has disabled JS; do not hide elements using CSS
    el.style.transform = "translate(-50px, 0px)";
});
// sectionImages.forEach(el => {
//     el.onload = function(){
//         this.parentElement.style.height = this.offsetHeight + 'px';
//         this.dataset.originalHeight = this.offsetHeight;
//         this.style.height = 0;
//     }
// });
setTimeout(() => { // using setTimeout for elements that are directly in viewport, so they show the effect
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    ctaBtnElms.forEach(el => {
        el.style.transition = "opacity 0.7s ease-in, transform 0.7s ease-out";
        observer.observe(el);
    });
    serviceBtns.forEach(el => {
        el.style.transition = "opacity 0.7s ease-in, transform 0.7s ease-out";
        observer.observe(el);
    });
    headers.forEach(el => {
        el.style.transition = "opacity 0.7s ease-in, transform 0.7s ease-out";
        observer.observe(el);
    });
    // sectionImages.forEach(el => {
    //     el.style.transition = "height 1.2s ease";
    //     observer.observe(el.parentElement);
    // });
}, 100);
/*************************************************/

var swiperPartner = new Swiper(".partnerSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    // loop: true, // not compatible with slidesPerView
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
    }
});


var swiperTeam = new Swiper(".teamMembersSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    // loop: true, // not compatible with slidesPerView
    // pagination: {
    //     el: '.swiper-pagination-team',
    //     clickable: true,
    //     type: 'bullets',
    // },
    // scrollbar: {
    //     el: '.swiper-scrollbar-team',
    //     draggable: true,
    // },
      navigation: {
        nextEl: '.swiperBtnNextTeam',
        prevEl: '.swiperBtnPrevTeam',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          1120: {
            slidesPerView: 2,
          },
            1460: {
            slidesPerView: 3,
          },
          1760: {
            slidesPerView: 4,
          },
        }
});

var swiperCases = new Swiper(".casesSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    // loop: true, // not compatible with slidesPerView
    // pagination: {
    //     el: '.swiper-pagination-team',
    //     clickable: true,
    //     type: 'bullets',
    // },
    navigation: {
        nextEl: '.swiperBtnNextCases',
        prevEl: '.swiperBtnPrevCases',
    },
    // scrollbar: {
    //     el: '.swiper-scrollbar-cases',
    //     draggable: true,
    //   },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          1120: {
            slidesPerView: 3,
          },
            1460: {
            slidesPerView: 4,
          },
          1760: {
            slidesPerView: 4,
          },
        }
});

var swiperCases = new Swiper(".trainingsSwiper1", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings1',prevEl: '.swiperBtnPrevTrainings1',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper2", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings2',prevEl: '.swiperBtnPrevTrainings2',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper3", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings3',prevEl: '.swiperBtnPrevTrainings3',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper4", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings4',prevEl: '.swiperBtnPrevTrainings4',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper5", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings5',prevEl: '.swiperBtnPrevTrainings5',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper6", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings6',prevEl: '.swiperBtnPrevTrainings6',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper7", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings7',prevEl: '.swiperBtnPrevTrainings7',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper8", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings8',prevEl: '.swiperBtnPrevTrainings8',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});
var swiperCases = new Swiper(".trainingsSwiper9", {
    slidesPerView: 2,
    spaceBetween: 0,
    speed: 1000,
    navigation: {nextEl: '.swiperBtnNextTrainings9',prevEl: '.swiperBtnPrevTrainings9',},
    autoplay: {delay: 2500,disableOnInteraction: false,},
    breakpoints: {0: {slidesPerView: 2,},640: {slidesPerView: 2,},1120: {slidesPerView: 3,},1460: {slidesPerView: 3,},1760: {slidesPerView: 3,},}
});


function setArticlesClickable() {
    if(articles.length) {
        articles.forEach(item => {
            let link = item.querySelector('a');
            if(link) {
                item.addEventListener('click', () => {
                    window.location = link.getAttribute("href");
                });
            }
        });
    }
}
function initFaqs() {
    if(faqBoxes.length) {
        faqBoxes.forEach(box => {
            let answer = box.querySelector('.answer');
            answer.dataset.answerHeight = answer.offsetHeight;
            answer.style.height = 0;
        });
    }
}
function setFaqsToggle() {
    if(faqBoxes.length) {
        faqBoxes.forEach(box => {
            box.addEventListener('click', () => {
                let answer = box.querySelector('div.answer');
                if(answer.offsetHeight == 0) answer.style.height = answer.dataset.answerHeight + 'px';
                else answer.style.height = 0;
            });
        });
    }
}



// function upCountNumbers() {
//     if(statNumbers && statNumbers.length) {
//         statNumbers.forEach(element => {
//             let number = parseInt(element.innerHTML.replace('.', ''));
//             for (let i = 0; i <= number; i+=1) {
//                 setTimeout(() => {
//                     element.innerHTML = i;
//                 }, i * 1);
//             }
//         });
//     }
// }

function setReviewsShowMoreToggleButtons() {
    const reviewArts = document.querySelectorAll('.reviewsContent article');
    if(reviewArts.length) {
        reviewArts.forEach(revArt => {
            let outerDiv = revArt.querySelector('div');
            let innerDiv = revArt.querySelector('div > div');
            let showMoreBtn = revArt.querySelector('.reviewShowMoreToggle');
            if(innerDiv.offsetHeight > outerDiv.offsetHeight) {
                showMoreBtn.style.display = 'block';

                let p = document.createElement("p");
                p.innerText = '(...)';
                showMoreBtn.prepend(p);

                showMoreBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    outerDiv.style.height = innerDiv.offsetHeight + 'px';
                    showMoreBtn.style.display = 'none';
                });
            } else {
                showMoreBtn.style.display = 'none';
            }
        });
    }
}

var errTimeout;
if(subsribeForm) {
    subsribeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        xhrErrorAlert.classList.add('hideXhrError');
        xhrSuccessAlert.classList.add('hideXhrSuccess');
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/submit-subscription-form');
        xhr.setRequestHeader('X-CSRF-TOKEN', csrfToken);
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onload = function() {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                if(response.errors.length) { // errors!
                    let errList = xhrErrorAlert.querySelector('div:last-child');
                    errList.innerHTML = '';
                    response.errors.forEach(err => {
                        let para = document.createElement('p');
                        let textN = document.createTextNode(err);
                        para.appendChild(textN);
                        errList.appendChild(para);
                    });
                    xhrErrorAlert.classList.remove('hideXhrError');
                    if(typeof errTimeout !== 'undefined') clearTimeout(errTimeout);
                    errTimeout = setTimeout(function() {xhrErrorAlert.classList.add('hideXhrError')}, 6000);
                } else { //no errors!
                    sfInputEmail.value = '';
                    xhrSuccessAlert.classList.remove('hideXhrSuccess');
                    setTimeout(function() {xhrSuccessAlert.classList.add('hideXhrSuccess')}, 9000);
                }
            } else {
                console.error('Error:', xhr.statusText);
            }
        };
        xhr.onerror = function() {
            console.error('Error:', xhr.statusText);
        };
        let formData = {
            Email: sfInputEmail.value,
            valkuil: sfInputValkuil.value,
            valstrik: sfInputValstrik.value,
        };
        xhr.send(JSON.stringify(formData));

    });
}
