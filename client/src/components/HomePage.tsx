import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import {  MessageCircle, Zap, Lock, Globe } from "lucide-react"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" to="/">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Acme Chat</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/sigin">
            Login
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/signup">
            Register
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Connect Instantly with Acme Chat
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Fast, secure, and intuitive messaging for everyone. Stay connected with friends, family, and colleagues.
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  to="/signup"
                >
                  Register
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  to="/signin"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 text-center">
                <Zap className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Lightning Fast</h3>
                <p className="text-gray-500 dark:text-gray-400">Instant messaging with real-time updates.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Lock className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Secure & Private</h3>
                <p className="text-gray-500 dark:text-gray-400">End-to-end encryption for all your conversations.</p>
              </div>
              <div className="flex flex-col items-center space-y-3 text-center">
                <Globe className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">Cross-Platform</h3>
                <p className="text-gray-500 dark:text-gray-400">Available on all your devices, anywhere.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Acme Chat Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}