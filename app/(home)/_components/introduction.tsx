"use client"
import { useEffect, useRef, useState } from "react";
import Tag from "./tag";
import { useScroll, useTransform } from "framer-motion";
import { twMerge } from "tailwind-merge";

const text = `Tome decisões melhores com análises automatizadas e feedbacks personalizados.`
const words = text.split(" ");

const IntroductionPge = () => {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({target: scrollTarget, offset: ['start end', 'end end']});
    const [currentWord, setCurrentWord] = useState(0);
    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest)
        })
    }, [wordIndex]);
    return ( 
        <section className="py-24 lg:py-40">
            <div className="px-5 max-w-5xl mx-auto">
                <div className="top-20 md:top-28 lg:top-40 sticky">
                    <div className="flex justify-center">
                        <Tag>Apresentando Insights IA</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Sua gestão financeira merece mais inteligência.</span>{" "}
                        <span className="">
                            {words.map((word, wordIndex) => (
                                <span key={wordIndex} 
                                    className={twMerge("transition duration-500 text-white/15", wordIndex < currentWord && "text-white")}
                                >
                                    {`${word} `}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">É por isso que criamos nossos insights com IA.</span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
     );
}
 
export default IntroductionPge;