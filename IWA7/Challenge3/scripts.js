const leoName = 'Leo'
const leoSurname = 'Musvaire        '
const leoBalance = '9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '4582.2'

const divider = '----------------------------------'

// Only change below this line

const owed = parseInt(leoBalance) + parseInt(sarahBalance)
const leo = `${leoName}  ${leoSurname.trim()}  (Owed: R ${parseInt(leoBalance).toFixed(2)})`
const sarah = `${sarahName.trim()}  ${sarahSurname} (Owed: R ${parseInt(sarahBalance).toFixed(2)})`
const total = `Total amount owed: R ${owed.toFixed(2)}`
const result =   leo + '\n' + sarah + '\n' + divider + '\n' +  total + '\n' +   divider

console.log(result) 