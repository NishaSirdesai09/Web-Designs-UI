// Retrieve the username from the URL

window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const username = params.get('username');
    let abcd = $("#username").val();


    // Retrieving the string from localStorage
var myString = localStorage.getItem('myString');

    console.log(myString);
    // Display the username
    document.getElementById('result').textContent = "" + myString;
});

$(document).ready(function () {

    // Form Validation 


    // Validate the form with ID "registrationForm"
    $('#registrationForm').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            username: {
                required: true,
                validUsername: true
            },
            password: {
                required: true,
                minlength: 5,
                maxlength: 15
            },
            confirmPassword: {
                required: true,
                minlength: 5,
                maxlength: 15,
                equalTo: "#password" // Ensure it matches the password field
            },
            number1: {
                required: true,
                minlength: 1,
                maxlength: 15,
                num1: true
            },
            number2: {
                required: true,
                minlength: 1,
                maxlength: 15,
                num2: true
            }
        },
        messages: {
            email: {
                required: "Please enter your email",
                email: "Email should end with '@northeastern.edu'"
            },
            username: {
                required: "Please enter your username",
                username: "Username should only contain '@' and '_' symbols"
            },
            password: {
                required: "Please enter your password",
                minlength: "Please enter minimum 5 numbers",
                maxlength: "Please enter maximum 15 numbers"
            },
            confirmPassword: {
                required: "Please enter your confirmPassword",
                minlength: "Please enter minimum 5 numbers",
                maxlength: "Please enter maximum 15 numbers",
                equalTo: "Password do not match"
            },
            number1: {
                required: "Please enter the first number ",
                minlength: "Please enter minimum 1 numbers",
                maxlength: "Please enter maximum 15 numbers",
                num1: "Please enter only number"
            },
            number2: {
                required: "Please enter the second number",
                minlength: "Please enter minimum 1 numbers",
                maxlength: "Please enter maximum 15 numbers",
                num2: "Please enter only number"
            }


        },
        submitHandler: function (form) {

            // Storing a string in localStorage
            localStorage.setItem('myString', $("#username").val());

            // Redirect to a new page (replace 'newpage.html' with your desired page URL)
            window.location.href = 'index1.html';

        }
    });

    // Custom validation method to check for valid email format ending with '@northeastern.edu'
    $.validator.addMethod("email", function (value, element) {
        return /^[\w.-]+@northeastern\.edu$/.test(value);
    }, "Email should end with '@northeastern.edu'");

    // Custom validation method to check for valid username with only '@' and '_' symbols
    $.validator.addMethod("validUsername", function (value, element) {
        return /^[\w@]+$/.test(value);
    }, "Username should only contain '@' or '_' symbols");

    // Enable the button when the form is valid
    $('#registrationForm').on('input', function () {
        if ($(this).valid()) {
            $('#submit').prop('disabled', false);
        } else {
            $('#submit').prop('disabled', true);
        }
    });

    // Calculator
    // Function to perform operations and display result
    const performOperation = (operation) => {
        const num1 = parseFloat($("#number1").val());
        const num2 = parseFloat($("#number2").val());
        if (!isNaN(num1) && !isNaN(num2)) {
            let result;
            switch (operation) {
                case "add":
                    result = num1 + num2;
                    break;
                case "sub":
                    result = num1 - num2;
                    break;
                case "mul":
                    result = num1 * num2;
                    break;
                case "div":
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Division by zero is undefined";
                    }
                    break;
                default:
                    result = "Invalid operation";
                    break;
            }
            $("#number3").val(result);
        } else {
            $("#number3").val("Invalid input");
        }
    };

    // Event handlers for buttons
    $("#add").on("click", () => performOperation("add"));
    $("#sub").on("click", () => performOperation("sub"));
    $("#mul").on("click", () => performOperation("mul"));
    $("#div").on("click", () => performOperation("div"));

    // Validation
    // Function to validate if input is a number
    function isNumber(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    }

    // Input fields
    var $number1 = $('#number1');
    var $number2 = $('#number2');
    var $result = $('#number3');

    // Buttons
    var $addButton = $('#add');
    var $subButton = $('#sub');
    var $mulButton = $('#mul');
    var $divButton = $('#div');

    // Enable/disable buttons based on input validation
    function updateButtons() {
        var number1 = $number1.val();
        var number2 = $number2.val();
        var areNumbers = isNumber(number1) && isNumber(number2);

        $addButton.prop('disabled', !areNumbers);
        $subButton.prop('disabled', !areNumbers);
        $mulButton.prop('disabled', !areNumbers);
        $divButton.prop('disabled', !areNumbers);
    }

    // Input change event
    $number1.add($number2).on('input', function () {
        updateButtons();
    });

    // Button click events
    $addButton.on('click', function () {
        if (isNumber($number1.val()) && isNumber($number2.val())) {
            var result = parseFloat($number1.val()) + parseFloat($number2.val());
            $result.val(result);
        }
    });

    $subButton.on('click', function () {
        if (isNumber($number1.val()) && isNumber($number2.val())) {
            var result = parseFloat($number1.val()) - parseFloat($number2.val());
            $result.val(result);
        }
    });

    $mulButton.on('click', function () {
        if (isNumber($number1.val()) && isNumber($number2.val())) {
            var result = parseFloat($number1.val()) * parseFloat($number2.val());
            $result.val(result);
        }
    });

    $divButton.on('click', function () {
        if (isNumber($number1.val()) && isNumber($number2.val()) && parseFloat($number2.val()) !== 0) {
            var result = parseFloat($number1.val()) / parseFloat($number2.val());
            $result.val(result);
        } else {
            $result.val('Cannot divide by zero');
        }
    });

    // Validate numbers while entering number fields
    $.validator.addMethod("num1", function (value, element) {
        return /^\d+$/.test(value)
    }, "Please enter only number");

    $.validator.addMethod("num2", function (value, element) {
        return /^\d+$/.test(value)
    }, "Please enter only number");

});