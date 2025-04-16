import { Textarea } from "@/components/ui/textarea";
import { SelectItem } from "@/components/ui/select";
import { SelectContent } from "@/components/ui/select";
import { SelectValue } from "@/components/ui/select";
import { SelectTrigger } from "@/components/ui/select";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  CheckCircle,
  Clock,
  FileCheck,
  Globe,
  MapPin,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-gray md:px-4">
        <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-0">
          <div className="flex items-center gap-2 mb-2 mt-2 flex-shrink-0">
            <Image
              src="/logo2.png"
              alt="Global Visa Solutions"
              width={120}
              height={30}
              className="h-16 w-24"
            />
            <span className="text-xl text-white font-bold hidden md:block">
              AXE VISA <br /> TECHNOLOGY
            </span>
          </div>
          <nav className="hidden md:flex gap-6 flex-1 justify-center">
            <Link
              href="#"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              About Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-white hover:text-yellow-400"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex bg-yellow-400 hover:bg-yellow-700">
              Book Consultation
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Toggle navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/about1.jpeg"
              alt="Luxury travel background"
              fill
              className="object-cover brightness-[0.4]"
              priority
            />
          </div>
          <div className="container max-w-7xl mx-auto relative z-10 py-24 md:py-32 lg:py-40 text-white">
            <div className="max-w-3xl space-y-5">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Premium Visa & Passport Services in India
              </h1>
              <p className="text-xl text-white-200">
                Streamlined, hassle-free visa and passport solutions with a
                luxury experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-yellow-400 text-black hover:bg-yellow-700"
                  asChild
                >
                  <Link href="/apply">Apply Now</Link>
                </Button>
                {/* <Button
                  size="lg"
                  variant="outline"
                  className="text-white border-white hover:bg-white/10"
                >
                  Our Services
                </Button> */}
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-white py-8 border-b">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-50 p-3 rounded-full mb-3">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium">Government Authorized</h3>
                <p className="text-sm text-gray-500">
                  Official partner for visa services
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-50 p-3 rounded-full mb-3">
                  <Users className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium">50,000+ Happy Clients</h3>
                <p className="text-sm text-gray-500">Trusted by thousands</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-50 p-3 rounded-full mb-3">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium">98% Success Rate</h3>
                <p className="text-sm text-gray-500">High visa approval rate</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="bg-amber-50 p-3 rounded-full mb-3">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-medium">Express Processing</h3>
                <p className="text-sm text-gray-500">As fast as 24 hours</p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Premium Visa & Passport Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of visa and passport services
                tailored to your specific needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service 1 */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative">
                  <Image
                    src="/tour.jpg"
                    alt="Tourist Visa"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Tourist Visa</h3>
                  <p className="text-gray-600 mb-4">
                    Seamless tourist visa processing for over 100 countries with
                    premium handling and expedited options.
                  </p>
                  <Link
                    href="#"
                    className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Service 2 */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative">
                  <Image
                    src="/business.jpg"
                    alt="Business Visa"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Business Visa</h3>
                  <p className="text-gray-600 mb-4">
                    Specialized business visa services with priority processing
                    and personalized assistance.
                  </p>
                  <Link
                    href="#"
                    className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>

              {/* Service 3 */}
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 relative">
                  <Image
                    src="/passport.jpg"
                    alt="Passport Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Passport Services</h3>
                  <p className="text-gray-600 mb-4">
                    New passport applications, renewals, and emergency services
                    with VIP handling.
                  </p>
                  <Link
                    href="#"
                    className="text-amber-600 font-medium inline-flex items-center hover:text-amber-700"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button className="bg-yellow-400 hover:bg-yellow-600">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Simple Process
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've streamlined the visa and passport application process to
                make it hassle-free for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-yellow-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Apply Online</h3>
                <p className="text-gray-600">
                  Fill out our simple online application form and upload your
                  documents securely from anywhere.
                </p>
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-yellow-700"></div>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Review</h3>
                <p className="text-gray-600">
                  Our visa experts review your application and documents to
                  ensure everything is in order.
                </p>
                <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-yellow-700"></div>
              </div>
              <div className="relative flex flex-col items-center text-center">
                <div className="bg-yellow-400 text-black w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Receive Your Visa</h3>
                <p className="text-gray-600">
                  We handle the processing and deliver your visa or passport
                  directly to your doorstep.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-yellow-400 hover:bg-yellow-700" asChild>
                <Link href="/apply">Start Your Application</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Accreditations */}
        {/* <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-2">
                Our Accreditations & Partnerships
              </h2>
              <p className="text-gray-600">
                Trusted by leading organizations and government bodies
              </p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="Ministry of External Affairs"
                width={120}
                height={60}
              />
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="US Embassy"
                width={120}
                height={60}
              />
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="UK Visas and Immigration"
                width={120}
                height={60}
              />
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="Schengen Visa"
                width={120}
                height={60}
              />
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="IATA"
                width={120}
                height={60}
              />
              <Image
                src="/placeholder.svg?height=60&width=120"
                alt="Tourism Authority"
                width={120}
                height={60}
              />
            </div>
          </div>
        </section> */}

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/luxury.jpg"
                  alt="Luxury office"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Why Choose Our Premium Services
                </h2>
                <p className="text-lg text-gray-600">
                  At Global Visa Solutions, we pride ourselves on delivering
                  exceptional service with attention to detail and a commitment
                  to excellence.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Personalized Consultation
                      </h3>
                      <p className="text-gray-600">
                        Dedicated visa experts to guide you through every step
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Premium Lounge Experience
                      </h3>
                      <p className="text-gray-600">
                        Luxury waiting areas with refreshments and amenities
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">
                        Expedited Processing
                      </h3>
                      <p className="text-gray-600">
                        Fast-track options for urgent visa and passport needs
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-amber-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">24/7 Support</h3>
                      <p className="text-gray-600">
                        Round-the-clock assistance for all your queries
                      </p>
                    </div>
                  </li>
                </ul>
                <Button className="bg-yellow-400 hover:bg-yellow-700 mt-4">
                  Learn More About Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Your data security and privacy are our top priorities. We adhere
                to the highest standards of data protection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="bg-amber-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Encryption</h3>
                <p className="text-gray-300">
                  All your personal information and documents are protected with
                  256-bit SSL encryption.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="bg-amber-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">Compliance Certified</h3>
                <p className="text-gray-300">
                  We comply with all international data protection regulations
                  and privacy laws.
                </p>
              </div>

              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="bg-amber-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-yellow-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Secure Document Handling
                </h3>
                <p className="text-gray-300">
                  Your documents are handled with strict protocols and secure
                  storage systems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Requirements Tabs */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Visa Requirements by Country
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Check the specific requirements for popular destinations. Our
                experts can assist with any country's visa process.
              </p>
            </div>

            <Tabs defaultValue="usa" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid grid-cols-5 mb-8">
                <TabsTrigger value="usa">USA</TabsTrigger>
                <TabsTrigger value="uk">UK</TabsTrigger>
                <TabsTrigger value="schengen">Schengen</TabsTrigger>
                <TabsTrigger value="canada">Canada</TabsTrigger>
                <TabsTrigger value="australia">Australia</TabsTrigger>
              </TabsList>
              <TabsContent value="usa" className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  USA Visa Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Valid passport with at least 6 months validity beyond your
                      stay
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Completed DS-160 form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Proof of financial stability (bank statements for last 6
                      months)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Travel itinerary and accommodation details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Employment verification letter</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Passport-sized photographs with white background
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Visa application fee payment receipt</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-yellow-400 hover:bg-yellow-700" asChild>
                    <Link href="/apply">Apply for USA Visa</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="uk" className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">UK Visa Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Completed online application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Biometric information</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Financial documents showing sufficient funds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Travel itinerary and accommodation details</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of ties to your home country</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-yellow-400 hover:bg-yellow-700" asChild>
                    <Link href="/apply">Apply for UK Visa</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="schengen" className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Schengen Visa Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Valid passport not older than 10 years with at least 3
                      months validity beyond your stay
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Completed Schengen visa application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Travel insurance with minimum coverage of €30,000
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Round-trip flight reservation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of accommodation for your entire stay</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Proof of financial means (bank statements, sponsorship
                      letter)
                    </span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-yellow-400 hover:bg-yellow-700" asChild>
                    <Link href="/apply">Apply for Schengen Visa</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="canada" className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Canada Visa Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Completed application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Two recent passport-sized photographs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of financial support during your stay</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Letter of invitation (if applicable)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Travel and medical insurance</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-yellow-400 hover:bg-yellow-700" asChild>
                    <Link href="/apply">Apply for Canada Visa</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="australia" className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">
                  Australia Visa Requirements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Valid passport with at least 6 months validity</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Completed visa application form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Recent passport-sized photograph</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Proof of sufficient funds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Travel itinerary</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Health insurance</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Button className="bg-yellow-400 hover:bg-yellow-700" asChild>
                    <Link href="/apply">Apply for Australia Visa</Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our visa and passport
                services
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  How long does the visa application process take?
                </h3>
                <p className="text-gray-600">
                  Processing times vary by visa type and destination country.
                  Standard processing typically takes 7-10 business days, while
                  our express service can process applications in as little as
                  24-48 hours.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  What happens if my visa application is rejected?
                </h3>
                <p className="text-gray-600">
                  In the rare event of a visa rejection, our experts will
                  analyze the reason for rejection and guide you on the next
                  steps. With our 98% success rate, we often help clients
                  reapply successfully with the necessary adjustments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  Do I need to visit your office in person?
                </h3>
                <p className="text-gray-600">
                  No, our entire process can be completed online. However, if
                  you prefer a face-to-face consultation, you can visit any of
                  our premium lounges in Mumbai, Delhi, or Bangalore.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit/debit cards, net banking, UPI, and
                  bank transfers. All payments are processed through secure
                  payment gateways with encryption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  Can you help with emergency visa requirements?
                </h3>
                <p className="text-gray-600">
                  Yes, we offer emergency visa services for urgent travel needs.
                  Our premium processing can expedite applications for medical
                  emergencies, business urgencies, or other time-sensitive
                  situations.
                </p>
              </div>
            </div>

            {/* <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">
                Still have questions? Contact our visa experts
              </p>
              <Button className="bg-amber-600 hover:bg-amber-700">
                Contact Us
              </Button>
            </div> */}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-gray-900 text-white">
          <div className="container max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Hear from our satisfied clients about their experience with our
                premium visa and passport services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <Card className="bg-gray-800 border-0 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-xl">
                        RA
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Rahul Agarwal</h4>
                      <p className="text-gray-400 text-sm">
                        Business Executive, Delhi
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  </div>
                  <p className="text-gray-300">
                    "The premium service was worth every penny. My business visa
                    was processed in record time, and the staff was incredibly
                    professional and attentive."
                  </p>
                </CardContent>
              </Card>

              {/* Testimonial 2 */}
              <Card className="bg-gray-800 border-0 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-xl">
                        SP
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Sanjana Patel</h4>
                      <p className="text-gray-400 text-sm">
                        Travel Enthusiast, Mumbai
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  </div>
                  <p className="text-gray-300">
                    "I was amazed by the luxury experience. The lounge was
                    comfortable, and my tourist visa was processed without any
                    hassle. Highly recommended!"
                  </p>
                </CardContent>
              </Card>

              {/* Testimonial 3 */}
              <Card className="bg-gray-800 border-0 text-white">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="mr-4">
                      <div className="h-12 w-12 rounded-full bg-yellow-400 flex items-center justify-center text-white font-bold text-xl">
                        VK
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Vikram Kumar</h4>
                      <p className="text-gray-400 text-sm">CEO, Bangalore</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  </div>
                  <p className="text-gray-300">
                    "Their passport renewal service is exceptional. The
                    attention to detail and personalized approach made the
                    entire process smooth and stress-free."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600">
                  Contact our premium visa and passport services team for
                  personalized assistance with your application
                </p>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Our Locations</h3>
                      <p className="text-gray-600">
                        K-2/12 13 Peepal Chowk,
                        <br />
                        Mohan Garden Uttam Nagar, Mohan Garden,
                        <br />
                        Near Reliance Fresh, New Delhi, Delhi – 110059
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-400 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Contact Numbers</h3>
                      <p className="text-gray-600">
                        Premium Support: +91 9999390696
                        <br />
                        General Inquiries: +91 9009908809
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-yellow-400 mr-3 mt-0.5"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">
                        premium@globalvisasolutions.com
                        <br />
                        info@globalvisasolutions.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="pt-4">
                  <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 7:00 PM
                    <br />
                    Saturday: 10:00 AM - 5:00 PM
                    <br />
                    Sunday: Closed (VIP appointments available)
                  </p>
                </div> */}
              </div>

              <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold mb-6">
                  Request a Consultation
                </h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="first-name"
                        className="text-sm font-medium"
                      >
                        First Name
                      </Label>
                      <Input
                        id="first-name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        type="text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="last-name"
                        className="text-sm font-medium"
                      >
                        Last Name
                      </Label>
                      <Input
                        id="last-name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-sm font-medium">
                      Service Interested In
                    </Label>
                    <Select>
                      <SelectTrigger id="service">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tourist">Tourist Visa</SelectItem>
                        <SelectItem value="business">Business Visa</SelectItem>
                        <SelectItem value="student">Student Visa</SelectItem>
                        <SelectItem value="work">Work Visa</SelectItem>
                        <SelectItem value="passport">
                          Passport Services
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md min-h-[100px]"
                    ></Textarea>
                  </div>
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-700">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/logo2.png"
                  alt="Global Visa Solutions"
                  width={120}
                  height={30}
                  className="h-16 w-24"
                />
                <span className="text-xl font-bold">AXE VISA TECHNOLOGY</span>
              </div>
              <p className="text-gray-400 mb-4">
                Premium visa and passport services for discerning clients across
                India.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tourist Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Business Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Student Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Work Visa
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Passport Services
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} AXE VISA TECHNOLOGY . All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
