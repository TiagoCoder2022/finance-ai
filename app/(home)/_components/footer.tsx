import { Separator } from "@/app/_components/ui/separator";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
    return ( 
        <footer className="footer">
            <Separator />
            <div className="px-5 py-8">
                <div className="flex w-full max-md:flex-col">
                    <div className="small-compact flex flex-1 flex-wrap items-center justify-center gap-5">
                        <p className="opacity-70 text-sm md:text-base">
                            Copyright, Tiago Alves 2025
                        </p>
                        <div className="flex items-center justify-center sm:ml-auto opacity-70">
                            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 text-sm md:text-base">Politicas de privacidade</p>
                            <p className="legal-after relative mr-9 text-p5 transition-all duration-500 hover:text-p1 text-sm md:text-base">Termos de uso</p>
                        </div>
                    </div>                        

                    <ul className="flex flex-1 justify-center gap-3 max-md:mt-10 md:justify-end">
                        <li>
                            <a href="">
                                <div className="p-2 border border-white rounded-full bg-neutral-950/10 hover:bg-neutral-950/20">
                                    <InstagramIcon />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="p-2 border border-white rounded-full bg-neutral-950/10 hover:bg-neutral-950/20">
                                    <TwitterIcon />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div className="p-2 border border-white rounded-full bg-neutral-950/10 hover:bg-neutral-950/20">
                                    <LinkedinIcon />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;