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

//https://stackoverflow.com/questions/55601867/how-to-change-section-on-scroll
//https://www.youtube.com/watch?v=J1todp-4YOI&ab_channel=LeDesignerduWeb-%C3%89coleduWeb
//https://www.mathieu-crevoulin.com/