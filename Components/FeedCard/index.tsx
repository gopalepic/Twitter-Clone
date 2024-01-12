import exp from "constants";
import React from "react";
import Image from "next/image";
import { FiMessageCircle } from "react-icons/fi";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { AiOutlineUpload } from "react-icons/ai";


const FeedCard: React.FC =()=> {
    return (<div className=" border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-900 transitoin-all cursor-pointer">
            <div className="grid grid-cols-12 gap-3">
<div className=" grid-span-1 " >
<Image src="https://imgs.search.brave.com/qwJe9lO-sA1619REJHQ8zD4t58uw_pKjhCRThwyl-Zg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzUzLzgwLzEw/LzM2MF9GXzQ1Mzgw/MTA0MF82U3BSZXQw/eHNuN2VmWXM3NTlo/T2Uyb0o3TFptb1py/Ni5qcGc"
          alt="user-image"
          width={50} 
           height={50}
           
            ></Image>
</div>
<div className=" col-span-11 ">
    <h5>Gopal Soni</h5>
    <p >HI bacha bacha fashion ka deewana hogaya</p>
 <div className="flex justify-between mt-5 text-xl items-center p-2 w-[90%]">
    <div>
     <FiMessageCircle/>
    </div>
    <div>
     <FaRetweet />
    </div>
    <div>
     <CiHeart/>
    </div>
    <div>
    <AiOutlineUpload/>
    </div>
</div>
</div>
            </div>
            </div>)
}
export default FeedCard