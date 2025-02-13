'use strict';

import create from "./index.js";

const slideShow = (images, childContainer) => {
  const slideshowContainer = create(false, 'div', childContainer, 'slideshow-container');
  const imageElement = create(false, 'img', slideshowContainer, 'slideshow-image'); 
  imageElement.setAttribute('src', images[0]);
}

export default slideShow;