
import { useState } from "react"
import { SuccessDialog } from "./success-dialog"
import { ArrowLeft, Bell, Download, User } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Link } from "react-router-dom"

type Status = "Pending" | "In Progress" | "Ready" | "Dispatched" | "Acknowledged"
type Step = 0 | 1 | 2 | 3 | 4

export default function RequestDetails() {
    const [currentStep, setCurrentStep] = useState<Step>(0)
    const [status, setStatus] = useState<Status>("Pending")
    const [successDialogOpen, setSuccessDialogOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")

    const showSuccessDialog = (message: string) => {
        setSuccessMessage(message)
        setSuccessDialogOpen(true)
    }

    const handleDownload = () => {
        showSuccessDialog("Production file has been downloaded.")
        setCurrentStep(1)
    }

    const handleInProgress = () => {
        setStatus("In Progress")
        setCurrentStep(2)
    }

    const handleReady = () => {
        setStatus("Ready")
        setCurrentStep(3)
    }

    const handleDispatch = () => {
        setStatus("Dispatched")
        showSuccessDialog("Card has been successfully sent to dispatch.")
        setCurrentStep(4)
    }

    const handleAcknowledged = () => {
        setStatus("Acknowledged")
    }

    const getStatusColor = (status: Status) => {
        switch (status) {
            case "Pending":
                return "bg-[#F1F5F9] text-[#475569]"
            case "In Progress":
                return "bg-[#FEF9C3] text-[#854D0E]"
            case "Ready":
                return "bg-[#DCFCE7] text-[#166534]"
            case "Dispatched":
                return "bg-[#F3E8FF] text-[#6B21A8]"
            case "Acknowledged":
                return "bg-[#DBEAFE] text-[#1E40AF]"
        }
    }

    return (
        <div className="min-h-screen bg-[#F8F9FB]">
            {/* Header remains the same */}
            <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" asChild>
                        <Link to="/card-request">
                            <ArrowLeft className="w-5 h-5" />
                        </Link>
                    </Button>
                    <div className="flex items-center gap-2">
                        <Link to="/card-request" className="text-sm text-muted-foreground hover:text-foreground">
                            Card Request
                        </Link>
                        <span className="text-sm text-muted-foreground">/</span>
                        <span className="text-sm">Request Details</span>
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
                <h1 className="text-xl font-semibold mb-1">Request Details</h1>
                <p className="text-sm text-muted-foreground mb-6">Perform predetermined actions on card requests here.</p>

                <div className="bg-white rounded-lg border p-6">
                    <h2 className="text-lg font-semibold mb-6">Card Request Details</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Left column remains the same */}
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-muted-foreground">Branch Name</label>
                                <div className="mt-1 p-2.5 bg-[#F8F9FB] rounded-md">Corporate</div>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Card Type</label>
                                <div className="mt-1 p-2.5 bg-[#F8F9FB] rounded-md">Classic Debit</div>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Quantity</label>
                                <div className="mt-1 p-2.5 bg-[#F8F9FB] rounded-md">10</div>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Date Requested</label>
                                <div className="mt-1 p-2.5 bg-[#F8F9FB] rounded-md">11/14/2024 10:27:43</div>
                            </div>
                        </div>
                        {/* Right column with updated status */}
                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-muted-foreground">Initiator</label>
                                <div className="mt-1 p-2.5 bg-[#F8F9FB] rounded-md">RootUser</div>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Card Charges</label>
                                <div className="mt-1 p-2.5 bg-[#F8F9FB] rounded-md">₦1,500</div>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Batch</label>
                                <div className="mt-1 p-2.5 bg-[#F8F9FB] rounded-md">847264905</div>
                            </div>
                            <div>
                                <label className="text-sm text-muted-foreground">Status</label>
                                <div className="mt-1">
                                    <Badge
                                        variant="secondary"
                                        className={`font-normal ${getStatusColor(status)} hover:${getStatusColor(status)}`}
                                    >
                                        {status}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-sm text-muted-foreground mb-4">Actions</h3>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                variant="secondary"
                                className="bg-[#1E293B] text-white hover:bg-[#1E293B]/90 disabled:opacity-50"
                                onClick={handleDownload}
                                disabled={currentStep !== 0}
                            >
                                <Download className="w-4 h-4 mr-2" />
                                Download for Production
                            </Button>
                            <Button
                                variant="secondary"
                                className="bg-[#FFEDD5] text-[#9A3412] hover:bg-[#FFEDD5]/90 disabled:opacity-50"
                                onClick={handleInProgress}
                                disabled={currentStep !== 1}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                >
                                    <path
                                        d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8 5.33334V8.66667"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8 11.3333H8.00667"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Mark as In Progress
                            </Button>
                            <Button
                                variant="secondary"
                                className="bg-[#DCFCE7] text-[#166534] hover:bg-[#DCFCE7]/90 disabled:opacity-50"
                                onClick={handleReady}
                                disabled={currentStep !== 2}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                >
                                    <path
                                        d="M13.3333 4L6 11.3333L2.66667 8"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Mark as Ready
                            </Button>
                            <Button
                                variant="secondary"
                                className="bg-[#F3E8FF] text-[#6B21A8] hover:bg-[#F3E8FF]/90 disabled:opacity-50"
                                onClick={handleDispatch}
                                disabled={currentStep !== 3}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                >
                                    <path
                                        d="M14 8.66667V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V8.66667"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M11.3333 4.66667L8 2L4.66667 4.66667"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M8 2V10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Send to Dispatch
                            </Button>
                            <Button
                                variant="secondary"
                                className="bg-[#DBEAFE] text-[#1E40AF] hover:bg-[#DBEAFE]/90 disabled:opacity-50"
                                onClick={handleAcknowledged}
                                disabled={currentStep !== 4}
                            >
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2"
                                >
                                    <path
                                        d="M10.6667 2H13.3333C13.687 2 14.0261 2.14048 14.2761 2.39052C14.5262 2.64057 14.6667 2.97971 14.6667 3.33333V6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5.33333 14H2.66667C2.31305 14 1.97391 13.8595 1.72386 13.6095C1.47381 13.3594 1.33333 13.0203 1.33333 12.6667V10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H10"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M2 6V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                Mark as Acknowledged
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <SuccessDialog open={successDialogOpen} onOpenChange={setSuccessDialogOpen} message={successMessage} />
        </div>
    )
}

