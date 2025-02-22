import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"

interface AddFeeDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onAddFee: (fee: any) => void
}

export function AddFeeDialog({ open, onOpenChange, onAddFee }: AddFeeDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[490px] h-[800px]">
                <DialogHeader>
                    <div className="flex items-start gap-4 m-5">
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
                                    d="M10 4.16666V15.8333"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M4.16669 10H15.8334"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <DialogTitle className="text-lg font-semibold">Add Fee</DialogTitle>
                            <p className="text-sm text-muted-foreground">Fill in fee details.</p>
                        </div>
                    </div>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                    <div className="space-y-2">
                        <Label>
                            Fee Name<span className="text-red-500">*</span>
                        </Label>
                        <Input placeholder="Maintenance" />
                    </div>
                    <div className="space-y-2">
                        <Label>Value</Label>
                        <Select defaultValue="0">
                            <SelectTrigger>
                                <SelectValue placeholder="Select value" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0">0</SelectItem>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Currency</Label>
                        <RadioGroup defaultValue="ngn" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="ngn" id="ngn" />
                                <Label htmlFor="ngn">NGN</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="usd" id="usd" />
                                <Label htmlFor="usd">USD</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="space-y-2">
                        <Label>Fee Frequency</Label>
                        <RadioGroup defaultValue="one-off" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="one-off" id="one-off" />
                                <Label htmlFor="one-off">One Off</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="monthly" id="monthly" />
                                <Label htmlFor="monthly">Monthly</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="space-y-2">
                        <Label>Fee Impact</Label>
                        <RadioGroup defaultValue="issuance" className="flex gap-4">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="issuance" id="issuance" />
                                <Label htmlFor="issuance">Issuance</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="pin-reissue" id="pin-reissue" />
                                <Label htmlFor="pin-reissue">Pin Reissue</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="space-y-2">
                        <Label>Account Pad</Label>
                        <RadioGroup defaultValue="none" className="flex gap-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="none" id="none" />
                                <Label htmlFor="none">None</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="branch-prefix" id="branch-prefix" />
                                <Label htmlFor="branch-prefix">Branch Code Prefix</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="branch-suffix" id="branch-suffix" />
                                <Label htmlFor="branch-suffix">Branch Code Suffix</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    <div className="space-y-2 ">
                        <Label>Account</Label>
                        <Input />
                    </div>
                    <Button className="w-full bg-[#0052CC] hover:bg-[#0052CC]/90">Add Fee</Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

