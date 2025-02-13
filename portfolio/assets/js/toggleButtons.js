'use strict';

export let togglingActive = { value: true };
const createNumber = (min, max) => ~~(Math.random() * (max - min + 1) + min); 

  const toggleButtons = (loadBtnDiv, btnLoadRef, btnEnlargeRef) => {
    if (!togglingActive.value) return; 

    loadBtnDiv.innerHTML = '';
    loadBtnDiv.append(btnLoadRef); //Ursprüngliche Schaltfläche zuerst anzeigen

    const randomDuration = createNumber(1, 5) * 1000; 

    setTimeout(() => {
      if (!togglingActive.value) return; 

      loadBtnDiv.innerHTML = '';
      loadBtnDiv.append(btnEnlargeRef); //Nach belibige duaer zur große Schaltfläche umschalten

      setTimeout(() => {
        if (!togglingActive.value) return; 

        toggleButtons(loadBtnDiv, btnLoadRef, btnEnlargeRef); //Nach 500ms zur Ursprüngliche Schaltfläche umschalten
      }, 500); 
    }, randomDuration);
  };

export default toggleButtons;