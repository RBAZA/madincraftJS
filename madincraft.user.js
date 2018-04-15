// ==UserScript==
// @name         Madincraft
// @version      0.3
// @description  Une restylisation du site madincraft.fr basée sur le travail de Nocturn_
// @author       RBAZA
// @match        http://madincraft.fr/*
// ==/UserScript==

(function() {
    'use strict';

    //DEFINE COLORS
    let ligthBlue = '#8BB1FE';
    let leftBoxesTextColor = '#ffffff';
    let blockpostColor = '#ffffff';

    //TITLES
    let titles = document.querySelectorAll('.pun h2');
    titles.forEach(function(title){
        title.style.backgroundColor = ligthBlue;
    });
    let legends = document.querySelectorAll('.pun legend');
    legends.forEach(function(legend){
        legend.style.color = ligthBlue;
    });
    let blockpostTitles = document.querySelectorAll('.blockpost h2 a');
    blockpostTitles.forEach(function(blockpostTitle){
        blockpostTitle.style.color = blockpostColor;
    });
    //BORDERS
    let borders = document.querySelectorAll('.pun .box');
    borders.forEach(function(border){
        border.style.borderColor = ligthBlue;
    });
    //LINKS
    let links = document.querySelectorAll('.pun a:link, .pun a:visited');
    links.forEach(function(link){
        link.style.color = ligthBlue;
    });
    let hoverLinks = document.querySelectorAll('.pun a:hover, .pun a:active, .pun a:focus');
    hoverLinks.forEach(function(hoverLink){
        hoverLink.style.color = ligthBlue;
    });
    let postInfos = document.querySelectorAll('.blockpost a');
    postInfos.forEach(function(postInfo){
        postInfo.style.color = ligthBlue;
    });
    let blocks = document.querySelectorAll('.block h2 a');
    blocks.forEach(function(block){
        block.style.color = leftBoxesTextColor;
    });
    //NAVIGATION
    let menu = document.getElementById('brdmenu');
    menu.style.backgroundColor = ligthBlue;
    let menuEntries = document.querySelectorAll('#brdmenu a');
    menuEntries.forEach(function(menuEntry){
        menuEntry.style.color = leftBoxesTextColor;
    });
    //INBOX
    let inboxBorder = document.getElementById('mp_bar_ext');
    inboxBorder.style.borderColor = ligthBlue;
    let inboxRatio = document.getElementById('mp_bar_int');
    inboxRatio.style.backgroundColor = ligthBlue;
})();
