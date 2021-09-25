var images = [];

    function preloadAllImages() {
        // get the src of all images in docuemnt and then preload them
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

    preloadAllImages();

    function bigImg(x) {
        x.style.height = "400px";
        x.style.width = "600px";
      }
      
      function normalImg(x) {
        x.style.height = "130px";
        x.style.width = "180px";
      }