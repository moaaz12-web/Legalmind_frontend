import React, {useEffect} from 'react'
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux';
import DocViewComp from './DocViewComp';



const FavoritesPage = () => {
  const docs = useSelector((state) => state.generated.val);
  const ress = docs.data.documents

  // console.log(ress)
  return (
    <>
        <div className='flex flex-col  opacity-100 items-center w-full'>
        {/* <svg viewBox="0 20 1000 400" className="absolute inset-0">
  <path d="M0,100 V200 Q500,250, 500,250 Q600,250, 500,200 T1000,200 V100 H0 Z" fill="rgb(254, 49, 49)"></path>
</svg> */}


            {/* <div className='w-full'> */}
                    <h1 className='text-2xl font-bold text-gray-700'>Saved Documents</h1>
                    
            {/* </div> */}
          <div className='z-[300000]'>
            {ress && (
                        ress.map((val)=>{
                        return <DocViewComp text={val.text} key={ress._id} translated={val.gptresponse}/>})

            )}
          </div>
        </div>
        <Footer/>

    </>
  )
}

export default FavoritesPage