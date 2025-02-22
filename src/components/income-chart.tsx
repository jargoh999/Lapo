import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./ui/chart"

// Generate data for the next 5 days
const generateIncomeData = () => {
    const today = new Date()
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const incomeData = []

    for (let i = 0; i < 6; i++) {
        const currentDate = new Date(today)
        currentDate.setDate(today.getDate() + i)

        // Generate random income between 1000 and 5000
        const income = Math.floor(Math.random() * 4000) + 1000

        incomeData.push({
            date: weekdays[currentDate.getDay()],
            income: income
        })
    }

    return incomeData
}

const chartData = generateIncomeData()

const chartConfig = {
    income: {
        label: "Income",
        color: "#10b981", // Emerald green color
    },
} satisfies ChartConfig

export function IncomeChart({ className }: { className?: string }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-xl font-normal">This Week Income</CardTitle>
            </CardHeader>
            <CardContent className="h-[350px] w-full">
                <ChartContainer config={chartConfig} className="h-[350px] w-full">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 20,
                            left: 10,
                            right: 10,
                            bottom: 20,
                        }}
                        className="h-full"
                    >
                        <defs>
                            <linearGradient id="green-gradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Line
                            dataKey="income"
                            type="natural"
                            stroke="#10b981"
                            strokeWidth={2}
                            dot={false}
                            fill="url(#green-gradient)"
                            fillOpacity={0.3}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
