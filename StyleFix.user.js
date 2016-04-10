// ==UserScript==
// @name        StyleFix
// @namespace   EZMenu
// @description StyleFix
// @include     https://admin.yotpo.com/*
// @version     0.1
// @grant       none
// ==/UserScript==

function addJQuery(callback) {
  var script = document.createElement("script");
  script.setAttribute("src", "//code.jquery.com/jquery-2.2.3.min.js");
  script.addEventListener('load', function() {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);(" + callback.toString() + ")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main(){

    jQ('#customers').css("background-color", "rgba(250, 250, 250, 0.4)").css("border-radius","10px").css("display","none");
    jQ('#sort-filter').css("background-color", "rgba(250, 250, 250, 0.4)").css("border-radius","10px");
    jQ('#packages, #imports').css("background-color", "rgba(250, 250, 250, 0.8)").css("border-radius","10px").css("padding","5px");
    jQ('.user').css("background-color", "rgba(250, 250, 250, 0.8)").css("border-radius","10px");
    jQ('.accounts, .pagination .pages').css("background-color","white");
    jQ('#sort-filter, .subtitle').css("color", "white");
    jQ('.page a').css("color", "#005696");
    jQ('body').css("background", "url(https://i.imgur.com/yGVwKzr.jpg) fixed"); 
    jQ('.pagination').css("color","white");
    jQ('body').css("font-family", "sans-serif").css("padding-top","90px");                                     
    jQ('#csv_download').css("margin-top","5px");                                                               
    jQ('#csv_download').css("color","white");
    jQ('li.copy > button').css("margin", "0 5px 5px 0");        
    jQ('span.newvalz').css("position", "absolute").css("font-size", "85%");
    jQ('.copy-button').css("width","71px");
    jQ('footer').css("color","white").css("text-shadow", "0px 0px 5px rgba(0, 0, 0, 1)");
    jQ('#content').css("border","none");    
    jQ('header').css("position", "fixed").css("width","100%").css("z-index","1000").css("top","0");
    jQ('#imports').css("color","black");
    jQ('#import-exceptions').css("color", "black");
    jQ('.tab-content').css("border","none");
    jQ('input#q').css("width", "500px");
    jQ('#reviews-grid').css("background-color","white");
    jQ('form.filter').css("color","white");
    jQ('li.copy').css("font-size","85%");
    jQ('li.copy button').css("width","auto");
    jQ('li.copy button').html('copy');        
       
    jQ('input#q').on('input paste',function(){
        oldtxt = jQ(this).val();        
        newtxt = oldtxt.replace(/https?:\/\//, '');
        newtxt = newtxt.replace(/www\./, '');
        newtxt = newtxt.replace(/\/$/, '');
        jQ(this).val(newtxt);
    });    
    
    jQ('input#q').attr("tabindex", "1");
    jQ('input#q').attr("placeholder", "Search for...");
    jQ('#app_key').css("width", "320px");
    jQ("#customers").fadeIn( 350, function() {});
    jQ('body').append('<style>#s2id_autogen1 { display: none; }</style>')
    jQ('body').append('<style>.col-sm-6.infoBar div.infos { color: white; }</style>')    
}

addJQuery(main);