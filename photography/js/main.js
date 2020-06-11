// Animate Smooth Scroll
 $('#dive-deeper').on('click', function() {
   const images = $('#images').position().top;

   $('html, body').Animate(
     {
       ScrollTop: images
     },
     1000
   );
});
