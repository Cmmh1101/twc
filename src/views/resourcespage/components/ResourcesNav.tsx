import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import ResourceDescription from "../components/ResourceDescription";
// import ResourcesData from "../ResourcesData";
import { Resource } from "../../../interfaces/resources";

interface Props {
  resourcesData: Resource[];
}

const ResourcesNav = ({ resourcesData }: Props) => {
  const [activeTab, setActiveTab] = useState<string>("0");
  // const [resourceData, setResourceTab] = useState(resourcesData[0]);
  // const [resourseItem, setResourceItem] = useState<Resource>();
  //   const [resourse, setResource] = useState<Resource>();

  const data = resourcesData;
  const resources: any = [];
  for (const key in data) {
    // console.log("resources");
    resources.push({
      id: key,
      ...data[key],
    });
  }
  //   console.log(resources, "RES");
  //   console.log(resourcesData, "FROM NAV");

  const [resourceTab, setResourceTab] = useState(resources[0]);
  // const [resourceData, setResourceData] = useState([]);

  //   useEffect(() => {
  //     console.log(Object.values(resourceTab), "values");
  //     const newData: any = Object.values(resourceTab);
  //     setResourceData(newData);
  //   }, [resourceTab]);

  return (
    <div>
      <Nav tabs justified pills className="flex-colum flex-md-row">
        {resources?.map((resourceItem: any, i: any) => {
          //   console.log(resourceItem);
          //   console.log(resources[0]);
          return (
            <NavItem key={i}>
              <NavLink
                className={
                  activeTab === resources.indexOf(resourceItem).toString()
                    ? "active"
                    : ""
                }
                onClick={() => {
                  {
                    const id = resources.indexOf(resourceItem).toString();
                    setActiveTab(id);
                  }
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
        <TabPane tabId={activeTab.toString()}>
          <ResourceDescription {...resourceTab} />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ResourcesNav;
