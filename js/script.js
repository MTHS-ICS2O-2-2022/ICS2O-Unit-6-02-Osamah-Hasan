// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Feb 2023
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker support"
*/
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-01-Osamah-Hasan/sw.js", {
    scope: "/ICS2O-Unit-6-01-Osamah-Hasan/",
  })
}

function myButtonClicked() {
  // this is a cookie clicker game
  // process
if ( localStorage.clicks ) {
  localStorage.clicks = Number(localStorage.clicks) + 1
} else {
  localStorage.clicks = 1
}

// output
document.getElementById('clicks').innerHTML = "You have " + localStorage.clicks + " cookies!"
}