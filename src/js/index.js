!function(e){function t(t){var t=t||e.event,n=document.getElementsByClassName("eyes")[0],o=document.getElementsByClassName("eyes")[1],c=document.getElementsByClassName("mouth")[0],r=Math.round(document.documentElement.clientWidth/2),s=Math.round(document.documentElement.clientHeight/2),a=Math.round(t.touches[0].clientX),d=Math.round(t.touches[0].clientY),u=Math.round(r/30),l=Math.round(s/30),i=0,m=0,h=0,f=0,p=0;switch(i=Math.round((a-r)/u),m=Math.round((d-s)/l),h=Math.round((a-r)/u),f=d>s?180:0,p=d>s?-1:0,t.type){case"touchstart":n.style.transform="translate3d("+i+"px, "+m+"px, 0)",o.style.transform="translate3d("+i+"px, "+m+"px, 0)",c.style.transform="rotateZ("+h+"deg)";break;case"touchmove":n.style.transform="translate3d("+i+"px, "+m+"px, 0)",o.style.transform="translate3d("+i+"px, "+m+"px, 0)",c.style.transform="rotateZ("+h+"deg)"}}function n(e){e.addEventListener("touchstart",function(){var t=e.scrollTop,n=e.scrollHeight,o=t+e.offsetHeight;0===t?e.scrollTop=1:o===n&&(e.scrollTop=t-1)}),e.addEventListener("touchmove",function(t){e.offsetHeight<e.scrollHeight&&(t._isScroller=!0)})}function o(e,t){var n=e.className.replace(/\s+/g," ").split(" "),o=n.indexOf(t),c=-1===o?!1:!0;return c}function c(e,t){if(o(e,t))return e;var n=e.className.replace(/\s+/g," ").split(" ");return n.push(t),e.className=n.join(" "),e}function r(e,t){if(!o(e,t))return e;var n=e.className.replace(/\s+/g," ").split(" "),c=n.indexOf(t);return n.splice(c),e.className=n.join(" "),e}function s(e,t){o(e,t)?r(e,t):c(e,t)}document.addEventListener("touchstart",t,!1),document.addEventListener("touchmove",t,!1),document.querySelector(".btn-box").addEventListener("touchstart",function(t){t||e.e;return t.stopPropagation(),!1},!1);var a=document.querySelector("#mood").getElementsByClassName("switch")[0],d=document.querySelector(".face"),u=document.querySelector("#happy"),l=document.querySelector("#sad");a.addEventListener("click",function(){s(this,"checked"),s(d,"sad")},!1),u.addEventListener("click",function(){!o(a,"checked")&&c(a,"checked"),o(d,"sad")&&r(d,"sad")},!1),l.addEventListener("click",function(){o(a,"checked")&&r(a,"checked"),!o(d,"sad")&&c(d,"sad")},!1),n(document.querySelector("html")),document.body.addEventListener("touchmove",function(e){e._isScroller||e.preventDefault()})}(window);