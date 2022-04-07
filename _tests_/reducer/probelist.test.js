import Probelist from '../../src/reducer/probelist';
import { fetchDataSuccess } from '../../src/action/probelist';

describe ('Probelist_Reducer',()=>{
    test('ProbeReducer_Action_FetchData_Success',()=>{
        const assertState = Probelist({},fetchDataSuccess('test'))
        expect(assertState).toEqual({probelist:'test',})
    })
})