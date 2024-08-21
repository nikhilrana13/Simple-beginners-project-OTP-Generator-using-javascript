const generateotp = document.getElementById("btn");
const otpbox = document.getElementById("otpbox");






const Otplength = 6;


generateotp.addEventListener('click',()=>{
    let Otp = '';
        for (let i = 0; i < Otplength; i++){
         Otp += Math.floor(Math.random()* 10)
    }
    otpbox.textContent= Otp;
});




