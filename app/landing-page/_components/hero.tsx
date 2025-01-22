"use client"

import { Button } from "@/app/_components/ui/button";
import Pointer from "./pointer";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "@/app/utils/motion";


const Hero = () => {
    return ( 
        <section className="py-20">
            <motion.div
                initial="hidden"
                animate="visible"
                className="max-w-5xl container mx-auto relative"
            > 
                <motion.div
                    variants={slideInFromLeft(0.2)} 
                    className="absolute left-40 top-96 hidden lg:block"                    
                >
                    <Pointer name="Andrea" color="lime"/>
                </motion.div> 
                <motion.div
                    variants={slideInFromRight(0.3)} 
                    className="absolute right-80 -top-4 hidden lg:block"
                >
                    <Pointer name="Bryan" color="red"/>
                </motion.div>              
                <div                    
                    className="flex justify-center"
                >
                    <motion.div 
                    variants={slideInFromLeft(0.5)}
                    className="inline-flex py-1 px-3 bg-gradient-to-r from-lime-400 to-lime-900 rounded-full text-neutral-950 font-semibold">
                    🚀 Gestão financeira simplificada
                    </motion.div>
                </div>

                <motion.h1
                    variants={slideInFromLeft(0.8)} 
                    className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6"
                >
                    Controle suas finanças com <span className="bg-gradient-to-r from-lime-400 to-lime-700 text-transparent bg-clip-text">inteligência.</span>
                </motion.h1>

                <motion.p
                    variants={slideInFromRight(1)} 
                    className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto px-5"
                >
                    Gerencie suas receitas, despesas e receba feedback inteligente sobre sua gestão financeira com nossa IA.                                      
                </motion.p>                

                <div className="px-5">
                    <motion.form
                        variants={slideInFromLeft(0.9)} 
                        className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
                    >
                        <input 
                            type="email"  
                            placeholder="Enter your email" 
                            className="bg-transparent px-4 rounded-full flex-1 outline-none focus:ring-0 focus:outline-none"
                        />
                        <Link href="/login">
                            <Button type="submit" className="rounded-full">Sign Up</Button>
                        </Link>
                    </motion.form>
                </div>
            </motion.div>
        </section>
     );
}
 
export default Hero;