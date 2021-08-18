import {add,sub} from '../src/utils/math'

describe('Check sub', () => {
    test('Check the result of 5 - 2', () => {
      expect(sub(5, 2)).not.toBe(1);
    });
  
    test('Check the result of 5 - 3', () => {
      expect(sub(5, 3)).toBe(2);
    });
  });