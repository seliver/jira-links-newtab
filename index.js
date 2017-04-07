// ==UserScript==
// @name         Jira Links
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       seliver
// @match        https://*.atlassian.net/secure/RapidBoard.jspa*
// @grant        none
// ==/UserScript==

var a = function(){
    var elems = document.querySelectorAll("a.external-link");
    for (var i=0; i<elems.length; i++){
        var elem = elems[i];
        elem.target = '_blank';
    }
    setTimeout(a, 1000);
};

(function() {
    'use strict';
    a();
})();
