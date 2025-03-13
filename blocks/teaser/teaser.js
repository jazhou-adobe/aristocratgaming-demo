export default function decorate(block) {
  // Add teaser-image class to image container
  const imageDiv = block.querySelector('div > div:first-child');
  if (imageDiv) {
    imageDiv.classList.add('teaser-image');
  }

  // Add teaser-content class and style content section
  const contentDiv = block.querySelector('div:nth-child(2)');
  if (contentDiv) {
    contentDiv.classList.add('teaser-content');

    // Add classes to content elements
    const subtitle = contentDiv.querySelector('h4');
    if (subtitle) {
      subtitle.classList.add('teaser-subtitle');
    }

    const title = contentDiv.querySelector('h3');
    if (title) {
      title.classList.add('teaser-title');
    }

    const description = contentDiv.querySelector('p');
    if (description) {
      description.classList.add('teaser-description');
    }
    
    // Move link element into content div
    const linkDiv = block.querySelector('div:last-child div');
    if (linkDiv) {
      linkDiv.classList.add('teaser-link');
      contentDiv.querySelector('div').appendChild(linkDiv);
    }
  }

  // Remove the now empty last div (original link container)
  const lastDiv = block.querySelector('div:last-child');
  if (lastDiv && lastDiv.children.length === 0) {
    lastDiv.remove();
  }
}