$(document).ready(function(){


  
    $("#titulo").mouseenter(function(){
        $("#titulo").css("background-color", "rgb(22, 196, 129)");
        $("#titulo").css("color", "red");
      });
  
    
    $("#titulo").mouseleave(function(){
        $("#titulo").css("background-color", "blue");
        $("#titulo").css("color", "white");
      });
  
  
    
  
    $("#obtener").click(function(){
      
      var Tpar = 0;
      var Timpar = 0;
      var Tcero = 0;
      var digito = 0;
  
      var numeros = $(Numero4D).val();
      
  
      if(numeros < 1000 || numeros > 9999){
        alert("El numero no es de 4 digitos, por favor Intente nuevamente");
      }
      else{
  
        
        digito = parseInt(numeros/1000);
  
       
        if (digito % 2 === 0 && digito != 0){
            Tpar++;
        }else{
            if(digito % 2 === 1){
                Timpar++;
            }else{
                if(digito == 0){
                Tcero++;
                }
            }
        }
  
        
        digito =parseInt((numeros%1000)/100);
  
         
          if (digito % 2 === 0 && digito != 0){
              Tpar++;
          }else{
              if(digito % 2 === 1){
                  Timpar++;
              }else{
                  if(digito == 0){
                  Tcero++;
                  }
              }
          }
  
  
          
          digito = parseInt(((numeros%1000)%100)/10);
  
         
          if (digito % 2 === 0 && digito != 0){
              Tpar++;
          }else{
              if(digito % 2 === 1){
                  Timpar++;
              }else{
                  if(digito == 0){
                  Tcero++;
                  }
              }
          }
  
  
          digito = parseInt(numeros%10);
  
  
          if (digito % 2 === 0 && digito != 0){
              Tpar++;
          }else{
              if(digito % 2 === 1){
                  Timpar++;
              }else{
                  if(digito == 0){
                  Tcero++;
                  }
              }
          }
  
  
  
  
          $("#pares").val(Tpar);
          $("#impares").val(Timpar);
          $("#ceros").val(Tcero);
      }
  
    });
  });
