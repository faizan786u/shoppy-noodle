const imageSlider = (currentImg) => {
    document.querySelector('.starbucks').src = currentImg;
}

//Handle circle color
const changeCircleColor = (color) => {
    document.querySelector('.circle').style.background = color;
}
//Handle <span>, .social, .circle tag color
document.getElementById("changeyellow").onclick = function(){
  document.getElementById("output").style.color = '#110f10';
  document.getElementById("social").style.background = '#110f10';
  document.getElementById("learnmore").style.background = '#110f10';
  document.querySelector('.starbucks').src ="1.png";
    document.querySelector('.circle').style.background = '#110f10';
}

document.getElementById("changeGreen").onclick = function(){
	document.getElementById("output").style.color = '#fcbd16';
	document.getElementById("social").style.background = '#fcbd16';
	document.getElementById("learnmore").style.background = '#fcbd16';
	document.querySelector('.starbucks').src ="2.png";
    document.querySelector('.circle').style.background = '#fcbd16';
}

document.getElementById("changePink1").onclick = function(){
	document.getElementById("output").style.color = '#f6b6d0';
	document.getElementById("social").style.background = '#f6b6d0';
	document.getElementById("learnmore").style.background = '#f6b6d0';
	document.querySelector('.starbucks').src ="3.png";
    document.querySelector('.circle').style.background = '#f6b6d0';
}

//Handle menu button
// const toggleMenu = () => {
//     const menuToggle = document.querySelector('.toggle');
//     const navigation = document.querySelector('.navigation');

//     menuToggle.classList.toggle('active');
//     navigation.classList.toggle('active');
// }
// // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }