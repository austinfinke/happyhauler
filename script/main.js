$ready(() => {

  inView($('.landing-main'));
})

function inView(el) {
  console.log(el.getBoundingClientRect())
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