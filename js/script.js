document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll(".nav-link");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(e) {
        e.preventDefault();
  
        var target = document.querySelector(this.getAttribute("href"));
        var offset = target.offsetTop - 60; // Adjust for the navbar height
  
        window.scrollTo({
          top: offset,
          behavior: "smooth"
        });
      });
    });
  });
  