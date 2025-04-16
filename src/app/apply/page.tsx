"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Globe,
  Lock,
  Shield,
  Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [visaType, setVisaType] = useState("tourist");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleNext = () => {
    const nextStep = step + 1;
    setStep(nextStep);
    setProgress(nextStep * 20);
  };

  const handlePrevious = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    setProgress(prevStep * 20);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((file) => file.name);
      setUploadedFiles([...uploadedFiles, ...newFiles]);
    }
  };

  const removeFile = (fileName: string) => {
    setUploadedFiles(uploadedFiles.filter((file) => file !== fileName));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-gray-900 backdrop-blur supports-[backdrop-filter]:bg-gray-900">
        <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
          </Link>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center text-white gap-2 text-sm">
              <Lock className="h-4 w-4 text-yellow-400" />
              <span>Secure Application</span>
            </div>
            <Button
              variant="outline"
              className="bg-yellow-400 hover:bg-yellow-700"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold mb-4">
              Visa & Passport Application
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete your application in 5 simple steps. Our secure system
              ensures your documents are handled with the utmost
              confidentiality.
            </p>
          </div>

          <div className="mb-8">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-gray-500">
              <div className={step >= 1 ? "text-amber-600 font-medium" : ""}>
                Personal Details
              </div>
              <div className={step >= 2 ? "text-amber-600 font-medium" : ""}>
                Visa Selection
              </div>
              <div className={step >= 3 ? "text-amber-600 font-medium" : ""}>
                Document Upload
              </div>
              <div className={step >= 4 ? "text-amber-600 font-medium" : ""}>
                Review
              </div>
              <div className={step >= 5 ? "text-amber-600 font-medium" : ""}>
                Payment
              </div>
            </div>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-6 md:p-8">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Personal Information</h2>
                    <p className="text-gray-500">
                      Please provide your personal details as they appear on
                      your passport.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality</Label>
                      <Select>
                        <SelectTrigger id="nationality">
                          <SelectValue placeholder="Select your nationality" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="in">India</SelectItem>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="passport">Passport Number</Label>
                      <Input
                        id="passport"
                        placeholder="Enter your passport number"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passport-expiry">
                        Passport Expiry Date
                      </Label>
                      <Input id="passport-expiry" type="date" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Current Address</Label>
                      <Textarea
                        id="address"
                        placeholder="Enter your current address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <Button
                      onClick={handleNext}
                      className="bg-yellow-400 hover:bg-yellow-700"
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Visa Selection</h2>
                    <p className="text-gray-500">
                      Select the type of visa you wish to apply for and provide
                      travel details.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Label>Visa Type</Label>
                    <RadioGroup
                      defaultValue={visaType}
                      onValueChange={setVisaType}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <div className="relative">
                        <RadioGroupItem
                          value="tourist"
                          id="tourist"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="tourist"
                          className="flex flex-col items-start p-4 border rounded-md cursor-pointer peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:bg-gray-50"
                        >
                          <span className="font-medium mb-1">Tourist Visa</span>
                          <span className="text-sm text-gray-500">
                            For leisure travel, visiting friends & family
                          </span>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="business"
                          id="business"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="business"
                          className="flex flex-col items-start p-4 border rounded-md cursor-pointer peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:bg-gray-50"
                        >
                          <span className="font-medium mb-1">
                            Business Visa
                          </span>
                          <span className="text-sm text-gray-500">
                            For business meetings, conferences & trade
                          </span>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="work"
                          id="work"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="work"
                          className="flex flex-col items-start p-4 border rounded-md cursor-pointer peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:bg-gray-50"
                        >
                          <span className="font-medium mb-1">Work Visa</span>
                          <span className="text-sm text-gray-500">
                            For employment purposes
                          </span>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="student"
                          id="student"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="student"
                          className="flex flex-col items-start p-4 border rounded-md cursor-pointer peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:bg-gray-50"
                        >
                          <span className="font-medium mb-1">Student Visa</span>
                          <span className="text-sm text-gray-500">
                            For educational purposes
                          </span>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination Country</Label>
                      <Select>
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select destination country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="sg">Singapore</SelectItem>
                          <SelectItem value="de">Germany</SelectItem>
                          <SelectItem value="fr">France</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration of Stay</Label>
                      <Select>
                        <SelectTrigger id="duration">
                          <SelectValue placeholder="Select duration" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">Up to 30 days</SelectItem>
                          <SelectItem value="90">Up to 90 days</SelectItem>
                          <SelectItem value="180">Up to 180 days</SelectItem>
                          <SelectItem value="365">Up to 1 year</SelectItem>
                          <SelectItem value="730">Up to 2 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="travel-date">Expected Travel Date</Label>
                      <Input id="travel-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="return-date">Expected Return Date</Label>
                      <Input id="return-date" type="date" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="purpose">Purpose of Visit</Label>
                    <Textarea
                      id="purpose"
                      placeholder="Please describe the purpose of your visit"
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevious}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-yellow-400 hover:bg-yellow-700"
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Document Upload</h2>
                    <p className="text-gray-500">
                      Upload all required documents. Accepted formats: PDF, JPG,
                      PNG (max 5MB per file).
                    </p>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-6">
                    <h3 className="font-medium text-amber-800 mb-2">
                      Required Documents for{" "}
                      {visaType === "tourist"
                        ? "Tourist Visa"
                        : visaType === "business"
                        ? "Business Visa"
                        : visaType === "work"
                        ? "Work Visa"
                        : "Student Visa"}
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-amber-700 text-sm">
                      <li>Passport scan (all pages with visa stamps)</li>
                      <li>
                        Recent passport-sized photograph (white background)
                      </li>
                      <li>Proof of accommodation</li>
                      {visaType === "tourist" && (
                        <>
                          <li>Travel itinerary</li>
                          <li>Bank statements (last 6 months)</li>
                        </>
                      )}
                      {visaType === "business" && (
                        <>
                          <li>Invitation letter from host company</li>
                          <li>Business registration documents</li>
                          <li>Bank statements (last 6 months)</li>
                        </>
                      )}
                      {visaType === "work" && (
                        <>
                          <li>Employment contract</li>
                          <li>Work permit or approval letter</li>
                          <li>Educational certificates</li>
                          <li>Resume/CV</li>
                        </>
                      )}
                      {visaType === "student" && (
                        <>
                          <li>
                            Acceptance letter from educational institution
                          </li>
                          <li>Educational certificates</li>
                          <li>Proof of financial support</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="upload">Upload Files</TabsTrigger>
                      <TabsTrigger value="uploaded">
                        Uploaded Files ({uploadedFiles.length})
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload" className="space-y-4">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-4" />
                        <h3 className="font-medium mb-2">
                          Drag and drop your files here
                        </h3>
                        <p className="text-sm text-gray-500 mb-4">or</p>
                        <div className="relative">
                          <Input
                            type="file"
                            multiple
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            onChange={handleFileUpload}
                          />
                          <Button variant="outline" className="mx-auto">
                            Browse Files
                          </Button>
                        </div>
                        <p className="text-xs text-gray-500 mt-4">
                          Maximum file size: 5MB. Supported formats: PDF, JPG,
                          PNG
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Lock className="h-4 w-4 text-green-600" />
                        <span>
                          Your documents are encrypted and securely stored
                        </span>
                      </div>
                    </TabsContent>
                    <TabsContent value="uploaded">
                      {uploadedFiles.length > 0 ? (
                        <div className="space-y-3">
                          {uploadedFiles.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 border rounded-md"
                            >
                              <div className="flex items-center gap-3">
                                <div className="bg-amber-100 p-2 rounded-md">
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
                                    className="h-5 w-5 text-amber-600"
                                  >
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                                    <polyline points="14 2 14 8 20 8" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="font-medium text-sm">{file}</p>
                                  <p className="text-xs text-gray-500">
                                    Uploaded successfully
                                  </p>
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFile(file)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                Remove
                              </Button>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500">
                          <p>No files uploaded yet</p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevious}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-yellow-400 hover:bg-yellow-700"
                    >
                      Continue <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">
                      Review Your Application
                    </h2>
                    <p className="text-gray-500">
                      Please review your application details before proceeding
                      to payment.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Personal Information
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Full Name</p>
                            <p className="font-medium">John Smith</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Date of Birth
                            </p>
                            <p className="font-medium">15/05/1985</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Nationality</p>
                            <p className="font-medium">India</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Passport Number
                            </p>
                            <p className="font-medium">J8234567</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Email Address
                            </p>
                            <p className="font-medium">
                              john.smith@example.com
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Phone Number
                            </p>
                            <p className="font-medium">+91 98765 43210</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Visa Details
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Visa Type</p>
                            <p className="font-medium">
                              {visaType === "tourist"
                                ? "Tourist Visa"
                                : visaType === "business"
                                ? "Business Visa"
                                : visaType === "work"
                                ? "Work Visa"
                                : "Student Visa"}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Destination Country
                            </p>
                            <p className="font-medium">United States</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">
                              Duration of Stay
                            </p>
                            <p className="font-medium">90 days</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Travel Date</p>
                            <p className="font-medium">15/08/2023</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900 mb-2">
                        Uploaded Documents
                      </h3>
                      <div className="bg-gray-50 p-4 rounded-md">
                        {uploadedFiles.length > 0 ? (
                          <ul className="space-y-2">
                            {uploadedFiles.map((file, index) => (
                              <li
                                key={index}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle className="h-4 w-4 text-green-600" />
                                {file}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500">
                            No documents uploaded
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                      <h3 className="font-medium text-amber-800 mb-2">
                        Processing Time & Fees
                      </h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            Standard Processing (7-10 business days)
                          </span>
                          <span className="font-medium">₹8,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            Express Processing (3-5 business days)
                          </span>
                          <span className="font-medium">₹12,500</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">
                            Premium Processing (24-48 hours)
                          </span>
                          <span className="font-medium">₹18,500</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevious}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button
                      onClick={handleNext}
                      className="bg-yellow-400 hover:bg-yellow-700"
                    >
                      Proceed to Payment <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">Payment</h2>
                    <p className="text-gray-500">
                      Select your preferred payment method and complete your
                      application.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-amber-50 border border-amber-200 rounded-md p-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-medium text-gray-900">
                            Premium Processing
                          </h3>
                          <p className="text-sm text-gray-500">
                            24-48 hours processing time
                          </p>
                        </div>
                        <span className="font-bold text-lg">₹18,500</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Label>Select Payment Method</Label>
                      <RadioGroup
                        defaultValue="card"
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <div className="relative">
                          <RadioGroupItem
                            value="card"
                            id="card"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="card"
                            className="flex flex-col items-center p-4 border rounded-md cursor-pointer peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:bg-gray-50"
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
                              className="h-6 w-6 mb-2"
                            >
                              <rect width="20" height="14" x="2" y="5" rx="2" />
                              <line x1="2" x2="22" y1="10" y2="10" />
                            </svg>
                            <span className="font-medium">
                              Credit/Debit Card
                            </span>
                          </Label>
                        </div>
                        <div className="relative">
                          <RadioGroupItem
                            value="netbanking"
                            id="netbanking"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="netbanking"
                            className="flex flex-col items-center p-4 border rounded-md cursor-pointer peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:bg-gray-50"
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
                              className="h-6 w-6 mb-2"
                            >
                              <rect width="20" height="16" x="2" y="4" rx="2" />
                              <path d="M6 8h.01" />
                              <path d="M12 8h.01" />
                              <path d="M18 8h.01" />
                              <path d="M12 12h.01" />
                              <path d="M18 12h.01" />
                              <path d="M6 16h.01" />
                              <path d="M12 16h.01" />
                              <path d="M18 16h.01" />
                            </svg>
                            <span className="font-medium">Net Banking</span>
                          </Label>
                        </div>
                        <div className="relative">
                          <RadioGroupItem
                            value="upi"
                            id="upi"
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor="upi"
                            className="flex flex-col items-center p-4 border rounded-md cursor-pointer peer-checked:border-amber-600 peer-checked:bg-amber-50 hover:bg-gray-50"
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
                              className="h-6 w-6 mb-2"
                            >
                              <path d="M16 2h-8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
                              <path d="M12 10h4" />
                              <path d="M12 6h4" />
                              <path d="M12 14h4" />
                              <path d="M12 18h4" />
                              <path d="M8 18V6l4 4-4 4" />
                            </svg>
                            <span className="font-medium">UPI</span>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div className="space-y-4 mt-6">
                      <h3 className="font-medium">Card Details</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="card-name">Name on Card</Label>
                          <Input
                            id="card-name"
                            placeholder="Enter name as on card"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="card-number">Card Number</Label>
                          <Input
                            id="card-number"
                            placeholder="1234 5678 9012 3456"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" type="password" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">
                        Your payment information is encrypted and secure
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={handlePrevious}>
                      <ArrowLeft className="mr-2 h-4 w-4" /> Back
                    </Button>
                    <Button className="bg-yellow-400 hover:bg-yellow-700">
                      Complete Payment
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-50 border-t py-8 mt-10">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-green-600" />
              <span className="text-sm text-gray-600">
                Secure 256-bit SSL encryption
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="Visa"
                width={50}
                height={30}
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="Mastercard"
                width={50}
                height={30}
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="American Express"
                width={50}
                height={30}
              />
              <Image
                src="/placeholder.svg?height=30&width=50"
                alt="RuPay"
                width={50}
                height={30}
              />
            </div>
            <div className="text-sm text-gray-600">
              Need help? Call us at{" "}
              <span className="font-medium">+91 9999390696</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
