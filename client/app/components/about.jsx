import Image from "next/image"

export const About = () => {
    return (
        <section className="py-8">
            <div className="container-app">
                <div className="sm:grid sm:grid-cols-2 sm:items-center">
                    <div>
                        <Image src='/img23.jpg' alt='' width={200} height={200} className="mx-auto w-full max-w-[320px]" />
                    </div>
                    <div>
                        <p>At Renerise, we are revolutionizing the crowdfunding landscape by leveraging the power of web 3.0 and blockchain technology. Our decentralized crowdfunding platform empowers businesses to raise funds from global investors, while offering unrivaled transparency, security, and low transaction costs.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}