jQuery( document ).ready(function() {
    const entrada = document.getElementById('entrada');
    const result = document.getElementById('salida-container');
    const Encriptar = function(e) {
        let entrada = "";
        //cast string to array and iterate
        [...e.target.value].forEach(element => {
            //like if
            switch(element){
                case "e":
                    element = "enter";
                break;
                case "i":
                    element = "imes";
                break;
                case "a":
                    element = "ai";
                break;
                case "o":
                    element = "ober";
                break;
                case "u":
                    element = "ufat";
                break;
            }
            //convert string to lower case
            element = element.toLowerCase();
             //if char (ascii) is allowed
             // 97 == a ... 122 == z, 32 = space
            if(element.charCodeAt(0) > 96 && element.charCodeAt(0) < 123 || element.charCodeAt(0) == 32){
                entrada += element;
            }else{
                entrada += '';
            }
        });
        result.innerHTML = entrada;
        
    }
    //call to primary function (on input event)
    entrada.addEventListener('input', Encriptar);
    
    const copiar = document.getElementById('copiar1');
    const copiar2 = document.getElementById('copiar2');
    //copy function
    const CopiarEncriptado = function() {
        if(!result.innerText){
            alert('¡ingresa una palabra!');
        }else{
            //get value
            var entrada = result.innerText
            //create element
            var $temp = $("<input>");
            //append to body 
            $("body").append($temp);
            //copy to clipboard
            $temp.val(entrada).select();
            document.execCommand("copy");
            //remove temporal input 
            $temp.remove();
        }
    }
//copy function
    const CopiarEncriptado2 = function() {
        if(!result2.innerText){
            alert('¡ingresa una palabra!');
        }else{
            //get value
            var entrada = result2.innerText
            //create element
            var $temp = $("<input>");
            //append to body 
            $("body").append($temp);
            //copy to clipboard
            $temp.val(entrada).select();
            document.execCommand("copy");
            //remove temporal input 
            $temp.remove();
        }
    }
    copiar.addEventListener('click', CopiarEncriptado);
    copiar2.addEventListener('click', CopiarEncriptado2);

    const entrada2 = document.getElementById('entrada2');
    const result2 = document.getElementById('salida-container2');
    const Encriptar2 = function(e) {
        //get input value
        let entrada = e.target.value;
        //convert string to lower case
        entrada = entrada.toLowerCase();
        //replace on exist
        if(entrada.includes("enter")){
            entrada = entrada.split('enter').join("e");
        }
        if(entrada.includes("imes")){
            entrada = entrada.split('imes').join("i");
        }
        if(entrada.includes("ai")){
            entrada = entrada.split('ai').join("a");
        }
        if(entrada.includes("ober")){
            entrada = entrada.split('ober').join('o');
        }
        if(entrada.includes("ufat")){
            entrada = entrada.split('ufat').join("u");
        }
        result2.innerHTML = entrada;
        
    }
    //change event
    entrada2.addEventListener('change', Encriptar2);
});