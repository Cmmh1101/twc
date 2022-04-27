import React from "react";
import TechPathsHero from "./components/TechPathsHero";
import RoleDescription from "./components/RoleDescription";
import TechPathsNav from "./components/TechPathsNav";

const TechPaths = () => {
    return (
        <>
            <TechPathsHero />
            <TechPathsNav />
            <RoleDescription />
        </>
    );
};

export default TechPaths;