// ==UserScript==
// @name         Madincraft
// @version      0.1
// @description  Une restylisation du site madincraft.fr basée sur le travail de Nocturn_
// @author       RBAZA
// @match        http://madincraft.fr/*
// ==/UserScript==

(function() {
    'use strict';
    //TITLES
    let titles = document.querySelectorAll('.pun h2');
    titles.forEach(function(title){
        title.style.backgroundColor = '#8BB1FE';
    });
    let legends = document.querySelectorAll('.pun legend');
    legends.forEach(function(legend){
        legend.style.color = '#8BB1FE';
    });
    //BORDERS
    let borders = document.querySelectorAll('.pun .box');
    borders.forEach(function(border){
        border.style.borderColor = '#8BB1FE';
    });
    //LINKS
    let links = document.querySelectorAll('.pun a:link, .pun a:visited');
    links.forEach(function(link){
        link.style.color = '#8BB1FE';
    });
    let hoverLinks = document.querySelectorAll('.pun a:hover, .pun a:active, .pun a:focus');
    hoverLinks.forEach(function(hoverLink){
        hoverLink.style.color = '#a4bef2';
    });
    let postInfos = document.querySelectorAll('.blockpost a');
    postInfos.forEach(function(postInfo){
        postInfo.style.color = '#ffffff';
    });
    let blocks = document.querySelectorAll('.block h2 a');
    blocks.forEach(function(block){
        block.style.color = '#ffffff';
    });
    //NAVIGATION
    let menu = document.getElementById('brdmenu');
    menu.style.backgroundColor = '#8BB1FE';
    let menuEntries = document.querySelectorAll('#brdmenu a');
    menuEntries.forEach(function(menuEntry){
        menuEntry.style.color = '#ffffff';
    });
    //INBOX
    let inboxBorder = document.getElementById('mp_bar_ext');
    inboxBorder.style.borderColor = '#8BB1FE';
    let inboxRatio = document.getElementById('mp_bar_int');
    inboxRatio.style.backgroundColor = '#8BB1FE';
})();
