'use strict';

import create from "./index.js";

const resume = (mySubcontent, childContainer) => {
  const grandchildContainer = create(false, 'div', childContainer, 'container');
  create(`Ort: ${mySubcontent.place}`, 'p', grandchildContainer);
  create(`Zeitraum: ${mySubcontent.duration}`, 'p', grandchildContainer);
  create(`Niveau: ${mySubcontent.level}`, 'p', grandchildContainer);
}

export default resume;