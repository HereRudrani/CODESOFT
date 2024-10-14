

var i = 0;
var txt = 'I am  Rudrani Here, And I can Make high-performing Statics And Dynamics Website';
var speed = 10;

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typing").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
