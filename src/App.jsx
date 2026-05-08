import { useEffect } from "react"


function App() {
 
  const api_url = "https://lanciweb.github.io/demo/api/actresses/"
  

  useEffect(() => { 
    fetch(api_url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
        
    })
  })

  return (
    <>

    </>
  )
}

export default App
