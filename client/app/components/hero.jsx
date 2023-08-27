import Image from "next/image"

export const Hero = () => {
    return (
        <section>
            <div className='container-app py-4 sm:justify-between sm:flex sm:gap-8 sm:items-center md:pt-12'>
                <div className="py-8 sm:basis-[50%]">
                    <h1 className="font-500 text-3xl text-[#010038]">Give life to a creative and innovative project</h1>
                    <p className="text-[#6975A6] mt-4">Invest or fund a start-up project using decentralized crowdfunding</p>
                    <div className="pt-6">
                        <button className="bg-[#537EC5] text-white px-5 py-2 rounded-md border-[#537EC5] border-solid border-[1px] mr-6">Download App</button>
                        <button className="text-[#537EC5] bg-white px-7 py-2 rounded-md border-[#537EC5] border-solid border-[1px]">Explore</button>
                    </div>
                </div>
                <div className="grid grid-cols-12 grid-rows-6 aspect-[1/1] max-w-[360px] mx-auto sm:mx-0 sm:basis-[50%] sm:aspect-[6/5] sm:max-w-[400px]">
                    <div className="col-start-1 col-end-10 row-start-1 row-end-5 rounded-lg overflow-hidden" >
                        <Image alt='' src='/img6.jpg' width={200} height={200} className="w-full h-full" />
                    </div>
                    <div className="col-start-5 col-end-13 row-start-4 row-end-7 rounded-lg overflow-hidden" >
                        <Image alt='' src='/img1.jpg' width={200} height={200} className="w-full h-full" />
                    </div>
                    <div className="bg-white rounded-lg py-2 px-5 col-start-2 -translate-y-4 h-fit w-fit shadow-md">
                        <p className="text-sm">Fund raised</p>
                        <p className="text-green-500 text-2xl font-bold">$56789</p>
                    </div>
                    <div className="" />
                    <div className="bg-[#537EC5] rounded-full col-start-9 row-start-3 max-w-[80px] max-h-[80px] h-[calc(4rem+3vw)] w-[calc(4rem+3vw)] -translate-y-2 sm:h-[calc(2rem+3vw)] sm:w-[calc(2rem+3vw)] sm:max-w-[65px] sm:max-h-[65px]" />
                    <div className="bg-[#F49F38] h-8 w-8 rounded-full col-start-11 row-start-2 translate-y-4" />
                </div>
            </div>
        </section>
    )
}
