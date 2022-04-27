import React from "react";
import {
    Nav,
    NavItem,
    NavLink,
    Container,
} from "reactstrap";

const TechPathsNav = () => {

    return (
        <div>
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
        </div>
    )
}

export default TechPathsNav;
