let count = 0;
var firstPlay = true;
var hiMessage = document.getElementById('hi-message');
var timclulow = document.getElementById('timclulow-word');
var skew = document.getElementById('skew');
var hand1 = document.getElementById('t-horiz');
var c = document.getElementById('C');
var l1 = document.getElementById('L1');
var l2 = document.getElementById('L2');
var o = document.getElementById('O');
var w = document.getElementById('W');
var eye1 = document.getElementById('t-vert');
var eye2 = document.getElementById('I');
var smile = document.getElementById('U');
var hand2 = document.getElementById('vert2');
var armandhand = document.getElementById('armandhand');
var bit = document.getElementById('vert1');
var shoulder = document.getElementById('angle1');
var m = document.getElementById('M');
var progressBar = document.getElementById('progress');
var mainContent = document.getElementById('mainContent');

var tl = gsap.timeline({ onComplete: complete, onUpdate: Progress });
var firstPlay = true;
tl.pause();
tl.addLabel('start');
tl.add(
  gsap.to(bit, 0.3, { ease: Power2.easeIn, repeat: 0, opacity: 0 }),
  0
);
tl.add(
  gsap.to(hand1, 1, {
    ease: Power2.easeOut,
    repeat: 0,
    rotation: -50,
    x: -69,
    y: 54,
    transformOrigin: 'top right',
  }),
  0
);
tl.add(
  gsap.to(c, 1, { ease: Power2.easeIn, repeat: 0, opacity: 0, y: 100 }),
  0
);
tl.add(
  gsap.to(l1, 1, {
    ease: Power2.easeOut,
    repeat: 0,
    y: 25,
    x: 53,
    rotation: 5,
  }),
  0
);
tl.add(
  gsap.to(l2, 1, {
    ease: Power2.easeOut,
    repeat: 0,
    y: 26,
    x: -15,
    rotation: -5,
  }),
  0
);
tl.add(
  gsap.to(o, 1, { ease: Power2.easeIn, repeat: 0, opacity: 0, y: 100 }),
  0
);
tl.add(
  gsap.to(w, 1, { ease: Power2.easeIn, repeat: 0, opacity: 0, y: 100 }),
  0
);
tl.add(
  gsap.to(eye1, 2, {
    ease: Power2.easeOut,
    repeat: 0,
    x: 39,
    scaleX: 0.66,
  }),
  0
);
tl.add(
  gsap.to(eye2, 2, { ease: Power2.easeOut, repeat: 0, x: 9, scaleX: 0.66 }),
  0
);
tl.add(
  gsap.to(smile, 2, {
    ease: Power2.easeOut,
    repeat: 0,
    scaleY: 0.7,
    scaleX: 1.1,
    x: -3,
    y: -10,
  }),
  0
);
tl.add(
  gsap.to(hand2, 2, {
    ease: Power2.easeInOut,
    repeat: 0,
    scaleY: 0.4,
    rotation: -200,
  }),
  0
);
tl.add(
  gsap.to(m, 0.6, {
    ease: Power2.easeOut,
    repeat: 0,
    y: 40,
    x: 140,
    rotation: -45,
  }),
  0
);

var arm1Wave;
var arm2Wave;
var handWave;
function complete() {
  hiMessage.classList.add('on');
  mainContent.firstElementChild.classList.add('on');
  tl.addLabel('midpoint');
  tl.add(
    gsap.to(hand2, 0.45, {
      ease: Power4.easeInOut,
      rotation: -40,
      yoyo: true,
      repeat: 5,
    }),
    'midpoint'
  );
  tl.add(
    gsap.to(m, 1.8, {
      ease: Sine.easeInOut,
      rotation: -80,
      yoyo: true,
      repeat: 1,
      onComplete: backtoStart,
    }),
    'midpoint'
  );
  tl.add(
    gsap.to(armandhand, 0.45, {
      transformOrigin: 'bottom left',
      ease: Sine.easeInOut,
      rotation: 32,
      yoyo: true,
      repeat: 5,
    }),
    'midpoint'
  );
  tl.add(
    gsap.to(hand1, 1.8, {
      transformOrigin: 'bottom right',
      ease: Power1.easeInOut,
      rotation: -15,
      yoyo: true,
    }),
    'midpoint'
  );
}

function repeat() {
  tl.reverse();
}

function onLogoHover() {
  if (!tl.isActive()) {
    if (count == 0) {
      document.getElementById('hi-message').innerHTML =
        '<p>Hi, thanks for dropping by!</p>';
    }
    if (count > 0) {
      document.getElementById('hi-message').innerHTML =
        '<p>Oh, you again! hello!</p>';
    }
    if (count > 1) {
      document.getElementById('hi-message').innerHTML =
        '<p>Oh hey, have we met before? Hello to you too!</p>';
      count = 0;
    }

    tl.timeScale(1).play();
    setTimeout(function () {
      onLogoHover();
    }, 50);
    progressBar.classList.add('on');
    skew.classList.add('on');
  }
}

function onLogoOut() {
  // any other actions?
}

function backtoStart() {
  tl.reverse().timeScale(-1.5);
  firstPlay = false;
}

function Progress() {
  var rounded = Math.round(tl.progress() * 10) / 10;
  if (!firstPlay && !tl.reversed() && 0.2 == rounded) {
    hiMessage.classList.add('on');
    mainContent.firstElementChild.classList.add('on');
  }
  if (tl.reversed() && 0.2 == rounded) {
    hiMessage.classList.remove('on');
  }
  if (tl.progress() == 0) {
    progressBar.classList.remove('on');
    skew.classList.remove('on');
    mainContent.firstElementChild.classList.remove('on');
    count++;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  hiMessage.classList.add('transitions');
  skew.addEventListener('mouseenter', onLogoHover);
  skew.addEventListener('touchstart', onLogoHover);
  skew.addEventListener('mouseleave', onLogoOut);
  skew.addEventListener('touchcancel', onLogoOut);

  // setTimeout(function(){
  //   onLogoHover();
  // },6000);
});

var statusBox = document.getElementById('target');

function handler(entries, observer) {
  for (entry of entries) {
    console.log(entry);

    if (entry.isIntersecting) {
      setTimeout(function () {
        onLogoHover();
      }, 2000);
    }
  }
}

/* By default, invokes the handler whenever:
   1. Any part of the target enters the viewport
   2. The last part of the target leaves the viewport */

let observer = new IntersectionObserver(handler);
observer.observe(document.getElementById('skew'));
