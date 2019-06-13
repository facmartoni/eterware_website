let allowSubmit = false; 

var captchaFilled = () => {
    allowSubmit = true; 
}

var captchaExpired = () => {
    allowSubmit = false; 
}

const checkIfCaptchaIsFilled = (event) => {
    if(allowSubmit) sendEmail(); 
    else{
        event.preventDefault(); 
        Swal.fire({
            position: 'center',
            type: 'warning',
            text: 'Completá el captcha!',
            showConfirmButton: false,
            timer: 2000
          })
    }
}