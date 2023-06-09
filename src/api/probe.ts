   import {local} from '../url/url'
   
   export  const getProbe = (id:any) =>(
    fetch('http://'+local+'/api/Probe/'+(id?id:''))
      .then((response) => response.json())
   )

   export  const getProbeInfo = (key:any) =>(
      fetch('http://'+local+'/api/Probe/detail/2')
        .then((response) => response.json())
     )