

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  
  menu.classList.toggle('visible1');
});
  function changeIcon() {
    // Get the icon element
    var iconElement = document.getElementById('changeIcon');

    // Check the current class or icon
    if (iconElement.classList.contains('bi-stack')) {
      // Change to a different icon class
      iconElement.classList.remove('bi-stack');
      iconElement.classList.add('bi-x-lg');
    } else {
      // Change back to the original icon class
      iconElement.classList.remove('bi-x-lg');
      iconElement.classList.add('bi-stack');
    }
}