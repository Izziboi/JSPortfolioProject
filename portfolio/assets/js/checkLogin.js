'use strict';

import { loadData } from "./index.js";

export const usernameElement = document.querySelector('#usernameInput');
export const passwordElement = document.querySelector('#passwordInput');
export let isActive = true; 

//Zugangsformular aktivieren
export let checkLogin = (togglingActive, loadBtnDiv, btnLoadRef) => {
  btnLoadRef.addEventListener('click', () => {
    
    if (usernameElement.value !== '' && passwordElement.value !== '') {
      if (usernameElement.value === 'username' && passwordElement.value === 'password') { //Wenn Zugang Daten richtig sind
        
        if (isActive) {
          usernameElement.value = '';
          passwordElement.value = '';
          
          //Nach erfolgreicher Anmeldung nicht mehr hin- und herschalten
          togglingActive.value = false; 
          loadBtnDiv.innerHTML = '';
          loadBtnDiv.append(btnLoadRef); 
          
          loadData(); 
          isActive = false; //Mehrfache Anmeldung verhindern
        } 
      } else {
        alert('Ungültige Zugangdaten!');
      }  
    } else {
      alert('Leere Felder ausfüllen!');
    }
  });
};
