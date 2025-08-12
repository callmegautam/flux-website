"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Moon, Sun, Menu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";

const navItems = [
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/docs" },
    // { name: "Packages", path: "/packages" },
    // { name: "Blog", path: "/blog" },
];

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`sticky top-0 z-50 w-full transition-all duration-200 ${
                isScrolled ? "bg-background/35 backdrop-blur-md border-b" : "bg-transparent"
            }`}
        >
            <div className="container flex h-16 items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary" />
                        <span className="text-xl font-bold">Flux</span>
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`text-sm font-medium transition-colors hover:text-primary ${
                                    pathname === item.path ? "text-primary" : "text-muted-foreground"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="mr-2"
                    >
                        <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    {/* <div className="hidden md:flex gap-2">
                        <Button variant="ghost" asChild>
                            <Link href="/login">Login</Link>
                        </Button>
                        <Button asChild>
                            <Link href="/register">Sign Up</Link>
                        </Button>
                    </div> */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 mt-10">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        href={item.path}
                                        className={`text-lg font-medium transition-colors hover:text-primary ${
                                            pathname === item.path ? "text-primary" : "text-muted-foreground"
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                {/* <div className="flex flex-col gap-2 mt-4">
                                    <Button variant="outline" asChild>
                                        <Link href="/login">Login</Link>
                                    </Button>
                                    <Button asChild>
                                        <Link href="/register">Sign Up</Link>
                                    </Button>
                                </div> */}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    );
}
