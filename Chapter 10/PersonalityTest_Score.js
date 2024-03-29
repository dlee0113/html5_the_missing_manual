﻿
window.onload = function() {
  var extraversion = Number(getQueryVariable("e"));
  var accommodation = Number(getQueryVariable("a"));
  var conscientiousness = Number(getQueryVariable("c"));
  var neuroticism = Number(getQueryVariable("n"));
  var openness = Number(getQueryVariable("o"));

  // Show the score numbers.
  document.getElementById("headingE").innerHTML += extraversion;
  document.getElementById("headingA").innerHTML += accommodation;
  document.getElementById("headingC").innerHTML += conscientiousness;
  document.getElementById("headingN").innerHTML += neuroticism;
  document.getElementById("headingO").innerHTML += openness;

  // Draw the scores.
  plotScore(document.getElementById("canvasE"), extraversion, "Extraversion");
  plotScore(document.getElementById("canvasA"), accommodation, "Accommodation");
  plotScore(document.getElementById("canvasC"), conscientiousness, "Conscientiousness");
  plotScore(document.getElementById("canvasN"), neuroticism, "Neuroticism");
  plotScore(document.getElementById("canvasO"), openness, "Openness");
};

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
}

function plotScore(canvas, score, title) {
  var context = canvas.getContext("2d");

  // Draw the arrows on the side of the chart line.
  var img = document.getElementById("arrow_left");

  context.drawImage(img, 12, 10);
  img = document.getElementById("arrow_right");
  context.drawImage(img, 498, 10);

  // Draw the line between the arrows.
  context.moveTo(39,25);
  context.lineTo(503,25);
  context.lineWidth = 10;
  context.strokeStyle = "rgb(174,215,244)";
  context.stroke();

  // Write the numbers on the scale.
  context.fillStyle = context.strokeStyle;
  context.font = "italic bold 18px Arial";
  context.textBaseline = 'top';

  context.fillText("-20", 35, 50);
  context.fillText("0", 255, 50);
  context.fillText("20", 475, 50);

  // Add the star to show where the score ranks on the chart.
  img = document.getElementById("star");
  context.drawImage(img, (score+20)/40*440+35-17, 0);
}
