   // Generar número secreto 
        const numeroSecreto = Math.floor(Math.random() * 500) + 1;
        console.log("Número secreto (para pruebas):", numeroSecreto);

        function revisar() {
            const input = document.getElementById('numero');
            const userNum = parseInt(input.value);
            const resultado = document.getElementById('resultado');
            const cuerpo = document.getElementById('cuerpo');
            const boton = document.getElementById('btnAdivinar');

            if (isNaN(userNum) || userNum < 0 || userNum > 500) {
                resultado.innerText = "Por favor indica un número entre 0 y 500";
                return;
            }
            const FONDO = document.body;
            const distancia = Math.abs(numeroSecreto - userNum);

            if (distancia >= 50){
                cuerpo.className = "bg-blue-600 min-h-screen flex items-center justify-center transition-colors duration-500";
                
                resultado.innerText = 
                    "Frío, frío: tu número es más pequeño que el mío";
                } else {
                   
                    resultado.innerText = "Frío, frío: tu número es más grande que el mío";
                }   

                 if (distancia >= 15 && distancia < 50) {
                cuerpo.className = "bg-yellow-400 min-h-screen flex items-center justify-center transition-colors duration-500";
                 
                resultado.innerText = 
                    "Tibio, tibio: tu número es más pequeño de que el mío";
                 } else {
                    resultado.innerText = "Tibio, tibio: tu número es más grande que el mío";
                }

             if (distancia < 15) {
             cuerpo.className = "bg-red-400 min-h-screen flex items-center justify-center transition-colors duration-500";
              if (userNum < numeroSecreto) {
                 resultado.innerText = "Caliente, caliente: tu número es más grande que el mío";
                  } else {
                 resultado.innerText = "Caliente, caliente: tu número es más pequeño que el mío";
                }
             }

        }
    

