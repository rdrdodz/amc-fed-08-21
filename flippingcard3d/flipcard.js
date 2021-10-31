(function () {
  var card = document.querySelector('.card');
  var cardCover = document.querySelector('.card-cover');
  var cardContents = document.querySelector('.card-contents');
  var img = document.querySelector('.card-cover img');
  var imgCmp;
  var imgCmpHeight;
  var coverBack = document.querySelector('.cover-back');

  function computeSizes() {
    var imgCmp = window.getComputedStyle(img);
    var imgCmpHeight = imgCmp.getPropertyValue('height');
    cardContents.style.height = imgCmpHeight;
    coverBack.style.height = imgCmpHeight;
  }

  window.addEventListener('load', computeSizes);
  window.addEventListener('resize', computeSizes);

})();
