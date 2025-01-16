import { Button } from "@/app/_components/ui/button";
import Image from "next/image";

const navLinks = [
    {label: "Home", href: "#"},
    {label: "Features", href: "#features"},
    {label: "Integrations", href: "#integrations"},
    {label: "FAQs", href: "#faqs"},
]

const Navbar = () => {
    return ( 
        <section className="flex py-4 lg:py-8 align-middle justify-center">
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full p-2 px-4 md:pr-2 items-center">
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
                    <div className="flex justify-end gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-menu mr-2 md:hidden"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <Button variant="outline" className="hidden md:inline-flex border border-white rounded-full px-6 font-medium">Log In</Button>
                        <Button className="hidden md:inline-flex rounded-full font-medium">Sign Up</Button>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Navbar;