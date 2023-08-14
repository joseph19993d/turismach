"use client"

// import { Aside } from "@/components/aside";
import { Nav } from "@/components/nav";
// import Modal from 'react-modal';


typeof windows == !  'undefined' ? Modal.setAppElement(document.body) : null



//import { SignOut, Gear, Money,   ChartBarHorizontal} from "@phosphor-icons/react";
//import colors from "tailwindcss/colors";
export default function Layout({ children }) {
  return (
    <main className="flex h-screen overflow-hidden bg-slate-100 relative">
      <div className="absolute top-0 left-0 z-10 h-screen md:relative">
        {/* <Aside /> */}
      </div>
      <div className="flex flex-1 flex-col">
        <Nav />
        <div className="flex flex-1 flex-col relative z-0 overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
  );
}