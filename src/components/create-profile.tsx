import { ArrowLeft, Bell,  Plus, User } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Link } from "react-router-dom"
import { useState } from "react"
import { AddFeeDialog } from "./add-fee-dialog"

export default function CreateProfile() {
    const [addFeeOpen, setAddFeeOpen] = useState(false)
    const handleAddFee = (fee: any) => {
        // Handle adding the fee to the table
        setAddFeeOpen(false)
    }
    return (
        <div className="min-h-screen bg-[#f8fbff]">
            <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link to="/card-profile">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                    </Button>
                    <div className="flex items-center gap-2">
                        <Link to="/card-profile" className="text-sm text-muted-foreground hover:text-foreground">
                            Card Profile
                        </Link>
                        <span className="text-sm text-muted-foreground">/</span>
                        <span className="text-sm">Create Profile</span>
                    </div>
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

            <main className="p-6 max-w-[1200px] mx-auto">
                <h1 className="text-xl font-semibold mb-1">Create Profile</h1>
                <p className="text-sm text-muted-foreground mb-6">Fill in profile details and add card fee.</p>

                <div className="bg-white rounded-lg border p-6 mb-6">
                    <h2 className="text-lg font-semibold mb-6">Profile Details</h2>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Card Name<span className="text-red-500">*</span>
                            </label>
                            <Input placeholder="Enter card name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Bin Prefix<span className="text-red-500">*</span>
                            </label>
                            <Input placeholder="00000000" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Card Scheme<span className="text-red-500">*</span>
                            </label>
                            <Select defaultValue="verve">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select card scheme" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="verve">Verve</SelectItem>
                                    <SelectItem value="visa">Visa</SelectItem>
                                    <SelectItem value="mastercard">Mastercard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Expiration<span className="text-red-500">*</span>
                            </label>
                            <Select defaultValue="0">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select expiration" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="0">0</SelectItem>
                                    <SelectItem value="30">30 days</SelectItem>
                                    <SelectItem value="60">60 days</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Description</label>
                            <Textarea placeholder="Enter description" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">
                                Currency<span className="text-red-500">*</span>
                            </label>
                            <Select defaultValue="ngn">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select currency" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ngn">NGN</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Branch Blacklist</label>
                            <Select defaultValue="head-office">
                                <SelectTrigger>
                                    <SelectValue placeholder="Select branch" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="head-office">Head Office</SelectItem>
                                    <SelectItem value="branch-1">Branch 1</SelectItem>
                                    <SelectItem value="branch-2">Branch 2</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-lg border p-6">
                    <div className="block items-center justify-between mb-6 space-y-2">
                        <h2 className="text-lg font-semibold">Fees</h2>
                        <Button className="bg-[#0052CC] hover:bg-[#0052CC]/90"
                            onClick={() => setAddFeeOpen(true)}>
                            <Plus className="w-4 h-4 mr-2" />
                            Add Fee
                        </Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Value</TableHead>
                                <TableHead>Frequency</TableHead>
                                <TableHead>Currency</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Account Pad</TableHead>
                                <TableHead>Account</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>-</TableCell>
                                <TableCell>-</TableCell>
                                <TableCell>-</TableCell>
                                <TableCell>-</TableCell>
                                <TableCell>-</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

                <div className="mt-6 w-[250px]">
                    <Button className="w-full bg-[#0052CC] hover:bg-[#0052CC]/90">Create Profile</Button>
                </div>
                <AddFeeDialog open={addFeeOpen} onOpenChange={setAddFeeOpen} onAddFee={handleAddFee} />
            </main>
        </div>
    )
}
