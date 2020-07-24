$ready(() => {
  flashNav();
})



// TODO: sticky nav when xyz in view

// TODO: click logo in header


function flashNav() {
  // header items animated in landing-wrapper.css
  $('header').classList.add('flash-nav');
  setTimeout(() => {
    $('header').classList.remove('flash-nav');
  }, 1800)
}

function $(el) {
  return document.querySelector(el);
}

function $$(el) {
  return document.querySelectorAll(el);
}

function $ready(fn) {
  const state = document.readyState;
  if (state === "complete" || state === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn)
  }
}