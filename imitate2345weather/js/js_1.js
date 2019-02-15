window.onload=function() {
  picsMoveAuto();
  changeColor(document.getElementById("video1"));
  changeColor(document.getElementById("video2"));
  changeColor(document.getElementById("video3"));
}


function mOverAdvert() {
  document.getElementById("pain1").style.animationDuration="100ms";
  document.getElementById("pain2").style.animationDuration="100ms";
  document.getElementById("cardBox").style.animation=undefined;
  document.getElementById("card1").style.animation="card10 3s linear infinite";
  document.getElementById("card2").style.animation="card20 3s linear infinite";
  document.getElementById("card3").style.animation="card30 3s linear infinite";
  document.getElementById("card4").style.animation="card40 3s linear infinite";
  document.getElementById("p1").innerHTML="恭";
  document.getElementById("p2").innerHTML="喜";
  document.getElementById("p3").innerHTML="发";
  document.getElementById("p4").innerHTML="财";
}
function mOutAdvert() {
  document.getElementById("pain1").style.animationDuration="200ms";
  document.getElementById("pain2").style.animationDuration="200ms";
  document.getElementById("cardBox").style.animation="cardbox 10s linear infinite";
  document.getElementById("card1").style.animation="card1 10s linear infinite";
  document.getElementById("card2").style.animation="card2 10s linear infinite";
  document.getElementById("card3").style.animation="card3 10s linear infinite";
  document.getElementById("card4").style.animation="card4 10s linear infinite";
  document.getElementById("p1").innerHTML="恭";
  document.getElementById("p2").innerHTML="贺";
  document.getElementById("p3").innerHTML="新";
  document.getElementById("p4").innerHTML="春";
}


var p, x, t;
function picsMoveAuto() {
  p=document.getElementById("pics");
  x=document.getElementsByClassName("pic_nail");
  p.style.left=0+"px";
  x[0].style.cssText="border-color: #f60; opacity: 1;";
  t=setTimeout(picsMove,4000);
}
function picsMove() {
  switch (parseInt(p.style.left)) {
    case 0:
      p.style.left=-400+"px";
      p.style.transition="left 0.3s";
      nailStyle();
      x[1].style.cssText="border-color: #f60; opacity: 1;";
      t=setTimeout(picsMove,4000);
      break;
    case -400:
      p.style.left=-800+"px";
      p.style.transition="left 0.3s";
      nailStyle();
      x[2].style.cssText="border-color: #f60; opacity: 1;";
      t=setTimeout(picsMove,4000);
      break;
    case -800:
      p.style.left=-1200+"px";
      p.style.transition="left 0.3s";
      nailStyle();
      x[3].style.cssText="border-color: #f60; opacity: 1;";
      t=setTimeout(picsMove,4000);
      break;
    case -1200:
      p.style.left=-1600+"px";
      p.style.transition="left 0.3s";
      nailStyle();
      x[4].style.cssText="border-color: #f60; opacity: 1;";
      t=setTimeout(picsMove,4000);
      break;
    case -1600:
      p.style.left=-2000+"px";
      p.style.transition="left 0.3s";
      nailStyle();
      x[0].style.cssText="border-color: #f60; opacity: 1;";
      t=setTimeout(picsMove,4000);
      break;
    case -2000:
      p.style.left=0+"px";
      p.style.transition="left 0s";
      nailStyle();
      x[0].style.cssText="border-color: #f60; opacity: 1;";
      t=setTimeout(picsMove,40);
  }
}
function picClick(obj,a) {
  clearTimeout(t);
  nailStyle();
  p.style.left=-400*a+"px";
  p.style.transition="left 0.3s";
  obj.style.cssText="border-color: #f60; opacity: 1;";
  t=setTimeout(picsMove,4000);
}
function nailStyle() {
  for (var i=0; i<x.length; i++) {
    x[i].style.cssText="border-color: transparent; opacity: 0.5;";
  }
}
function stopMove() {
  clearTimeout(t);
}
function startMove() {
  t=setTimeout(picsMove,4000);
}


var vn=1;
function videoClick(a) {
  var v=document.getElementById("video");
  document.getElementById("source1").src="video/video"+a+".mp4";
  document.getElementById("source2").src="video/video"+a+".ogg";
  document.getElementById("obj").data="video/video"+a+".mp4";
  document.getElementById("emb").src="video/video"+a+".ogg";
  v.load();
  v.muted=undefined;
  vn=a;
}
function videoPlaying() {
  document.getElementById("video1").innerHTML="";
  document.getElementById("video2").innerHTML="";
  document.getElementById("video3").innerHTML="";
  document.getElementById("video"+vn).innerHTML="播放中";
}
function videoPause() {
  document.getElementById("video1").innerHTML="";
  document.getElementById("video2").innerHTML="";
  document.getElementById("video3").innerHTML="";
  document.getElementById("video"+vn).innerHTML="已暂停";
}
function videoEnded() {
  document.getElementById("video1").innerHTML="";
  document.getElementById("video2").innerHTML="";
  document.getElementById("video3").innerHTML="";
  if (vn<3) videoClick(vn+1);
}
function changeColor(c) {
  setInterval(function() {
    if (c.style.color=="red") c.style.color="orange";
    else if (c.style.color=="orange") c.style.color="green";
    else if (c.style.color=="green") c.style.color="blue";
    else if (c.style.color=="blue") c.style.color="purple";
    else c.style.color="red";
  },250);
}
function mOverVideo(obj) {
  obj.style.top="-80px";
  obj.style.transition="top 0.2s";
}
function mOutVideo(obj) {
  obj.style.top="0";
  obj.style.transition="top 0.2s";
}








