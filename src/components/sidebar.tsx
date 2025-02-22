"use client"

import type React from "react"
import { Link, useLocation } from 'react-router-dom'

import {
    LayoutDashboard,
    Building2,
    UserCircle,
    CreditCard,
    FileText,
    Package,
    WalletCardsIcon as Cards,
    Lock,
    FileCheck,
    Database,
    Wallet,
    LogOut,
} from "lucide-react"

import { cn } from "../lib/utils"
import { Button } from "./ui/button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

export function Sidebar({ className }: SidebarProps) {
    const location = useLocation();

    const menuItems = [
        { icon: Building2, label: "Branches", href: "/branches" },
        { icon: UserCircle, label: "Roles", href: "/roles" },
        { icon: UserCircle, label: "Users", href: "/users" },
        { icon: CreditCard, label: "Card Scheme", href: "/card-scheme" },
        { icon: FileText, label: "Card Profile", href: "/card-profile" },
        { icon: Package, label: "Card Request", href: "/card-request" },
        { icon: Package, label: "Stock", href: "/stock" },
        { icon: Cards, label: "Cards", href: "/cards" },
        { icon: Lock, label: "Block/Unblock Card", href: "/block-unblock" },
        { icon: FileCheck, label: "Authorization List", href: "/auth-list" },
        { icon: Database, label: "Authorization Queue", href: "/auth-queue" },
        { icon: Wallet, label: "Trail", href: "/trail" },
        { icon: UserCircle, label: "Account", href: "/account" },
    ]

    return (
        <div className={cn("pb-12 min-h-screen bg-[#00205B]", className)}>
            <img
                src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1739974896/LAPO_Logo_2022-removebg-preview_1_e4rxff.png"
                className="m-5"
            />

            <div className="space-y-4 py-4 m-4">
                <Link to={"/"} >
                    <Button
                        variant="ghost"
                        className={cn(
                            "w-full justify-start text-xl font-light tracking-wide hover:bg-white/10 hover:text-white mb-[10px] mt-[10px] text-lg",
                            location.pathname === "/"
                                ? "text-[#002f6c] bg-white hover:bg-white hover:text-[#002f6c]"
                                : "text-gray-300"
                        )}
                    >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                    </Button>
                </Link>
                <div className="px-3 space-y-2">
                    <p className="text-gray-300 m-6 text-xs font-light">MAIN MENU</p>

                    {menuItems.map((item, index) => (
                        <Link to={item.href} key={index} className="block">
                            <Button
                                variant="ghost"
                                className={cn(
                                    "w-full justify-start text-lg font-light tracking-wide hover:bg-white/10 hover:text-white mb-1 px-3 truncate max-w-full",
                                    location.pathname === item.href
                                        ? "text-[#002f6c] bg-white hover:bg-white hover:text-[#002f6c]"
                                        : "text-gray-300"
                                )}
                            >
                                <item.icon className="mr-2 h-4 w-4 flex-shrink-0" />
                                <span className="truncate overflow-hidden whitespace-nowrap">{item.label}</span>
                            </Button>
                        </Link>
                    ))}

                </div>
                <Link to="/logout" className="block">
                    <Button
                        variant="ghost"
                        className={cn(
                            "text-lg font-light tracking-wide w-full justify-start hover:bg-white/10 hover:text-white mt-[50px]",
                            location.pathname === "/logout"
                                ? "text-white bg-white/10"
                                : "text-white"
                        )}
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Logout
                    </Button>
                </Link>
            </div>
            <p className="text-gray-300 ml-7 mb-2 text-xs font-light">POWERED BY</p>
            <img
                src="https://res.cloudinary.com/dbjtncfmz/image/upload/v1739976593/Vector_4_nb3afc.png"
                className="ml-7"
            />
        </div>
    )
}
