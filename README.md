# ak-lab
            (------JavaScript for the slides in index.html------)
At first we set the variable that is, currentImageIndex to the value of "0". Basically it will help in keeping the track of the images that I have provided. After this, I have defined an array, "images" along with that are the image file paths that are from the image folder. 7 image file paths have been provided. Now in-order to change the slide we firstly need to set a time intervel. "const intervel = 3000" would simply set the time intervel to 3 seconds. Now the script will be able to change the photos every 3 seconds but for this to work, a function named changeImage is created. Now to cycle between the 7 given images, we set the source of an HTML element to the images specified in the array we made. After 3 seconds the first array will be updated to move on to the next array containg the second picture (array number 1 according to js language). Once at the last array it will wrap back at the beginning thus creating a loop.





