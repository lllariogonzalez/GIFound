import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PopularSearchsSection } from "../components/PopularSearchsSection";

export const MainPage = () => {
    return (
        <React.Fragment>
            <Header />
            <PopularSearchsSection />
            <Footer />
        </React.Fragment>
    );
};
