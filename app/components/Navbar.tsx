/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-2 z-50 flex flex-row justify-between items-start w-full">
      <div className="ml-4">
        <Dock distance={0} direction="middle">
          <DockIcon>
            <Link href="/"><IoHome className="size-6" /></Link>
          </DockIcon>
        </Dock>
      </div>
      <div>
        <Dock distance={0} direction="middle">
          <DockIcon>
            <img src="/instagram.png" className="w-6 h-6" alt="Instagram" />
          </DockIcon>
          <DockIcon>
            <img src="/youtube.png" className="size-6" alt="youtube" />
          </DockIcon>
          <DockIcon>
            <img src="/facebook.png" className="size-6" alt="facebook" />
          </DockIcon>
          <DockIcon>
            <img src="/x.png" className="size-8" alt="x" />
          </DockIcon>
        </Dock>
      </div>
      <div className="mr-4">
        <Dock distance={0} direction="middle">
          <DockIcon>
            <Link href="/signup"><FaUserCircle className="size-6" /></Link>
          </DockIcon>
        </Dock>
      </div>
    </nav>
  );
}
