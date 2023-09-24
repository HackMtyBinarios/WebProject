import Image from "next/image"
import Logo from "../../Assets/Logo.png"

function Footer() {
  return (
    <div className="min-h-[50px] h-[10vh] w-[100vw] border-t-4 border-black bg-white flex items-center px-28">
        <Image src={Logo} alt="Fink Logo" className="object-containt h-[5vh] w-32"/>
    </div>
  )
}

export default Footer