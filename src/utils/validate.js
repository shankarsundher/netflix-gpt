export const checkValidData = (email, password, name) => {
     
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    

    if (name && !isNameValid) return "Enter your name Ex-Shriya.";
    if (!isEmailValid) return "Please enter a valid email address or phone number.";
    if (!isPasswordValid) return "Your password must contain between 4 and 60 characters.";
    return null;
    // if(!isEmailValid){
    //    return "Please enter a valid email address or phone number."
    // }else if (!isPasswordValid){
    //    return "Your password must contain between 4 and 60 characters."
    // }else{
    //     return null;
    // }
   

}

// export const checkValidatePassword = (password) => {
//     const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//     if (!isPasswordValid) return "Your password must contain between 4 and 60 characters.";
//     return null;
// }
