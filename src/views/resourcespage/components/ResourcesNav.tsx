import React, {useState} from "react";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import ResourceDescription from "../components/ResourceDescription";
import TutorialsData from "../TutorialsData";
import BooksData from "../BooksData";



const ResourcesNav = () =>{

    const [activeTab, setActiveTab] = useState('0');
    const [resourceItem, setResource] = useState(TutorialsData[0]|| BooksData[0]);

    return (
        <div>
            <Nav
                tabs
                justified
                pills
                className="flex-colum flex-md-row"
                >
                {TutorialsData.map(
                    data => (
                        <NavItem>
                            <NavLink classname={activeTab === TutorialsData.indexOf(data).toString() ? 'active' : ''} onClick={() => {
                                {
                                    const id = TutorialsData.indexOf(data).toString()
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
