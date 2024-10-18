import Image from "next/image";

import serviLogo from "/public/images/servi-logo.png";
export default function ServiLogo({h = 50, w = 120}) {
  return (
    <>
      <img
        alt="Servi logo"
        height={h}
        quality={100}
        src="/images/servi-logo.png"
        style={{objectFit: "cover"}}
        width={w}
      />
    </>
  );
}
