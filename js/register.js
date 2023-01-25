const form = document.forms["register-form"];

function submitForm(event)
{
    event.preventDefault(true);

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


    let result = ""
    let error = false;
    document.getElementById("err-uid").textContent = result = ValidateUserID(uid.value);
    error = error || result !== "Looks good!";
    document.getElementById("err-pwd").textContent = result = ValidatePassword(pwd.value);
    error = error || result !== "Looks good!";
    document.getElementById("err-name").textContent = result = ValidateName(name.value);
    error = error || result !== "Looks good!";
    document.getElementById("err-country").textContent = result = ValidateCountry(country.value);
    error = error || result !== "Looks good!";
    document.getElementById("err-zip").textContent = result = ValidateZIP(zip.value);
    error = error || result !== "Looks good!";
    document.getElementById("err-email").textContent = result = ValidateEmail(email.value);
    error = error || result !== "Looks good!";
    document.getElementById("err-sex").textContent = result = ValidateSex(sex.value);
    error = error || result !== "Looks good!";
    document.getElementById("err-lang").textContent = result = ValidateLanguage(lang.value);
    error = error || result !== "Looks good!";

    if (!error)
        alertAllFields(form);

    return false;
}

function alertAllFields(form)
{
    let allValues = "";
    for (field of form)
        allValues += field.value + "\n";
    alert(allValues);
}

function ValidateUserID(value){
    if(/^\s*$/.test(value)){
        return "User ID is required."
    }
    if (!/.{3,12}/.test(value)){
        return "User ID should be between 3 and 12 characters.";
    }
    if (!/^[A-Z]/.test(value)){
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
    if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\\$%^&*_-])/.test(value)){
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
    if (!/^.{6}$/.test(value)){
        return "Zip Code should be 6 characters long."
    }
    if (!/^[0-9]{4}/.test(value)){
        return "Zip Code should start with 4 numbers."
    }
    if (!/[A-Za-z]{2}$/.test(value)){
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