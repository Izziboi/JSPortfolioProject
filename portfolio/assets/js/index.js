'use strict';

import workOnData from "./workOnData.js";
import toggleButtons, {togglingActive} from "./toggleButtons.js";
import {checkLogin} from "./checkLogin.js";

//Vorlage zum Erstellen von DOM-Elementen
const create = (
  content = false,
  type = 'div',
  parent = false,
  className = false
) => {
  const el = document.createElement(type);
  if (content) el.innerHTML = content;
  if (className) el.className = className;
  if (parent) parent.append(el);
  
  return el;
}

export default create;


//Überprüfung des Status der Antwort
const handleLoaded = evt => {
  let xhr = evt.target;

  if(xhr.status == 200) {
    workOnData(JSON.parse(xhr.response));
  } else {
    console.warn(`${xhr.responseURL} könnte nicht geladen werden. Grund: ${xhr.statusText}`);
  }
}



//Zugangsformular erstellen
export const loadData = () => {
  //Verbindung mit JSON-Datei herstellen
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '../../data/persDaten.json', true); 
  xhr.addEventListener('load', handleLoaded);
  xhr.send();
}


const loadBtnDiv = document.createElement('div');
loadBtnDiv.setAttribute('class', 'loadBtnDiv');
document.body.append(loadBtnDiv);

const init = () => {
  //Eine (große) Schaltfläche erstellen
  const btnEnlargeRef = document.createElement('button');
  btnEnlargeRef.setAttribute('class', 'btnEnlarge');
  btnEnlargeRef.textContent = 'Klick Mich';

  const btnLoadRef = document.querySelector('.btnLoad'); //Ursprüngliche Schaltfläche
  const loadBtnDiv = document.querySelector('.loadBtnDiv'); //<div> der ursprünglichen Schaltfläche
  loadBtnDiv.append(btnLoadRef);

  toggleButtons(loadBtnDiv, btnLoadRef, btnEnlargeRef); //toggleButtons() Aufruf

  checkLogin(togglingActive, loadBtnDiv, btnLoadRef); //checkLogin() Aufruf
};


init();



    