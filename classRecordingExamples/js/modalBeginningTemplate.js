modal();

function modal() {
  const CLOSE = document.querySelector('#close');
  const BOXOUT = document.querySelector('#modalOuterBox');
  const BTN = document.querySelector('button');
  const A = document.querySelector('a');

  CLOSE.addEventListener('click', () => modalOuterBox.style.display = 'none');

  BOXOUT.addEventListener('click', function(e){
    // console.log(e); logs the current click event
    if(e.target.matches('#modalOuterBox')) {
      modalOuterBox.style.display = 'none';
    }
  });

  BTN.addEventListener('click', function(){
    const btnText = this.textContent;
    // BOXIN.textContent = btnText;
    showModal(btnText);
  })

  A.addEventListener('click', function(e){
    e.preventDefault();
    const linkText = this.textContent;
    showModal(linkText);
  })
};

function showModal(modalText){
  const BOXOUT = document.querySelector('#modalOuterBox');
  const BOXIN = document.querySelector('#modalContent');
  const oldData = document.querySelector('[data-desc=content]')
  oldData ? oldData.remove() : null;
  const PARA = document.createElement('p');
  PARA.setAttribute('data-desc', 'content');
  PARA.textContent = modalText;
  BOXIN.appendChild(PARA);
  BOXOUT.style.display = 'block';
};