var form = document.getElementById('form');
var firstName = document.getElementById('fname');
var lastName = document.getElementById('lname');
var phoneNumber = document.getElementById('phone');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

var setError = (element, message) => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
}

var setSuccess = element => {
    var inputControl = element.parentElement;
    var errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
};

var isValidEmail = email => {
    var atSymbol = email.indexOf("@");
    if (atSymbol < email[1] || atSymbol==-1) {
        return false;
    }


    var dot = email.indexOf(".");
    if (dot <= atSymbol + 5) {
        return false;

    }

    if (dot === email.length - 1 || dot != email.length - 4) {
        return false;
    }


    return true;
}

function validateInputs() {
    var count = 0;
    var firstNameValue = firstName.value.trim();
    var lastNameValue = lastName.value.trim();
    var phoneNumberValue = phoneNumber.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();

    if (firstNameValue === '') {
        setError(firstName, 'First name is required');
    } else {
        setSuccess(firstName);
        count += 1;
    }
    if (lastNameValue === '') {
        setError(lastName, 'last name is required');
    } else {
        setSuccess(lastName);
        count += 1;
    }
    if (phoneNumberValue === '') {
        setError(phoneNumber, 'Phone number is required');
    } else if (phoneNumberValue.length != 10) {
        setError(phoneNumber, 'Provide a valid phone number');
    }
    else {
        setSuccess(phoneNumber);
        count += 1;
    }
    if (emailValue === '') {
        setError(email, 'Email is required');
    }
    else if (!isValidEmail(emailValue) || emailValue != emailValue.toLowerCase()) {
        setError(email, 'Provide a valid email address');
    }
    else {
        setSuccess(email);
        count += 1;
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length != 6) {
        setError(password, 'Password must be at least 6 character.')
    } else {
        setSuccess(password);
        count += 1;
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        count += 1;
    }
    if (count == 6) {
        showTable();
    }
};

function showTable() {
    var firstNameValue = firstName.value.trim();
    var lastNameValue = lastName.value.trim();
    var phoneNumberValue = phoneNumber.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var createTable = document.createElement("table");
    createTable.setAttribute("class", "myTable");
    document.querySelector(".container").appendChild(createTable);

    var createRow = document.createElement("tr");
    document.querySelector(".myTable").appendChild(createRow);


    var createHead1 = document.createElement("th");
    createHead1.setAttribute("id", "myTh1");
    document.querySelector("tr").appendChild(createHead1);
    document.querySelector("#myTh1").innerHTML = "Name";

    var createHead2 = document.createElement("th");
    createHead2.setAttribute("id", "myTh2");
    document.querySelector("tr").appendChild(createHead2);
    document.querySelector("#myTh2").innerHTML = "Phone Number";

    var createHead3 = document.createElement("th");
    createHead3.setAttribute("id", "myTh3");
    document.querySelector("tr").appendChild(createHead3);
    document.querySelector("#myTh3").innerHTML = "Email";

    var createHead4 = document.createElement("th");
    createHead4.setAttribute("id", "myTh4");
    document.querySelector("tr").appendChild(createHead4);
    document.querySelector("#myTh4").innerHTML = "Password";

    var createRow1 = document.createElement("tr");
    createRow1.setAttribute("class", "myData");
    document.querySelector(".myTable").appendChild(createRow1);

    var createData = document.createElement("td");
    createData.setAttribute("id", "myTd1");
    document.querySelector(".myData").appendChild(createData);
    var fullName = firstNameValue + " " + lastNameValue;
    document.querySelector("#myTd1").innerHTML = fullName;

    var createData1 = document.createElement("td");
    createData1.setAttribute("id", "myTd2");
    document.querySelector(".myData").appendChild(createData1);
    document.querySelector("#myTd2").innerHTML = phoneNumberValue;

    var createData2 = document.createElement("td");
    createData2.setAttribute("id", "myTd3");
    document.querySelector(".myData").appendChild(createData2);
    document.querySelector("#myTd3").innerHTML = emailValue;

    var createData3 = document.createElement("td");
    createData3.setAttribute("id", "myTd4");
    document.querySelector(".myData").appendChild(createData3);
    document.querySelector("#myTd4").innerHTML = passwordValue;
}
