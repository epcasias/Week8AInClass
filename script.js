let book = document.getElementById("book");

let show = document.getElementById("show");

let appointments = [];


function appointments(name, date, number) {
    this.name = name;
    this.date = date;
    this.number = number;

    this.display = function() {
        return ` ---- ${this.name} ---- ${this.age} ---- ${this.email} `;
    }
}


book.onclick = function() {

    let name = document.getElementById("name");
    let date = document.getElementById("date");
    let number = document.getElementById("number");

    if(name == "" || date == "" || number == "") {
        message.innerHTML= "Please complete all fields before booking"
    } else {
        let appointments = new Appointment(name.value, age.value. email.value);
        appointments.push(appointments)
        totalQueue.innerText =;
    }


}


display.onclick = function() {

htmlCode= "No ---- Name ---- Date ---- Phone"



}

