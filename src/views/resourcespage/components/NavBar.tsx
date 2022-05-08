import React, { useState } from "react";
import {
    Nav,
    NavItem,
    NavLink,
    Container,
    ListGroup,
    ListGroupItem,
    TabContent,
    TabPane,
} from "reactstrap";
import ResourceDetail from "../components/resourceDetail";
import Resource1 from "../components/resource1";
import Resource2 from "../components/resource2";
import Resource3 from "../components/resource3";


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
                        Resource 1
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                        Path 2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                        Path 3
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
                        Path 4
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                        Path 5
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={activeTab == '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>
                        Path 6
                    </NavLink>
                </NavItem>
            </Nav>
            
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Resource1/>
                </TabPane>
                <TabPane tabId="2">
                    <Resource2 />
                </TabPane>
                <TabPane tabId="3">
                    <Resource3/>
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