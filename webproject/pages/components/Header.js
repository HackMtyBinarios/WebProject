import Image from "next/image"
import Logo from "../../Assets/Logo.png"

function Header() {
  return (
    <div className="min-h-[50px] h-[12vh] w-[100vw] border-b-4 border-black bg-white flex items-center px-28 fixed bg-[#ffffff]">
        <Image src={Logo} alt="Fink Logo" className="object-containt h-[8vh] w-40 "/>
    </div>
  )
}

export default Header