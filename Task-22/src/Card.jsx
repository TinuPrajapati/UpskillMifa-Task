export default function Card({el}){
    return(
        <div className=" h-60 border-black border-2 p-4 flex flex-col justify-center items-center gap-4" >
            <img src={el.url} alt="" className=" h-[80%] w-[80%]"/>
            <p >{el.title}</p>
        </div>
    )
}