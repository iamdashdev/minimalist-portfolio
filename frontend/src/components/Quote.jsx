
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
const Quote = () => {
  return (
    <div className='flex flex-col mt-24 md:mt-40 lg:mt-0 relative z-[-1]'>
        <div className='border-1 border-whitish p-5 w-full text-white text-2xl relative'><span className='absolute top-[-15px] p-1 bg-background'><FaQuoteLeft/></span> Experience is the name everyone gives to their mistakes.</div>
        <div className='border-1 border-whitish p-3 self-end text-white text-2xl italic relative'><span className='absolute top-[-15px] p-1 bg-background'><FaQuoteRight/></span> – Oscar Wilde</div>
    </div>
  )
}

export default Quote