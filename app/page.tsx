"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Package, Zap, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
    const [tab, setTab] = useState("npm");

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20 md:py-32">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
                <div className="container relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <motion.div variants={fadeIn}>
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                                The <span className="text-primary">modern</span> package manager
                            </h1>
                        </motion.div>
                        <motion.div variants={fadeIn}>
                            <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                                Flux is a fast, simple, and innovative package manager designed for modern web
                                development workflows.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button size="lg" asChild>
                                <Link href="https://fluxdocs.gautamsuthar.in/">
                                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline">
                                <Link href={"https://github.com/callmegautam/flux"} target="_blank">
                                    View on GitHub
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Terminal Demo */}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 40 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="container mt-16"
                >
                    <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border bg-card shadow-2xl ">
                        <div className="flex items-center gap-1.5 border-b px-4 py-3">
                            <div className="h-3 w-3 rounded-full bg-red-500" />
                            <div className="h-3 w-3 rounded-full bg-yellow-500" />
                            <div className="h-3 w-3 rounded-full bg-green-500" />
                            <div className="ml-4 text-sm font-medium">Terminal</div>
                        </div>
                        <div className="bg-black p-4 font-mono text-sm text-green-400">
                            <p className="mb-2">$ flux install express</p>
                            <p className="mb-1">Resolving dependencies...</p>
                            <p className="mb-1">Adding express@18.2.0</p>
                            <p className="mb-1">Packages installed in 0.8s</p>
                            <p className="">
                                $<span className="animate-pulse duration-700"> _</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Why choose Flux?
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Designed from the ground up for speed, simplicity, and developer experience.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3"
                    >
                        <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <Zap className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Lightning Fast</h3>
                            <p className="mt-2 text-muted-foreground">
                                Up to 5x faster than npm and 2x faster than yarn with parallel downloads and
                                optimized caching.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <Package className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Smart Caching</h3>
                            <p className="mt-2 text-muted-foreground">
                                Intelligent caching system that reduces redundant downloads and speeds up
                                installations.
                            </p>
                        </motion.div>
                        <motion.div variants={fadeIn} className="flex flex-col items-center text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <RefreshCw className="h-8 w-8 text-primary" />
                            </div>
                            <h3 className="mt-6 text-xl font-semibold">Zero Config</h3>
                            <p className="mt-2 text-muted-foreground">
                                Works out of the box with sensible defaults and minimal configuration
                                required.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Comparison Section */}
            <section className="py-20 bg-muted/50">
                <div className="container">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            How does Flux compare?
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            See how Flux stacks up against other popular package managers.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-4xl">
                        <Tabs defaultValue="npm" value={tab} onValueChange={setTab}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="npm">npm</TabsTrigger>
                                <TabsTrigger value="yarn">yarn</TabsTrigger>
                                <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                            </TabsList>
                            <TabsContent value="npm" className="mt-6">
                                <div className="rounded-lg border bg-card shadow-sm">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold">Flux vs npm</h3>
                                        <p className="mt-2 text-muted-foreground">
                                            Flux outperforms npm in speed, disk usage, and developer
                                            experience.
                                        </p>
                                        <div className="mt-6 space-y-4">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">5x faster installation</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Parallel downloads and optimized dependency
                                                        resolution.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">40% less disk space</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Efficient storage of packages with content-addressable
                                                        storage.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Built-in security features</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Automatic vulnerability scanning and license
                                                        compliance.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="yarn" className="mt-6">
                                <div className="rounded-lg border bg-card shadow-sm">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold">Flux vs Yarn</h3>
                                        <p className="mt-2 text-muted-foreground">
                                            Flux offers improvements over Yarn with better caching and simpler
                                            workflows.
                                        </p>
                                        <div className="mt-6 space-y-4">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">2x faster installation</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        More efficient dependency resolution algorithm.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Simpler lockfile format</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Human-readable and git-friendly lockfiles.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Better monorepo support</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        First-class support for monorepos without additional
                                                        tools.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="pnpm" className="mt-6">
                                <div className="rounded-lg border bg-card shadow-sm">
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold">Flux vs pnpm</h3>
                                        <p className="mt-2 text-muted-foreground">
                                            Flux builds on pnpm's innovations with improved developer
                                            experience.
                                        </p>
                                        <div className="mt-6 space-y-4">
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Similar disk efficiency</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Both use content-addressable storage for packages.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Better CLI experience</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        More intuitive commands and better error messages.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-2">
                                                <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium">Advanced plugin system</p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Extensible architecture with a rich ecosystem of
                                                        plugins.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20">
                <div className="container">
                    <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8 md:p-12">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Ready to get started?
                            </h2>
                            <p className="mt-4 text-muted-foreground">
                                Join thousands of developers who are already using Flux to speed up their
                                workflows.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button size="lg" asChild>
                                    <Link href="https://fluxdocs.gautamsuthar.in/">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline">
                                    View on GitHub
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
