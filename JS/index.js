var images = [];
    var currentBannerImg = 0;
    var pause = false;

    function preloadAllImages() {
        // Preload function
        for(var i = 0; i < images.length; i++) {
            var img = new Image();
            img.src = images[i].src;
        }
    }
    function cycleBanner() {

        // if paused, then don't do anything
        if(!pause) {
            // First hide all banner images
            for(var i = 0; i < images.length; i++) {
                images[i].style.display = "none";
            }
            currentBannerImg++;
            if(currentBannerImg == images.length) {
                currentBannerImg = 0;
            }
            images[currentBannerImg].style.display = "block";

            console.log('Cycling through banner images')
        }

        // Cycle for 3 seconds
        setTimeout(cycleBanner, 3000);
    }

    window.onload = function() {
        // Onload function for preloading
        images = document.getElementById('bannerImages').getElementsByTagName('img');

        preloadAllImages();
        cycleBanner();

        document.getElementById('bannerImages').onmouseover = function(e) {
            pause = true;
            console.log('pausing')
        };
        document.getElementById('bannerImages').onmouseout = function(e) {
            pause = false;
            console.log('resuming')
        };

    };

    