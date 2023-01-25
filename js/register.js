const form = document.forms["register-form"];

function validateFields(event)
{
    resetErrorMsg();

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

    let error = false;

    if (uid.value === "")
    {
        document.getElementById("err-uid").textContent = "User ID is a required field.";
        error = true;
    }

    if (pwd.value === "")
    {
        document.getElementById("err-pwd").textContent = "Password is a required field.";
        error = true;
    }

    if (name.value === "")
    {
        document.getElementById("err-name").textContent = "Name is a required field.";
        error = true;
    }

    if (country.value === "")
    {
        document.getElementById("err-country").textContent = "Country is a required field.";
        error = true;
    }
    
    if (zip.value === "")
    {
        document.getElementById("err-zip").textContent = "ZIP code is a required field.";
        error = true;
    }

    if (email.value === "")
    {
        document.getElementById("err-email").textContent = "Email is a required field.";
        error = true;
    }

    if (sex.value === "")
    {
        document.getElementById("err-sex").textContent = "Sex is a required field.";
        error = true;
    }

    if (lang.value === "")
    {
        document.getElementById("err-lang").textContent = "Language is a required field.";
        error = true;
    }

    if (uid.value.length < 5 || uid.value.length > 12)
    {
        document.getElementById("err-uid").textContent = "User ID must be between 5 and 12 characters long.";
        error = true;
    }

    if (!validUid(uid.value))
    {
        document.getElementById("err-uid").textContent = "User ID must start with a capital letter, and end with a number or special character.";
        error = true;
    }

    if (pwd.value.length < 12)
    {
        document.getElementById("err-pwd").textContent = "Password must have at least twelve characters.";
        error = true;
    }

    if (!validPassword(pwd.value))
    {
        document.getElementById("err-pwd").textContent = "Password must include upper and lowercase letters, digits and symbols.";
        error = true;
    }

    if (!isValidWord(name.value))
    {
        document.getElementById("err-name").textContent = "Name must be alphabetical.";
        error = true;
    }

    if (!validZip(zip.value))
    {
        document.getElementById("err-zip").textContent = "ZIP code must have four digits followed by two letters.";
        error = true;
    }

    if (!validEmail(email.value))
    {
        document.getElementById("err-pwd").textContent = "Enter a valid email address.";
        error = true;
    }


    if (!error)
        alertAllFields(form);
    else
        event.preventDefault();
};

function resetErrorMsg()
{
    const suffixes = ["uid", "pwd", "name", "country", "zip", "email", "sex", "lang"];

    for (let field of suffixes)
        document.getElementById("err-" + field).textContent = "";
}

function alertAllFields(form)
{
    let allValues = "";
    for (field of form)
        allValues += field.value + "\n";
    alert(allValues);
}

function validEmail(email)
{
    const iat = email.indexOf("@");
    const icom = email.lastIndexOf(".");

    return  iat != -1 && icom != -1 &&
            icom > iat && icom != iat + 1 &&
            iat != 0 &&
            !email.endsWith(".") &&
            iat === email.lastIndexOf("@");
}

function validZip(zip)
{
    return  zip.length === 6 &&
            isNumber(zip.substr(0, 4)) &&
            isValidWord(zip.substr(4));
}

function isValidWord(str)
{
    for (let char of str)
        if (!isAlpha(char))
            return false;

    return true;
}

function validPassword(pwd)
{
    let conditions = [false, false, false, false];
    for (let char of pwd)
    {   
        if (isSymbol(char))
            conditions[1] = true;
        
        else if (isLowerCase(char))
            conditions[2] = true;
        
        else if (isUpperCase(char))
            conditions[3] = true;

        else if (isNumber(char))
            conditions[0] = true;
    }

    for (cond of conditions)
        if (!cond)
            return false;

    return true;
}

function isAlpha(str)
{
    return  str >= "a" && str <= "z" ||
            str >= "A" && str <= "Z";
}

function isNumber(str)
{
    return !isNaN(parseInt(str));
}

function isLowerCase(str)
{
    return isAlpha(str) && str.toLowerCase() === str;
}

function isUpperCase(str)
{
    return isAlpha(str) && str.toUpperCase() === str;
}

function isSymbol(str)
{
    const symbols = "!@#$%^&*()[]{}~\\|/?.,<>-_=+`";
    
    return symbols.includes(str);
}

function validUid(str)
{
    const l = str.length;
    return  isUpperCase(str.charAt(0)) && 
            (isSymbol(str.charAt(l-1)) || isNumber(str.charAt(l-1)));
}