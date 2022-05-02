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
    /*
        const [currentActiveTab, setCurrentActiveTab] = useState('1');
    
        // Toggle active state for Tab
        const toggle = tab => {
            if (currentActiveTab !== tab) setCurrentActiveTab(tab);
        }
    */
    return (
        <div>
            <Nav
                tabs
                justified
                pills
                className="flex-column flex-md-row"
            >
                <NavItem>
                    <NavLink className="" eventKey="">
                        UX Design
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="" href="2">
                        Path 2
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="">
                        Path 3
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="">
                        Path 4
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="">
                        Path 5
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="">
                        Path 6
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={'1'}>
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
