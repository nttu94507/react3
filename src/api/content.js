
export const getContent = () =>{
    fetch('https://httpbin.org/get')
      .then(respone => respone.json())
  }
