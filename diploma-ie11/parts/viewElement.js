"use strict";

function viewElement(el) {

  var elPosition = {
    top: window.pageYOffset + el.getBoundingClientRect().top,
    left: window.pageXOffset + el.getBoundingClientRect().left,
    right: window.pageXOffset + el.getBoundingClientRect().right,
    bottom: window.pageYOffset + el.getBoundingClientRect().bottom
  },
      windowPosition = {
    top: window.pageYOffset,
    left: window.pageXOffset,
    right: window.pageXOffset + document.documentElement.clientWidth,
    bottom: window.pageYOffset + document.documentElement.clientHeight
  },
      isView = void 0;

  if ( /*elPosition.bottom > windowPosition.top &&
       elPosition.top < windowPosition.bottom &&
       elPosition.right > windowPosition.left &&
       elPosition.left < windowPosition.right*/
  elPosition.top + (elPosition.bottom - elPosition.top) * 0.7 <= windowPosition.bottom) {
    isView = true;
  } else {
    isView = false;
  };

  return isView;
};

module.exports = viewElement;