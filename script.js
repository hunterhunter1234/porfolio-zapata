function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
    // Toggle scroll-up icon visibility based on scroll position
    window.onscroll = function() {
        var scrollUpContainer = document.getElementById("scrollUpContainer");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          scrollUpContainer.style.display = "block";
        } else {
          scrollUpContainer.style.display = "none";
        }
      };