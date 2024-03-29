import { v1 as uuid } from 'uuid';
import car from '../src/utils/car'


jest.mock('uuid/dist/v1')

const getCurrentCarSpy = jest.spyOn(
    car, 'getCurrentCar',
  );

describe('addProdToCar', () => {
    beforeAll(() => {
        uuid.mockReturnValue('9999');
      });
    test('check_add_prod', () => {
        const newCar = car.addProdToCar('apple', 3);
        expect(uuid).toHaveBeenCalled();
        expect(getCurrentCarSpy).toHaveBeenCalled();
        expect(newCar).toEqual(
          [{ id: '9999', name: 'apple', count: 3 }],
        );
      });
  });