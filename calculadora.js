function calc()
{
    var n1 = parseFloat(document.getElementById('n1').value);
    var n2 = parseFloat(document.getElementById('n2').value);
    
    var oper = document.getElementById('operators').value;
    
    if(oper === 'suma')
    {
        document.getElementById('result').value = n1+n2;
    }
    
    if(oper === 'resta')
    {
        document.getElementById('result').value = n1-n2;
    }
    
    if(oper === 'division')
    {
        document.getElementById('result').value = n1/n2;
    }
    
    if(oper === 'multiplicacion')
    {
        document.getElementById('result').value = n1*n2;
    }
}






