const texts = [

    "নেটওয়ার্ক ইঞ্জিনিয়ার",

    "ISP উদ্যোক্তা",

    "Linux TV Server Administrator",

      "Web Developer",

    "Graphic Designer"

];

let count = 0;

let index = 0;

let current = "";

let letter = "";

(function type() {

    if (count === texts.length) {

        count = 0;

    }

    current = texts[count];

    letter = current.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === current.length) {

        count++;

        index = 0;

        setTimeout(type, 1500);

    } else {

        setTimeout(type, 80);

    }

})();