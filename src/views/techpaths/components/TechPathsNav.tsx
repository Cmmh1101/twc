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
import RoleDescription from "../components/RoleDescription";
import UXDesign from "../components/UXDesign";
import Path2 from "../components/Path2";
import Path3 from "../components/Path3";




const TechPathsNav = () => {

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
                        UX Design
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
                    <UXDesign />
                </TabPane>
                <TabPane tabId="2">
                    <Path2 />
                </TabPane>
                <TabPane tabId="3">
                    <Path3 />
                </TabPane>
                <TabPane tabId="4">
                    <RoleDescription />
                </TabPane>
                <TabPane tabId="5">
                    <RoleDescription />
                </TabPane>
                <TabPane tabId="6">
                    <RoleDescription />
                </TabPane>
            </TabContent>
        </div >
    );
}

export default TechPathsNav;

/*
<Nav
                fill
                justified
                pills
            >
                <NavItem>
                    <NavLink href="#"
                    >
                        UX Design
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        Path 2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"
                    >
                        Path 3
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"
                    >
                        Path 4
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"
                    >
                        Path 5
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#"
                    >
                        Path 6
                    </NavLink>
                </NavItem>
            </Nav>
*/
