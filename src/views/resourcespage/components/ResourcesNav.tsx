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
import TestData from "../Test1";
import TutorialsData from "../TutorialsData";


const ResourcesNav = () =>{

    const [activeTab, setActiveTab] = useState('0');
    const [resourceItem, setResource] = useState(TestData);
    let tabcontent = TestData;

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

                                    switch (id) {
                                        case '0': {
                                             tabcontent = TestData;
                                            break;
                                        }
                                        case '1': {
                                            tabcontent = TutorialsData;
                                           break;
                                       }


                                    }

                                }
                                setResource(tabcontent)
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
