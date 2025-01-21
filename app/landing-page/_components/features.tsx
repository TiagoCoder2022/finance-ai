import Tag from "./tag";
import FeatureCards from "./feature-cards";

const Features = () => {
    return ( 
        <section className="py-24 flex justify-center">
            <div className="container px-5">
                <div className="flex justify-center">
                    <Tag>AI Powered Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Controle financeiro{" "} 
                    <span className="bg-gradient-to-r from-lime-400 to-lime-700 text-transparent bg-clip-text">
                        simplificado
                    </span>
                </h2>
                <p className="max-w-2xl mx-auto text-muted-foreground text-base text-center mt-6">
                    Tenha uma visão clara das suas finanças com recursos inteligentes que ajudam você a economizar, crescer e investir com confiança.
                </p>
                <div className="flex justify-center mt-12">
                    <FeatureCards />
                </div>
            </div>
        </section>
     );
}
 
export default Features;