const articles = document.querySelectorAll("article:not(.notClickable)");
const toTopBtn = document.querySelector("#toTop");
const headerWrap = document.querySelector(".headerInnerWrap");
const mainLogo = document.querySelector(".mainLogoWrap img");
mainLogo.style.height;
const anchors = document.querySelectorAll(".anchorPoint");
const buttons = document.querySelectorAll(".mainNav ul li a");
const burgerMenuLabel = document.querySelector(".burger-label");
const subsribeForm = document.querySelector(".subscriptionForm");
const sfInputEmail = document.querySelector("input[name=Email]");
const sfInputValkuil = document.querySelector("input[name=valkuil]");
const sfInputValstrik = document.querySelector("input[name=valstrik]");
const csrfToken = document.querySelector('meta[name="_token"]').content;
const xhrErrorAlert = document.querySelector(".hideXhrError");
const xhrSuccessAlert = document.querySelector(".hideXhrSuccess");
const faqBoxes = document.querySelectorAll(".faqs > div");
let anchorsInViewport = [];
const heroSlideshowImages = document.querySelectorAll(".contentWrapper .hero .heroImages div picture img");
setArticlesClickable();
initFaqs();
setFaqsToggle();
setAfterScrollAttributes();
const observerOptionsAnchor = {
  root: null,
  threshold: 0.9
  // 1 can sometimes not give the desired result
};
const observer = new IntersectionObserver(observerAnchorCallback, observerOptionsAnchor);
anchors.forEach((el) => {
  observer.observe(el);
});
function observerAnchorCallback(entries, observer2) {
  entries.forEach((entry) => {
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
  if (activeAnchors.length) {
    let alreadyActivated = false;
    buttons.forEach((btnEl, i) => {
      var hash = btnEl.href.substring(btnEl.href.indexOf("#") + 1);
      btnEl.classList.remove("active");
      if (activeAnchors.indexOf(hash) !== -1 && !alreadyActivated) {
        btnEl.classList.add("active");
        alreadyActivated = true;
      }
    });
  }
}
toTopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
});
if (window.scrollY > 800) {
  toTopBtn.classList.add("show");
}
window.addEventListener("scroll", debounce(function(e) {
  setAfterScrollAttributes();
}));
function setAfterScrollAttributes() {
  let fromTop = window.scrollY;
  if (fromTop > 400) {
    toTopBtn.classList.add("show");
  } else {
    toTopBtn.classList.remove("show");
  }
  if (fromTop > 200) {
    mainLogo.classList.add("afterScroll");
    headerWrap.classList.add("afterScroll");
    burgerMenuLabel.classList.add("afterScroll");
  } else {
    mainLogo.classList.remove("afterScroll");
    headerWrap.classList.remove("afterScroll");
    burgerMenuLabel.classList.remove("afterScroll");
  }
}
function debounce(func) {
  var timer;
  return function(event) {
    if (timer)
      clearTimeout(timer);
    timer = setTimeout(func, 10, event);
  };
}
let curIndex = 0;
let imgDuration = 6e3;
function slideShow() {
  curIndex++;
  if (curIndex == heroSlideshowImages.length) {
    curIndex = 0;
    heroSlideshowImages.forEach((element, i) => {
      if (i != 0) {
        element.style.opacity = 0;
      }
    });
  }
  heroSlideshowImages[curIndex].style.opacity = 1;
  if (heroSlideshowImages[curIndex - 1])
    heroSlideshowImages[curIndex - 1].style.opacity = 0;
  setTimeout(slideShow, imgDuration);
}
if (heroSlideshowImages && heroSlideshowImages.length > 1)
  setTimeout(slideShow, imgDuration);
const ctaBtnElms = document.querySelectorAll(".ctaBtnWrap");
const serviceBtns = document.querySelectorAll(".serviceBtnWrap");
const headers = document.querySelectorAll(".contentWrapper h1");
document.querySelectorAll(".fullw img, .twoColumns img");
const observerOptions = {
  root: null,
  threshold: 0.3
};
function observerCallback(entries, observer2) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translate(0px, 0px)";
    }
  });
}
ctaBtnElms.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translate(0px, 50px)";
});
serviceBtns.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translate(0px, 50px)";
});
headers.forEach((el) => {
  el.style.opacity = 0;
  el.style.transform = "translate(-50px, 0px)";
});
setTimeout(() => {
  const observer2 = new IntersectionObserver(observerCallback, observerOptions);
  ctaBtnElms.forEach((el) => {
    el.style.transition = "opacity 0.7s ease-in, transform 0.7s ease-out";
    observer2.observe(el);
  });
  serviceBtns.forEach((el) => {
    el.style.transition = "opacity 0.7s ease-in, transform 0.7s ease-out";
    observer2.observe(el);
  });
  headers.forEach((el) => {
    el.style.transition = "opacity 0.7s ease-in, transform 0.7s ease-out";
    observer2.observe(el);
  });
}, 100);
function setArticlesClickable() {
  if (articles.length) {
    articles.forEach((item) => {
      let link = item.querySelector("a");
      if (link) {
        item.addEventListener("click", () => {
          window.location = link.getAttribute("href");
        });
      }
    });
  }
}
function initFaqs() {
  if (faqBoxes.length) {
    faqBoxes.forEach((box) => {
      let answer = box.querySelector(".answer");
      answer.dataset.answerHeight = answer.offsetHeight;
      answer.style.height = 0;
    });
  }
}
function setFaqsToggle() {
  if (faqBoxes.length) {
    faqBoxes.forEach((box) => {
      box.addEventListener("click", () => {
        let answer = box.querySelector("div.answer");
        if (answer.offsetHeight == 0)
          answer.style.height = answer.dataset.answerHeight + "px";
        else
          answer.style.height = 0;
      });
    });
  }
}
var errTimeout;
if (subsribeForm) {
  subsribeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    xhrErrorAlert.classList.add("hideXhrError");
    xhrSuccessAlert.classList.add("hideXhrSuccess");
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/submit-subscription-form");
    xhr.setRequestHeader("X-CSRF-TOKEN", csrfToken);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function() {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.errors.length) {
          let errList = xhrErrorAlert.querySelector("div:last-child");
          errList.innerHTML = "";
          response.errors.forEach((err) => {
            let para = document.createElement("p");
            let textN = document.createTextNode(err);
            para.appendChild(textN);
            errList.appendChild(para);
          });
          xhrErrorAlert.classList.remove("hideXhrError");
          if (typeof errTimeout !== "undefined")
            clearTimeout(errTimeout);
          errTimeout = setTimeout(function() {
            xhrErrorAlert.classList.add("hideXhrError");
          }, 6e3);
        } else {
          sfInputEmail.value = "";
          xhrSuccessAlert.classList.remove("hideXhrSuccess");
          setTimeout(function() {
            xhrSuccessAlert.classList.add("hideXhrSuccess");
          }, 9e3);
        }
      } else {
        console.error("Error:", xhr.statusText);
      }
    };
    xhr.onerror = function() {
      console.error("Error:", xhr.statusText);
    };
    let formData = {
      Email: sfInputEmail.value,
      valkuil: sfInputValkuil.value,
      valstrik: sfInputValstrik.value
    };
    xhr.send(JSON.stringify(formData));
  });
}
