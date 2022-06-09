import React, { useState } from "react";
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
} from "reactstrap";
import RoleDescription from "../components/RoleDescription";
import TechPathsData from "../TechPathsData";




const TechPathsNav = () => {

    const [activeTab, setActiveTab] = useState('0');
    const [techPath, setTechPath] = useState(TechPathsData[0]);

    return (
        <div>
            <Nav
                tabs
                justified
                pills
                className="flex-column flex-md-row"
            >
                {TechPathsData.map(
                    data => (
                        <NavItem>
                            <NavLink className={activeTab === TechPathsData.indexOf(data).toString() ? 'active' : ''} onClick={() => {
                                {
                                    const id = TechPathsData.indexOf(data).toString()
                                    setActiveTab(id)
                                }
                                setTechPath(data)
                            }}>
                                {data.titleEnglish}
                            </NavLink>
                        </NavItem>
                    )
                )}
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId={activeTab.toString()}>
                    <RoleDescription {...techPath} />
                </TabPane>
            </TabContent>
        </div >
    );
}

export default TechPathsNav;



// return (
//     <div>
//         <Nav
//             tabs
//             justified
//             pills
//             className="flex-column flex-md-row"
//         >
//             <NavItem>
//                 <NavLink className={activeTab === '0' ? 'active' : ''} onClick={() => {
//                     setActiveTab('0')
//                     setTechPath(TechPathsData[0])
//                 }}>
//                     {techPath.titleEnglish}
//                 </NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => {
//                     setActiveTab('1')
//                     setTechPath(TechPathsData[1])
//                 }} >
//                     Path 2
//                 </NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
//                     Path 3
//                 </NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>
//                     Path 4
//                 </NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
//                     Path 5
//                 </NavLink>
//             </NavItem>
//             <NavItem>
//                 <NavLink className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>
//                     Path 6
//                 </NavLink>
//             </NavItem>
//         </Nav>
//         <TabContent activeTab={activeTab}>
//             <TabPane tabId="0">
//                 <RoleDescription {...techPath} />
//             </TabPane>
//             <TabPane tabId="1">
//                 <RoleDescription {...techPath} />
//             </TabPane>
//             <TabPane tabId="3">
//                 <RoleDescription />
//             </TabPane>
//             <TabPane tabId="4">
//                 <RoleDescription />
//             </TabPane>
//             <TabPane tabId="5">
//                 <RoleDescription />
//             </TabPane>
//             <TabPane tabId="6">
//                 <RoleDescription />
//             </TabPane>
//         </TabContent>
//     </div >
// );
// }
