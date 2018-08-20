function calculate(height, weight) {
    const bmi = weight / (height*height);
    return Math.round(bmi * 10) / 10;
}

function classify(bmi) {
    if (bmi < 18.5) { 
        return "underweight";
    } else if (bmi < 25) {
        return "healthy";
    } else if (bmi < 30) {
        return "overweight";
    } else { 
        return "obese";
    }
}

module.exports = {calculate, classify};

