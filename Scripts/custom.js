function FindSumA(numbers, answer) {
    //loop through the array and add the adjacent number and check for the answer
    let checkValue = 0;
    let found = false;



    for (let i = 0; i <= numbers.length - 2; i++) {
        //loop over the array in the after the current value
        for (let y = (i + 1); y <= numbers.length - 1; y++) {
            if (answer == numbers[i] + numbers[y]) {
                found = true;
                return found;
            }



        }
    }
    return found;
}



function DisplaySum() {
    let answer = document.getElementById("sumValue").value;
    let numArray = [10, 15, 3, 7];



    //show the array on the screen  and converts array to a string on screen
    document.getElementById("numList").innerHTML = numArray.toString();
    let found = FindSumA(numArray, answer);
    document.getElementById("results").innerHTML = found.toString();
}