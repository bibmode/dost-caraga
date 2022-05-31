import Image from "next/image";
import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return (
    <div className="container mx-auto px-4">
      <Image src="/dost-logo-phone.png" alt="logo" width="50" height="50" />
    </div>
  );
};

export default Nav;
