'use strict';


/**Create Observer */
const trigger = document.querySelector('#trigger');
const ob = new IntersectionObserver(showModal);
ob.observe(trigger);

/** Define outer modal wrapper and close it */
const outer = document.querySelector('#outer');
document.querySelector('input[type=button]').addEventListener('click', () => outer.style.display = 'none');

/** Modal Function */
/**
 * 
 * @param {array} el IntersectionObserverEntry
 */
function showModal(el) {
  if(el[0].isIntersecting){
    outer.style.display = 'block';
    document.querySelector('input[type=checkbox]').checked = false;
    document.querySelector('input[type=submit]').disabled = true;
  }
};

/** Agree checkbox and button */
document.querySelector('input[type=checkbox]').addEventListener('click', () => {
  agree.checked ? document.querySelector('input[type=submit]').disabled = false : document.querySelector('input[type=submit]').disabled = true;
});

/** Form submit listener */
const form = document.forms[0];
const premCont = document.querySelector('#premium');
form.addEventListener('submit', handleForm);

/**
 * 
 * @param {event} e the submitEvent
 */
function handleForm(e) {
  e.preventDefault();
  if(agree.checked){
    premium.style.display = 'block';
    premium.setAttribute('id', '');
    ob.unobserve(trigger);
    outer.style.display = 'none';
  } else {
    premium.style.display = 'none';
  }
};
