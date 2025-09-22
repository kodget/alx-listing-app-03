import { HomeIconProps } from "@/interfaces";
const HomeIcon = ({ className, src, alt, icon }: HomeIconProps) => {
  return (
    <div className="hidden max-[600px]:inline ">
      <img
        className={className}
        src={`/assets/${icon}`}
        alt={icon}
        width={24}
        height={24}
      />
    </div>
  );
};

export default HomeIcon;
