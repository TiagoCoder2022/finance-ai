import Tag from "./tag";

const IntroductionPge = () => {
    return ( 
        <section className="py-28 lg:py-40">
            <div className="flex justify-center">
                <Tag>Apresentando Insights IA</Tag>
            </div>
            <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10 px-5">
                <span>Sua gestão financeira merece mais inteligência.</span>{" "}
                <span className="text-white/15"> Tome decisões melhores com análises automatizadas e feedbacks personalizados.</span>
                <span className="text-lime-400 block">É por isso que criamos nossos insights com IA.</span>
            </div>
        </section>
     );
}
 
export default IntroductionPge;