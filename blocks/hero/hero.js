import { createOptimizedPicture } from '../../scripts/aem.js';
import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  // Add classes to hero sections
  const [backgroundDiv, imageDiv, contentDiv] = block.children;
  backgroundDiv.classList.add('hero-background');
  imageDiv.classList.add('hero-image'); 
  contentDiv.classList.add('hero-content');

  // Create button container
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  // Create Where to play button
  const whereToPlayBtn = document.createElement('a');
  whereToPlayBtn.href = '#';
  whereToPlayBtn.classList.add('button', 'secondary');
  whereToPlayBtn.textContent = 'Where to play';

  // Create Learn more button
  const learnMoreBtn = document.createElement('a');
  learnMoreBtn.href = '#';
  learnMoreBtn.classList.add('button', 'primary');
  learnMoreBtn.textContent = 'Learn more';

  // Add buttons to container
  buttonContainer.append(whereToPlayBtn, learnMoreBtn);
  contentDiv.append(buttonContainer);

}