import ResourcesHero from "./components/ResourcesHero";
import ResourcesNav from "./components/ResourcesNav";
import { ResourcesProvider } from "../../provider/ResourcesProvider";

const ResourcesPage = () => {
  
  return (
    <ResourcesProvider>
      <ResourcesHero />
      <ResourcesNav />
    </ResourcesProvider>
  );
};

export default ResourcesPage;
