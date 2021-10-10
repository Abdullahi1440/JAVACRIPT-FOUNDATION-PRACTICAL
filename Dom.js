
document.body.style.background="#ccc";

let passtogler=document.querySelector('#passtogler');
let passwrd=document.querySelector('#password')
// console.log(passwrd.type)
function showpassword(){
  passwrd.type=='password'? passwrd.type='text'
        :passwrd.type='password'

            //ternary operator

    }
    function Hidepassword(){
        passwrd.type=='password'? passwrd.type='text'
                :passwrd.type='password'
        }
passtogler.addEventListener('mousedown',showpassword)

    
passtogler.addEventListener('mouseup',Hidepassword)

mybtn.addEventListener('mouseleave',SHowblack2)



// let containers=document.querySelector('.container')
// // containers.innerHTML='soo dhawaw'
// let btn=document.createElement('button')
// btn.textContent='subscribe'
// btn.style.background='pink'
// containers.appendChild(btn)
// containers.remove(btn)







