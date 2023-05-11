const link = document.getElementById('svgp');
const element = document.getElementById('particles-js');
let parent = element.parentNode;
let isRemoved = false;

link.addEventListener('click', () => {
  if (isRemoved) {
    parent.insertBefore(element, parent.firstChild);
    isRemoved = false;
  } else {
    parent.removeChild(element);
    isRemoved = true;
  }
});
