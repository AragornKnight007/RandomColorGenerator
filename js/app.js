const getColore = ()=>{
    // Hex Code 
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);//16 For HexCode Unit
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText=randomCode;

    navigator.clipboard.writeText(randomCode);

}
//Event Call
document.getElementById("btn").addEventListener(
    "click",getColore
);

//Initial Call
getColore();
