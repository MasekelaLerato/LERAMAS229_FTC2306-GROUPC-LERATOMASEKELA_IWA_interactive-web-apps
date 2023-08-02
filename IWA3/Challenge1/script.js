
import {company} from"./configuration1.js"
import {year} from "./configuration2.js"

console.log(company,year)

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message