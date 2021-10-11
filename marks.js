var target=document.getElementById("btn");
target.addEventListener("click",
function(e){
    e.preventDefault();
    var eng=document.getElementById('eng').value;
    var math=document.getElementById('math').value;
    var phy=document.getElementById('phy').value;
    var che=document.getElementById('che').value;


    var total=Number(eng)+Number(math)+Number(phy)+Number(che);
    var percentage=(total*100)/400;
    document.getElementById("text").innerHTML=`Marks: ${total} out of 400 <br> 
    Percentage: ${percentage}` 
})