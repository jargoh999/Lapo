import { Bell, Copy, PenSquare, Plus, Recycle, Search, Trash2Icon, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Separator } from "./ui/separator"
import { Link } from "react-router-dom"

export default function CardProfile() {
    return (
        <div className="min-h-screen bg-[#f8fbff]">
            <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
                <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#F8F9FB] rounded-md">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#0052CC]"
                        >
                            <path
                                d="M17.5 8.33334H2.5C1.57953 8.33334 0.833336 9.07953 0.833336 10V16.6667C0.833336 17.5871 1.57953 18.3333 2.5 18.3333H17.5C18.4205 18.3333 19.1667 17.5871 19.1667 16.6667V10C19.1667 9.07953 18.4205 8.33334 17.5 8.33334Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M5 13.3333H5.00833"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M14.1667 1.66666L12.5 4.99999L10.8333 1.66666"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <h1 className="text-lg font-semibold">Card Profile</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Bell className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="w-5 h-5" />
                    </Button>
                </div>
            </header>

            <main className="p-6">
                <h3 className="font-semibold m-1 text-xl">Card Profile</h3>
                <p className="text-sm text-muted-foreground mb-6 m-1">Create, view and edit card profiles here.</p>
                <Separator className="bg-gray-300 w-full mb-3" />

                <div className="flex items-center justify-between mb-3">
                    <div className="relative">
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <Input placeholder="Search by card name" className="pl-8 w-[240px]" />
                    </div>
                <Link to="/create-profile">
                    <Button className="bg-[#0052CC] hover:bg-[#0052CC]/90">
                        <Plus className="w-4 h-4 mr-2" />
                        Add Profile
                    </Button>
                </Link>

                </div>
            <Separator className="bg-gray-300 w-full  mb-3" />


                <div className="bg-white rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Card Name</TableHead>
                                <TableHead>Currency</TableHead>
                                <TableHead>Expiration</TableHead>
                                <TableHead>Min Profile</TableHead>
                                <TableHead>Date Created</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {Array.from({ length: 3 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell>Visa 1</TableCell>
                                    <TableCell>MYR</TableCell>
                                    <TableCell>40 months</TableCell>
                                    <TableCell>0.0025M</TableCell>
                                    <TableCell>11/20/2024 23:21:05</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                             <Trash2Icon className="w-6 h-6" />
                                            </Button>
                                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                                <PenSquare className="w-6 h-6 " />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}

