let image = 1;
function changeImage() 
{
    if(image === 1)
    {
        document.getElementById("Image").src = "car1.jpg";
    }
    else if(image === 2)
    {
        document.getElementById("Image").src = "car2.jpg";
    }
    else if(image === 3)
    {
        document.getElementById("Image").src = "car3.jpg";
    }
    else if(image === 4)
    {
        document.getElementById("Image").src = "car4.jpg";
    }
    else
    {
        document.getElementById("Image").src = "car5.jpg";
    }
}

function previous() {
    if(image === 1)
    {
        image = 5;
    }
    else
    {
        image--;
    }
    changeImage();
}

function next() 
{
    if(image === 5)
    {
        image = 1;
    }
    else
    {
        image++;
    }
    changeImage();
}
