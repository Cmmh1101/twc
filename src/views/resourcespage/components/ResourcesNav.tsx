import React, {useState} from "react";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import ResourceDescription from "../components/ResourceDescription";
import TabData from "../TabData";


const ResourcesNav = () =>{

    const [activeTab, setActiveTab] = useState('0');
    const [resourceItem, setResource] = useState(TabData[0]);

    return (
        <div>
            <Nav
                tabs
                justified
                pills
                className="flex-colum flex-md-row"
                >
                {TabData.map(
                    data => (
                        <NavItem>
                            <NavLink className={activeTab === TabData.indexOf(data).toString() ? 'active' : ''} onClick={() => {
                                {
                                    const id = TabData.indexOf(data).toString()
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
