window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnScrollToTop").style.display = "block"; /* Affiche le bouton lorsque l'utilisateur descend de 20 pixels depuis le sommet de la page */
  } else {
    document.getElementById("btnScrollToTop").style.display = "none"; /* Cache le bouton si l'utilisateur est en haut de la page */
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; /* Pour les navigateurs qui ne prennent pas en charge document.documentElement.scrollTop */
  document.documentElement.scrollTop = 0; /* Pour les navigateurs qui prennent en charge document.documentElement.scrollTop */
}