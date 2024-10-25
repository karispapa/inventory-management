import React from "react";

type HeaderProps = {
  name: string;
};

function Header({ name }: HeaderProps) {
  return (
    <h1 className="text-2xl font-semibold text-gray-700 mb-2 pl-2">{name}</h1>
  );
}

export default Header;
