"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FolderOpenDot, House, Mail, User } from "lucide-react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="w-14 h-1/2 fixed top-1/2 transform -translate-y-1/2 flex justify-center rounded-lg bg-[#374151] shadow-lg">
      <ul className="flex flex-col items-center justify-center h-full">
        {[
          { href: "/", icon: <House className="size-6" />, name: "Home" },
          { href: "/about", icon: <User className="size-6" />, name: "About" },
          { href: "/projects", icon: <FolderOpenDot className="size-6" />, name: "Projects" },
          { href: "/contact", icon: <Mail className="size-6" />, name: "Mail" },
        ].map(({ href, icon, name }) => (
          <li key={name} className="my-4">
            <Link href={href} className="relative flex flex-col items-center text-white">
              {icon}
              {pathname === href && <div className="absolute -bottom-2 w-6 h-0.5 bg-white rounded"></div>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
