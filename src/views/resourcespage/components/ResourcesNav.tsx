import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import ResourceDescription from "../components/ResourceDescription";
import { useResources } from "../../../provider/ResourcesProvider";

const ResourcesNav = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { resourcesData, resourceTab, setResourceTab } = useResources()
  

  return (
    <div>
      <Nav tabs justified pills className="flex-colum flex-md-row">
        {resourcesData?.map((resourceItem: any, i: number) => {
          return (
            <NavItem key={i}>
              <NavLink
                className={
                  activeTab === resourcesData.indexOf(resourceItem)
                    ? "active"
                    : ""
                }
                onClick={() => {
                  setActiveTab(i);
                  setResourceTab(resourceItem);
                }}
              >
                {resourceItem.id}
              </NavLink>
            </NavItem>
          );
        })}
      </Nav>

      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
          <ResourceDescription {...resourceTab} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ResourcesNav;
