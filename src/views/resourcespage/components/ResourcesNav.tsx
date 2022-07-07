import React, {useState} from "react";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import ResourceDescription from "../components/ResourceDescription";
import ResourceData from "../../resourcespage/ResourceData";



const ResourcesNav = () =>{

    const [activeTab, setActiveTab] = useState('0');
    const [resourceItem, setResource] = useState(ResourceData[0]);

    return (
        <div>
            <Nav
                tabs
                justified
                pills
                className="flex-colum flex-md-row"
                >
                {ResourceData.map(
                    data => (
                        <NavItem>
                            <NavLink classname={activeTab === ResourceData.indexOf(data).toString() ? 'active' : ''} onClick={() => {
                                {
                                    const id = ResourceData.indexOf(data).toString()
                                    setActiveTab(id)
                                }
                                setResource(data)
                            }}>
                            {data.titleEnglish}
                                
                            </NavLink>
                        </NavItem>
                    )
                )}    
            </Nav>
      
            <TabContent activeTab={activeTab}>
                <TabPane tabId={activeTab.toString()}>
                    <ResourceDescription {...resourceItem}/>
                </TabPane>
            </TabContent>

        </div>
    );
}

export default ResourcesNav;
