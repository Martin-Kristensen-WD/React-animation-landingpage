import product1 from '../../images/product-1.jpg';
import product2 from '../../images/product-2.jpg';
import product3 from '../../images/product-3.jpg';

import sweet1 from '../../images/sweet3.jpg';
import sweet2 from '../../images/sweet-2.jpg';
import sweet3 from '../../images/sweet-3.jpg';



// Array of Objects to map through. 
export const productData = [
    {
        img: product1,
        alt: 'Pizza',
        name: 'Pizza Supreme',
        desc:
          'Med tomat, ost, basilikum, italienske pølser, bøf tomat, oliven og pesto.',
        price: '64,00 kr.',
        button: 'Køb nu'
      },
      {
        img: product2,
        alt: 'Pizza',
        name: 'Hawaiian Paradise',
        desc:
          'Med tomat, ost, basilikum, kylling, ananas, rødløg og ananas saft.',
        price: '67,00 kr.',
        button: 'Køb nu'
      },
      {
        img: product3,
        alt: 'Pizza',
        name: 'Vegetariana',
        desc:
          'Med tomat, ost, ruccola, asparges, grønne urter, og champignon.',
        price: '64,00 kr',
        button: 'Køb nu'
      }
]; 

export const productDataTwo = [
  {
    img: sweet2,
    alt: 'Donuts',
    name: 'Go donuts',
    desc:
      'Belgiske donuts, glaceret med chokolade, glasur og krymmel.',
    price: '30.00 kr.',
    button: 'Køb nu'
  },
  {
    img: sweet3,
    alt: 'Ice Cream',
    name: 'Brownie al karamel',
    desc:
      'Lækker brownie med italiensk vanilje is og karamel sauce.',
    price: '45.00 kr.',
    button: 'Køb nu'
  },
  {
    img: sweet1,
    alt: 'Brownie',
    name: 'Brownie knas',
    desc:
      'Dobbelt brownie bunde i firkanter med hvid chokolade knas.',
    price: '35.00 kr.',
    button: 'Køb nu'
  }
];