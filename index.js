var menuicon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuicon.onclick = function()
{
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}



//    -------------------------------------------------------------------------------------------------------------------------



const videos = document.querySelectorAll("video")

videos.forEach(video => {
  video.addEventListener("mouseover", function () {
    this.play()
  })
  
  video.addEventListener("mouseout", function () {
    this.pause()
  })
  
  video.addEventListener("touchstart", function () {
    this.play()
  })
  
  video.addEventListener("touchend", function () {
    this.pause()
  })
})


// -----------------------555555555-5555555555555555--------------5555555555555--55555555555555555555---------------



