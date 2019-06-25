   $(document).ready(function(){
       $('.hm-menu').click(function(){
        $('.hm-menu span').toggleClass('active');
        $('header').toggleClass('active');
        $('header').removeClass('activex');
      });
       $('.right a').click(function(){
        $('.hm-menu span').removeClass('active');
        $('header').removeClass('active');
        $('header').addClass('activex');
      });
     });
   

   // Extra: Button to toggle the overlay and see the difference.

$("button").on("click", function(){
   $("body").toggleClass("has-overlay");
});

//for search button click to next page
function searchFunc(){
  window.location.href="searchpage.html"
}



















