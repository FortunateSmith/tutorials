
// get the square element and its container
const square = document.querySelector('.square');
const container = document.querySelector('.square-container');

// create varialbes to store initial position and rotation value
let initialX, initialY, currentX, currentY, rotation = 0;

// add mousedown event listener
square-container.addEventListener('mousedown', onMouseDown);

// mousedown event handling function
function onMouseDown(event) {
  // prevent default dragging behaviour
  event.preventDefault();

  // store initial position valus
  initialX = event.clientX;
  initialY = event.clientY;

  console.log(initialX + " x " + initialY)
  // add event listeners for mouseMove and mouseUp
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousemove', onMouseMove);
}

function onMouseUp() {
  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}

function onMouseMove(event) {

  // calculate the distance moved
  const deltaX = event.clientX - initialX;
  const deltaY = event.clientX - initialY;

  // update current position values
  currentX = event.clientX;
  currentY = event.clientY;

  // calculate the rotation value based on the movement
  rotation = Math.atan2(currentY - initialY, currentX - initialX) * (180/ Math.PI);

  // Apply Rotation to the Square //
  container.style.transform = `rotate(${rotation}deg)`;

}
