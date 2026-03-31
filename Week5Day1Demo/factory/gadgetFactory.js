const Laptop = require('./laptop');
const Tablet = require('./tablet');

const gadget = {
  laptop: Laptop,
  tablet: Tablet
};

module.exports = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];

    if (!GadgetType) {
      throw new Error(`Gadget type "${type}" is not supported`);
    }

    return new GadgetType(attributes);
  }
};