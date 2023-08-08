const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0; // removed one 0
const minuteOfDay = 0; // removed one 0

// Only change below this line

if (typeof hourOfDay === 'number' && typeof minuteOfDay === 'number' && hourOfDay === 0 && minuteOfDay === 0) {
    const taxAsDecimal = parseFloat(tax) / 100; // Used parseFloat() to convert the tax percentage string into a decimal value.
    const startingAfterTax = salary * (1 - taxAsDecimal);
    const balance = startingAfterTax - transport - food - rent; // Fixed the spelling of the variable name balance.
    console.log('R ' + balance.toFixed(2)); // Added the 'R ' to format the output
}


 


