//hambuger selecter
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Video Player
let listVideo = document.querySelectorAll(".video_list .vid");
let mainVideo = document.querySelector(".main_video video");
let title = document.querySelector(".main_video .title");
//let selected = document.querySelector(".vid");

listVideo.forEach((video) => {
  video.onclick = () => {
    listVideo.forEach((vid) => {
      vid.classList.remove("active");
      //resetting background color
      vid.style.background = "";
    });
    video.classList.add("active");
    if (video.classList.contains("active")) {
      let src = video.children[0].getAttribute("src");
      mainVideo.src = src;
      let text = video.children[1].innerHTML;
      title.innerHTML = text;
      //Adding red to selected video
      video.style.background = "red";
    }
  };
});
