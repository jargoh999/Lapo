import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts"

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

const chartData = [
    { month: "Jan", personalized: 40, instant: 30 },
    { month: "Feb", personalized: 38, instant: 40 },
    { month: "Mar", personalized: 52, instant: 70 },
    { month: "Apr", personalized: 100, instant: 50 },
    { month: "May", personalized: 67, instant: 87 },
    { month: "Jun", personalized: 48, instant: 40 },
]

const chartConfig = {
    activities: {
        label: "Card Types",
    },
    personalized: {
        label: "Personalized",
        color: "#014daf",
    },
    instant: {
        label: "Instant",
        color: "#cce2ff",
    },
} satisfies ChartConfig

export function MonthlyInsuranceChart({ className }: { className?: string }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-xl font-normal">Monthly Insurance</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        barSize={60}
                        barGap={-20}
                        width={700}
                        height={250}
                    >
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickMargin={10}
                            tickFormatter={(value) => `${value}`}
                            stroke="#888888"
                            style={{
                                fontSize: '0.75rem',
                            }}
                        />
                        <CartesianGrid
                            horizontal
                            vertical={false}
                            stroke="#e0e0e0"
                            strokeDasharray="1 1"
                        />
                        <Bar
                            dataKey="personalized"
                            stackId="a"
                            fill="var(--color-personalized)"
                            radius={[7, 7, 0, 0]}
                            barSize={60}
                        />
                        <Bar
                            dataKey="instant"
                            stackId="a"
                            fill="var(--color-instant)"
                            radius={[15, 15, 0, 0]}
                            barSize={60}
                        />
                        <ChartTooltip
                            content={
                                <ChartTooltipContent labelKey="activities" indicator="line" />
                            }
                            cursor={false}
                            defaultIndex={1}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="border-t pt-4">
                <div className="flex w-full items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: chartConfig.personalized.color }}
                        />
                        <span className="text-sm text-gray-600">
                            {chartConfig.personalized.label}
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: chartConfig.instant.color }}
                        />
                        <span className="text-sm text-gray-600">
                            {chartConfig.instant.label}
                        </span>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
