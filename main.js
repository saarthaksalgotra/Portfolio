var show = document.getElementById("show");
var btn = document.getElementById("expand");

btn.onclick= function()
{

    if(show.className =="open")
    {
        show.className="";
    }
    else
    {
        show.className="open";
        btn.innerHTML="";
    }
};