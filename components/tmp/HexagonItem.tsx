import { inter } from "@/helper/font";
import clsx from "clsx";
import Link from "next/link";
import { FC } from "react";

interface HexagonItemProps {
  label: string;
  icon: React.ReactNode;
}

const HexagonItem: FC<HexagonItemProps> = ({icon, label}) => {
  return (
    <div className="h-[136px] w-[136px] flex justify-center items-center px-[10px]">
      <div className="bg-[url(/Hexagon.svg)] bg-no-repeat w-full h-full bg-center flex flex-col items-center justify-center cursor-pointer">
        {icon}
        <span className={clsx(inter.className ,"text-white text-xl leading-6")}>{label}</span>
      </div>
    </div>
  );
};
export default HexagonItem;
