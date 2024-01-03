 import { componentMe } from "./component/main.js";
 window.customElements.define('box-user' , componentMe);

 const content = document.querySelector('.contentn')
const clickUser = document.querySelector('.click')

window.addEventListener('load' , () => {
    requstApi()
     
})

function requstApi () {
  fetch('http://randomuser.me/api/')
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }else{
            new Error('sorrey men the res is not requst')
        }
          })
        .then(data => creatBox(data))
}

function creatBox (data) {
  content.insertAdjacentHTML('afterbegin' , `
    <box-user userName="${data.results[0].name.first}"
    userLast="${data.results[0].name.last}"
    aboutUser="${data.results[0].location.country}"
    ageUser="${data.results[0].dob.age}"
    userId="${data.info.page}">
    </box-user>
  `)
}


clickUser.addEventListener('click' , () => requstApi())
