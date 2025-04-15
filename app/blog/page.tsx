"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, Tag, Search, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock blog data
const featuredPost = {
  id: 1,
  title: "Introducing Flux 2.0: The Next Generation Package Manager",
  excerpt:
    "Today, we're excited to announce Flux 2.0, a major update to our package manager with groundbreaking performance improvements and new features.",
  image: "/placeholder.svg?height=400&width=800",
  date: "April 10, 2025",
  readTime: "8 min read",
  author: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Lead Developer",
  },
  tags: ["Release", "Performance", "Features"],
}

const blogPosts = [
  {
    id: 2,
    title: "How to Optimize Your Dependency Tree with Flux",
    excerpt:
      "Learn how to use Flux's advanced dependency resolution to optimize your project's dependency tree and improve build times.",
    image: "/placeholder.svg?height=220&width=400",
    date: "April 5, 2025",
    readTime: "6 min read",
    author: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Developer Advocate",
    },
    tags: ["Tutorial", "Performance", "Dependencies"],
    category: "Tutorials",
  },
  {
    id: 3,
    title: "Flux vs. npm: A Performance Comparison",
    excerpt:
      "We benchmarked Flux against npm in various scenarios. See the results and learn when Flux offers the biggest advantages.",
    image: "/placeholder.svg?height=220&width=400",
    date: "March 28, 2025",
    readTime: "5 min read",
    author: {
      name: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Performance Engineer",
    },
    tags: ["Comparison", "Performance", "Benchmarks"],
    category: "Comparisons",
  },
  {
    id: 4,
    title: "Building a Plugin for Flux: A Step-by-Step Guide",
    excerpt:
      "Extend Flux's functionality with custom plugins. This guide walks you through creating your first Flux plugin from scratch.",
    image: "/placeholder.svg?height=220&width=400",
    date: "March 20, 2025",
    readTime: "10 min read",
    author: {
      name: "Emma Wilson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Senior Developer",
    },
    tags: ["Plugins", "Tutorial", "Advanced"],
    category: "Tutorials",
  },
  {
    id: 5,
    title: "Flux in CI/CD Pipelines: Best Practices",
    excerpt: "Learn how to integrate Flux into your CI/CD pipelines for faster builds and more reliable deployments.",
    image: "/placeholder.svg?height=220&width=400",
    date: "March 15, 2025",
    readTime: "7 min read",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "DevOps Engineer",
    },
    tags: ["CI/CD", "DevOps", "Best Practices"],
    category: "DevOps",
  },
  {
    id: 6,
    title: "The Future of Package Management: Trends and Predictions",
    excerpt:
      "We explore emerging trends in package management and predict how tools like Flux will evolve to meet future challenges.",
    image: "/placeholder.svg?height=220&width=400",
    date: "March 8, 2025",
    readTime: "9 min read",
    author: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Lead Developer",
    },
    tags: ["Future", "Trends", "Industry"],
    category: "Insights",
  },
]

// All unique categories from the mock data
const categories = Array.from(new Set(blogPosts.map((post) => post.category)))
// All unique tags from the mock data
const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter posts based on search query, category, and tags
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCategory = activeCategory === "All" || post.category === activeCategory

    const matchesTags = selectedTags.length === 0 || selectedTags.some((tag) => post.tags.includes(tag))

    return matchesSearch && matchesCategory && matchesTags
  })

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

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
      <div className="space-y-10">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground">Insights, tutorials, and updates from the Flux team</p>
        </div>

        {/* Featured Post */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="group relative overflow-hidden rounded-xl border bg-card shadow-sm"
        >
          <Link href={`/blog/${featuredPost.id}`} className="block">
            <div className="relative h-[400px] w-full overflow-hidden">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="mb-2 flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/80 text-white">
                  Featured
                </Badge>
                {featuredPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="border-white/30 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="mb-2 text-3xl font-bold tracking-tight">{featuredPost.title}</h2>
              <p className="mb-4 text-lg text-white/80">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={featuredPost.author.avatar || "/placeholder.svg"}
                    alt={featuredPost.author.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <span>{featuredPost.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Search and Filters */}
        <div className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {selectedTags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="flex cursor-pointer items-center gap-1"
                  onClick={() => handleTagToggle(tag)}
                >
                  {tag}
                  <span className="ml-1 text-xs">×</span>
                </Badge>
              ))}
            </div>
          </div>

          <Tabs defaultValue="All" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="mb-4 w-full justify-start overflow-x-auto">
              <TabsTrigger value="All">All</TabsTrigger>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            <div className="mb-6 flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => handleTagToggle(tag)}
                >
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            <TabsContent value={activeCategory} className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <motion.div key={post.id} initial="hidden" animate="visible" variants={fadeIn} className="group">
                    <Card className="h-full overflow-hidden">
                      <Link href={`/blog/${post.id}`} className="block">
                        <div className="relative h-48 w-full overflow-hidden">
                          <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <div className="mb-2 flex flex-wrap gap-1">
                            {post.tags.slice(0, 2).map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                            {post.tags.length > 2 && (
                              <Badge variant="outline" className="text-xs">
                                +{post.tags.length - 2}
                              </Badge>
                            )}
                          </div>
                          <h3 className="mb-2 line-clamp-2 text-xl font-bold group-hover:text-primary">{post.title}</h3>
                          <p className="line-clamp-3 text-sm text-muted-foreground">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between border-t p-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Image
                              src={post.author.avatar || "/placeholder.svg"}
                              alt={post.author.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                            <span>{post.author.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </CardFooter>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <h3 className="text-lg font-medium">No articles found</h3>
                  <p className="text-muted-foreground mt-1">Try adjusting your search or filter criteria</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("")
                      setSelectedTags([])
                      setActiveCategory("All")
                    }}
                  >
                    Clear filters
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Newsletter */}
        <div className="rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold">Stay up to date</h2>
            <p className="mt-2 text-muted-foreground">
              Get notified about new features, tutorials, and package updates.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Enter your email" className="flex-1" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* More Articles */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">More from Flux</h2>
            <Button variant="ghost" className="gap-1" asChild>
              <Link href="/blog/archive">
                View all <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.slice(0, 2).map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <Link href={`/blog/${post.id}`} className="flex h-full flex-col md:flex-row">
                  <div className="relative h-48 w-full md:h-auto md:w-1/3">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <Badge variant="outline" className="mb-2">
                        {post.category}
                      </Badge>
                      <h3 className="mb-2 text-lg font-bold">{post.title}</h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
