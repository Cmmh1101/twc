import { createContext } from "react";
import { Resource } from "../interfaces/resources";

export interface IResourcesContext {
  loading: boolean
  resources: Resource[] | undefined
  setResources: (recource: Resource[]) => void
  resourceTab: Resource[]
  setResourceTab: (resource: Resource[]) => void
  resourcesData: any
}

export const ResourcesContext =
  createContext<IResourcesContext | undefined>(undefined);
