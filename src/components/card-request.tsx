import { Bell, Search, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { Link } from "react-router-dom"

type RequestStatus = "Ready" | "In Progress" | "Pending" | "Acknowledged"

interface CardRequest {
    branch: string
    initiator: string
    quantity: number
    batch: string
    dateRequested: string
    status: RequestStatus
}

const requests: CardRequest[] = [
    {
        branch: "Corporate",
        initiator: "RootUser",
        quantity: 10,
        batch: "847264905",
        dateRequested: "11/14/2024 10:27:43",
        status: "Ready",
    },
    {
        branch: "Corporate",
        initiator: "RootUser",
        quantity: 10,
        batch: "847264905",
        dateRequested: "11/14/2024 10:27:43",
        status: "Ready",
    },
    {
        branch: "Corporate",
        initiator: "RootUser",
        quantity: 10,
        batch: "847264905",
        dateRequested: "11/14/2024 10:27:43",
        status: "In Progress",
    },
    {
        branch: "Corporate",
        initiator: "RootUser",
        quantity: 10,
        batch: "847264905",
        dateRequested: "11/14/2024 10:27:43",
        status: "Pending",
    },
    {
        branch: "Corporate",
        initiator: "RootUser",
        quantity: 10,
        batch: "847264905",
        dateRequested: "11/14/2024 10:27:43",
        status: "Acknowledged",
    },
]

function getStatusColor(status: RequestStatus) {
    switch (status) {
        case "Ready":
            return "bg-[#DCFCE7] text-[#166534] hover:bg-[#DCFCE7]/90"
        case "In Progress":
            return "bg-[#FEF9C3] text-[#854D0E] hover:bg-[#FEF9C3]/90"
        case "Pending":
            return "bg-[#F1F5F9] text-[#475569] hover:bg-[#F1F5F9]/90"
        case "Acknowledged":
            return "bg-[#DBEAFE] text-[#1E40AF] hover:bg-[#DBEAFE]/90"
        default:
            return ""
    }
}

export default function CardRequest() {
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
                    <h1 className="text-lg font-semibold">Card Request</h1>
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
                <h3 className="font-semibold text-lg mb-1">Card Request</h3>
                <p className="text-sm text-muted-foreground mb-4">View and attend to card requests here.</p>
                <Separator className="bg-gray-300 w-full mb-3" />
                <div className="relative w-[280px] mb-3">
                    <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <Input placeholder="Search by branch" className="pl-8" />
                </div>
                <Separator className="bg-gray-300 w-full  mb-3" />

                <div className="bg-white rounded-lg border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Branch</TableHead>
                                <TableHead>Initiator</TableHead>
                                <TableHead>Quantity</TableHead>
                                <TableHead>Batch</TableHead>
                                <TableHead>Date Requested</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {requests.map((request, index) => (
                                <TableRow key={index}>
                                    <TableCell>{request.branch}</TableCell>
                                    <TableCell>{request.initiator}</TableCell>
                                    <TableCell>{request.quantity}</TableCell>
                                    <TableCell>{request.batch}</TableCell>
                                    <TableCell>{request.dateRequested}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className={`font-normal ${getStatusColor(request.status)} border-2 border-[#DCFCE7]`}>
                                            {request.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Link to='/request-details'>
                                        <Button variant="link" className="text-[#0052CC] hover:text-[#0052CC]/90 p-0 h-auto font-normal">
                                            View
                                            </Button>
                                        </Link>
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

