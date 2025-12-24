import { useState} from 'react'

function Joke() {
  const[joke,setJoke] = useState(null)
   const[loading,setLoading] = useState(false)
    const[error,setError] = useState("")
    const fetchJoke = async () =>{
    setLoading(true)
    setError("")
    try{
      const response = await fetch ("http://www.official-joke-api.appspot.com/jokes/random")
      const data = await response.json()
      setJoke(data)
    }
    catch(err){
      setError("Try Again")
    }
    finally{
      setLoading(false)
    }
    }
  return (
    <div  className="bg-gradient-to-r from-sky-500 to-purple-600 h-screen flex items-center justify-center">
     <div className="bg-white text-center p-8 rounded-lg">
     <h1 className="text-3xl mb-4 font-bold" >Random Joke Generator</h1>
     {loading && <p>Loading...</p>}
     {error && <p>{error}</p>}
     {joke && !loading && (
      <div>
        <p>{joke.setup}</p>
        <p>{joke.punchline}</p>
      </div>
     )
     }
     <button onClick={fetchJoke} 
     className="bg-blue-500 text-white p-1 rounded-md text-lg hover:bg-blue-600">Get Joke</button>
      </div>
    </div>
  )
}

export default Joke
