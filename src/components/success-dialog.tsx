import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface SuccessDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    message: string
}

export function SuccessDialog({ open, onOpenChange, message }: SuccessDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[400px] p-6">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-[#DCFCE7] flex items-center justify-center mb-4">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#166534]"
                        >
                            <path
                                d="M20 6L9 17L4 12"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                    <h2 className="text-lg font-semibold mb-1">Successful</h2>
                    <p className="text-sm text-muted-foreground mb-6">{message}</p>
                    <Button className="bg-[#0052CC] hover:bg-[#0052CC]/90 min-w-[120px]" onClick={() => onOpenChange(false)}>
                        Continue
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

