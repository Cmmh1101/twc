import { createContext } from "react";
import { Paths } from "../interfaces/paths";

export interface IPathsContext {
  loading: boolean
  paths: Paths[] | undefined
  setPaths: (value: Paths[]) => void
  pathTab: Paths[]
setPathTab: (resource: Paths[]) => void
pathData: any

}

export const PathsContext =
  createContext<IPathsContext | undefined>(undefined);
