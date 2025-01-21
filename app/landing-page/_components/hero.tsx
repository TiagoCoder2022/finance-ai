import { Button } from "@/app/_components/ui/button";
import Pointer from "./pointer";
import Link from "next/link";


const Hero = () => {
    return ( 
        <section className="py-20">
            <div className="max-w-5xl container mx-auto relative"> 
                <div className="absolute left-40 top-96 hidden lg:block">
                    <Pointer name="Andrea" color="lime"/>
                </div> 
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bryan" color="red"/>
                </div>              
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-lime-400 to-lime-900 rounded-full text-neutral-950 font-semibold">
                    🚀 Gestão financeira simplificada
                    </div>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Controle suas finanças com <span className="bg-gradient-to-r from-lime-400 to-lime-700 text-transparent bg-clip-text">inteligência.</span>
                </h1>

                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto px-5">
                    Gerencie suas receitas, despesas e receba feedback inteligente sobre sua gestão financeira com nossa IA.                                      
                </p>                

                <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                    <input 
                        type="email"  
                        placeholder="Enter your email" 
                        className="bg-transparent px-4 rounded-full flex-1 outline-none focus:ring-0 focus:outline-none"
                    />
                    <Link href="/login">
                        <Button type="submit" className="rounded-full">Sign Up</Button>
                    </Link>
                </form>
            </div>
        </section>
     );
}
 
export default Hero;