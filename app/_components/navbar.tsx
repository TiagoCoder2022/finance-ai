"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { ArrowRightLeft, CreditCardIcon, MenuIcon, TrendingUpIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Navbar = () => {
    const pathname = usePathname()
    return (
        <> 
            <nav className="hidden lg:flex justify-between px-8 py-4 border-b border-solid">
                <div className="flex items-center gap-10">
                    <Image src="/login.svg" alt="Finance AI" width={173} height={39} />
                    <Link href="/" 
                        className={
                            pathname === "/" ? "text-primary font-bold" : "text-muted-foreground"
                        }
                    >
                        Dashboard
                    </Link>
                    <Link 
                        href="/transactions" 
                        className={
                            pathname === "/transactions" ? "text-primary font-bold" : "text-muted-foreground"
                        }
                    >
                        Transações
                    </Link>
                    <Link 
                        href="/subscription"
                        className={
                            pathname === "/subscription" ? "text-primary font-bold" : "text-muted-foreground"
                        }                
                    >
                        Assinatura
                    </Link>
                </div>  

                <UserButton showName />          
            </nav>

            <nav className="lg:hidden flex items-center justify-between px-5 py-4 lg:container border-b border-solid">

                <Image src="/login.svg" alt="Finance AI" width={173} height={39} />     

                <Sheet>
                    <SheetTrigger>
                        <Button
                            size="icon"
                            variant="outline"
                            className="border-none bg-transparent "
                        >
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>

                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className="text-left">Menu</SheetTitle>
                        </SheetHeader>                  
                       
                        <div className="flex justify-between pt-6">
                            <div className="flex items-center gap-3">
                                <UserButton showName />                            
                            </div>
                        </div>       

                        <div className="py-6">
                            <Separator />
                        </div>

                        <div className="space-y-2">
                            <Button
                                variant="ghost"
                                className="w-full justify-start space-x-3 rounded-full text-base font-normal"
                                asChild
                            >
                                <Link 
                                    href="/" 
                                    className={
                                        pathname === "/" ? "text-primary font-bold" : "text-muted-foreground"
                                    }
                                >  
                                    <TrendingUpIcon size={19} />
                                    <span className="block">Dashboard</span>
                                </Link>
                            </Button>

                            <>
                                <Button
                                    variant="ghost"
                                    className="w-full justify-start space-x-3 rounded-full text-base font-normal"
                                    asChild
                                >
                                    <Link 
                                        href="/transactions"
                                        className={
                                            pathname === "/transactions" ? "text-primary font-bold" : "text-muted-foreground"
                                        }
                                    >
                                        <ArrowRightLeft size={19} />
                                        <span className="block">Transações</span>
                                    </Link>
                                </Button>

                                <Button
                                    variant="ghost"
                                    className="w-full justify-start space-x-3 rounded-full text-base font-normal"
                                    asChild
                                >
                                    <Link 
                                        href="/subscription"
                                        className={
                                            pathname === "/subscription" ? "text-primary font-bold" : "text-muted-foreground"
                                        }
                                    >
                                        <CreditCardIcon size={19} />
                                        <span className="block">Assinaturas</span>
                                    </Link>
                                </Button>
                            </>                            
                        </div>

                        <div className="py-6">
                            <Separator />
                        </div>                    
                    </SheetContent>
                </Sheet>
            </nav>
        </>
        
    )
}
 
export default Navbar;