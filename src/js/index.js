!function(t){function e(e){var e=e||t.event,n=document.getElementsByClassName("eyes")[0],a=document.getElementsByClassName("eyes")[1],o=document.getElementsByClassName("mouth")[0],r=Math.round(document.documentElement.clientWidth/2),s=Math.round(document.documentElement.clientHeight/2),d=Math.round(e.touches[0].clientX),m=Math.round(e.touches[0].clientY),u=Math.round(r/30),l=Math.round(s/30),c=0,h=0,i=0,y=0,p=0;switch(e.preventDefault(),c=Math.round((d-r)/u),h=Math.round((m-s)/l),i=Math.round((d-r)/u),y=m>s?180:0,p=m>s?-1:0,e.type){case"touchstart":n.style.transform="translate3d("+c+"px, "+h+"px, 0)",a.style.transform="translate3d("+c+"px, "+h+"px, 0)",o.style.transform="rotateZ("+i+"deg) rotate3d(1, 0, 0, "+y+"deg)translateY("+p+"rem)";break;case"touchmove":n.style.transform="translate3d("+c+"px, "+h+"px, 0)",a.style.transform="translate3d("+c+"px, "+h+"px, 0)",o.style.transform="rotateZ("+i+"deg) rotate3d(1, 0, 0, "+y+"deg)translateY("+p+"rem)"}}document.addEventListener("touchstart",e,!1),document.addEventListener("touchmove",e,!1)}(window);