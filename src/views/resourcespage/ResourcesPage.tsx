import React, { useEffect, useState } from "react";
import ResourcesHero from "./components/ResourcesHero";
import ResourcesNav from "./components/ResourcesNav";
import { getResources } from "../../api/baseApiCalls";

interface Resource {
  resources: Resources[];
}
interface Resources {
  books: ResourceData[];
  courses: ResourceData[];
  tutorials: ResourceData[];
  podcasts: ResourceData[];
  websites: ResourceData[];
}
interface ResourceData {
  title?: string;
  url?: string;
  description?: string;
  tag?: string;
  category?: string;
  author?: string;
}

const ResourcesPage = () => {
  const [resourcesData, setResourcesData] = useState<Resource[]>();

  useEffect(() => {
    const getResourcesData = async () => {
      const result: Resource[] = await getResources();
      setResourcesData(result);
      console.log({ result });
    };
    getResourcesData();
  }, []);

  console.log(resourcesData, "resource state");

  return (
    <>
      <ResourcesHero />
      <ResourcesNav />
    </>
  );
};

export default ResourcesPage;
