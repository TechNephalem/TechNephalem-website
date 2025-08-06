import { ServiceCard } from "../cards/ServiceCard";
import { appData } from "../../data/appData";
export const ServicesSection = () => {
    return (
        <section id="services" className="section section--bg">
            <div className="container">
                <div className="section-header">
                    <div className="section-badge">What We Build</div>
                    <h2 className="section-title split-text">Cutting-edge Solutions</h2>
                    <p className="section-subtitle">From AI and SaaS to Web3 and full-stack development</p>
                </div>
                <div className="services-showcase">
                    <div className="services-grid">
                        {appData.services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};