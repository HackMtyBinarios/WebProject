import Image from "next/image"
import Logo from "../../Assets/Logo.png"
import Link from "next/link"


function HeaderTest() {
  return (
    <div className="min-h-[50px] h-[12vh] w-[100vw] border-b-4 border-black bg-white flex items-center justify-center px-8 bg-[#ffffff]">
        <Link href="/"><Image src={Logo} alt="Fink Logo" className="object-containt h-[8vh] w-40"/></Link>
    </div>
  )
}

export default HeaderTest