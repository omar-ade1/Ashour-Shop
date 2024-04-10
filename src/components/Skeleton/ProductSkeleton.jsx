import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const ProductSkeleton = () => {
  return (
    <div>
      
      <div className="image-text flex xsm:flex-col items-center gap-2 ">
          <div className="img w-[200px] h-[200px] border-r px-4">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="text">
            <h3 className="font-bold text-lg"><Skeleton /></h3>
            <div className="size w-full h-{20px} my-5">
            <Skeleton/>  
          </div>
            <div className="price text-xl px-0 font-bold text-[#2B3C88]"><Skeleton/></div>
            <div className="rating-love flex justify-between items-center">
               
                <p className="font-bold w-1/2"><Skeleton/> </p>
              <div className='w-[30px] h-[30px]'> <Skeleton className='w-full h-full' circle/></div>
            </div>
            <div className="add-to-cart w-[300px] mx-2 my-3">
              <Skeleton className='w-full h-full py-2' />
            </div>
          </div>
        </div>
        <div className="description mt-5 border p-2 rounded max-w-[600px]">
          <h3 className="text-2xl w-[200px] font-bold"><Skeleton /></h3>
          <p className="font-light"><Skeleton count={3}/></p>
        </div>
      

    </div>
  )
}

export default ProductSkeleton