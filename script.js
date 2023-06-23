// Toggle mobile navigation
$(".burger").click(function () {
    $(".nav-links").slideToggle("slow");
  });
  
  // Close mobile navigation on link click
  $(".nav-links li a").click(function () {
    if ($(window).width() < 768) {
      $(".nav-links").slideUp();
    }
  });