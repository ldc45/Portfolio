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

cv.addEventListener('click', download)


let sections = document.getElementsByTagName('section');
// tracks index of current section
let currentSectionIndex = 0;

document.addEventListener('wheel', e => {
  if (e.wheelDeltaY > 0 && currentSectionIndex - 1 >= 0) {
    // wheel up
    sections[currentSectionIndex].className = '';
    currentSectionIndex--;
    sections[currentSectionIndex].className = 'active';
  } else if (e.wheelDeltaY < 0 && currentSectionIndex + 1 < sections.length) {
    // wheel down
    sections[currentSectionIndex].className = '';
    currentSectionIndex++;
    sections[currentSectionIndex].className = 'active';
  }
});

//https://stackoverflow.com/questions/55601867/how-to-change-section-on-scroll
//https://www.youtube.com/watch?v=J1todp-4YOI&ab_channel=LeDesignerduWeb-%C3%89coleduWeb
//https://www.mathieu-crevoulin.com/