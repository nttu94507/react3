   export  const getProbe = () =>{
    fetch('http://127.0.0.1:8001/api/Probe/1',
    // {
    //     method: "GET",
    //     headers: new Headers({
    //     'Content-Type': 'application/json'
    //     }
    //   )
    // }
    )
      .then((response) => response.json())
      // .then(data=>{
      //   console.log(data)
      // })
  }
