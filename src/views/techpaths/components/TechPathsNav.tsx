import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import RoleDescription from "../components/RoleDescription";
import { usePaths } from "../../../provider/PathsProvider";

const TechPathsNav = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { pathData, pathTab, setPathTab } = usePaths()
  console.log({ pathData })

  return (
    <div>
      <Nav pills className="d-flex justify-content-around flex-colum flex-md-row border-top pt-4">
        {pathData?.map((path: any, i: number) => (
          <NavItem key={i}>
            <NavLink
              className={
                activeTab === pathData.indexOf(path)
                  ? "active"
                  : ""
              }
              onClick={() => {
                setActiveTab(i);
                setPathTab(path);
              }}
            >
              {path?.id}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
          <RoleDescription {...pathTab} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default TechPathsNav;
