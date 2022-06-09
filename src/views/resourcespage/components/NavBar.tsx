import React, { useState } from "react";
import { Nav,  NavItem, NavLink, TabContent,TabPane,
} from "reactstrap";
import ResourceDetail from "./resourceDetail";
import Tutorials from "./tutorials";
import Resource2 from "./resource2";



const Navbar = () => {

    const [activeTab, setActiveTab] = useState('1');

    return (
        <div>
            <Nav
                tabs
                justified
                pills
                className="flex-column flex-md-row"
            >
                <NavItem>
                    <NavLink className={activeTab == '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                        Tutorials
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        Courses
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        Podcasts
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                        Books
                    </NavLink>
                </NavItem>

            </Nav>
            
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Tutorials/>
                </TabPane>
                <TabPane tabId="2">
                    <Resource2 />
                </TabPane>
                <TabPane tabId="4">
                    <ResourceDetail />
                </TabPane>
                <TabPane tabId="5">
                    <ResourceDetail />
                </TabPane>
                <TabPane tabId="6">
                    <ResourceDetail />
                </TabPane>
            </TabContent>
        </div >
    );
}

export default Navbar;