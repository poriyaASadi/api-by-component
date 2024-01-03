let tampleat = document.createElement('template');
tampleat.innerHTML =  `
<link rel="stylesheet" href="./component/ap.css">
<div class="box">
<div class="Name">
  <h1 class="nameUser"></h1>
  <h3 class="lastNameUser"></h3>
</div>
<div class="about">
 <p class="aboutUser"></p>
 <p>age : <span class="ageUser"></span></p>
</div>
<p class="p-id">id : <span class="idUser"></span></p>
</div>    
`;

class componentMe extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(tampleat.content.cloneNode(true));
    }

    connectedCallback () { 
        this.codeNew('nameUser','userName');
        this.codeNew('lastNameUser','userLast');
        this.codeNew('aboutUser','aboutUser');
        this.codeNew('ageUser','ageUser');
        this.codeNew('idUser','userId');
    //  this.shadowRoot.querySelector('.nameUser').innerHTML =  this.getAttribute('userName');
    //  this.shadowRoot.querySelector('.lastNameUser').innerHTML = this.getAttribute('userLast');
    //  this.shadowRoot.querySelector('.aboutUser').innerHTML = this.getAttribute('aboutUser');
    //  this.shadowRoot.querySelector('.ageUser').innerHTML = this.getAttribute('ageUser');
    //  this.shadowRoot.querySelector('.idUser').innerHTML = this.getAttribute('userId');
    }

    codeNew (classT,attributID) {
        this.shadowRoot.querySelector(`.${classT}`).innerHTML = this.getAttribute(attributID);
    }
} 



export {componentMe}