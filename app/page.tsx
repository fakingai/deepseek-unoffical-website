"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Apple,
  Chrome,
  Download,
  Github,
  Globe,
  Laptop,
  MessageCircle,
  Smartphone,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TestFlightModal } from "@/components/testflight-modal";
import { QRCodeHover } from "@/components/qr-code-hover";
import { LINKS } from "@/lib/constants";

export default function Home() {
  const [testFlightModalOpen, setTestFlightModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <div className="rounded-full bg-black p-1.5 text-green-500 dark:bg-green-500 dark:text-black">
                <MessageCircle className="h-5 w-5" />
              </div>
              <span className="inline-block font-bold">deepseekClone</span>
            </Link>
            <nav className="hidden gap-6 md:flex">
              <Link
                href="#features"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-green-600"
              >
                Features
              </Link>
              <Link
                href="#download"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-green-600"
              >
                Download
              </Link>
              <Link
                href="#faq"
                className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-green-600"
              >
                FAQ
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Button
                asChild
                variant="outline"
                size="icon"
                className="rounded-full"
              >
                <a
                  href={LINKS.SOCIAL.GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href="#download">Download</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden bg-black pb-8 pt-6 text-white md:pb-12 md:pt-10 lg:py-32">
          <div className="container relative flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              deepseekClone
            </h1>
            <p className="max-w-[42rem] leading-normal text-gray-400 sm:text-xl sm:leading-8">
              An unofficial deepseek Flutter client. Get intelligent answers
              anytime, anywhere to improve productivity and solve problems.
            </p>
            <div className="flex space-x-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700"
              >
                <Link href="#download" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-green-600 text-green-600 hover:bg-green-600/10"
              >
                <Link href="#features" className="flex items-center">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
              Intelligent Conversations, Efficient Solutions
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              deepseekClone is an unofficial deepseek Flutter client, developed
              with the Flutter framework to provide a smooth cross-platform
              experience. Whether for work, study, or daily life, it's here to
              help.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <Card className="flex h-[200px] flex-col justify-between border-2 border-green-600">
              <CardHeader>
                <Zap className="h-5 w-5 text-green-600" />
                <CardTitle className="mt-2">Fast Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Second-level responses, no waiting, get the information you
                  need instantly
                </p>
              </CardContent>
            </Card>
            <Card className="flex h-[200px] flex-col justify-between border-2 border-green-600">
              <CardHeader>
                <Globe className="h-5 w-5 text-green-600" />
                <CardTitle className="mt-2">Multi-language Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Supports multiple languages including English, Chinese, and
                  more
                </p>
              </CardContent>
            </Card>
            <Card className="flex h-[200px] flex-col justify-between border-2 border-green-600">
              <CardHeader>
                <Laptop className="h-5 w-5 text-green-600" />
                <CardTitle className="mt-2">
                  Multi-platform Compatibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Developed with Flutter, supports Web, macOS, Windows, Android,
                  and iOS
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mx-auto text-center md:max-w-[58rem]">
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              deepseekClone is an open-source project. Community contributions
              and improvements are welcome.
            </p>
          </div>
        </section>
        <section
          id="features"
          className="bg-gray-50 dark:bg-gray-900 py-8 md:py-12 lg:py-24"
        >
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
                Powerful Features
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Explore the powerful features of deepseekClone to enhance your
                work and life efficiency
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
              {[
                {
                  title: "Intelligent Understanding",
                  description:
                    "Connects to deepseek's natural language processing capabilities to accurately understand your questions",
                  icon: <MessageCircle className="h-10 w-10" />,
                },
                {
                  title: "Flutter Native",
                  description:
                    "Developed with the Flutter framework for a smooth cross-platform experience",
                  icon: <Zap className="h-10 w-10" />,
                },
                {
                  title: "Offline Use",
                  description:
                    "Supports offline mode for use without an internet connection",
                  icon: <Download className="h-10 w-10" />,
                },
                {
                  title: "Data Security",
                  description:
                    "Strict data encryption and privacy protection measures",
                  icon: <Laptop className="h-10 w-10" />,
                },
                {
                  title: "Open Source",
                  description:
                    "Completely open source, welcoming community contributions and improvements",
                  icon: <Globe className="h-10 w-10" />,
                },
                {
                  title: "Customizable Interface",
                  description:
                    "Customize the interface and features according to your needs",
                  icon: <Smartphone className="h-10 w-10" />,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-4 rounded-full bg-green-100 p-4 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="download" className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
              Download Now
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Choose your platform and start using deepseekClone
            </p>
          </div>
          <div className="mx-auto md:max-w-[64rem]">
            <Tabs defaultValue="desktop" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:w-[400px] mx-auto">
                <TabsTrigger value="desktop">Desktop</TabsTrigger>
                <TabsTrigger value="mobile">Mobile</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
              </TabsList>
              <TabsContent value="desktop" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Apple className="h-8 w-8 text-green-600" />
                        <CardTitle>macOS</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        For macOS 10.15 and above
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <a
                          href={LINKS.DOWNLOAD.MACOS}
                          download
                          className="flex items-center justify-center"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download for macOS
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Laptop className="h-8 w-8 text-green-600" />
                        <CardTitle>Windows</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        For Windows 10 and above
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        asChild
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <a
                          href={LINKS.DOWNLOAD.WINDOWS}
                          download
                          className="flex items-center justify-center"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download for Windows
                        </a>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="mobile" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Apple className="h-8 w-8 text-green-600" />
                        <CardTitle>iOS</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        For iOS 14.0 and above
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button
                        className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center"
                        onClick={() => setTestFlightModalOpen(true)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        TestFlight Download
                      </Button>
                    </CardFooter>
                  </Card>
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Smartphone className="h-8 w-8 text-green-600" />
                        <CardTitle>Android</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        For Android 8.0 and above
                      </p>
                    </CardContent>
                    <CardFooter>
                      <QRCodeHover
                        title="Download for Android"
                        description="Hover to view QR code, scan to download"
                      />
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="web" className="mt-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Chrome className="h-8 w-8 text-green-600" />
                      <CardTitle>Web Version</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      No download needed, use directly in your browser
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center"
                    >
                      <a
                        href={LINKS.DOWNLOAD.WEB}
                        className="flex items-center justify-center"
                      >
                        <Globe className="mr-2 h-4 w-4" />
                        Use Web Version
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section
          id="faq"
          className="bg-gray-50 dark:bg-gray-900 py-8 md:py-12 lg:py-24"
        >
          <div className="container">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Common questions about deepseekClone
              </p>
            </div>
            <div className="mx-auto grid max-w-[58rem] gap-4 md:gap-8 lg:grid-cols-2 mt-12">
              {[
                {
                  question: "What is deepseekClone?",
                  answer:
                    "deepseekClone is an unofficial deepseek Flutter client, developed with the Flutter framework to provide a cross-platform deepseek experience.",
                },
                {
                  question: "Is this an official app?",
                  answer:
                    "No, deepseekClone is an unofficial third-party client created and maintained by community developers.",
                },
                {
                  question: "Which languages are supported?",
                  answer:
                    "Currently supports English, Chinese, and several other languages, with more to come in the future.",
                },
                {
                  question: "How do I update to the latest version?",
                  answer:
                    "Desktop and mobile apps will automatically prompt for updates, or you can download the latest version from this website. The web version is always up to date.",
                },
                {
                  question: "Is there a fee?",
                  answer:
                    "deepseekClone is completely free and open-source software. However, using the deepseek service may require you to have a deepseek account and corresponding usage quota.",
                },
                {
                  question: "How can I contribute to the project?",
                  answer:
                    "deepseekClone is an open-source project. You can find our code repository on GitHub, and we welcome Pull Requests or issue reports.",
                },
              ].map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <span className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                        {index + 1}
                      </span>
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} deepseekClone - Unofficial Flutter
            Client. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href={LINKS.LEGAL.PRIVACY}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-green-600 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href={LINKS.LEGAL.TERMS}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-green-600 hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href={LINKS.LEGAL.CONTACT}
              className="text-sm text-muted-foreground underline-offset-4 hover:text-green-600 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </footer>

      <TestFlightModal
        open={testFlightModalOpen}
        onOpenChange={setTestFlightModalOpen}
      />
    </div>
  );
}
