"use client"

import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, Lightbulb } from "lucide-react"

export default function QuickStartPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Quick Start</h1>
        <p className="mt-4 text-xl text-muted-foreground">
          Get up and running with Flux in minutes with this quick start guide.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Prerequisites</h2>
        <p>Before you begin, make sure you have:</p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            <Link href="/docs/installation" className="text-primary hover:underline">
              Installed Flux
            </Link>{" "}
            on your system
          </li>
          <li>Node.js 16.0.0 or later</li>
          <li>Basic familiarity with package managers and the command line</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Creating a New Project</h2>
        <p>Let's start by creating a new project with Flux. Open your terminal and run the following command:</p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>flux init my-project</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("flux init my-project")
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
          This command creates a new directory called <code>my-project</code> with a basic project structure and a
          default <code>flux.config.js</code> file.
        </p>
        <p>Navigate to your new project directory:</p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>cd my-project</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("cd my-project")
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
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Project Structure</h2>
        <p>
          The <code>flux init</code> command creates the following files and directories:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>
              my-project/ ├── node_modules/ ├── src/ │ └── index.js ├── flux.config.js ├── package.json └── README.md
            </code>
          </pre>
        </div>
        <p>
          The <code>flux.config.js</code> file contains the configuration for your Flux project. You can customize this
          file to suit your needs.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Installing Dependencies</h2>
        <p>
          Let's add some dependencies to our project. With Flux, you can use the <code>add</code> command to install
          packages:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>flux add react react-dom</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("flux add react react-dom")
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
          This command installs React and ReactDOM as dependencies and adds them to your <code>package.json</code> file.
        </p>
        <p>
          To add a development dependency, use the <code>--dev</code> flag:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>flux add --dev typescript @types/react @types/react-dom</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("flux add --dev typescript @types/react @types/react-dom")
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
      </div>

      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>Tip</AlertTitle>
        <AlertDescription>
          Flux automatically creates a lockfile (<code>flux.lock</code>) to ensure consistent installations across
          different environments. Always commit this file to your version control system.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Running Scripts</h2>
        <p>
          You can define scripts in your <code>package.json</code> file and run them with Flux:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>{`{
  "name": "my-project",
  "version": "1.0.0",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js",
    "build": "tsc",
    "test": "jest"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0"
  }
}`}</code>
          </pre>
        </div>
        <p>
          To run a script, use the <code>run</code> command:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>flux run start</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("flux run start")
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
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Using Workspaces</h2>
        <p>
          Flux has built-in support for monorepos through workspaces. To create a workspace, add a{" "}
          <code>workspaces</code> field to your <code>flux.config.js</code> file:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>{`// flux.config.js
module.exports = {
  workspaces: [
    'packages/*',
    'apps/*'
  ],
  // other configuration options...
}`}</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText(`// flux.config.js
module.exports = {
  workspaces: [
    'packages/*',
    'apps/*'
  ],
  // other configuration options...
}`)
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
          Create the workspace directories and add a <code>package.json</code> file to each workspace:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>mkdir -p packages/ui apps/web</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("mkdir -p packages/ui apps/web")
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
          To run a command in a specific workspace, use the <code>--workspace</code> flag:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>flux run build --workspace=packages/ui</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("flux run build --workspace=packages/ui")
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
          To run a command in all workspaces, use the <code>--workspaces</code> flag:
        </p>
        <div className="relative rounded-md bg-muted p-4">
          <pre className="font-mono text-sm">
            <code>flux run test --workspaces</code>
          </pre>
          <button
            className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
            onClick={() => {
              navigator.clipboard.writeText("flux run test --workspaces")
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
      </div>

      <Alert variant="default" className="bg-primary/10 border-primary/20">
        <Lightbulb className="h-4 w-4 text-primary" />
        <AlertTitle>Pro Tip</AlertTitle>
        <AlertDescription>
          Flux provides a powerful caching mechanism that significantly speeds up installations and builds. Learn more
          about{" "}
          <Link href="/docs/caching" className="text-primary hover:underline">
            caching in Flux
          </Link>
          .
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Common Commands</h2>
        <p>Here are some common Flux commands you'll use in your projects:</p>
        <Tabs defaultValue="install">
          <TabsList>
            <TabsTrigger value="install">Install</TabsTrigger>
            <TabsTrigger value="add">Add</TabsTrigger>
            <TabsTrigger value="remove">Remove</TabsTrigger>
            <TabsTrigger value="update">Update</TabsTrigger>
          </TabsList>
          <TabsContent value="install" className="space-y-4">
            <p>Install all dependencies listed in your package.json:</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux install</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux install")
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
            <p>Install dependencies in production mode (no dev dependencies):</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux install --production</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux install --production")
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
          <TabsContent value="add" className="space-y-4">
            <p>Add a package as a dependency:</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux add express</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux add express")
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
            <p>Add a package as a dev dependency:</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux add --dev jest</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux add --dev jest")
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
            <p>Add a package with a specific version:</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux add react@18.2.0</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux add react@18.2.0")
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
          <TabsContent value="remove" className="space-y-4">
            <p>Remove a package:</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux remove express</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux remove express")
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
          <TabsContent value="update" className="space-y-4">
            <p>Update all packages to their latest versions:</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux update</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux update")
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
            <p>Update a specific package:</p>
            <div className="relative rounded-md bg-muted p-4">
              <pre className="font-mono text-sm">
                <code>flux update react</code>
              </pre>
              <button
                className="absolute right-2 top-2 rounded-md p-1 hover:bg-muted-foreground/20"
                onClick={() => {
                  navigator.clipboard.writeText("flux update react")
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
        </Tabs>
      </div>

      <div className="space-y-4">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">Next Steps</h2>
        <p>Now that you've created your first Flux project, you can:</p>
        <ul className="ml-6 list-disc [&>li]:mt-2">
          <li>
            <Link href="/docs/configuration" className="text-primary hover:underline">
              Learn more about configuring Flux
            </Link>
          </li>
          <li>
            <Link href="/docs/caching" className="text-primary hover:underline">
              Explore Flux's caching mechanisms
            </Link>
          </li>
          <li>
            <Link href="/docs/workspaces" className="text-primary hover:underline">
              Set up a monorepo with workspaces
            </Link>
          </li>
          <li>
            <Link href="/docs/advanced/plugins" className="text-primary hover:underline">
              Extend Flux with plugins
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
