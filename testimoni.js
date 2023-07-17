class TestimonialClass {
    #quote = ""
    #img = ""

    constructor(quote, img) {
        this.#quote = quote;
        this.#img = img;
    }

    get quote() {
        return this.#quote
    }
    get img() {
        return this.#img
    }
    get user() {
        throw new Error('Testinya mana ')
    }

    get dataHatml() {
        return `<div class="cardTesti">
                <img alt="p" src="${this.img}"/>
                <h5>${this.quote}</h5>
                <p>${this.user}  </p>
            </div>
        `
    }

}

class userTestimonial extends TestimonialClass {
    #user = ""

    constructor(user, quote, img) {
        super(quote, img)
        this.#user = user
    }
    get user() {
        return "user : " + this.#user
    }
}

class campeniTestimonial extends TestimonialClass {
    #campeni = ""

    constructor(campeni, quote, img) {
        super(quote, img)
        this.#campeni = campeni
    }
    get user() {
        return "campeni : " + this.#campeni

    }
}

const testimonialsBondan = new userTestimonial("Bondan", "wah lumayan", "icon/instagram.png")
const testimonialsAsep = new userTestimonial("Asep", "Agak pusing", "icon/instagram.png")
const testimonialsUsman = new campeniTestimonial("Usman", "Asyik nih", "icon/instagram.png")

let dataTestimonial = [testimonialsBondan, testimonialsAsep, testimonialsUsman]
let dataHatml = ""

for (let i = 0; i < dataTestimonial.length; i++) {
    dataHatml += dataTestimonial[i].dataHatml
}
document.getElementById("boxTesti").innerHTML = dataHatml