   export  const getProbe = id =>(
    fetch('http://127.0.0.1:8000/api/Probe/'+(id?id:''))
      .then((response) => response.json())
   )

   export  const postProbeData = probe =>(
      fetch('http://127.0.0.1:8000/api/Probe/'+(id?id:''))
        .then((response) => response.json())
     )
