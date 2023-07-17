import { useContext, useEffect, useState } from "react";
import { ResourcesContext } from "./resourcesContext";
import { Resource } from "../interfaces/resources";
import { getResources } from "../api/baseApiCalls";

function useResources() {
  const context = useContext(ResourcesContext);
  if (context === undefined) {
    throw console.error("Theme must be used whitin a ResourcesProvider");
  }
  return context;
}

const ResourcesProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [resources, setResources] = useState<Resource[]>();
  const [resourceTab, setResourceTab] = useState<Resource[]>([]);
  const resourcesData: any = [];

  // const getResourcesData = async () => {
  //   setLoading(true)
  //   const result: Resource[] = await getResources();
  //   setResources(result);
  //   const items = result.map((item) =>(item));
  //   setResources(items);
  //   setLoading(false)
  // };

  for (const key in resources!) {
    resourcesData.push({
      id: key,
      ...resources[key],
    });
  }
  
  useEffect(() => {
    const getResourcesData = async () => {
      setLoading(true)
      const result: Resource[] = await getResources();
      setResources(result);
      const items = result.map((item) =>(item));
      setResources(items);
      setLoading(false)
    };
    getResourcesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setResourceTab(resourcesData[0])
  }, [resources]);

  return (
    <ResourcesContext.Provider
      value={{
        loading,
        resources,
        setResources,
        resourceTab,
        setResourceTab,
        resourcesData
      }}
    >
      {children}
    </ResourcesContext.Provider>
  );
};

export { ResourcesProvider, useResources };
