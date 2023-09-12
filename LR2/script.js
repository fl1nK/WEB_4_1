var form = document.querySelector("form");
const body = document.querySelector("body");

function test1() {
    alert("wqeqweqeqw")
    console.log("start");
}

function onSubmit() {
    console.log("start");
    console.log(form.name.value);
    var checkError = false;
    if (!checkName()) {
        alert("Ім'я введено невірно!");
        form.name.style.background = "rgb(255,190,190)";
        checkError = true;
    }
    if (!checkIDCard()) {
        alert("Номер ID-картки введено невірно!");
        form.idcard.style.background = "rgb(255,190,190)";
        checkError = true;
    }
    if (!checkBirthday()) {
        alert("Дату дня народження введено невірно!");
        form.birthday.style.background = "rgb(255,190,190)";
        checkError = true;
    }
    if (!checkFaculty()) {
        alert("Назву факультету введено невірно!");
        form.faculty.style.background = "rgb(255,190,190)";
        checkError = true;
    }
    if (!checkAddress()) {
        alert("Назву адреса введено невірно!");
        form.address.style.background = "rgb(255,190,190)";
        checkError = true;
    }
    if (!checkError) {
        alert(
            "ПІБ: " +
            form.name.value +
            "\n" +
            "ID-картка: " +
            form.idcard.value +
            "\n" +
            "День народження: " +
            form.birthday.value +
            "\n" +
            "Факультет: " +
            form.faculty.value +
            "\n" +
            "Адреса: " +
            form.address.value +
            "\n"
        );

        form.name.style.background = null;
        form.idcard.style.background = null;
        form.birthday.style.background = null;
        form.faculty.style.background = null;
        form.address.style.background = null;


    }
}

function checkName() {
    var value = form.name.value;
    var valueRE = /^[А-ЯІЇЄҐ][а-яіїєґ]+\s[А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/;
    return value.match(valueRE);
}

function checkIDCard() {
    var value = form.idcard.value;
    var valueRE = /^[А-ЯІЇЄҐ]{2} №[0-9]{6}$/;
    return value.match(valueRE);
}

function checkBirthday() {
    var value = form.birthday.value;
    var valueRE = /^\d{2}\.\d{2}\.\d{4}$/;
    return value.match(valueRE);
}

function checkFaculty() {
    var value = form.faculty.value;
    var valueRE = /^[А-ЯІЇЄҐ]+$/;
    return value.match(valueRE);
}

function checkAddress() {
    var value = form.address.value;
    var valueRE = /^м.+\s[А-ЯІЇЄҐ][а-яїєґ]+$/;
    return value.match(valueRE);
}

//============ Завдання 2 ========================================================

const VARIANT = 4;

for (let r = 0; r < 6; r++) {
    const rowElement = document.createElement("tr");
    for (let d = 0; d < 6; d++) {
        const index = String(d + 1 + r * 6);
        const dataElement = document.createElement("td");
        dataElement.innerHTML = index;
        dataElement.id = index;
        rowElement.appendChild(dataElement);
        body.appendChild(rowElement);
    }
}

function onMouseClickCell(element) {
    element.style.background = document.getElementById("current_color").value;
}

function onDoubleClickCell() {
    const startColumn = VARIANT;
    var i = 0;
    for (let j = 6; j <= 36; j += 6) {
        const currentElement = document.getElementById(String(j - i));
        currentElement.style.background =
            document.getElementById("current_color").value;
        i++;
    }
}

function onMouseOverRandomBg(element) {
    element.style.background =
        "rgb(" +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        "," +
        Math.floor(Math.random() * 255) +
        ")";
}

const elementByVariant = document.getElementById(String(VARIANT));

elementByVariant.onmouseover = () => {
    onMouseOverRandomBg(elementByVariant);
};

elementByVariant.onmouseup = () => {
    onMouseClickCell(elementByVariant);
};

elementByVariant.ondblclick = () => {
    onDoubleClickCell();
};