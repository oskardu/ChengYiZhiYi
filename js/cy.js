(function(){
  var el = document.getElementsByClassName('slider')
  var wrapper = document.getElementsByClassName('wrapper')
  var i = 0;
  var timer = 0;
  wrapper[0].addEventListener('mouseenter', clearTimer, false);
  wrapper[0].addEventListener('mouseleave', setTimer, false);
  document.body.addEventListener('scroll', stopP, false);
  document.body.addEventListener('touchmove', stopP, false);
  document.body.addEventListener('mousemove', stopP, false);
  
  for (i; i < el.length; i++) {
    el[i].addEventListener('click', switchAnimate, false )
  }

  function switchAnimate(event) {
    var e = event || window.event;
    var tar = e.target;
    if (tar.tagName.toLocaleLowerCase() === 'img') {
      tar = tar.parentNode
    }
    window.a = tar
    var next = tar.nextElementSibling || el[0];
    console.log(next)
    tar.className = 'slider';
    next.className = 'slider active';
  }

  function clearTimer() {
    clearInterval(timer)
  }

  function setTimer() {
    clearInterval(timer);
    timer= setInterval(() => {
      var el = document.getElementsByClassName('active')[0]
      el.click()
    }, 6000)
  }

  function stopP(event) {
    var e = event || window.event;

    e.preventDefault();
    e.stopPropagation();
    e.cancelBubble = true;
  }
})()