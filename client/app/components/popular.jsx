import Image from "next/image"
import Link from "next/link"

export const Popular = () => {
    const campaigns = [
        {
            title: 'GreenGrowth Innovations',
            url: '/img8.jpg',
            details: 'GreenGrowth Innovations is apioneering startup dedicated to driving sustainabilty and environmental stewardship.',
            tags: ["Farming", "Boi Tech", "Health Tech"],
            likes: 267
        },
        {
            title: 'HealthTech Solutions',
            url: '/img8.jpg',
            details: 'GreenGrowth Innovations is apioneering startup dedicated to driving sustainabilty and environmental stewardship.',
            tags: ["Farming", "Boi Tech", "Health Tech"],
            likes: 267
        },
        {
            title: 'EduTech Innovators',
            url: '/img8.jpg',
            details: 'GreenGrowth Innovations is apioneering startup dedicated to driving sustainabilty and environmental stewardship.',
            tags: ["Education", "Agri Tech"],
            likes: 267
        },
    ]
    return (
        <section>
            <div className="container-app pb-10">
                <h1 className="font-500 text-3xl text-[#010038] my-6">Popular this week</h1>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        campaigns.map((campaign, i) => <Card url={campaign.url} title={campaign.title} likes={campaign.likes} tags={campaign.tags} details={campaign.details} />)
                    }
                </div>
            </div>
        </section>
    )
}

const Card = (props) => {
    return (
        <div className="rounded-lg overflow-hidden grid">
            <div ><Image src={props.url} alt='' width={400} height={200} className="w-full h-full object-cover" /></div>
            <div className="px-5">
                <h1 className="font-500 text-2xl text-[#010038] mt-4">{props.title}</h1>
                <p className="text-[#6975A6] my-2 text-lg">{props.details}</p>
                <div className="flex gap-4 py-5 flex-wrap">
                    {
                        props?.tags?.map((item, i) => <p key={i} className="text-sm border-solid border-[1px] border-[#010038] rounded-full py-[2px] px-4">{item}</p>)
                    }
                </div>
            </div>
            <div className="bg-[#DCE2EB] py-3 px-6 flex justify-between items-center mt-auto">
                <p className="bg-white px-6 py-1 rounded-full">{props.likes} likes</p>
                <Link href={'#'}>Details</Link>
            </div>
        </div>
    )
}