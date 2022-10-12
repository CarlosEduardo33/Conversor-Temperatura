document.getElementById('limpar').onclick = limpartela;

    const kelvinInput = document.getElementById("kelvin");
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const rankineInput = document.getElementById("rankine");
    const inputs = document.getElementsByClassName("input")
    
    for ( let i = 0; i < inputs.length; i++)
    {
        let input = inputs[i];

        input.addEventListener("input", function (e) 
        {
            let value = parseFloat(e.target.value);

            switch (e.target.name)
            {
                case'kelvin': 
                    celsiusInput.value = value - 273; 
                    fahrenheitInput.value = value * 1.8 -459.67; 
                    rankineInput.value = value * 1.8; 
                break;
            
                case 'celsius':
                    kelvinInput.value = value + 273; 
                    fahrenheitInput.value = value * 1.8 + 32; 
                    rankineInput.value = (value + 273) * 1.8; 
                break;
            
                case 'fahrenheit': 
                    kelvinInput.value = (value - 32) * 5/9 + 273; 
                    celsiusInput.value =  (value - 32) / 1.8; 
                    rankineInput.value = value + 459.67;
                break;

                case 'rankine':
                    kelvinInput.value = value / 1.8; 
                    celsiusInput.value = value * (5/9) - 273;
                    fahrenheitInput.value = value - 459.67;
                break;

            }
        });
    }

function limpartela(){
    document.getElementById("kelvin").value = "";
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("rankine").value = "";
}