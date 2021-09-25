var images = [];

    function preloadAllImages() {
        // get the src of all images in docuemnt and then preload them
        for(var i = 0; i < images.length; i++) {
            var img = new Image();
            img.src = images[i].src;
        }
        console.log('Preloading completed!')
    }

    function yourRollOverfunction() {
        // i don't understand what you want to do here
        // but whatever you want to be done on rollover,
        // can be mentioned here.
    }

    window.onload = function() {
        // find all images in document
        images = document.getElementsByTagName('img');


        preloadAllImages();

        // attach a rollover function to all the images:
        for(var i = 0; i < images.length; i++) {
            // attach rollover function
            images[i].addEventListener("mouseover", yourRollOverfunction);
        }
    };