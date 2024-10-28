import image1 from "./assets/image-1.jpg"
import image2 from "./assets/image-2.jpg"
import image3 from "./assets/image-3.jpg"
import image4 from "./assets/image-4.jpg"
import image5 from "./assets/image-5.jpg"
import image6 from "./assets/image-6.jpg"
import image7 from "./assets/image-7.jpg"
import image8 from "./assets/image-8.jpg"
import image9 from "./assets/image-9.jpg"
import Card from "./Card.jsx"

function App() {
  const cardImage =[image1,image2,image3,image4,image5,image6,image7,image8,image9]
  return(
    <>
    <h1 className="text-center pt-5 pb-7 text-3xl font-serif">All Card Here</h1>
    <div className="grid grid-cols-3 w-full gap-4 px-12 mb-10">
    {cardImage.map((el,index)=>{
      return(
       <Card el={el} idx={index}/>
      )
    })}
    </div>
    </>
  )
}

export default App