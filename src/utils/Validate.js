
export const checkValidData =(email,password)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    var isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    // const IsUserName =  /^[a-zA-Z0-9._]+$/.test(UserName);

    if(!isEmailValid) return "Email id is not Valid, Enter correct email id!";
    if(!isPasswordValid) return "Password is not Valid , Try again!";
    // if(!IsUserName) return "Enter your UserName";

    return null;

}
