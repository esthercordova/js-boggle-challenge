'use strict';

// Map row/column coordinates onto an array index (i.e. represent a square grid using a simple array).
// Use this mapping to return (potential) words from letters in the grid.

//A tray is just an array of length 16 with each element a single letter string.

let boggleTray = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p'];
let exampleTray = 'wxxxxoxxxxrxxxxd'.split('');

//A list of coordinate pairs is an array with length <= 4 and each element is an array of length 2.
//The sub-arrays contain two integers >= 0 and <= 3.

let listCordonatePairs = [[0,0],[0,0],[0,0],[0,0]];

//Write a function - in lib/challenge.js - that takes a tray and a list of coordinate pairs and returns
//a string representing the concatenation of the letters at each of the coordinates.

const boggle = function boggle(boggleTray,listCordonatePairs) {

};

const bigBoggle = function bigBoggle() {

};

const superBigBoggle = function superBigBoggle() {

};

module.exports = {
  boggle,
  bigBoggle,
  superBigBoggle,
};
