// ==UserScript==
// @name          Jira Links
// @version       0.6
// @description   Jira links in a new tab
// @namespace     https://github.com/seliver/
// @match         https://*.atlassian.net/secure/RapidBoard.jspa*
// @match         https://*.atlassian.com/browse/*
// @match         https://*.atlassian.com/browse/*?*
// @author        Alexey Seliverstov
// @updateURL     https://raw.githubusercontent.com/seliver/jira-links-newtab/master/index.user.js
// @downloadURL   https://raw.githubusercontent.com/seliver/jira-links-newtab/master/index.user.js
// ==/UserScript==

var a = function(){
    var internalLinks = document.querySelectorAll("a.issue-link");
    internalLinks.forEach(function(internalLink){
        internalLink.classList.remove('issue-link');
        internalLink.classList.add('external-link');
    });
    var elems = document.querySelectorAll("a.external-link");
    for (var i=0; i<elems.length; i++){
        var elem = elems[i];
        if (elem.target != '_blank'){
            elem.target = '_blank';
        }
    }
    setTimeout(a, 1000);
};

(function() {
    'use strict';
    a();
})();
