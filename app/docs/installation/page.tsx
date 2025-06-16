"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info, AlertTriangle } from "lucide-react";

export default function InstallationPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
                <p className="mt-4 text-xl text-muted-foreground">
                    Learn how to install Flux on your system and get started with package management.
                </p>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">System Requirements</h2>
                <p>Before installing Flux, make sure your system meets the following requirements:</p>
                <ul className="ml-6 list-disc [&>li]:mt-2">
                    <li>Node.js 16.0.0 or later</li>
                    <li>macOS, Windows (including WSL), or Linux</li>
                    <li>At least 100MB of disk space for the Flux installation</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installation Methods</h2>
                <p>
                    You can install Flux using npm, yarn, or by downloading the standalone installer. Choose the method
                    that works best for you.
                </p>

                <Tabs defaultValue="npm">
                    <TabsList>
                        {/* <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger> */}
                        <TabsTrigger value="standalone">Standalone</TabsTrigger>
                    </TabsList>
                    {/* <TabsContent value="npm" className="space-y-4">
                        <p>You can install Flux globally using npm:</p>
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>npm install -g flux</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("npm install -g @flux/cli");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                        <p>After installation, verify that Flux was installed correctly:</p>
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>flux --version</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("flux --version");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                    </TabsContent>
                    <TabsContent value="yarn" className="space-y-4">
                        <p>You can install Flux globally using yarn:</p>
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>yarn global add @flux/cli</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("yarn global add @flux/cli");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                        <p>After installation, verify that Flux was installed correctly:</p>
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>flux --version</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("flux --version");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                    </TabsContent> */}
                    <TabsContent value="standalone" className="space-y-4">
                        <p>
                            You can download the standalone installer for your platform from the{" "}
                            <Link href="/downloads" className="text-primary hover:underline">
                                downloads page
                            </Link>
                            .
                        </p>
                        <h3 className="text-lg font-semibold">macOS / Linux</h3>
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>curl -fsSL https://flux.dev/install.sh | sh</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("curl -fsSL https://flux.dev/install.sh | sh");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                        <h3 className="text-lg font-semibold">Windows</h3>
                        <p>
                            Download the Windows installer from the{" "}
                            <Link href="/downloads" className="text-primary hover:underline">
                                downloads page
                            </Link>{" "}
                            and run the executable.
                        </p>
                    </TabsContent>
                </Tabs>
            </div>

            <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Note</AlertTitle>
                <AlertDescription>
                    If you're using a corporate network or behind a firewall, you might need to configure proxy
                    settings. See the{" "}
                    <Link href="/docs/configuration#proxy-settings" className="text-primary hover:underline">
                        proxy configuration
                    </Link>{" "}
                    section for more details.
                </AlertDescription>
            </Alert>

            <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Updating Flux</h2>
                <p>To update Flux to the latest version, you can use the self-update command:</p>
                <div className="relative rounded-md bg-muted p-4">
                    <pre className="font-mono text-sm">
                        <code>flux self-update</code>
                    </pre>
                    <button
                        className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                        onClick={() => {
                            navigator.clipboard.writeText("flux self-update");
                        }}
                    >
                        <span className="sr-only">Copy code</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-copy"
                        >
                            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                        </svg>
                    </button>
                </div>
                <p>
                    Alternatively, you can use the same installation method you used initially to update to the latest
                    version.
                </p>
            </div>

            <Alert variant="destructive">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Caution</AlertTitle>
                <AlertDescription>
                    Updating Flux may introduce breaking changes. Always check the{" "}
                    <Link href="/changelog" className="font-medium underline underline-offset-4">
                        changelog
                    </Link>{" "}
                    before updating in a production environment.
                </AlertDescription>
            </Alert>

            <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Uninstalling Flux</h2>
                <p>If you need to uninstall Flux, you can use the following commands:</p>
                <Tabs defaultValue="npm">
                    <TabsList>
                        {/* <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger> */}
                        <TabsTrigger value="standalone">Standalone</TabsTrigger>
                    </TabsList>
                    {/* <TabsContent value="npm" className="space-y-4">
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>npm uninstall -g @flux/cli</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("npm uninstall -g @flux/cli");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                    </TabsContent>
                    <TabsContent value="yarn" className="space-y-4">
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>yarn global remove @flux/cli</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("yarn global remove @flux/cli");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                    </TabsContent> */}
                    <TabsContent value="standalone" className="space-y-4">
                        <h3 className="text-lg font-semibold">macOS / Linux</h3>
                        <div className="relative rounded-md bg-muted p-4">
                            <pre className="font-mono text-sm">
                                <code>curl -fsSL https://flux.dev/uninstall.sh | sh</code>
                            </pre>
                            <button
                                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                                onClick={() => {
                                    navigator.clipboard.writeText("curl -fsSL https://flux.dev/uninstall.sh | sh");
                                }}
                            >
                                <span className="sr-only">Copy code</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-copy"
                                >
                                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                                    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2" />
                                </svg>
                            </button>
                        </div>
                        <h3 className="text-lg font-semibold">Windows</h3>
                        <p>
                            Uninstall Flux using the Windows Control Panel or Settings app, just like any other Windows
                            application.
                        </p>
                    </TabsContent>
                </Tabs>
            </div>

            <div className="space-y-4">
                <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next Steps</h2>
                <p>Now that you have Flux installed, you can:</p>
                <ul className="ml-6 list-disc [&>li]:mt-2">
                    <li>
                        <Link href="/docs/quick-start" className="text-primary hover:underline">
                            Follow the Quick Start guide
                        </Link>{" "}
                        to create your first project with Flux
                    </li>
                    <li>
                        <Link href="/docs/configuration" className="text-primary hover:underline">
                            Learn how to configure Flux
                        </Link>{" "}
                        for your specific needs
                    </li>
                    <li>
                        <Link href="/docs/guides/migrating-from-npm" className="text-primary hover:underline">
                            Migrate an existing project
                        </Link>{" "}
                        from npm, yarn, or pnpm to Flux
                    </li>
                </ul>
            </div>
        </div>
    );
}
