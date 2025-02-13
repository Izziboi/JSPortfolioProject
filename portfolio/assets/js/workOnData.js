'use strict';

import create from "./index.js";
import slideShow from "./slideShow.js";
import resume from "./resume.js";
import references from "./references.js";

const workOnData = (dataContent) => {
  const elements = {};
  elements.nav = document.querySelector('nav'); 
  elements.nav.innerHTML = ''; 

  const containers = []; //Um Elemente zu sparen

  for (let myData of dataContent.personalData) {

    const parentContainer = create(false, 'div', document.body, 'container');
    containers.push(parentContainer); //Spare jeden Container für verstecken
    parentContainer.style.display = 'none'; //Anfänglich alle Container verstecken

    create(myData.heading, 'h3', parentContainer); //Überschrift anhängen

    //Erzeugt neuen nav Knöpfe
    const btnElement = document.createElement('button');
    btnElement.setAttribute('class', 'navButton');
    btnElement.innerHTML = myData.heading.substring(0, 12);

    //Erzeugt neuen div Elemente und anhängt die Knöpfe in der div Elemente
    const btnDivElement = document.createElement('div');
    btnDivElement.setAttribute('class', 'btnDiv');
    btnDivElement.append(btnElement); 
    elements.nav.append(btnDivElement);

    btnElement.addEventListener('click', () => {
      //Zuerst verstecke alle Container
      containers.forEach((container) => {
        container.style.display = 'none';
      });

      //Zeige dem ausgewählten Container
      parentContainer.style.display = 'block';

      //Sanftes Scrollen in die Ansicht
      parentContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    //Wenn 'myData.content' viele Elemente hat, hole die Bildpfade
    if (Array.isArray(myData.content)) {
      const images = myData.content.filter(
        (item) => typeof item === 'string' && item.endsWith('.png')
      );

      const childContainer = create(false, 'div', parentContainer, 'container newContainer');

      if (images.length > 0) {
        slideShow(images, childContainer);//Ruft 'slideShow() Funktion von slideShow.js auf'
      }
      
      for (let myContent of myData.content) { //Schleift durch 'myData.content' um 'subheading' zu holen

        if (myContent.subheading) {
          create(myContent.subheading, 'h4', childContainer);
        }

        if (Array.isArray(myContent.subcontent)) {
          for (let mySubcontent of myContent.subcontent) {
            resume(mySubcontent, childContainer); //Ruft 'resume()' Funktion von 'resume.js' auf
          }
        }
      }
    } else if (typeof myData.content === 'object' && myData.content !== null) {
      references(myData.content, parentContainer); //Ruft 'references()' Funktion von 'references.js' auf
    } else if (!Array.isArray(myData.content)) { //Die rest 'content' Inhälte, die weder Array noch Object sind
      const parentDiv = create(false, 'div', parentContainer, 'container');
      create(myData.content, 'p', parentDiv);
    }
  }
};

export default workOnData;