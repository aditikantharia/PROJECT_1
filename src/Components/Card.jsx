import { Search, UserPlus } from "lucide-react"


const Card = (props) => {
    console.log(props);
    return (
        <>
            <div className="card  bg-white w-full max-w-sm h-auto 
            rounded-xl shadow-2xl my-5 mx-6 py-4 px-6">
                <div className="flex items-start justify-between">
                    <img src={props?.data?.photo}
                        alt="image" className="w-24 h-24 rounded-full object-cover drop-shadow-2xl  " />
                <div className="icon flex items-start gap-5">
                    <div className="bg-gray-100 inline-block rounded-xl  p-2 text-center "><Search className="font-bold" /></div>
                    <div className="bg-blue-200 inline-block p-2 rounded-xl text-center"><UserPlus className="text-blue-600 font-bold" /></div>
                </div>
                </div>
                
                <div className="content pt-2 my-5">
                    <h2 className="text-2xl font-bold my-2 ">{props?.data?.name}</h2>
                    <p className='text-md text-gray-400 font-semibold my-1'>{props?.data?.username}</p>

                    <p className='text-md my-2'>{props?.data?.bio}</p>
                </div>

                <div className="other flex justify-between items-center">
                    <p className='text-gray-400'><span className='text-black'>{props?.data?.points}</span> points</p>
                    <p className='text-gray-400'><span className='text-black'>{props?.data?.friends}</span> Friends</p>
                    <p className='text-gray-400'>{props?.data?.joinedAt}</p>

                </div>
            </div>
        </>
    )
}

export default Card