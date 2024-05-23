function translateToEnglish() {
  // Change text to English
  document.getElementById("title").textContent =
    "Djib Foot Canada - Djiboutian Diaspora in Canada";
  document.getElementById("titlePage1").textContent =
    "Djiboutian's Diaspora Championship Cup in Montreal";
  document.getElementById("titlePage2").textContent =
    "Djiboutian's Diaspora Championship Cup in Montreal";
  document.getElementById("titlePage3").textContent =
    "Djiboutian's Diaspora Championship Cup in Montreal";
  document.getElementById("titlePage4").textContent =
    "Djiboutian's Diaspora Championship Cup in Montreal";
  document.getElementById("titlePage5").textContent =
    "Djiboutian's Diaspora Championship Cup in Montreal";
  document.getElementById("titlePage6").textContent =
    "Djiboutian's Diaspora Championship Cup in Montreal";

  document.getElementById("titlePageComment1").textContent =
    "The highly anticipated summer event of the Djiboutian diaspora soccer tournament in Montreal is about to kick off! ";
  document.getElementById("titlePageComment2").textContent =
    "Get ready to experience thrilling moments of competition, camaraderie, and community pride.";
  document.getElementById("titlePageComment3").textContent =
    "Stay tuned for more details on registration and participation!";

  /* document.getElementById("menu1").textContent = "Home";
console.log("Translation to English");
console.log(document.getElementById("menu1")); */

  console.log("Translating to English");
  console.log(document.getElementById("navHome").textContent); // Log original text
  document.getElementById("navHome").textContent = "Home (English)"; // Replace text
  console.log(document.getElementById("navHome").textContent); // Log modified text
  // Repeat this for other elements

  document.getElementById("navReg").textContent = "Registration";
  document.getElementById("navMatches").textContent = "Matches";
  document.getElementById("navTeam").textContent = "Team";
  document.getElementById("navAbout").textContent = "About";
  document.getElementById("navContact").textContent = "Contact";
}

function translateToFrench() {
  // Change text to French
  document.getElementById("title").textContent =
    "Djib Foot Canada - Diaspora Djiboutienne au Canada";
  document.getElementById("titlePage1").textContent =
    "Championnat de Foot Diaspora djiboutienne à Montréal";
  document.getElementById("titlePage2").textContent =
    "Championnat de Foot Diaspora djiboutienne à Montréal";
  document.getElementById("titlePage3").textContent =
    "Championnat de Foot Diaspora djiboutienne à Montréal";
  document.getElementById("titlePage4").textContent =
    "Championnat de Foot Diaspora djiboutienne à Montréal";
  document.getElementById("titlePage5").textContent =
    "Championnat de Foot Diaspora djiboutienne à Montréal";
  document.getElementById("titlePage6").textContent =
    "Championnat de Foot Diaspora djiboutienne à Montréal";
  document.getElementById("titlePageComment1").textContent =
    "L'événement estival tant attendu du tournoi de soccer de la diaspora djiboutienne à Montréal est sur le point de démarrer!";
  document.getElementById("titlePageComment2").textContent =
    "Préparez-vous à vivre des moments de compétition passionnants, de camaraderie et de fierté communautaire.";
  document.getElementById("titlePageComment3").textContent =
    "Restez à l'écoute pour plus de détails sur l'inscription et la participation!";

  /* document.getElementById("menu1").textContent = "Accueil";
console.log("Translation to French");
console.log(document.getElementById("menu1")); */

  console.log("Translating to French");
  console.log(document.getElementById("navHome").textContent); // Log original text
  document.getElementById("navHome").textContent = "Accueil (French)"; // Replace text
  console.log(document.getElementById("navHome").textContent); // Log modified text
  // Repeat this for other elements

  document.getElementById("navReg").textContent = "Inscription";
  document.getElementById("navMatches").textContent = "Matches";
  document.getElementById("navTeam").textContent = "Équipe";
  document.getElementById("navAbout").textContent = "À propos";
  document.getElementById("navContact").textContent = "Contact";
}
