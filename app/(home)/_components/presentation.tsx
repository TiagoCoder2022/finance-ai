"use client";
import Image from "next/image";
import Tag from "./tag";
import { motion } from "framer-motion";

const PresentationPage = () => {
    return ( 
        <section className="py-24 xl:py-48">            
            <div className="text-center">
                <Tag>Dashboard Dinâmico</Tag>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-center mt-6 max-w-2xl mx-auto">
                Onde o controle encontra a{" "} 
                <span className="bg-gradient-to-r from-lime-400 to-lime-700 text-transparent bg-clip-text">
                    inteligência
                </span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg text-center mt-6">
                Tome decisões mais inteligentes e mantenha suas finanças sob controle com uma dashboard intuitiva e impulsionada por IA.
            </p>
            
            <div className="flex justify-center mx-auto">
            <motion.div 
                initial="hidden"
                animate="visible"
                className="mt-6 relative"
            >
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    viewport={{ once: true }} 
                    className="flex flex-1 border border-white/10 rounded-2xl overflow-hidden lg:-left-40 lg:z-10 shadow-lg absolute"
                >
                    <Image 
                        src="/dashboard.svg" 
                        width={750} 
                        height={550} 
                        alt="dashboard" 
                        className="object-cover image-high-quality image-rendering-auto"
                    />
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    viewport={{ once: true }} 
                    className="border hidden lg:block border-white/10 rounded-2xl overflow-hidden lg:left-40 lg:top-10 scale-95 relative"
                >
                    <Image 
                        src="/transactions.svg" 
                        alt="chart-pie" 
                        width={750}
                        height={550}
                        className=" object-cover image-high-quality image-rendering-auto"
                    />
                </motion.div>
            </motion.div>
            </div>
        </section>
     );
}
 
export default PresentationPage;