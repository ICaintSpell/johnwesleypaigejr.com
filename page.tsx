"use client";

import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[url('/pattern.svg')] bg-cover bg-no-repeat bg-center text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white/90 shadow-md">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight">John Wesley Paige Jr</h1>
        <Button variant="ghost" size="icon" aria-label="Menu">
          <Menu className="w-6 h-6" />
        </Button>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-2 text-blue-800">
            Cybersecurity Enthusiast
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto text-gray-700">
            Welcome to my professional portfolio. I'm passionate about cybersecurity, cloud
            computing, and protecting digital infrastructures.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a href="mailto:john@example.com">
            <Button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg shadow">
              Contact Me
            </Button>
          </a>
          <a href="https://github.com/JohnWesleyPaigeJr" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="px-6 py-2 rounded-lg">
              GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 px-6 py-4 text-sm border-t text-center">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-blue-700 font-medium">
          <a href="https://linkedin.com/in/johnwesleypaigejr" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/JohnWesleyPaigeJr" target="_blank" rel="noopener noreferrer" className="hover:underline">
            GitHub
          </a>
          <a href="mailto:john@example.com" className="hover:underline">
            john@example.com
          </a>
        </div>
      </footer>
    </main>
  );
}
