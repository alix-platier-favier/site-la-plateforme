window.addEventListener('scroll', () => {document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 100)})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
  });


function initMap() {
    // Coordonnées du lieu à marquer
    var myLatLng = {lat: 43.296174, lng: 5.369952};

    // Création de la carte
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 15
    });

    // Ajout du marqueur
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ecole La Plateforme'
    });
}