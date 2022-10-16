let cv = document.getElementById('cvdownload')

function download() {
setTimeout(function () {
 Swal.fire(
  'CV télécharger !',
  'Merci et à bientôt',
  'success'
)
}, 1500);

}

cv.addEventListener('click', download);


//TRANSITION ENTRE LES SECTIONS

(function() {
  var delay = false;

  $(document).on('mousewheel DOMMouseScroll', function(event) {
    event.preventDefault();
    if(delay) return;

    delay = true;
    setTimeout(function(){delay = false},200)

    var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

    var a= document.getElementsByTagName('section');
    if(wd < 0) {
      for(var i = 0 ; i < a.length ; i++) {
        var t = a[i].getClientRects()[0].top;
        if(t >= 40) break;
      }
    }
    else {
      for(var i = a.length-1 ; i >= 0 ; i--) {
        var t = a[i].getClientRects()[0].top;
        if(t < -20) break;
      }
    }
    if(i >= 0 && i < a.length) {
      $('html,body').animate({
        scrollTop: a[i].offsetTop
      });
    }
  });
})();

/*
Explications
*/

//https://stackoverflow.com/questions/55601867/how-to-change-section-on-scroll
//https://www.youtube.com/watch?v=J1todp-4YOI&ab_channel=LeDesignerduWeb-%C3%89coleduWeb
//https://www.mathieu-crevoulin.com/