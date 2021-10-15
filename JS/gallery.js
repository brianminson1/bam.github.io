var images = [];

    function preloadAllImages() {
        // Preload function for the iamges
        for(var i = 0; i < images.length; i++) {
            var img = new Image();
            img.src = images[i].src;
        }
    }
    preload(
        "event.jpg",
        "firefighter.jpg",
        "silhouette.jpg",
        "work.jpg"
    )

    window.onload = function() {
        // Onload function for the preload
        images = document.getElementById('galleryimages').getElementsByTagName('img');
        preloadAllImages();
    }

    function bigImg(x) {
        // mouseover function added to html
        x.style.height = "400px";
        x.style.width = "600px";
      }
      
      function normalImg(x) {
        x.style.height = "130px";
        x.style.width = "180px";
      }