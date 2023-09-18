// Create function with set interval so the images will randomly change

let bgImg = [
  "./resources/images/pokeball.jpg",
  "./resources/images/pokemon-group.jpg",
  "./resources/images/evil-pokemon.jpg",
];

const backgroundImg = document.querySelector(".bg-image"); // Access the DOM body element

function showChangeImg() {
  const bgImgRandoIndex = Math.floor(Math.random() * bgImg.length); // random images choosen
  //   Access the random pokemon images by index
  const randoImage = bgImg[bgImgRandoIndex];
//   setting the random background images
backgroundImg.style.backgroundImage = `url('${randoImage}')`;
}
setInterval(showChangeImg, 2000); // time delay for each images
