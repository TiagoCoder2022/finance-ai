"use client";

import { Button } from "@/app/_components/ui/button";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    {label: "Início", href: "#home"},
    {label: "Funcionalidades", href: "#features"},
    {label: "Assinaturas", href: "#plans"},
    {label: "FAQs", href: "#faqs"},
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="flex py-4 lg:py-8 align-middle justify-center fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15  rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                        <div>
                            <Image 
                                src="/login.svg" 
                                alt="finance-ai"
                                width={0}
                                height={0}                           
                                className="h-9 w-auto md:h-auto"
                            />
                        </div>
                        <div className="lg:flex justify-center items-center hidden">
                            <nav className="flex gap-6 font-medium ">
                                {navLinks.map((link) => (
                                    <a href={link.href} key={link.label}>{link.label}</a>
                                ))}
                            </nav>
                        </div>
                        <div className="flex justify-end md:gap-4">
                            {isOpen ? (
                                    <X className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
                                ) : (   
                                    <MenuIcon className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}/>
                                )                             
                            }
                            <Link href={"/login"}>
                                <Button variant="outline" className="hidden md:inline-flex border border-white rounded-full px-6 font-medium">Dashboard</Button>
                            </Link>
                            <Link href={"#plans"}>
                                <Button className="hidden md:inline-flex rounded-full font-medium">Get started</Button>
                            </Link>
                        </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: 'auto'}}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4 md:hidden">
                                        {navLinks.map((link) => (
                                            <a href={link.href} key={link.label} className="">
                                                {link.label}
                                            </a>
                                        ))}
                                        <div className="flex gap-4">
                                            <Link href={"/login"}>
                                                <Button variant="outline" className="inline-flex border border-white rounded-full px-6 font-medium w-full">Dashboard</Button>
                                            </Link>
                                            <Link href={"/login"}>
                                                <Button className="inline-flex rounded-full font-medium">Get started</Button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
        </>
     );
}
 
export default Navbar;