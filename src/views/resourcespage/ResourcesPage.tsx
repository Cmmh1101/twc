import React, { useEffect, useState } from "react";
import ResourcesHero from "./components/ResourcesHero";
import ResourcesNav from "./components/ResourcesNav";
import { getResources } from "../../api/baseApiCalls";
import { Resource } from "../../interfaces/resources";

const ResourcesPage = () => {
  const [resourcesData, setResourcesData] = useState<Resource[]>();
  const [resources, setResources] = useState<Resource[]>();

  useEffect(() => {
    const getResourcesData = async () => {
      const result: Resource[] = await getResources();
      setResourcesData(result);
      const items = result.map((item) => item);
      setResources(items);
    };
    getResourcesData();
  }, []);

  return (
    <>
      <ResourcesHero />
      <ResourcesNav resourcesData={resources!} />
    </>
  );
};

export default ResourcesPage;
