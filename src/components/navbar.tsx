'use client';
import Image from "next/image";
import { RiUser6Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAuthStore from "@/store/useAuthStore";

export default function Navbar() {
  const { email } = useAuthStore();

  return (
    <nav className="grid grid-cols-3 p-5 bg-gray-300">
      <div>
        <Image src={"/static/logos.png"} alt="logo" width={50} height={41} />
      </div>

      <div className="flex items-center justify-center gap-10 font-bold">
        <div>Home</div>
        <div>Shop</div>
        <div>About</div>
        <div>Contact</div>
      </div>
      <div className="flex items-center justify-end gap-5">
        <RiUser6Line className="text-2xl" />
        {email}
        <CiSearch className="text-2xl" />
        <IoIosHeartEmpty className="text-2xl" />
        <AiOutlineShoppingCart className="text-2xl" />
      </div>
    </nav>
  );
}
