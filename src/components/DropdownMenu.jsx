import { ArrowUpToLine, Bell, BellElectric, FolderCog, LayoutDashboard, MessageCircle, MessageSquareMore, User, Users } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,

    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from 'lucide-react'

const navbarItems = [
    {
        name: 'Dashboard',
        icon: <LayoutDashboard size={15} />,

    },
    {
        name: 'Portfolio',
        icon: <User size={15} />,

    },
    {
        name: 'Notifications',
        icon: <Bell size={15} />,

    },
    {
        name: 'Notices',
        icon: <MessageCircle size={15} />,

    },
    {
        name: 'Auctions',
        icon: <MessageSquareMore size={15} />,

    },
    {
        name: 'Data Upload',
        icon: <ArrowUpToLine size={15} />,

    },
    {
        name: 'Control Panel',
        icon: <FolderCog size={15} />,

    },
    {
        name: 'User Management',
        icon: <Users size={15} />,

    },
    {
        name: 'Permissions',
        icon: <BellElectric size={15} />,

    }
]

export function DropdownMenuComp({ setActiveLink, activeLink }) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline"><div className='max-md:block hidden'>
                    <Menu />
                </div></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 h-screen">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    navbarItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${activeLink == item.name ? 'bg-blue-500' : ''} rounded-md flex items-center gap-[4px] p-[6px] hover:bg-gray-100 cursor-pointer`}
                            onClick={() => setActiveLink(item.name)}>
                            <DropdownMenuItem>
                                <span className='text-blue-400'>{item.icon}</span>
                                <span className='text-sm font-medium'>{item.name}</span>
                            </DropdownMenuItem>

                        </div>
                    ))
                }
                <div className='absolute bottom-0 w-full p-[16px] border-t border-gray-200'>
                    <p>Powered by resollect</p>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
