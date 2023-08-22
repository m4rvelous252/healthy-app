import Image from 'next/image';

const Logo = () => {
  return (
    <div className="w-fit py-2 md:p-4 md:pb-2">
      <Image src={'/Logo.svg'} height={40} width={109} alt="healthy" />
    </div>
  );
};
export default Logo;
