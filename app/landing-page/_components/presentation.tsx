import Image from "next/image";
import Tag from "./tag";

const PresentationPage = () => {
    return ( 
        <section className="container py-24">
            <div className="text-center">
                <Tag>Dashboard Dinâmico</Tag>
            </div>
            <h2 className="text-5xl font-medium text-center mt-6 max-w-2xl mx-auto">
                Onde o controle encontra a{" "} 
                <span className="bg-gradient-to-r from-lime-400 to-lime-700 text-transparent bg-clip-text">
                    inteligência
                </span>
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground text-center mt-6">
                Tome decisões mais inteligentes e mantenha suas finanças sob controle com uma dashboard intuitiva e impulsionada por IA.
            </p>
            <div className="flex justify-center mt-6 lg:relative px-5">
                <div className="border border-white/10 rounded-2xl overflow-hidden lg:-left-40 lg:relative lg:z-10 shadow-lg">
                    <Image 
                        src="/dashboard.svg" 
                        width={750} 
                        height={550} 
                        alt="dashboard" 
                        className="object-cover image-high-quality image-rendering-auto"
                    />
                </div>
                <div className="border hidden lg:block border-white/10 rounded-2xl overflow-hidden lg:absolute lg:top-10 lg:right-10 scale-95">
                    <Image 
                        src="/transactions.svg" 
                        alt="chart-pie" 
                        width={750}
                        height={550}
                        className=" object-cover image-high-quality image-rendering-auto"
                    />
                </div>
            </div>
        </section>
     );
}
 
export default PresentationPage;