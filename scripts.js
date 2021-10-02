function billingFunction(){
    const check = document.getElementById("same");
    const name = document.getElementById("shippingName");
    const code = document.getElementById("shippingName");
    const blindName = document.getElementById("billingName");
    const blindZip = document.getElementById("billingZip");
    if(check.checked){
        blindName.value = name.value;
        blindZip.value = code.value;        
    } else {
        blindName.value = "";
        blindZip.value = "";        
    }
}
