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

/**
 * 
 * zips
 * 98199,98116,98136,98160,98117,98107,98020,98177,98126,98119,98146,98062,98166,98106,98103,98121,98133,98109,98134,98174,98154,98101,98164,98111,98114,98124,98129,98138,98145,98170,98181,98185,98190,98191,98161,98113,98127,98139,98141,98165,98175,98194,98104,98026,98102,98148,98046,98108,98198,98043,98158,98275,98195,98122,98155,98125,98168,98144,98037,98112,98036,98105,98115,98188,98131,98118,98032,98087,98204,98178,98028,98039,98203,98064,98035,98040,98089,98057,98082,98004,98034,98083,98021,98011,98041,98207,98213,98009,98015,98201,98012,98031,98033,98055,98056,98208,98005,98006,98007,98072,98052,98073,98058,98059,98008,98296,98291,98077
 * 
 * cities
 * SEATTLE,EDMONDS,SEAHURST,LYNNWOOD,MOUNTLAKE TERRACE,MUKILTEO,KENT,EVERETT,KENMORE,MEDINA,MERCER ISLAND,RENTON,MILL CREEK,BELLEVUE,KIRKLAND,BOTHELL,WOODINVILLE,REDMOND,SNOHOMISH
 */