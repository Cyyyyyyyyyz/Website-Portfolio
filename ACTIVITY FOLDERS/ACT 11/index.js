function forLoop(){

    let num = document.getElementById("num1").value;
    let text = document.getElementById("text1").value;

    let output = '';

    if(isNaN(num)){

        alert("Please Enter a valid number");
    }
    for(let i = 0; i < num; i++){

        output += text + '<br>';
    }

    document.getElementById("output").innerHTML = output;

}

function whileLoop(){

    let num = document.getElementById("num2").value;
    let text = document.getElementById("text2").value;

    let output = '';

    if(isNaN(num)){

        alert("Please Enter a valid number");
    }

    let i = 0;


    while(i < num){

        output += text + '<br>';
        i++;
    
    }
    document.getElementById("output1").innerHTML = output;
    


}


function doWhileLoop(){

        let num = document.getElementById("num3").value;
        let text = document.getElementById("text3").value;
    
        let output = '';
        let i = 0;

        if(isNaN(num)){

            alert("Please Enter a valid number");
        }
    
        do{

            output += text + '<br>';
            i++;

        }while(i < num);
       
        document.getElementById("output2").innerHTML = output;
        
    
    

}

function clear() {
   
    document.getElementById("num1").value = " ";
    document.getElementById("text1").value = " ";
    document.getElementById("num2").value = " ";
    document.getElementById("text2").value = " ";
    document.getElementById("num3").value = " ";
    document.getElementById("text3").value = " ";

    
    document.getElementById("output").innerHTML = " ";
    document.getElementById("output1").innerHTML = " ";
    document.getElementById("output2").innerHTML = " ";
}





