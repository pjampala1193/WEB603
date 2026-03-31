const gadgetFactory = require('./gadgetFactory');

const myLaptop = gadgetFactory.createGadget('laptop', {
  ram: 16,
  ssd: 512,
  name: 'MacBook Pro'
});

const myTablet = gadgetFactory.createGadget('tablet', {
  ram: 8,
  hdd: 256,
  name: 'iPad Air',
  network: '5G'
});

console.log(myLaptop);
console.log(myTablet);