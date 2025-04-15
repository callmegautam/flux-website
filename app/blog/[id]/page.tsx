"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Calendar, Clock, ChevronLeft, Twitter, Linkedin, Facebook, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

// Mock blog post data
const blogPost = {
  id: 1,
  title: "Introducing Flux 2.0: The Next Generation Package Manager",
  excerpt:
    "Today, we're excited to announce Flux 2.0, a major update to our package manager with groundbreaking performance improvements and new features.",
  image: "/placeholder.svg?height=600&width=1200",
  date: "April 10, 2025",
  readTime: "8 min read",
  author: {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Lead Developer",
    bio: "Sarah is the lead developer of Flux and has been working on package managers for over 8 years.",
  },
  tags: ["Release", "Performance", "Features"],
  content: `
    <p class="lead">Today, we're excited to announce Flux 2.0, a major update to our package manager with groundbreaking performance improvements and new features.</p>
    
    <p>Package management is a critical part of modern development workflows. As projects grow in complexity and dependencies multiply, having a fast, reliable package manager becomes increasingly important. That's why we've spent the last six months rebuilding Flux from the ground up.</p>
    
    <h2>Performance Improvements</h2>
    
    <p>Flux 2.0 introduces a completely redesigned dependency resolution algorithm that's up to 5x faster than our previous version and up to 10x faster than npm for large projects. We've also optimized our caching mechanisms to reduce redundant downloads and speed up installations.</p>
    
    <pre><code>// Example of installing dependencies with Flux 2.0
$ flux install
Resolving dependencies... Done in 0.8s
Adding 1,245 packages... Done in 3.2s
Packages installed in 4.0s (10.2s faster than npm)</code></pre>
    
    <p>Our benchmarks show that Flux 2.0 consistently outperforms other package managers across a variety of metrics:</p>
    
    <ul>
      <li>Cold cache installation: 60% faster</li>
      <li>Warm cache installation: 80% faster</li>
      <li>Dependency resolution: 75% faster</li>
      <li>Disk space usage: 40% less</li>
    </ul>
    
    <h2>New Features</h2>
    
    <p>Beyond performance improvements, Flux 2.0 introduces several new features designed to improve developer experience:</p>
    
    <h3>Workspaces</h3>
    
    <p>Flux now has first-class support for monorepos through our new workspaces feature. This allows you to manage multiple packages within a single repository with ease.</p>
    
    <pre><code>// Example workspace configuration
// flux.config.js
module.exports = {
  workspaces: [
    'packages/*',
    'apps/*'
  ]
}</code></pre>
    
    <h3>Plugin System</h3>
    
    <p>We've introduced a powerful plugin system that allows you to extend Flux's functionality. Whether you need custom resolvers, hooks into the installation process, or integration with your CI/CD pipeline, our plugin system has you covered.</p>
    
    <h3>Improved CLI</h3>
    
    <p>We've completely redesigned our CLI to be more intuitive and informative. Error messages are now more helpful, and we've added detailed progress reporting for long-running operations.</p>
    
    <h2>Getting Started</h2>
    
    <p>Ready to try Flux 2.0? Installation is simple:</p>
    
    <pre><code>npm install -g @flux/cli</code></pre>
    
    <p>Or if you're already using Flux, you can update to the latest version:</p>
    
    <pre><code>flux self-update</code></pre>
    
    <p>Check out our <a href="/docs">documentation</a> for more information on getting started with Flux 2.0.</p>
    
    <h2>What's Next</h2>
    
    <p>This is just the beginning for Flux 2.0. We have an exciting roadmap ahead, including:</p>
    
    <ul>
      <li>Improved security features, including automatic vulnerability scanning</li>
      <li>Better integration with popular frameworks and build tools</li>
      <li>A web-based package explorer</li>
      <li>And much more!</li>
    </ul>
    
    <p>We're incredibly excited about the future of Flux and can't wait to see what you build with it. As always, we welcome your feedback and contributions.</p>
  `,
}

// Mock related posts
const relatedPosts = [
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
    },
    tags: ["Tutorial", "Performance", "Dependencies"],
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
    },
    tags: ["Comparison", "Performance", "Benchmarks"],
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
    },
    tags: ["Plugins", "Tutorial", "Advanced"],
  },
]

export default function BlogPostPage() {
  const { id } = useParams()

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" size="sm" asChild className="gap-1">
            <Link href="/blog">
              <ChevronLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-wrap gap-2">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{blogPost.title}</h1>
          <p className="text-xl text-muted-foreground">{blogPost.excerpt}</p>
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} alt={blogPost.author.name} />
                <AvatarFallback>{blogPost.author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{blogPost.author.name}</div>
                <div className="text-sm text-muted-foreground">{blogPost.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{blogPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{blogPost.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-10 aspect-[2/1] w-full overflow-hidden rounded-xl">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
        </div>

        {/* Share */}
        <div className="my-10">
          <Separator className="mb-6" />
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Share this article:</span>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Share on Twitter</span>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">Share on LinkedIn</span>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                  <Facebook className="h-4 w-4" />
                  <span className="sr-only">Share on Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href)
                  }}
                >
                  <Link2 className="h-4 w-4" />
                  <span className="sr-only">Copy link</span>
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Tags:</span>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <Separator className="mt-6" />
        </div>

        {/* Author */}
        <div className="my-10">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={blogPost.author.avatar || "/placeholder.svg"} alt={blogPost.author.name} />
                  <AvatarFallback>{blogPost.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-bold">{blogPost.author.name}</h3>
                  <p className="text-sm text-muted-foreground">{blogPost.author.role}</p>
                  <p className="mt-2">{blogPost.author.bio}</p>
                  <div className="mt-4 flex gap-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button size="sm" variant="ghost">
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Posts */}
        <div className="my-10">
          <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="mb-2 line-clamp-2 text-lg font-bold hover:text-primary">{post.title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                          <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{post.author.name}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="my-10 rounded-xl bg-gradient-to-br from-primary/20 via-primary/10 to-background p-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
            <p className="mt-2 text-muted-foreground">
              Get the latest updates on Flux and package management best practices.
            </p>
            <form className="mt-4 flex flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
