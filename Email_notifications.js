function sendNotification(email) {
    const separet = email.split("@");
    let user = separet[0];
    let domain = separet[1];

    if (email.indexOf('@') !== -1){
        return user + " sent you an email from " + domain;
    }
    else{
        return "Invalid Email" 
    }
}