export default function decorate(block) {
  // Add teaser__image class to image container
  const imageDiv = block.querySelector('div > div:first-child');
  if (imageDiv) {
    imageDiv.classList.add('teaser-image');
  }

  // Add teaser__content class and style content section
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
  }
}
