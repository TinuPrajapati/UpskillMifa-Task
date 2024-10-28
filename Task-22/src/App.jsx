import Card from './Card.jsx'
import useFetch from './Custom Hook/useFetch.js'

function App() {
  const {data,loading,error} = useFetch('https://jsonplaceholder.typicode.com/photos');

  if(loading) return <div className='w-full h-full flex justify-center items-center'>Loading ...</div>
  if(error !== null) return <div className='w-full h-full flex justify-center items-center'>Error:{error}</div>
  return (
    <>
      <h1 className='text-center text-2xl my-2 font-bold'>Photo</h1>
      <div className='w-full px-4 grid grid-cols-4 gap-2 mb-5'>
        {data.map((el, index) => (
          <Card key={index} el={el} />
        ))}
      </div>
    </>
  )
}

export default App