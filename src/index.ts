import Typed from 'typed.js';
import { config, quotes } from './config';
import { configToDoc } from './configToDoc';


window.document.title = config.title;
configToDoc(config);

const img = window.document.getElementById("bagimg");
if (img) {
    img.onclick = nextQuote;
}


function nextQuote() {
    const quote = window.document.getElementById("quote");
    const img = window.document.getElementById("bagimg");
    if (!quote || !img) {
        window.document.body.innerText = "Error";
        return;
    }
    if (img.classList.contains("rotate")) {
        // already loading ... do nothing
        return;
    }
    quote.classList.add("invisible");
    img.classList.add("rotate");
    setTimeout(function () {
        img.classList.remove("rotate");
        quote.innerHTML = "";
        var options = {
            strings: [quotes[Math.floor(Math.random() * quotes.length)]],
            typeSpeed: 50,
            startDelay: 100,
            showCursor: false
        };
        console.log(options.strings[0]);
        quote.classList.remove("invisible");
        var typed = new Typed('#quote', options);
    }, 1000);
}

// console.log(typed)

// var typed = new Typed('span', options);
// typed.start();

// var typed = new Typed('#typed', {
//     stringsElement: '#typed-strings'
// });
