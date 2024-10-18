import Image from "next/image";

import serviLogo from "/public/images/servi-logo.png";
export default function ServiLogo({h = 50, w = 120}) {
  return (
    <>
      <Image
        alt="Servi logo"
        height={h}
        quality={100}
        src={serviLogo}
        style={{objectFit: "cover"}}
        width={w}
      />
    </>
  );
}
