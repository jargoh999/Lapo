"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "./ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "./ui/chart"

const chartData = [
    { status: "Active", count: 275, fill: "#01a4af" },
    { status: "Expired", count: 200, fill: "#ffba24" },
    { status: "Inactive", count: 287, fill: "#014daf" },
    { status: "Blocked", count: 173, fill: "#8020e7" },
    { status: "Lost", count: 190, fill: "#ff4457" },
]

const chartConfig = {
    count: {
        label: "Card Count",
    },
    Active: {
        label: "Active",
        color: "hsl(var(--green))",
    },
    Expired: {
        label: "Expired",
        color: "hsl(var(--yellow))",
    },
    Inactive: {
        label: "Inactive",
        color: "hsl(var(--gray))",
    },
    Blocked: {
        label: "Blocked",
        color: "hsl(var(--red))",
    },
    Lost: {
        label: "Lost",
        color: "",
    },
} satisfies ChartConfig

export function CardStatusPieChart({ className }: { className?: string }) {
    const totalCards = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.count, 0)
    }, [])

    return (
        <Card className={[className, "flex flex-col"].filter(Boolean).join(" ")}>
            <CardHeader>
                <CardTitle className="text-xl font-normal">Card Status Distribution</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0 h-full">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[400px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="count"
                            nameKey="status"
                            innerRadius={98}
                            outerRadius={110}
                            cornerRadius={10}
                            paddingAngle={1}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-xl font-normal"
                                                >
                                                    Total cards
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground text-3xl "
                                                >
                                                    {totalCards.toLocaleString()}
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex flex-wrap justify-center gap-4 ">
                {chartData.map((item) => (
                    <div
                        key={item.status}
                        className="flex items-center gap-2 text-sm"
                    >
                        <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.fill }}
                        />
                        <span>{item.status}: {item.count}</span>
                    </div>
                ))}
            </CardFooter>
        </Card>
    )
}
