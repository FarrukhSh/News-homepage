'use strict';

const menuButton = document.getElementById('menuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const popupPanel = document.getElementById('popupPanel');
const bodyEl = document.getElementsByTagName('html');

menuButton.addEventListener('click', function () {
    popupPanel.style.display = 'flex';
});

closeMenuButton.addEventListener('click', function () {
    popupPanel.style.display = 'none';
});
