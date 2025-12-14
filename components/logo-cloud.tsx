import { HTMLAttributes } from "react";
import Image from "next/image";

function LogoCloud(props: HTMLAttributes<HTMLDivElement>) {
  const logos = [
    "/avax.svg",
    "/coinbase.svg",
    "/ethereum.svg",
    "/pancakeswap.svg",
    "/polygon.svg",
    "/tether.svg",
  ];
  return (
    <div {...props}>
      <p className="text-center">Trusted by leading Companies</p>
      <div className="mt-6 flex items-center justify-center flex-wrap gap-4 [&_svg]:h-auto [&_svg]:w-24 xs:[&_svg]:w-auto xs:[&_svg]:h-8 text-muted-foreground">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {logos.map((src, idx) => (
            <div key={idx} className="flex items-center">
              <Image
                src={src}
                alt=""
                width={120}
                height={40}
                className="h-7 md:h-8 w-auto object-contain opacity-80"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCloud;
