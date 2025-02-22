import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Badge } from "./ui/badge"
import { Maximize2 } from "lucide-react"
import { Button } from "./ui/button"

const requests = [
    {
        branch: "Corporate",
        cardType: "Instant",
        quantity: 10,
        status: "Ready",
    },
    {
        branch: "Corporate",
        cardType: "Personalized",
        quantity: 10,
        status: "In Progress",
    },
    {
        branch: "Corporate",
        cardType: "Personalized",
        quantity: 10,
        status: "Acknowledged",
    },
    {
        branch: "Corporate",
        cardType: "Instant",
        quantity: 10,
        status: "Pending",
    },
]

const StatusBadge = ({ status }: { status: string }) => {
    const styles = {
        Ready: "bg-green-100 hover:bg-green-100 text-green-700 border-green-200 rounded-lg",
        "In Progress": "bg-orange-100 hover:bg-orange-100 text-orange-700 border-orange-200 rounded-lg",
        Acknowledged: "bg-blue-100 hover:bg-blue-100 text-blue-700 border-blue-200 rounded-lg",
        Pending: "bg-gray-100 hover:bg-gray-100 text-gray-700 border-gray-200 rounded-lg",
    }[status]

    return (
        <Badge variant="outline" className={`${styles} font-normal`}>
            {status}
        </Badge>
    )
}

export function RecentCardRequests({ className }: { className?: string }) {
    return (
        <Card className={className}>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-semibold">Recent Card Requests</CardTitle>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Maximize2 className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow>
                            <TableHead className="font-medium">Branch</TableHead>
                            <TableHead className="font-medium">Card Type</TableHead>
                            <TableHead className="font-medium">Quantity</TableHead>
                            <TableHead className="font-medium">Status</TableHead>
                            <TableHead className="font-medium">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {requests.map((request, index) => (
                            <TableRow key={index} className="py-4 h-[100px]">
                                <TableCell className="py-4">{request.branch}</TableCell>
                                <TableCell className="py-4">{request.cardType}</TableCell>
                                <TableCell className="py-4">{request.quantity}</TableCell>
                                <TableCell className="py-4">
                                    <StatusBadge status={request.status} />
                                </TableCell>
                                <TableCell className="py-4">
                                    <Button variant="link" className="p-0 h-auto font-normal text-blue-600 hover:text-blue-700">
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
