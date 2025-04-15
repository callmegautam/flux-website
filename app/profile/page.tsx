"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import {
  Package,
  Star,
  Clock,
  Settings,
  Github,
  Twitter,
  Mail,
  Calendar,
  MapPin,
  Edit,
  Lock,
  Bell,
  Key,
  Download,
  User,
  LogOut,
} from "lucide-react"

// Mock user data
const user = {
  name: "Sarah Johnson",
  username: "sarahjdev",
  avatar: "/placeholder.svg?height=100&width=100",
  bio: "Full-stack developer passionate about open source and modern web technologies",
  location: "San Francisco, CA",
  website: "https://sarahjohnson.dev",
  github: "sarahjdev",
  twitter: "sarahjdev",
  email: "sarah@example.com",
  joinedDate: "Joined January 2022",
  stats: {
    packages: 12,
    stars: 843,
    followers: 156,
    following: 89,
  },
}

// Mock packages data
const userPackages = [
  {
    id: 1,
    name: "react-flux-hooks",
    description: "A collection of useful React hooks for state management",
    stars: 342,
    downloads: 45600,
    lastUpdated: "2 days ago",
    version: "2.1.0",
  },
  {
    id: 2,
    name: "flux-utils",
    description: "Utility functions for working with Flux package manager",
    stars: 128,
    downloads: 23400,
    lastUpdated: "1 week ago",
    version: "1.3.2",
  },
  {
    id: 3,
    name: "flux-cli-tools",
    description: "Command line tools to enhance your Flux workflow",
    stars: 89,
    downloads: 12800,
    lastUpdated: "3 days ago",
    version: "0.9.5",
  },
  {
    id: 4,
    name: "flux-starter",
    description: "Starter template for new Flux projects",
    stars: 284,
    downloads: 34200,
    lastUpdated: "5 days ago",
    version: "3.0.1",
  },
]

// Mock activity data
const recentActivity = [
  {
    id: 1,
    type: "package_update",
    package: "react-flux-hooks",
    version: "2.1.0",
    date: "2 days ago",
  },
  {
    id: 2,
    type: "star",
    package: "next",
    author: "vercel",
    date: "3 days ago",
  },
  {
    id: 3,
    type: "package_publish",
    package: "flux-cli-tools",
    version: "0.9.5",
    date: "3 days ago",
  },
  {
    id: 4,
    type: "package_update",
    package: "flux-starter",
    version: "3.0.1",
    date: "5 days ago",
  },
  {
    id: 5,
    type: "star",
    package: "tailwindcss",
    author: "tailwindlabs",
    date: "1 week ago",
  },
  {
    id: 6,
    type: "fork",
    package: "react",
    author: "facebook",
    date: "1 week ago",
  },
  {
    id: 7,
    type: "issue",
    package: "flux-utils",
    title: "Add support for custom resolvers",
    date: "2 weeks ago",
  },
  {
    id: 8,
    type: "pull_request",
    package: "flux-cli-tools",
    title: "Fix typo in help command",
    date: "2 weeks ago",
  },
]

// Mock starred packages
const starredPackages = [
  {
    id: 1,
    name: "next",
    author: "vercel",
    description: "The React Framework for the Web",
    stars: 112000,
  },
  {
    id: 2,
    name: "tailwindcss",
    author: "tailwindlabs",
    description: "A utility-first CSS framework",
    stars: 73000,
  },
  {
    id: 3,
    name: "react",
    author: "facebook",
    description: "A JavaScript library for building user interfaces",
    stars: 203000,
  },
  {
    id: 4,
    name: "typescript",
    author: "microsoft",
    description: "TypeScript is a superset of JavaScript that compiles to clean JavaScript",
    stars: 92000,
  },
  {
    id: 5,
    name: "svelte",
    author: "sveltejs",
    description: "Cybernetically enhanced web apps",
    stars: 71000,
  },
  {
    id: 6,
    name: "vite",
    author: "vitejs",
    description: "Next generation frontend tooling",
    stars: 58000,
  },
]

// Mock API tokens
const apiTokens = [
  {
    id: 1,
    name: "Development Token",
    lastUsed: "2 hours ago",
    createdAt: "April 10, 2025",
    scopes: ["read", "write"],
  },
  {
    id: 2,
    name: "CI/CD Pipeline",
    lastUsed: "1 day ago",
    createdAt: "March 15, 2025",
    scopes: ["read", "write", "publish"],
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("packages")
  const [editMode, setEditMode] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <div className="container py-10">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {/* Sidebar / User Info */}
        <div className="md:col-span-1">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="sticky top-20">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full bg-background"
                      onClick={() => setActiveTab("settings")}
                    >
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit Profile</span>
                    </Button>
                  </div>
                  <h2 className="mt-4 text-xl font-bold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground">@{user.username}</p>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-muted-foreground">{user.bio}</p>
                  </div>

                  <div className="mt-6 grid w-full grid-cols-2 gap-2 text-center">
                    <div>
                      <p className="text-lg font-bold">{user.stats.packages}</p>
                      <p className="text-xs text-muted-foreground">Packages</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{user.stats.stars}</p>
                      <p className="text-xs text-muted-foreground">Stars</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{user.stats.followers}</p>
                      <p className="text-xs text-muted-foreground">Followers</p>
                    </div>
                    <div>
                      <p className="text-lg font-bold">{user.stats.following}</p>
                      <p className="text-xs text-muted-foreground">Following</p>
                    </div>
                  </div>

                  <div className="mt-6 w-full">
                    <Button className="w-full">Follow</Button>
                  </div>

                  <div className="mt-6 w-full space-y-3">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      {user.location}
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${user.email}`} className="text-primary hover:underline">
                        {user.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Github className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a
                        href={`https://github.com/${user.github}`}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.github}
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Twitter className="mr-2 h-4 w-4 text-muted-foreground" />
                      <a
                        href={`https://twitter.com/${user.twitter}`}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {user.twitter}
                      </a>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      {user.joinedDate}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="packages" className="flex items-center gap-1">
                <Package className="h-4 w-4" />
                Packages
              </TabsTrigger>
              <TabsTrigger value="starred" className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                Starred
              </TabsTrigger>
              <TabsTrigger value="activity" className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Activity
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-1">
                <Settings className="h-4 w-4" />
                Settings
              </TabsTrigger>
            </TabsList>

            {/* Packages Tab */}
            <TabsContent value="packages">
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold">Packages</h2>
                  <Button>New Package</Button>
                </div>

                <div className="grid gap-6">
                  {userPackages.map((pkg) => (
                    <Card key={pkg.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/packages/${pkg.name}`}
                                className="text-xl font-bold text-primary hover:underline"
                              >
                                {pkg.name}
                              </Link>
                              <Badge variant="outline">{pkg.version}</Badge>
                            </div>
                            <p className="text-muted-foreground">{pkg.description}</p>
                          </div>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Star className="mr-1 h-4 w-4" />
                              {pkg.stars}
                            </div>
                            <div className="flex items-center">
                              <Download className="mr-1 h-4 w-4" />
                              {pkg.downloads.toLocaleString()} downloads
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4" />
                              Updated {pkg.lastUpdated}
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          <Button variant="outline" size="sm">
                            Edit
                          </Button>
                          <Button variant="outline" size="sm">
                            Publish
                          </Button>
                          <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                            Delete
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Starred Tab */}
            <TabsContent value="starred">
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold">Starred Packages</h2>

                <div className="grid gap-6">
                  {starredPackages.map((pkg) => (
                    <Card key={pkg.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/packages/${pkg.name}`}
                                className="text-xl font-bold text-primary hover:underline"
                              >
                                {pkg.author}/{pkg.name}
                              </Link>
                            </div>
                            <p className="text-muted-foreground">{pkg.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              <Star className="mr-1 h-4 w-4 fill-current" />
                              Unstar
                            </Button>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Star className="mr-1 h-4 w-4" />
                              {pkg.stars.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity">
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold">Recent Activity</h2>

                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <Card key={activity.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            {activity.type === "package_update" && <Package className="h-5 w-5 text-primary" />}
                            {activity.type === "star" && <Star className="h-5 w-5 text-primary" />}
                            {activity.type === "package_publish" && <Package className="h-5 w-5 text-primary" />}
                            {activity.type === "fork" && <Github className="h-5 w-5 text-primary" />}
                            {activity.type === "issue" && <Bell className="h-5 w-5 text-primary" />}
                            {activity.type === "pull_request" && <Github className="h-5 w-5 text-primary" />}
                          </div>
                          <div className="flex-1">
                            <p>
                              {activity.type === "package_update" && (
                                <>
                                  Updated package{" "}
                                  <Link
                                    href={`/packages/${activity.package}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {activity.package}
                                  </Link>{" "}
                                  to version {activity.version}
                                </>
                              )}
                              {activity.type === "star" && (
                                <>
                                  Starred{" "}
                                  <Link
                                    href={`/packages/${activity.package}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {activity.author}/{activity.package}
                                  </Link>
                                </>
                              )}
                              {activity.type === "package_publish" && (
                                <>
                                  Published new package{" "}
                                  <Link
                                    href={`/packages/${activity.package}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {activity.package}
                                  </Link>{" "}
                                  version {activity.version}
                                </>
                              )}
                              {activity.type === "fork" && (
                                <>
                                  Forked{" "}
                                  <Link
                                    href={`/packages/${activity.package}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {activity.author}/{activity.package}
                                  </Link>
                                </>
                              )}
                              {activity.type === "issue" && (
                                <>
                                  Opened issue in{" "}
                                  <Link
                                    href={`/packages/${activity.package}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {activity.package}
                                  </Link>
                                  : {activity.title}
                                </>
                              )}
                              {activity.type === "pull_request" && (
                                <>
                                  Created pull request in{" "}
                                  <Link
                                    href={`/packages/${activity.package}`}
                                    className="font-medium text-primary hover:underline"
                                  >
                                    {activity.package}
                                  </Link>
                                  : {activity.title}
                                </>
                              )}
                            </p>
                            <p className="text-sm text-muted-foreground">{activity.date}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings">
              <motion.div initial="hidden" animate="visible" variants={fadeIn} className="space-y-6">
                <h2 className="text-2xl font-bold">Account Settings</h2>

                <Tabs defaultValue="profile">
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="md:w-1/4">
                      <TabsList className="flex flex-col w-full h-auto">
                        <TabsTrigger value="profile" className="justify-start">
                          <User className="mr-2 h-4 w-4" />
                          Profile
                        </TabsTrigger>
                        <TabsTrigger value="security" className="justify-start">
                          <Lock className="mr-2 h-4 w-4" />
                          Security
                        </TabsTrigger>
                        <TabsTrigger value="tokens" className="justify-start">
                          <Key className="mr-2 h-4 w-4" />
                          API Tokens
                        </TabsTrigger>
                        <TabsTrigger value="notifications" className="justify-start">
                          <Bell className="mr-2 h-4 w-4" />
                          Notifications
                        </TabsTrigger>
                      </TabsList>
                    </div>
                    <div className="flex-1">
                      <TabsContent value="profile" className="mt-0">
                        <Card>
                          <CardHeader>
                            <CardTitle>Profile Information</CardTitle>
                            <CardDescription>Update your account profile information</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start sm:justify-start">
                              <Avatar className="h-24 w-24">
                                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                                <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div className="flex flex-col gap-2">
                                <Button variant="outline" size="sm">
                                  Change Avatar
                                </Button>
                                <Button variant="outline" size="sm">
                                  Remove Avatar
                                </Button>
                              </div>
                            </div>
                            <Separator />
                            <div className="grid gap-4">
                              <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" defaultValue={user.name} />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" defaultValue={user.username} />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" defaultValue={user.email} />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="bio">Bio</Label>
                                <Textarea id="bio" defaultValue={user.bio} />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="location">Location</Label>
                                <Input id="location" defaultValue={user.location} />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="website">Website</Label>
                                <Input id="website" defaultValue={user.website} />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="github">GitHub</Label>
                                <Input id="github" defaultValue={user.github} />
                              </div>
                              <div className="grid gap-2">
                                <Label htmlFor="twitter">Twitter</Label>
                                <Input id="twitter" defaultValue={user.twitter} />
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <Button>Save Changes</Button>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="security" className="mt-0">
                        <Card>
                          <CardHeader>
                            <CardTitle>Security Settings</CardTitle>
                            <CardDescription>Manage your account security settings</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Change Password</h3>
                              <div className="grid gap-4">
                                <div className="grid gap-2">
                                  <Label htmlFor="current-password">Current Password</Label>
                                  <Input id="current-password" type="password" />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="new-password">New Password</Label>
                                  <Input id="new-password" type="password" />
                                </div>
                                <div className="grid gap-2">
                                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                                  <Input id="confirm-password" type="password" />
                                </div>
                              </div>
                              <Button>Update Password</Button>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="font-medium">Two-factor authentication is disabled</p>
                                  <p className="text-sm text-muted-foreground">
                                    Add an extra layer of security to your account
                                  </p>
                                </div>
                                <Button variant="outline">Enable</Button>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Sessions</h3>
                              <div className="rounded-md border">
                                <div className="flex items-center justify-between p-4">
                                  <div>
                                    <p className="font-medium">Current Session</p>
                                    <p className="text-sm text-muted-foreground">
                                      San Francisco, CA • Last active: Now
                                    </p>
                                  </div>
                                  <Badge>Current</Badge>
                                </div>
                                <Separator />
                                <div className="flex items-center justify-between p-4">
                                  <div>
                                    <p className="font-medium">Chrome on Windows</p>
                                    <p className="text-sm text-muted-foreground">
                                      New York, NY • Last active: 2 days ago
                                    </p>
                                  </div>
                                  <Button variant="outline" size="sm">
                                    Revoke
                                  </Button>
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <Button variant="destructive">
                                <LogOut className="mr-2 h-4 w-4" />
                                Sign out of all sessions
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="tokens" className="mt-0">
                        <Card>
                          <CardHeader>
                            <CardTitle>API Tokens</CardTitle>
                            <CardDescription>Manage your API tokens for package publishing</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex justify-end">
                              <Button>
                                <Key className="mr-2 h-4 w-4" />
                                Create New Token
                              </Button>
                            </div>
                            <div className="rounded-md border">
                              {apiTokens.map((token, index) => (
                                <div key={token.id}>
                                  <div className="flex items-center justify-between p-4">
                                    <div>
                                      <p className="font-medium">{token.name}</p>
                                      <div className="flex flex-wrap gap-2 mt-1">
                                        {token.scopes.map((scope) => (
                                          <Badge key={scope} variant="secondary" className="text-xs">
                                            {scope}
                                          </Badge>
                                        ))}
                                      </div>
                                      <p className="text-sm text-muted-foreground mt-2">
                                        Created: {token.createdAt} • Last used: {token.lastUsed}
                                      </p>
                                    </div>
                                    <Button variant="destructive" size="sm">
                                      Revoke
                                    </Button>
                                  </div>
                                  {index < apiTokens.length - 1 && <Separator />}
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                      <TabsContent value="notifications" className="mt-0">
                        <Card>
                          <CardHeader>
                            <CardTitle>Notification Settings</CardTitle>
                            <CardDescription>Manage how you receive notifications</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Email Notifications</h3>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <div className="space-y-0.5">
                                    <Label htmlFor="package-updates">Package Updates</Label>
                                    <p className="text-sm text-muted-foreground">
                                      Receive notifications when your packages are updated
                                    </p>
                                  </div>
                                  <Switch id="package-updates" defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="space-y-0.5">
                                    <Label htmlFor="security-alerts">Security Alerts</Label>
                                    <p className="text-sm text-muted-foreground">
                                      Receive notifications about security vulnerabilities
                                    </p>
                                  </div>
                                  <Switch id="security-alerts" defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="space-y-0.5">
                                    <Label htmlFor="newsletter">Newsletter</Label>
                                    <p className="text-sm text-muted-foreground">
                                      Receive our monthly newsletter with updates and tips
                                    </p>
                                  </div>
                                  <Switch id="newsletter" />
                                </div>
                              </div>
                            </div>
                            <Separator />
                            <div className="space-y-4">
                              <h3 className="text-lg font-medium">Web Notifications</h3>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <div className="space-y-0.5">
                                    <Label htmlFor="browser-notifications">Browser Notifications</Label>
                                    <p className="text-sm text-muted-foreground">
                                      Receive notifications in your browser
                                    </p>
                                  </div>
                                  <Switch id="browser-notifications" defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                  <div className="space-y-0.5">
                                    <Label htmlFor="activity-notifications">Activity Feed</Label>
                                    <p className="text-sm text-muted-foreground">
                                      Show notifications in your activity feed
                                    </p>
                                  </div>
                                  <Switch id="activity-notifications" defaultChecked />
                                </div>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <Button>Save Preferences</Button>
                            </div>
                          </CardContent>
                        </Card>
                      </TabsContent>
                    </div>
                  </div>
                </Tabs>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
