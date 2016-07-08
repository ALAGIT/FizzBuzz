function FizzBuzz(target) {
    var x = 1;
    while (x < target) {
        var x1 = x % 3;
        var x2 = x % 5;
        if ((x1 === 0) && (x2 === 0)) {
            var xString = "FizzBuzz";
        }
        else if (x2 === 0) {
            var xString = "Buzz";
        }
        else if (x1 === 0) {
            var xString = "Fizz";
        }
        else {
            var xString = x.toString();
        }
        var ul = document.getElementById("numbers");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(xString));
        ul.appendChild(li);
        x = x + 1;
    }
}
