import Image from "next/image"

export const Header = () => {
    return (
        <header>
            <dinv className="flex items-center justify-between container-app pt-2">
                <Image src={'/img21.jpg'} alt="" width={200} height={60} className="w-36 h-auto" />

                <button className="bg-[#010038] text-white py-1 px-3 rounded-md text-sm">Connect <span>Wallet</span></button>
            </dinv>
        </header>
    )
}
