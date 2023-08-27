import Image from "next/image"

export const HowTo = () => {
    const startUp = [
        {
            header: "Create Your Project",
            detail: "Showcase your business or idea on our platform."
        },
        {
            header: "Gain Investor Support",
            detail: "Engage with a global community of investors who are eager to support innovative projects."
        },
        {
            header: "Transparent Funding",
            detail: "Once your campaign is live, watch your projects gain momentum as investors contribute to your funding goal."
        },
        {
            header: "Bring Your Vision to Life",
            detail: "Successfully funded? Congratulations! Now its time to turn your ideas into reality."
        },
    ]
    const investor = [
        {
            header: "Explore Exciting Projects",
            detail: "As an investor on Renerise, you gain access to a wide range of innovative projects and ideas."
        },
        {
            header: "Evaluate Project Details",
            detail: "Dive deep into project descriptions, funding goals, and the potential returns or reward offered by the entrepreneurs."
        },
        {
            header: "Assess Business Potential",
            detail: "Utilize the available resources such as business plans, etc and any other relevant materials provided by the project creators."
        },
    ]

    return (
        <section>
            <div className="container-app">
                <h1 className="text-center text-[#010038] text-3xl my-4 ">How to get started</h1>
                <p className="text-center text-[#6975A6] mb-6 max-w-[480px] mx-auto">At Renerise, we are prevolutionizing the crowdfunding landscape by leveraging the blockchain technology.</p>
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="grid pb-8 gap-x-8 lg:col-span-7 sm:grid-cols-2">
                        <div className="lg:grid-rows-4">
                            <h2 className="text-2xl text-[#010038] my-4">Start-up</h2>
                            <div className="flex flex-col gap-8">
                                {
                                    startUp.map((el, i) => <Tile key={i} header={el.header} detail={el.detail} />)
                                }
                            </div>
                        </div>
                        <div className="lg:grid-rows-4">
                            <h2 className="text-2xl text-[#010038] my-4">Investor</h2>
                            <div className="flex flex-col gap-8">
                                {
                                    investor.map((el, i) => <Tile key={i} header={el.header} detail={el.detail} />)
                                }
                                <div>
                                    <button className="text-center bg-[#010038] text-white py-3 rounded-md px-10">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-12 pb-12 pt-16 lg:col-span-5">
                        <div className="grid grid-cols-12 grid-rows-6 aspect-[4/6] relative max-w-[420px] mx-auto">
                            <Image src='/img19.jpg' alt='' width={300} height={600} className="absolute -right-[15%] -top-[15%] w-3/5" />
                            <Image src='/img18.jpg' alt='' width={300} height={600} className="rounded-md z-50 col-start-1 col-end-13 w-full h-full row-start-1 row-span-full" />
                            <Image src='/img17.jpg' alt='' width={300} height={600} className="absolute -bottom-[12%] -left-[20%] w-1/2 z-0" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Tile = (props) => {
    return (
        <div className="border-solid border-[1px] rounded-sm px-2 py-4 border-[#6975A680]">
            <p className="font-700 text-xl text-center">{props.header}</p>
            <p className="text-[#6975A6] text-center">{props.detail}</p>
        </div>
    )
}