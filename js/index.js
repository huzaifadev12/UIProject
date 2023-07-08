function toggleHamburger() {

    $("#toggler").click(function () {
        if ($('.navbar-items').hasClass('hide')) {
            $('.navbar-items').addClass('show');
            $('.navbar-items').removeClass('hide');
        } else {

            $('.navbar-items').addClass('hide');
            $('.navbar-items').removeClass('show');
        }
        return;
    });
}
document.onload = toggleHamburger();

function changeHeadingText() {
    var heading = document.getElementById("rev-heading");
    var detail=document.getElementById('kit-detail');
    if (window.innerWidth < 720) {
      heading.textContent = "Testimonials";
      detail.textContent="Most calendars are designed for teams";
    } else {
      heading.textContent = "People are diggin's in";
      detail=textContent="Most calendars are designed for teams. Slate is designed for freelancers";
    }
  }

  // Call the function initially and on window resize
  window.addEventListener("load", changeHeadingText);
  window.addEventListener("resize", changeHeadingText);
