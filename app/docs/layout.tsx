"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown, ChevronRight, FileText, Search, ExternalLink, Copy, Check } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
    SidebarProvider,
    Sidebar,
    SidebarContent,
    SidebarTrigger,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarGroupContent,
    SidebarHeader,
    SidebarInput,
} from "@/components/ui/sidebar";

const docsNav = [
    {
        title: "Getting Started",
        items: [
            { title: "Introduction", href: "/docs" },
            { title: "Installation", href: "/docs/installation" },
            { title: "Quick Start", href: "/docs/quick-start" },
            { title: "Configuration", href: "/docs/configuration" },
        ],
    },
    // {
    //   title: "Core Concepts",
    //   items: [
    //     { title: "Package Management", href: "/docs/package-management" },
    //     { title: "Dependency Resolution", href: "/docs/dependency-resolution" },
    //     { title: "Caching", href: "/docs/caching" },
    //     { title: "Workspaces", href: "/docs/workspaces" },
    //   ],
    // },
    // {
    //   title: "CLI Commands",
    //   items: [
    //     { title: "flux install", href: "/docs/commands/install" },
    //     { title: "flux add", href: "/docs/commands/add" },
    //     { title: "flux remove", href: "/docs/commands/remove" },
    //     { title: "flux update", href: "/docs/commands/update" },
    //     { title: "flux publish", href: "/docs/commands/publish" },
    //   ],
    // },
    // {
    //   title: "Advanced",
    //   items: [
    //     { title: "Custom Registries", href: "/docs/advanced/custom-registries" },
    //     { title: "Plugins", href: "/docs/advanced/plugins" },
    //     { title: "CI/CD Integration", href: "/docs/advanced/ci-cd" },
    //     { title: "Security", href: "/docs/advanced/security" },
    //   ],
    // },
    // {
    //   title: "API Reference",
    //   items: [
    //     { title: "Configuration API", href: "/docs/api/configuration" },
    //     { title: "Plugin API", href: "/docs/api/plugin" },
    //     { title: "Resolver API", href: "/docs/api/resolver" },
    //     { title: "Hook API", href: "/docs/api/hook" },
    //   ],
    // },
    // {
    //   title: "Guides",
    //   items: [
    //     { title: "Migrating from npm", href: "/docs/guides/migrating-from-npm" },
    //     { title: "Migrating from yarn", href: "/docs/guides/migrating-from-yarn" },
    //     { title: "Migrating from pnpm", href: "/docs/guides/migrating-from-pnpm" },
    //     { title: "Monorepo Setup", href: "/docs/guides/monorepo-setup" },
    //   ],
    // },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [search, setSearch] = useState("");
    const [openSections, setOpenSections] = useState<string[]>([]);
    const [filteredNav, setFilteredNav] = useState(docsNav);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Find which section contains the current page and open it
        const currentSection = docsNav.findIndex((section) => section.items.some((item) => item.href === pathname));

        if (currentSection !== -1) {
            setOpenSections((prev) =>
                prev.includes(docsNav[currentSection].title) ? prev : [...prev, docsNav[currentSection].title]
            );
        }
    }, [pathname]);

    useEffect(() => {
        if (search) {
            const filtered = docsNav
                .map((section) => ({
                    ...section,
                    items: section.items.filter(
                        (item) =>
                            item.title.toLowerCase().includes(search.toLowerCase()) ||
                            item.href.toLowerCase().includes(search.toLowerCase())
                    ),
                }))
                .filter((section) => section.items.length > 0);

            setFilteredNav(filtered);

            // Open all sections that have matching items
            setOpenSections(filtered.map((section) => section.title));
        } else {
            setFilteredNav(docsNav);
        }
    }, [search]);

    const toggleSection = (title: string) => {
        setOpenSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]));
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <SidebarProvider>
            <div className="flex min-h-screen">
                <Sidebar className="border-r">
                    <SidebarHeader>
                        <div className="p-4">
                            <div className="relative">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <SidebarInput
                                    type="search"
                                    placeholder="Search documentation..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <ScrollArea className="h-[calc(100vh-8rem)]">
                            {filteredNav.map((section) => (
                                <SidebarGroup key={section.title}>
                                    <Collapsible
                                        open={openSections.includes(section.title)}
                                        onOpenChange={() => toggleSection(section.title)}
                                    >
                                        <CollapsibleTrigger asChild>
                                            <SidebarGroupLabel className="flex cursor-pointer items-center justify-between py-2">
                                                {section.title}
                                                <ChevronDown
                                                    className={`h-4 w-4 transition-transform ${
                                                        openSections.includes(section.title) ? "rotate-180" : ""
                                                    }`}
                                                />
                                            </SidebarGroupLabel>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarGroupContent>
                                                <SidebarMenu>
                                                    {section.items.map((item) => (
                                                        <SidebarMenuItem key={item.href}>
                                                            <SidebarMenuButton
                                                                asChild
                                                                isActive={pathname === item.href}
                                                            >
                                                                <Link href={item.href}>
                                                                    <FileText className="mr-2 h-4 w-4" />
                                                                    <span>{item.title}</span>
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuItem>
                                                    ))}
                                                </SidebarMenu>
                                            </SidebarGroupContent>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </SidebarGroup>
                            ))}
                        </ScrollArea>
                    </SidebarContent>
                </Sidebar>
                <div className="flex-1">
                    <div className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <SidebarTrigger />
                        <div className="flex-1 flex justify-between items-center">
                            <nav className="flex items-center text-sm font-medium">
                                <Link href="/" className="text-muted-foreground hover:text-foreground">
                                    Home
                                </Link>
                                <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
                                <Link href="/docs" className="text-muted-foreground hover:text-foreground">
                                    Documentation
                                </Link>
                                {pathname !== "/docs" && (
                                    <>
                                        <ChevronRight className="mx-2 h-4 w-4 text-muted-foreground" />
                                        <span className="truncate">
                                            {docsNav
                                                .flatMap((section) => section.items)
                                                .find((item) => item.href === pathname)?.title || ""}
                                        </span>
                                    </>
                                )}
                            </nav>
                            <div className="flex items-center gap-2">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Button variant="ghost" size="icon" onClick={handleCopyLink}>
                                                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{copied ? "Copied!" : "Copy link"}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                <Button variant="ghost" size="icon" asChild>
                                    <a href="https://github.com/flux/docs" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="h-4 w-4" />
                                        <span className="sr-only">Edit on GitHub</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="container max-w-4xl py-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {children}
                        </motion.div>
                    </div>
                </div>
            </div>
        </SidebarProvider>
    );
}
