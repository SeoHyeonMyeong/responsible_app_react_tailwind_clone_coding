import styles from './styles';
import { Navbar, Footer, Hero } from "./components";

const App = () => {
    return (
        <div className={"bg-primary w-full overflow-hidden"}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />

                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
                <div className={`{styles.boxWidth`}>
                    <Hero />
                    Stats
                    Business
                    Billing
                    CardDeal
                    Testimonials
                    Clients
                    CTA
                </div>
                <Footer />
            </div>

        </div>
    );
};

export default App;