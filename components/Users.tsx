import Image from "next/image";
import React from "react";

type users = {
  imgSrc: string;
};
const Users: React.FC<users> = ({ imgSrc }) => {
  return (
    <Image
      className="-ml-5 align-middle"
      loading="lazy"
      src={imgSrc}
      alt="user 1"
      width={50}
      height={50}
    />
  );
};

export default Users;
