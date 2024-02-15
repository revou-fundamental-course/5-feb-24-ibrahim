<script>
        function convertCelsiusToFahrenheit() 
            const celsiusInput = document.getElementById("celsius");
            const celsius = parseFloat(celsiusInput.value);

            if (isNaN(celsius)) 
                alert("Please enter a valid temperature in Celsius.");
                return;
            

            const fahrenheit = (celsius * 9/5) + 32;
            document.getElementById("result").textContent = `${celsius}°C is equal to ${fahrenheit}°F`;
        
    </script>