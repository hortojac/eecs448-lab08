function onClick(){
    var box1 = document.getElementById("password1").value
    var box2 = document.getElementById("password2").value
    var alert = document.getElementById("alert")
    if(box1.length < 8)
    {
        alert.innerText = "Entered password is not 8 characters long, try again!"
    }
    else if(box1 != box2)
    {
        alert.innerText = "Entered passwords do not match, try again!"
    }
    else
    {
        alert.innerText = "Entered passwords match!"
    }
}