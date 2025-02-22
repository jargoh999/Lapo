import { CreditCard, FileText } from "lucide-react"
import { Card, CardContent,CardHeader, CardTitle } from "./ui/card"

export function QuickAccess() {
    const quickActions = [
        {
            title: "Manage a Card",
            icon: CreditCard,
        },
        {
            title: "Issue Instant Card",
            icon: CreditCard,
        },
        {
            title: "Issue Personalized Card",
            icon: CreditCard,
        },
        {
            title: "Review Card Requests",
            icon: FileText,
        },
    ]

    return (
        <Card className="">
            <CardHeader>
                <CardTitle
                style={{
                    fontFamily: 'Satoshi, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '18px',
                        letterSpacing: '0%'
                    }}> Your Quick Access</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {quickActions.map((action, index) => (
                <Card key={index} className="hover:bg/10 sticky-1 cursor-pointer bg-[#f1f7ff]">
                    <CardContent className="flex items-center p-6">
                        <div className="rounded-full items-center flex p-3 mr-3 bg-[#002f6c]">
                            <action.icon className="h-5 w-5 text-white font-light" />
                        </div>
                        <span
                            style={
                                {
                                    fontFamily: 'Satoshi, sans-serif',
                                    fontWeight: 500,
                                    fontSize: '14px',
                                    lineHeight: '18px',
                                    letterSpacing: '0%'
                                }
                            }
                        
                        >{action.title}</span>
                    </CardContent>
                </Card>
            ))}
          </CardContent>
        </Card>

    )
}

