 
      
        function muestraTexto()
        {
            var textEncriptar=document.getElementById("inText").value
            console.log(textEncriptar)
        }
        function encriptarTexto()
        {
            var vocales= ["a","e","i","o","u"]
            var letras = ["ai","enter","imes","ober","ufat"]
            let texto =document.getElementById("inText").value

            
            console.log(texto)          
            
            for (var i=0; i< texto.length; i++)
            {
                for (var l=0; l<5; l++)
                {
                    if (texto[i] == vocal[l])
                    {
                        console.log(vocal[l], " => ", letra[l], " => ",texto.charCodeAt(i))
                        

                    }

                }
            }

        }
        
        
                /*  String.fromCharCode(97) permite imprimir un caracter, según su número de código
        mientras que text.charCodeAt(1) permite conocer el código de un caracter*/




    