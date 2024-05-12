const form=document.querySelector('form');

form.addEventListener('submit',function (e){
    e.preventDefault();
    const height= parseInt(document.querySelector('#height').value);
    const weight= parseInt(document.querySelector('#weight').value);
    const results= document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Please provide a valid height.`;
        return; // Exit early if height is invalid
    }

    if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Please provide a valid weight.`;
        return; // Exit early if weight is invalid
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Display the calculated BMI
    results.innerHTML = `<span>Your BMI: ${bmi}</span>`;

    // Determine BMI category based on WHO classifications
    if (bmi < 18.5) {
        results.innerHTML += '<br>Category: Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        results.innerHTML += '<br>Category: Normal weight';
    } else {
        results.innerHTML += '<br>Category: Overweight';
    }
});
