function FizzBuzz(target) {

    var x: number = 1;

    while (x < target) {

        var x1: number = x % 3;
        var x2: number = x % 5;

        if ((x1 === 0) && (x2 === 0)) {
            var xString: string = "FizzBuzz";
        }
        else if (x2 === 0) {
            var xString: string = "Buzz";
        }
        else if (x1 === 0) {
            var xString: string = "Fizz";
        }
        else {
            var xString: string = x.toString();
        }

        var ul = document.getElementById("numbers");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(xString));
        ul.appendChild(li);

        x = x + 1;
    }
}