import {local} from '../url/url'

export  const getCustomer = (id:any) =>(
    fetch('http://'+local+'/api/customer/'+(id?id:''))
      .then((response) => response.json())
   )