const form = document.forms["register-form"];

form.addEventListener("submit", (event) =>
{
    event.preventDefault();

    let uid = form["uid"];
    let pwd = form["pwd"];
    let name = form["name"];
    let addr = form["addr"];
    let country = form["country"];
    let zip = form["zip"];
    let email = form["email"];
    let sex = form["sex"];
    let lang = form["lang"];
    let bio = form["bio"];

    document.getElementById("err-uid").textContent = ValidateUserID(uid.value);
    document.getElementById("err-pwd").textContent = ValidatePassword(pwd.value);
    document.getElementById("err-name").textContent = ValidateName(name.value);
    document.getElementById("err-country").textContent = ValidateCountry(country.value);
    document.getElementById("err-zip").textContent = ValidateZIP(zip.value);
    document.getElementById("err-email").textContent = ValidateEmail(email.value);
    document.getElementById("err-sex").textContent = ValidateSex(sex.value);
    document.getElementById("err-lang").textContent = ValidateLanguage(lang.value);
});
function ValidateUserID(value){
    if(/^\s*$/.test(value)){
        return "User ID is required."
    }
    if (!/.{3,12}/.test(value)){
        return "User ID should be between 3 and 12 characters.";
    }
    if (!/^[A-Z]*/.test(value)){
        return "User ID should start with a capital letter.";
    }
    if (!/[^a-zA-Z]$/.test(value)){
        return "User ID should end with a number or special character.";
    }
    return "Looks good!"
}
function ValidatePassword(value){
    if(/^\s*$/.test(value)){
        return "Password is required."
    }
    if (!/.{12,}/.test(value)){
        return "Password should be at least 12 characters long, but 14 or more is better."
    }
    if (!/^\S*$/.test(value)){
        return "Password should be a combination of uppercase letters, lowercase letters, numbers, and symbols."
    }
    return "Looks good!"
}
function ValidateName(value){
    if(/^\s*$/.test(value)){
        return "Name is required."
    }
    if (!/^[A-Za-z]*$/.test(value)){
        return "Name must contain the alphabet only."
    }
    return "Looks good!"
}
function ValidateCountry(value){
    if(/^\s*$/.test(value)){
        return "Country is required."
    }
    return "Looks good!"
}
function ValidateZIP(value){
    if(/^\s*$/.test(value)){
        return "ZIP Code is required."
    }
    if (!/^.{6}*$/.test(value)){
        return "Zip Code should be 6 characters long."
    }
    if (!/^[0-9]{4}*/.test(value)){
        return "Zip Code should start with 4 numbers."
    }
    if (!/[A-Za-z]{2}$*/.test(value)){
        return "Zip Code should end with 2 letters."
    }
    return "Looks good!"
}
function ValidateEmail(value){
    if(/^\s*$/.test(value)){
        return "Email is required."
    }
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value)){
        return "Email should be valid."
    }
    return "Looks good!"
}
function ValidateSex(value){
    if(/^\s*$/.test(value)){
        return "Sex is required."
    }
    return "Looks good!"
}
function ValidateLanguage(value){
    if(/^\s*$/.test(value)){
        return "Language is required."
    }
    return "Looks good!"
}