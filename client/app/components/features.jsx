import Image from "next/image"

export const Features = () => {
    const features = [
        {
            url: '/img20.jpg', title: 'Global Access', details: 'Businesses can access a broader pool of potential investors from different geographical locations, expanding their funding opportunities.'
        },
        {
            url: '/img24.jpg', title: 'Transparency', details: 'Blockchain technology ensures transparency by recording all transactions and making them publicly accessible. This transparency can help build trust between businesses and investors.'
        },
        {
            url: '/img15.jpg', title: 'Security', details: 'The use of blockchain technology enhances security by providing immutable and tamper-resistant records of transactions. This can protect against fraudulent activities and increase investor confidence.'
        },
        {
            url: '/img13.jpg', title: 'Low Costs', details: ' By removing intermediaries and automating processes through smart contracts, Renerise reduce transaction costs compared to traditional crowdfunding platforms.'
        },

    ]
    return (
        <section>
            <div className="container-app grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {
                    features.map((f, i) => <Card key={i} title={f.title} details={f.details} img={f.url} />)
                }
            </div>
        </section>
    )
}
const Card = (props) => {
    return (
        <div className="shadow-lg rounded-lg py-12 px-7">
            <Image src={props.img} alt="" width={100} height={100} className="w-16" />
            <h1 className="font-500 text-3xl text-[#010038] my-4">{props.title}</h1>
            <p className="text-[#6975A6]">{props.details}</p>
        </div>
    )
}