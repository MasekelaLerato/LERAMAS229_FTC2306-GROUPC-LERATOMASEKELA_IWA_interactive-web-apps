const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0;
const batteries= 35 * 2;
const pens = 5 * 0;

let location_1 ='RSA';
const customers = 1;
let shipping = 400;
let currency = 'R';

if (location_1 === 'RSA') { shipping = 400 && currency == 'R' 


}
 

if (location_1 === 'NAM'){ shipping = 600 && currency == 'R'} else {
    shipping =800
}

if (shoes + batteries + pens + shirts + toys >= 1000 && location_1 === 'RSA') {
    shipping = 0;
  }

if (location_1 === 'NAM' && customers < 2) {
    shipping = 0;
  }

if (shipping === 0 && customers !== 1) {
    console.log(FREE_WARNING);
  }


if (location_1 === 'NK') {
    console.log(BANNED_WARNING);
  } else {
    console.log('price', currency, shoes + batteries + pens + shirts + toys + shipping);
  }


