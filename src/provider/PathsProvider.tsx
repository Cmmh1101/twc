import { useContext, useEffect, useState } from "react";
import { getPaths } from "../api/baseApiCalls";
import { PathsContext } from "./PathsContext";
import { Paths } from "../interfaces/paths";

function usePaths() {
  const context = useContext(PathsContext);
  if (context === undefined) {
    throw console.error("Theme must be used whitin a PathsProvider");
  }
  return context;
}

const PathsProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [paths, setPaths] = useState<Paths[]>([]);
  const [pathTab, setPathTab] = useState<Paths[]>([]);
  const pathData: any = []

  const getPathData = async () => {
    setLoading(true)
    const result: Paths[] = await getPaths();
    setPaths(result);
    const items = result.map((item) =>(item));
    setPaths(items);
    setLoading(false)
  };
  for (const key in paths!) {
    pathData.push({
      id: key,
      ...paths[key],
    });
  }
  
  useEffect(() => {
    getPathData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setPathTab(pathData[0])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paths]);

  return (
    <PathsContext.Provider
      value={{
        loading,
        pathTab, 
        setPathTab,
        paths, 
        setPaths,
        pathData
      }}
    >
      {children}
    </PathsContext.Provider>
  );
};

export { PathsProvider, usePaths };
