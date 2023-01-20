function registerValidation()
{
    const form = document.forms["register-form"];
    let uid = form["uid"];
    let pwd = form["pwd"];
    let rpwd = form["rpwd"];
    let name = form["name"];
    let addr = form["addr"];
    let country = form["country"];
    let zip = form["zip"];
    let email = form["email"];
    let sex = form["sex"];
    let lang = form["lang"];
    let bio = form["bio"];



    let allValues = "";
    for (field of form)
        allValues += field.value + "\n";
    alert(allValues);
}