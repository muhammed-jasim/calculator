function buttonclick(val)
{
    document.getElementById("screen").value+=val;
}
function clearscreen()
{
    document.getElementById("screen").value="";
}
function equalclick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function backspace()
{
    var backs=document.getElementById("screen").value;
    document.getElementById("screen").value=backs.substring(0,backs.length-1)
}