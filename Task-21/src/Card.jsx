export default function Card({el,idx}){
    return(
        <div 
        className={`h-60 flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500`}
      >
          <div className="p-5 flex flex-col gap-2 h-[98%] w-[98%] bg-white">
          <img src={el} className="h-3/5 w-full object-cover rounded-md " />
          <h3 className="text-center text-2xl font-semibold">Card {idx+1}</h3>
          <p className="text-center">This is card {idx+1} description</p>
          </div>
      </div>
    )
}