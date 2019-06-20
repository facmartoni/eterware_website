let allowSubmit = false; 

var captchaFilled = () => {
    allowSubmit = true; 
}

var captchaExpired = () => {
    allowSubmit = false; 
}

var captchaMessage = 'Completá el captcha!'; 

const checkIfCaptchaIsFilled = (event) => {
    if(allowSubmit) sendEmail(event); 
    else{
        event.preventDefault(); 
        Swal.fire({
            position: 'center',
            type: 'warning',
            text: captchaMessage,
            showConfirmButton: false,
            timer: 2000
          })
    }
}