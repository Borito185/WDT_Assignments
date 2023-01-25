function alertAllValues()
{
    const form = document.forms["register-form"];
    
    let allValues = "";
    for (field of form)
        allValues += field.value + "\n";
    alert(allValues);
}