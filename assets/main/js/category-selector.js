var catsel = document.getElementById('catsel');
function switchVisible() {
  catsel.classList.toggle('switched');
}
document.getElementById('catsel-next').addEventListener('click', switchVisible);

#catsel > :last-child {
  display: none;
}
#catsel.switched > :last-child {
  display: block;
}
#catsel.switched > :first-child {
  display: none;
}