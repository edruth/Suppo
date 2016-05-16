// ==UserScript==
// @name        StoreNameFix
// @namespace   StoreNameFix
// @description StoreNameFix
// @include     https://my.yotpo.com/*
// @version     0.1
// @grant       none
// ==/UserScript==

var getStores = jQuery('.dropdown-menu.account-list li a');
getStores.push(jQuery('li a.y-store-name')[0]);
for (var i=0; i < getStores.length; i++) {
    getStores[i].innerHTML = getStores[i].innerHTML.replace(/https?:\/\/w?w?w?\.?/,'');
};
jQuery('div.dropdown-menu.y-dropdown.account-list').css('width','300%');