import { v1 as uuid } from 'uuid';
const car = {

  carContent: [],

  getCurrentCar: () => car.carContent,

  addProdToCar: (name, count) => {
    const workCar = [...car.getCurrentCar()];
    workCar.push({ id: uuid(), name, count });
    return workCar;
  },
};

export default car;