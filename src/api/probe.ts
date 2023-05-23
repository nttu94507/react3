   import {local} from '../url/url'
   
   export  const getProbe = (id:any) =>(
    fetch('http://'+local+'/api/Probe/'+(id?id:''))
      .then((response) => response.json())
   )

   export  const searchProbe = (key:any) =>(
      fetch('http://'+local+'/api/Probe/search/'+(key?key:''))
        .then((response) => response.json())
     )