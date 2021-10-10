let submitdata=document.querySelector('#submitdata')

let formdata=document.querySelector('#data')
function submitfunc(e){
 e.preventDefault();
formdata.innerHTML=e.target.elements.username.value;
}
submitdata.addEventListener('submit',submitfunc)
