function add() {

    function status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    fetch('https://randomuser.me/api') // picture cell city postcode email
        .then(status)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const user = data.results[0];
            const person = new Person(
                user.picture.large,
                user.name,
                user.location.city,
                user.location.postcode,
                user.phone,);
            person.createPerson();
        }).catch(function (error) {
            console.log('Request failed', error);
        });
}

const personDiv = document.getElementById('persons');

class Person {

    constructor(picture, name, city, postcode, phone) {
        this.picture = picture;
        this.name = name;
        this.city = city;
        this.postcode = postcode;
        this.phone = phone;
    }

    createPerson() {
        const div = document.createElement('div');
        div.id = 'person';

        const img = document.createElement('img');
        img.src = this.picture;
        div.appendChild(img);

        const info = document.createElement('span');
        info.innerHTML = `<p>Name: ${this.name.title} ${this.name.first} ${this.name.last}</p><p>City: ${this.city}</p><p>Postcode: ${this.postcode}</p><p>Phone: ${this.phone}</p>`;
        div.appendChild(info);

        personDiv.appendChild(div);
    }

}