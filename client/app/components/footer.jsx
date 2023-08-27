import Image from "next/image"
import Link from "next/link"

export const Footer = () => {

    return (
        <footer className="pt-8 bg-[#F7F8FB] mt-8">
            <div className="container-app grid gap-8 pb-8 sm:grid-cols-2 md:grid-cols-3">
                <div>
                    <Image src={'/img21.jpg'} alt="" width={200} height={60} className="w-48 my-3 h-auto" />
                    <p className="max-w-[400px]">Taps into the potential of decentralized applications (DApps) and smart contracts to facilitate crowdfunding campaigns.</p>
                </div>
                <div className="md:grid md:grid-cols-2 w-full col-span-2">
                    <div className="grid grid-cols-2 mb-6">
                        <div>
                            <h2 className="font-700 text-2xl text-[#010038]">Project</h2>
                            <p><Link href={'#'}>Start ups</Link></p>
                            <p><Link href={'#'}>NGOs</Link></p>
                        </div>
                        <div>
                            <h2 className="font-700 text-2xl text-[#010038]">Feature</h2>
                            <p><Link href={'#'}>Invest</Link></p>
                            <p><Link href={'#'}>Fund</Link></p>
                            <p><Link href={'#'}>List a project</Link></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2">
                        <div>
                            <h2 className="font-700 text-2xl text-[#010038]">Resource</h2>
                            <p><Link href={'#'}>Blog</Link></p>
                            <p> <Link href={'#'}>Faq</Link></p>
                            <p><Link href={'#'}>How it works</Link></p>
                        </div>
                        <div>
                            <h2 className="font-700 text-2xl text-[#010038]">About</h2>
                            <p><Link href={'#'}>Contact us</Link></p>
                            <p><Link href={'#'}>Our story</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white py-4">
                <div className="container-app">
                    <p className="text-center">&copy; 2022-{`${new Date().getFullYear()}`}, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}