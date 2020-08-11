let name = document.querySelector("#name")
name.addEventListener("blur" , nameValide)

let zip = document.querySelector('#zip');
zip.addEventListener('blur' , zipValide);

let email = document.querySelector("#email");
email.addEventListener("blur" , emailValide);

let phone = document.querySelector("#phone")
phone.addEventListener("blur" , phoneValide )



function nameValide(e){
    let res = /^[a-zA-Z]{2,15}$/;
    if(res.test(e.target.value)){
        e.target.classList.remove('is-invalid') 
        e.target.classList.add('is-valid')
    }else{
        e.target.classList.add('is-invalid') 
        e.target.classList.remove('is-valid')
    }
}

function zipValide(e){
    let res = /^[\d]{5}\-?[\d]{5}$/;
    if(res.test(e.target.value)){
        e.target.classList.remove('is-invalid') 
        e.target.classList.add('is-valid')
    }else{
        e.target.classList.add('is-invalid') 
        e.target.classList.remove('is-valid')
    }
}



function emailValide(e){
    let res = /^[\w\-?\.?]+@[a-zA-Z]+\.[a-zA-Z]{2,5}$/;
    if(res.test(e.target.value)){
        e.target.classList.remove('is-invalid') 
        e.target.classList.add('is-valid')
    }else{
        e.target.classList.add('is-invalid') 
        e.target.classList.remove('is-valid')
    }
}

function phoneValide(e){
    let res = /^\+[\d]{2}\s[\d]{3}\s[\d]{5}$/;
    if(res.test(e.target.value)){
        e.target.classList.remove('is-invalid') 
        e.target.classList.add('is-valid')
    }else{
        e.target.classList.add('is-invalid') 
        e.target.classList.remove('is-valid')
    }
}

let btn = document.querySelector(".btn" ).addEventListener('click', e =>{
    let inputInvalid = document.getElementsByClassName("is-invalid");
    let input = document.querySelector('input');
    if(input.value == ""){
        alert('The form is empety')
    }else{
    if(inputInvalid.length > 0){
        e.preventDefault();
        alert("You shuld fill the form")
    }else{
        alert("The form is complate")
    }
}
})
