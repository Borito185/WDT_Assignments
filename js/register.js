function registerValidation()
{
    const form = document.forms["register-form"];
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

    if (uid.value === "")
    {
        return;
    }

    if (pwd.value === "")
    {
        return;
    }

    if (name.pwd === "")
    {
        return;
    }

    if (country.value === "")
    {
        return;
    }

    if (email.value === "")
    {
        return;
    }

    if (sex.value === "")
    {
        return;
    }

    if (lang.value === "")
    {
        return;
    }

    if (uid.value.length < 5 || uid.value.length > 12)
    {
        return;
    }

    if (pwd.value.length < 12)
    {
        return;
    }

    if (!validPassword(pwd))
    {
        return;
    }

    if (!isValidWord(name))
    {
        return;
    }

    if (!validZip(zip))
    {
        return;
    }

    if (!validEmail(email))
    {
        return;
    }


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
    for (char of str)
        if (!isAlpha(char))
            return false;

    return true;
}

function validPassword(pwd)
{
    let conditions = [false, false, false, false];
    for (char of pwd)
    {
        if (isNumber(char))
            conditions[0] = true;

        else if (isSymbol(char))
            conditions[1] = true;
        
        else if (isLowerCase(char))
            conditions[2] = true;
        
        else if (isUpperCase(char))
            conditions[3] = true;
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