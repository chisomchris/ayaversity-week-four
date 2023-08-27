import Image from "next/image"

export const Sponsors = () => {

    return (
        <div className="flex gap-x-12 gap-y-6 items-center justify-center flex-wrap py-16">
            <Image src='/facebook.jpg' alt='facebook' width={200} height={80} className='w-28 sm:w-36'/>
            <Image src='/bitaccess.jpg' alt='bit access' width={200} height={80} className='w-28 sm:w-36' />
            <Image src='/robinhood.jpg' alt='robinhood' width={200} height={80} className='w-28 sm:w-36' />
            <Image src='/combiator.jpg' alt='Y combinator' width={200} height={80} className='w-28 sm:w-36' />
            <Image src='/atlassian.jpg' alt='atlassain' width={200} height={80} className='w-28 sm:w-36' />
        </div>
    )
} 