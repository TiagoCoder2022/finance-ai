import Faqs from "./_components/faqs";
import Features from "./_components/features";
import Footer from "./_components/footer";
import Hero from "./_components/hero";
import IntroductionPge from "./_components/introduction";
import Navbar from "./_components/navbar";
import PresentationPage from "./_components/presentation";
import SubscriptionPlans from "./_components/subscription-plans";


const LandingPage = () => {
    return ( 
        <div className="flex-col justify-center">
            <Navbar />
            <Hero />            
            <PresentationPage />            
            <Features />
            <IntroductionPge />            
            <SubscriptionPlans/>            
            <Faqs />
            <Footer />
        </div>
     );
}
 
export default LandingPage;