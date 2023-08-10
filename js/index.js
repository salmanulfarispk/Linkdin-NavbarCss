function sendMail(){
    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };
    const serviceID="service_tdqx6jm";
    const templateID="template_gyn9lsf"
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
    
            console.log(res);
            alert("Message sents succesfully");
    
        }
    
    )
    .catch(err=>console.log(err));

    }