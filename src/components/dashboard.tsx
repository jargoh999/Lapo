import React from 'react'
import { Header } from './dashboard-header'
import { QuickAccess } from './quick-access'
import { Separator } from './ui/separator'
import { AnalyticsCards } from './analytics-cards'
import { MonthlyInsuranceChart } from './monthly-insurance-chart'
import { IncomeChart } from './income-chart'
import { RecentCardRequests } from './recent-card'
import { CardStatusPieChart } from './card-status-pie-chart'


const Dashboard: React.FC = () => {
    return (
        <div className="p-4 bg-[#f8fbff] overflow-hidden">
            <Header />
            <main className="p-6 space-y-6">
                <div>
                    <h1 style={{
                        fontFamily: 'Satoshi, sans-serif',
                        fontWeight: 500,
                        fontSize: '24px',
                        lineHeight: '24px',
                        letterSpacing: '0%'
                    }} className="text-xl font-semibold">Hi Nazeer, what would you like to do today?</h1>
                    <p className="text-sm text-muted-foreground mt-3"><span className='mr-3 text-black'> Last login:</span>
                        {new Date().toLocaleString()}</p>
                </div>
                <QuickAccess />
                <div className="flex space-x-3 text-2xl font-normal justify-between items-center">
                    <h1>Analytics</h1>
                    <Separator className="my-3" />
                </div>
                <AnalyticsCards />

                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-6 space-y-6">
                        <MonthlyInsuranceChart />
                        <IncomeChart className="h-[490px]" />
                    </div>
                    <div className="col-span-6 bg-gray-50 rounded-lg space-y-[30px]">
                        {/* Space reserved for future content */}
                        <RecentCardRequests />
                        <CardStatusPieChart className='h-[590px]'/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Dashboard