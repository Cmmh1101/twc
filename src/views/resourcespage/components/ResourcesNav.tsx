import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import ResourceDescription from "../components/ResourceDescription";
import { useResources } from "../../../provider/ResourcesProvider";

const ResourcesNav = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const { resourcesData, resourceTab, setResourceTab } = useResources()

  return (
    <div>
      <Nav pills className="d-flex justify-content-around flex-colum flex-md-row border-top pt-4">
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
