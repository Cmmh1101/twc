import React from "react";
import TechPathsHero from "./components/TechPathsHero";
import TechPathsNav from "./components/TechPathsNav";
import { PathsProvider } from "../../provider/PathsProvider";

const TechPaths = () => {
    return (
        <PathsProvider>
            <TechPathsHero />
            <TechPathsNav />
        </PathsProvider>
    );
};

export default TechPaths;