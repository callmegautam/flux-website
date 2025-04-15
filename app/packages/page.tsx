"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Package, Star, Download, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Skeleton } from "@/components/ui/skeleton"

// Mock package data
const mockPackages = [
  {
    id: 1,
    name: "react",
    description: "A JavaScript library for building user interfaces",
    version: "18.2.0",
    author: "Facebook",
    stars: 203000,
    downloads: 15000000,
    tags: ["ui", "frontend", "library"],
    lastUpdated: "2 days ago",
  },
  {
    id: 2,
    name: "vue",
    description: "Progressive JavaScript framework for building UIs",
    version: "3.3.4",
    author: "Evan You",
    stars: 203000,
    downloads: 8000000,
    tags: ["ui", "frontend", "framework"],
    lastUpdated: "1 week ago",
  },
  {
    id: 3,
    name: "svelte",
    description: "Cybernetically enhanced web apps",
    version: "4.0.0",
    author: "Rich Harris",
    stars: 71000,
    downloads: 3000000,
    tags: ["ui", "frontend", "compiler"],
    lastUpdated: "3 days ago",
  },
  {
    id: 4,
    name: "next",
    description: "The React Framework for the Web",
    version: "14.0.0",
    author: "Vercel",
    stars: 112000,
    downloads: 7000000,
    tags: ["react", "framework", "ssr"],
    lastUpdated: "1 day ago",
  },
  {
    id: 5,
    name: "tailwindcss",
    description: "A utility-first CSS framework",
    version: "3.3.3",
    author: "Adam Wathan",
    stars: 73000,
    downloads: 9000000,
    tags: ["css", "utility", "design"],
    lastUpdated: "5 days ago",
  },
  {
    id: 6,
    name: "express",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    version: "4.18.2",
    author: "TJ Holowaychuk",
    stars: 61000,
    downloads: 12000000,
    tags: ["backend", "server", "node"],
    lastUpdated: "2 weeks ago",
  },
  {
    id: 7,
    name: "prisma",
    description: "Next-generation ORM for Node.js and TypeScript",
    version: "5.3.1",
    author: "Prisma",
    stars: 32000,
    downloads: 4000000,
    tags: ["database", "orm", "typescript"],
    lastUpdated: "4 days ago",
  },
  {
    id: 8,
    name: "zod",
    description: "TypeScript-first schema validation with static type inference",
    version: "3.22.2",
    author: "Colin McDonnell",
    stars: 25000,
    downloads: 3500000,
    tags: ["validation", "typescript", "schema"],
    lastUpdated: "1 week ago",
  },
]

// All unique tags from the mock data
const allTags = Array.from(new Set(mockPackages.flatMap((pkg) => pkg.tags)))

export default function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("downloads")
  const [isLoading, setIsLoading] = useState(true)
  const [packages, setPackages] = useState<typeof mockPackages>([])

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setPackages(mockPackages)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Filter packages based on search query and selected tags
  const filteredPackages = packages.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => pkg.tags.includes(tag))

    return matchesSearch && matchesTags
  })

  // Sort packages
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "downloads") return b.downloads - a.downloads
    if (sortBy === "stars") return b.stars - a.stars
    if (sortBy === "recent") return a.lastUpdated.localeCompare(b.lastUpdated)
    return 0
  })

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const clearFilters = () => {
    setSearchQuery("")
    setSelectedTags([])
  }

  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Packages</h1>
          <p className="mt-2 text-muted-foreground">Search and discover packages in the Flux registry</p>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search packages..."
              className="pl-9"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="downloads">Most Downloads</SelectItem>
              <SelectItem value="stars">Most Stars</SelectItem>
              <SelectItem value="recent">Recently Updated</SelectItem>
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            className="gap-2"
            onClick={() => document.getElementById("filter-dialog")?.showModal()}
          >
            <Filter className="h-4 w-4" />
            Filter
            {selectedTags.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {selectedTags.length}
              </Badge>
            )}
          </Button>
        </div>

        {/* Active filters */}
        {selectedTags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                {tag}
                <button onClick={() => handleTagToggle(tag)}>
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear all
            </Button>
          </div>
        )}

        {/* Results count */}
        <div className="text-sm text-muted-foreground">
          {isLoading ? <Skeleton className="h-4 w-40" /> : `Showing ${sortedPackages.length} packages`}
        </div>

        {/* Package grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="wait">
            {isLoading
              ? // Loading skeletons
                Array.from({ length: 6 }).map((_, i) => (
                  <Card key={`skeleton-${i}`} className="overflow-hidden">
                    <CardHeader className="pb-2">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-4 w-full mt-2" />
                      <Skeleton className="h-4 w-3/4 mt-1" />
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 mt-2">
                        <Skeleton className="h-5 w-12" />
                        <Skeleton className="h-5 w-12" />
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between text-sm text-muted-foreground">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-20" />
                    </CardFooter>
                  </Card>
                ))
              : sortedPackages.map((pkg) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg font-bold text-primary">{pkg.name}</CardTitle>
                          <Badge variant="outline">{pkg.version}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex flex-wrap gap-2 mt-2">
                          {pkg.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                          <div className="flex items-center text-sm">
                            <Star className="mr-1 h-4 w-4 text-muted-foreground" />
                            {pkg.stars.toLocaleString()}
                          </div>
                          <div className="flex items-center text-sm">
                            <Download className="mr-1 h-4 w-4 text-muted-foreground" />
                            {pkg.downloads.toLocaleString()}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between text-sm text-muted-foreground border-t pt-4">
                        <span>By {pkg.author}</span>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {pkg.lastUpdated}
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        {/* No results */}
        {!isLoading && sortedPackages.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Package className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium">No packages found</h3>
            <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
            <Button variant="outline" className="mt-4" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        )}
      </div>

      {/* Filter dialog */}
      <dialog id="filter-dialog" className="modal">
        <div className="modal-box bg-background p-6 rounded-lg shadow-lg max-w-md w-full">
          <h3 className="text-lg font-bold mb-4">Filter Packages</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Tags</h4>
              <div className="grid grid-cols-2 gap-2">
                {allTags.map((tag) => (
                  <div key={tag} className="flex items-center space-x-2">
                    <Checkbox
                      id={`tag-${tag}`}
                      checked={selectedTags.includes(tag)}
                      onCheckedChange={() => handleTagToggle(tag)}
                    />
                    <label
                      htmlFor={`tag-${tag}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {tag}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-2">
            <Button variant="outline" onClick={() => document.getElementById("filter-dialog")?.close()}>
              Cancel
            </Button>
            <Button onClick={() => document.getElementById("filter-dialog")?.close()}>Apply Filters</Button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop bg-black/50 fixed inset-0">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}
