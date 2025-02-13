'use strict';

import create from "./index.js";

const references = (refDetail, parentContainer) => {
  const referenceDiv = create(false, 'div', parentContainer, 'container');
  create(`Name: ${refDetail.names}`, 'p', referenceDiv);
  create(`Position: ${refDetail.position}`, 'p', referenceDiv);
  create(`Email: ${refDetail.email}`, 'p', referenceDiv);
  create(`Phone: ${refDetail.phone}`, 'p', referenceDiv);
  create(`Relationship: ${refDetail.relationship}`, 'p', referenceDiv);
}

export default references;