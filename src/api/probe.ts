   import {local} from '../url/url'
   
   export  const getProbe = id =>(
    fetch('http://'+local+'/api/Probe/'+(id?id:''))
      .then((response) => response.json())
   )

   export  const postProbeData = probe =>(
      fetch('http://'+local+'/api/Probe/'+(id?id:''))
        .then((response) => response.json())
     )
