const data = document.querySelector("#text");
const qrCode = document.querySelector("#qrCode");
const qrGenerator = document.querySelector("#qrGenerator");

const Url = "https://api.qrserver.com/v1/create-qr-code/";


qrGenerator.addEventListener("click", ()=>{
    const size = `350x350`
    qrCode.src = `${Url}?/size=${size}&data=${data.value}`


    if(data.value ==""){
        qrCode.src = "/def.png"
    }
})