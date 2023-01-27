import React, { useEffect, useState } from "react";
import ResourcesHero from "./components/ResourcesHero";
import ResourcesNav from "./components/ResourcesNav";
import { getResources } from "../../api/baseApiCalls";
import { Resource } from "../../interfaces/resources";

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
      <ResourcesNav resourcesData={resourcesData} />
    </>
  );
};

export default ResourcesPage;
