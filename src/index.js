const btnEncode= document.getElementById("buttonEncode");
const btnDecode= document.getElementById("buttonDecode");
const btnClear= document.getElementById("buttonClear");

btnEncode.addEventListener("click", function(){

    let offset = parseInt(document.getElementById("offset").value);
    console.log(offset);

    let message = document.getElementById("message").value;
    console.log(message);

    result.innerHTML=window.cipher.encode(offset, message);
});

btnDecode.addEventListener("click", function(){

    let offset = parseInt(document.getElementById("offset").value);
    console.log(offset);

    let message = document.getElementById("message").value;
    console.log(message);

    result.innerHTML=window.cipher.decode(offset, message);
});