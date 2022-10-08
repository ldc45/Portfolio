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
