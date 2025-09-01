import { role } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";

import { agentSidebarItems } from "@/routes/agentSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types/authType";


export const getSidebarItems = (userRole : TRole) =>{

    switch(userRole){
        case role.admin:
            return [... adminSidebarItems, ...userSidebarItems , ...agentSidebarItems];
        case role.agent:
            return [... agentSidebarItems];
        case role.user:
            return[... userSidebarItems];
        default:
                return [];
    }
}