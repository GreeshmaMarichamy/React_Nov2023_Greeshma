const clickevent=()=>
{
    var n1=parseInt(document.getElementById("n1").value);
    var n2=parseInt(document.getElementById("n2").value);
    if(n1>n2)
    {
         document.write(n1+" is greater then "+n2);
    }
    else
    {
         document.write(n2+" is greater then "+n1);
    }
}