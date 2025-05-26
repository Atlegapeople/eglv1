"use client"

import Image from "next/image"
import {
  CheckCircle,
  Globe,
  Mail,
  MapPin,
  Phone,
  Truck,
  Users,
  Zap,
  ArrowRight,
  Shield,
  Target,
  Network,
  TrendingUp,
  Award,
  Moon,
  Sun,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"

function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="h-9 w-9"
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

export default function Component() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const formRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (in production, replace with actual API call)
    try {
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast({
        title: "Quote Request Submitted",
        description: "We'll be in touch with you shortly.",
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      })
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  // Smooth scroll function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-6 sm:px-8 lg:px-12">
          <div className="flex items-center">
            <div className="relative h-10 w-auto">
              <img 
                src="/logo-dark.png" 
                alt="Eminent Global Logistics" 
                className="h-10 w-auto dark:hidden"
              />
              <img 
                src="/logo-light.png" 
                alt="Eminent Global Logistics" 
                className="h-10 w-auto hidden dark:block"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button className="gap-2" onClick={() => scrollToSection(formRef)}>
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 sm:py-32">
        {/* Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-banner.jpg" 
            alt="Logistics hero background" 
            className="w-full h-full object-cover object-center brightness-[0.85] dark:brightness-[0.6]" 
          />
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              Trusted Logistics Partner
            </Badge>
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md">
              <span className="text-white">Eminent Global</span>
              <span className="block text-white drop-shadow-lg shadow-black">Logistics</span>
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                <CheckCircle className="mr-1 h-4 w-4" />
                Reliable
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                <CheckCircle className="mr-1 h-4 w-4" />
                Scalable
              </span>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                <CheckCircle className="mr-1 h-4 w-4" />
                Borderless
              </span>
            </div>
            <p className="mb-10 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-sm">
              Modern logistics solutions offering dynamic, client-focused services across South Africa and beyond. We
              simplify the movement of goods through dependable, scalable, and cross-border logistics solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => scrollToSection(formRef)} size="lg" className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 transform hover:scale-105">
                Get Quote
              </Button>
              <Button onClick={() => scrollToSection(aboutRef)} variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-1 max-w-3xl mx-auto text-center">
            <div>
              <Badge variant="outline" className="mb-4">
                About Us
              </Badge>
              <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">Your Trusted Logistics Partner in South Africa</h2>
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Eminent Global Logistics was founded with a vision to transform the logistics landscape in South Africa. 
                Our extensive network, commitment to excellence, and innovative approach enable us to provide 
                comprehensive logistics solutions that adapt to your business needs.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <Card className="p-4 hover:shadow-md transition-shadow aspect-square hover:scale-105 transition-transform">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-medium">Extensive Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Covering all major routes in South Africa and neighboring countries.
                  </p>
                </Card>
                <Card className="p-4 hover:shadow-md transition-shadow aspect-square hover:scale-105 transition-transform">
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-1 text-lg font-medium">Proven Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Recognized for reliability and customer satisfaction.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-24 bg-muted/50 dark:bg-background">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Comprehensive Logistics Solutions</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              We provide end-to-end logistics services tailored to your specific needs, ensuring your shipments are delivered safely and on time.
            </p>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            <Card className="flex flex-col hover:shadow-md transition-shadow hover:scale-105 transition-transform">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Road Freight</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>
                  Reliable transportation across South Africa's road network, from small parcels to full truck loads.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col hover:shadow-md transition-shadow hover:scale-105 transition-transform">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Cross-Border Services</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>
                  Seamless logistics solutions extending to neighboring countries with customs expertise.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col hover:shadow-md transition-shadow hover:scale-105 transition-transform">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Secure Warehousing</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>
                  State-of-the-art warehousing facilities with inventory management and security.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="flex flex-col hover:shadow-md transition-shadow hover:scale-105 transition-transform">
              <CardHeader className="pb-2">
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Specialized Transport</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription>
                  Tailored solutions for oversized, fragile, or temperature-sensitive cargo.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              Contact Us
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Get in Touch</h2>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Ready to experience our exceptional logistics services? Contact us today for a customized solution.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl mx-auto mb-12">
            <Card className="text-center p-8 hover:shadow-md transition-shadow hover:scale-105 transition-transform">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Mail className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">Email Us</h3>
              <p className="text-muted-foreground mb-2">info@eminentlogistics.co.za</p>
              <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-md transition-shadow hover:scale-105 transition-transform">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <Phone className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">Call Us</h3>
              <p className="text-muted-foreground mb-2">+27 (0) 11 234 5678</p>
              <p className="text-sm text-muted-foreground">Mon-Fri, 8AM-6PM SAST</p>
            </Card>

            <Card className="text-center p-8 hover:shadow-md transition-shadow hover:scale-105 transition-transform">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <MapPin className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">Visit Us</h3>
              <p className="text-muted-foreground mb-2">Johannesburg, South Africa</p>
              <p className="text-sm text-muted-foreground">Serving nationwide & cross-border</p>
            </Card>
          </div>
          
          {/* Quote Request Form */}
          <div ref={formRef} className="max-w-2xl mx-auto bg-background border rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="John Smith" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="john@company.com" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company} 
                    onChange={handleInputChange} 
                    placeholder="Company Ltd." 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="+27 00 000 0000" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Tell us about your logistics needs</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange} 
                  placeholder="Please describe your logistics requirements, including cargo type, destinations, frequency, etc." 
                  className="min-h-[120px]" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Quote Request"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-12">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="relative h-8 w-auto">
                <img 
                  src="/logo-dark.png" 
                  alt="Eminent Global Logistics" 
                  className="h-8 w-auto dark:hidden" 
                />
                <img 
                  src="/logo-light.png" 
                  alt="Eminent Global Logistics" 
                  className="h-8 w-auto hidden dark:block" 
                />
              </div>
              <div>
                <span className="text-lg font-bold">Eminent Global Logistics</span>
                <p className="text-xs text-muted-foreground">Reliable. Scalable. Borderless.</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Eminent Global Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
