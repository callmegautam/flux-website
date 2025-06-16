import Link from "next/link";
import { ArrowRight, Terminal, Package, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";

export default function DocsPage() {
    return redirect("https://fluxdocs.gautamsuthar.in/");
    return (
        <div className="space-y-8">
            <div>
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Documentation</h1>
                <p className="mt-4 text-xl text-muted-foreground">
                    Welcome to the Flux documentation. Learn how to use Flux to manage your packages efficiently.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Getting Started</CardTitle>
                        <CardDescription>Learn the basics of Flux and how to install it.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/docs/installation"
                                    className="text-primary hover:underline flex items-center"
                                >
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    Installation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs/quick-start"
                                    className="text-primary hover:underline flex items-center"
                                >
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    Quick Start
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs/configuration"
                                    className="text-primary hover:underline flex items-center"
                                >
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    Configuration
                                </Link>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Core Concepts</CardTitle>
                        <CardDescription>Understand how Flux works under the hood.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/docs/package-management"
                                    className="text-primary hover:underline flex items-center"
                                >
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    Package Management
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/docs/dependency-resolution"
                                    className="text-primary hover:underline flex items-center"
                                >
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    Dependency Resolution
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/caching" className="text-primary hover:underline flex items-center">
                                    <ArrowRight className="mr-2 h-4 w-4" />
                                    Caching
                                </Link>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="rounded-lg border p-6">
                <h2 className="text-xl font-semibold">CLI Commands</h2>
                <p className="mt-2 text-muted-foreground">
                    Flux provides a simple and intuitive command-line interface.
                </p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div className="flex items-start gap-2">
                        <Terminal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            <p className="font-medium">flux install</p>
                            <p className="text-sm text-muted-foreground">
                                Install all dependencies listed in your package.json
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Terminal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            <p className="font-medium">flux add [package]</p>
                            <p className="text-sm text-muted-foreground">Add a package to your dependencies</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Terminal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            <p className="font-medium">flux remove [package]</p>
                            <p className="text-sm text-muted-foreground">Remove a package from your dependencies</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-2">
                        <Terminal className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            <p className="font-medium">flux update [package]</p>
                            <p className="text-sm text-muted-foreground">Update a package to the latest version</p>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <Button asChild>
                        <Link href="/docs/commands/install">
                            View All Commands <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="space-y-4">
                <h2 className="text-2xl font-semibold">Next Steps</h2>
                <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <Zap className="h-5 w-5 text-primary" />
                            <CardTitle className="mt-2">Quick Start</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Get up and running with Flux in minutes with our quick start guide.
                            </p>
                            <Button variant="link" asChild className="px-0">
                                <Link href="/docs/quick-start">
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Package className="h-5 w-5 text-primary" />
                            <CardTitle className="mt-2">Package Management</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Learn how Flux manages packages and dependencies efficiently.
                            </p>
                            <Button variant="link" asChild className="px-0">
                                <Link href="/docs/package-management">
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Terminal className="h-5 w-5 text-primary" />
                            <CardTitle className="mt-2">CLI Reference</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">
                                Explore all the commands available in the Flux CLI.
                            </p>
                            <Button variant="link" asChild className="px-0">
                                <Link href="/docs/commands/install">
                                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
