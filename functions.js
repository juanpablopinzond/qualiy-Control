function qualityControl(array) {
    let mainNumber = 0.80;
    if (array >= mainNumber) {
        alert("It's a pass");
    } else if (array < mainNumber) {
        alert("It's a failure");
    } else if (array != "number") {
        alert("Cannot Process");
    } else {
        alert("The array is empty");
    }
}

console.log(qualityControl([0.99, 10]));