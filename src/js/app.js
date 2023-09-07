/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import Swiper, { Navigation, Pagination } from 'swiper';

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';

// header mobile nav toggle
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

// header toggle btn
document.addEventListener('DOMContentLoaded', function() {
  const headerBtnToggle = new HeaderBtnToggle();
});

// table tariffs bg accent
var tariffsTable = document.getElementById('table-tariffs');
var tariffsBlockBg = document.createElement('div');
var cellIndex = 2;
var tableWrapper = document.querySelector('.tariffs-section__table-wrapper');

function updateBlockWidth() {
  var cell = tariffsTable.rows[0].cells[cellIndex];
  tariffsBlockBg.style.left = cell.offsetLeft + 'px';
  tariffsBlockBg.style.width = tariffsTable.rows[3].cells[3].offsetWidth + 'px';
  tariffsBlockBg.style.height = tariffsTable.offsetHeight + 'px';
}

updateBlockWidth();

tariffsBlockBg.classList.add('tariffs-section__table-bg');
tableWrapper.appendChild(tariffsBlockBg);

window.addEventListener('resize', updateBlockWidth);