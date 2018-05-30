import {MDCTopAppBar} from '@material/top-app-bar/index';
import {MDCMenu} from '@material/menu';

const topAppBar = new MDCTopAppBar(document.querySelector('.mdc-top-app-bar'));

// for menu
var menuEl = document.querySelector('#menu');
var menu = new MDCMenu(menuEl);
var menuButtonEl = document.querySelector('#menu-button');

// Toggle menu open
menuButtonEl.addEventListener('click', function() {
  menu.open = !menu.open;
});

// Listen for selected item
menuEl.addEventListener('MDCMenu:selected', function(evt) {
   var detail = evt.detail;
});

// Set Anchor Corner to Bottom End
menu.setAnchorCorner(Corner.BOTTOM_END);

// Turn off menu open animations
menu.quickOpen = true;

