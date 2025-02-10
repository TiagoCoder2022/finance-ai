"use client";
import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";


interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;  
    content: string;
    className?: string;    
}
const FeatureCard = ({icon, title, content, className}: FeatureCardProps) => {
    const offsetX = useMotionValue(-100)
    const offsetY = useMotionValue(-100)
    const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`
    const border = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (!border.current) return
            const borderRect = border.current?.getBoundingClientRect()
            offsetX.set(e.x - borderRect.x)
            offsetY.set(e.y - borderRect.y)
        }
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [offsetX, offsetY])
    return ( 
        <Card className={twMerge("bg-neutral-900 border border-white/30 p-6 relative", className)}>
            <motion.div 
                className="absolute inset-0 border-2 border-lime-500 rounded-lg" 
                style={{ 
                    WebkitMaskImage: maskImage,
                    maskImage,
                }}
                ref={border}
            ></motion.div>
            <CardHeader className="flex flex-row justify-between">
                <div className="flex flex-row items-center text-center gap-2 lg:gap-4 p-0">
                    {icon}
                    <p className="text-lg lg:text-2xl text-white font-semibold">{title}</p>
                </div>                
            </CardHeader>
            <CardContent>
                <p className="text-base text-muted-foreground">
                    {content}
                </p>                
            </CardContent>
        </Card>
     );
}
 
export default FeatureCard;