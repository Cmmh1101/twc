import React, {useState} from "react";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import ResourceDescription from "../components/ResourceDescription";
import ResourcesData from '../ResourcesData';


const ResourcesNav = () =>{

    const [activeTab, setActiveTab] = useState('0');
    const [resourceData, setResourceTab] = useState(ResourcesData[0]);


    return (
        <div>
            <Nav
                tabs
                justified
                pills
                className="flex-colum flex-md-row"
                >
            {ResourcesData.map(
                data => (
                    <NavItem>
                        <NavLink className={ activeTab === ResourcesData.indexOf(data).toString() ? 'active' : ''} onClick={()=> {
                            {
                                const id = ResourcesData.indexOf(data).toString()
                                setActiveTab(id)
                            }
                            setResourceTab(data)
                        }}>
                            {data.titleEnglish}
                        </NavLink>
                    </NavItem>
                )
            )}
               
            </Nav>
      
            <TabContent activeTab={activeTab}>
                <TabPane tabId={activeTab.toString()}>
                    <ResourceDescription {...resourceData} />
                </TabPane>
            </TabContent>

        </div>
    );
}

export default ResourcesNav;
