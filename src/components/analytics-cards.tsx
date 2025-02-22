import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { ArrowUp, Clock1 } from "lucide-react"

export function AnalyticsCards() {
    const stats = [
        {
            title: "Total Active Cards",
            value: "26,478",
            change: "+1.9%",
            period: "this month",
        },
        {
            title: "Total Personalized Cards",
            value: "15,703",
            change: "+8.5%",
            period: "this month",
        },
        {
            title: "Today's Revenue",
            value: "₦9.3M",
            change: "+6%",
            period: "vs yesterday",
        },
        {
            title: "Pending Requests",
            value: "38",
            change: "Requires attention",
            isWarning: true,
        },
    ]

    return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <Card key={index}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-md font-medium text-gray-500"
                            
                        >{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex space-x-[50px]">
                            <div className="text-3xl font-semibold"
                            >{stat.value}</div>
                            <div className="flex items-center mt-2 text-xs text-muted-foreground">
                                {stat.isWarning ? (
                                    <div className="rounded-full flex items-center p-1 bg-orange-100">
                                        <Clock1 className="h-4 w-4 text-red-500 mr-1" />
                                        <span className="text-orange-500">{stat.change}</span>
                                    </div>
                                ) : (
                                    <div className="rounded-full flex items-center p-1 bg-green-100">
                                        <ArrowUp className="h-4 w-4 text-green-500 mr-1" />
                                        <span className="text-green-500">{stat.change}</span>
                                    </div>
                                )}
                                {stat.period && <span className="ml-2">{stat.period}</span>}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
