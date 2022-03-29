   export  const getProbe = () =>(
    fetch('http://127.0.0.1:8000/api/Probe/1')
      .then((response) => response.json())
   )
