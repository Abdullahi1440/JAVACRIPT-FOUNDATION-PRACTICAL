let lead=document.body.querySelector('#togglebtn');

lead.addEventListener('mouseup',function(){
    let body=document.body;

    body.classList.toggle('darkMode')
     console.log(body.classList)
})
