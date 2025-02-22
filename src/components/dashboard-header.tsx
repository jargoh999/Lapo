
import { Bell, Search, LayoutDashboard } from "lucide-react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Header() {
    return (
        <div className="border-b bg-white shadow-sm">
            <div className="flex h-16 items-center px-4">
                <div className="flex items-center">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    <h1 className="text-md font-semibold">Dashboard</h1>
                </div>
                <div className="ml-auto flex items-center space-x-4">
                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search" className="w-[200px] pl-8" />
                    </div>
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <img
                            src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1739974896/LAPO_Logo_2022-removebg-preview_1_e4rxff.png"
                            alt="Avatar"
                            className="rounded-full"
                            height={32}
                            width={32}
                        />
                    </Button>
                </div>
            </div>
        </div>
    )
}





