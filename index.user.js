// ==UserScript==
// @name          Jira Links
// @version       0.4
// @description   Jira links in a new tab
// @namespace     https://github.com/seliver/
// @match         https://*.atlassian.(net|com)/(secure/RapidBoard.jspa*|browse/*)
// @author        Alexey Seliverstov
// @updateURL     https://raw.githubusercontent.com/seliver/jira-links-newtab/master/index.user.js
// @downloadURL   https://raw.githubusercontent.com/seliver/jira-links-newtab/master/index.user.js
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
