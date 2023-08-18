import Image from "next/image"

const Logo = () => {
  return (
    <div className="p-4 pb-2 w-fit"><Image src={'/Logo.svg'} height={40} width={109} alt="healthy"/></div>
  )
}
export default Logo