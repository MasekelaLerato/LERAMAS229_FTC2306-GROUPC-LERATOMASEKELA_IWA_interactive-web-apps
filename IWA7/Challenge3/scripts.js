const leoName = 'Leo'
const leoSurname = 'Musvaire        '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = Math.abs(leoBalance) + Math.abs(sarahBalance)
const leo = `${leoName}  ${leoSurname.trim()}  (Owed: R ${Math.abs(leoBalance).toFixed(2)})`
const sarah = `${sarahName.trim()}  ${sarahSurname} (Owed: R ${Math.abs(sarahBalance).toFixed(2)})`
const total = `Total amount owed: R ${owed.toLocaleString(undefined).replace(/,/g, ' ')}`;
const result =   leo + '\n' + sarah + '\n' + divider + '\n' +  total + '\n' +   divider

console.log(result) 