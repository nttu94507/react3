   import {local} from '../url/url'
   
   export  const getProbe = (id:any) =>(
    fetch('http://'+local+'/api/Probe/'+(id?id:''))
      .then((response) => response.json())
   )

   export  const getProbeInfo = (key) =>(
      fetch(`http://${local}/api/Probe/detail/${key}`)
        .then((response) => response.json())
   )