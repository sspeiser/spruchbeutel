import { config, quotes } from './config';
import { configToDoc } from './configToDoc';


window.document.title = config.title;
configToDoc(config);

let first = true;

const quote = window.document.getElementById("quote");
const quoteParent = quote?.parentElement;
if (quote && quote instanceof HTMLDivElement && quoteParent) {
    for(const quoteStr of quotes) {
        const newQuote = quote.cloneNode(true) as HTMLDivElement;
        newQuote.innerHTML = quoteStr;
        newQuote.classList.remove("invisible");
        quoteParent.append(newQuote);
    }
}