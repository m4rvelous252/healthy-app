import Image from "next/image"

const Logo = () => {
  return (
    <div><Image src={'@public/Logo.png'} height={40} width={109} alt="healthy"/></div>
  )
}
export default Logo