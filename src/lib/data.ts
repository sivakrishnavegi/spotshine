import { BotIcon, List, LucideLayoutDashboard, Settings, WebcamIcon } from "lucide-react";

export const SidebarData = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        icon: LucideLayoutDashboard,
    },
    {
        id: 2,
        title: 'Webinars',
        link: '/webinars',
        icon: WebcamIcon,
    },
    {
        id: 3,
        title: 'Leads',
        link: '/lead',
        icon: List,
    },
    {
        id: 4,
        title: 'Ai Agents',
        link: '/ai-agents',
        icon: BotIcon,
    },
    {
        id: 5,
        title: 'Settings',
        link: '/settings',
        icon: Settings,
    },
]