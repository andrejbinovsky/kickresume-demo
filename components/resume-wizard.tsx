"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ResumeFileUpload } from "@/components/resume-file-upload"

type ExperienceLevel = "entry" | "mid" | "senior"
type DataSource = "upload" | "linkedin" | "freeText"

interface FormData {
  experienceLevel: ExperienceLevel
  dataSource: DataSource
  uploadedFile?: File | null
  linkedinUsername?: string
  freeText?: string
}

interface FormErrors {
  experienceLevel?: string
  dataSource?: string
  upload?: string
  linkedin?: string
  freeText?: string
}

const TOTAL_STEPS = 3

export function ResumeWizard() {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    experienceLevel: "entry",
    dataSource: "upload",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const resetForm = () => {
    setFormData({
      experienceLevel: "entry",
      dataSource: "upload",
    })
    setErrors({})
    setCurrentStep(1)
    setShowSuccess(false)
  }

  const handleCancel = () => {
    setOpen(false)
    resetForm()
  }

  const handleClose = () => {
    setOpen(false)
    resetForm()
  }

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {}

    if (step === 1) {
      if (!formData.experienceLevel) {
        newErrors.experienceLevel = "Experience level is required"
      }
    }

    if (step === 2) {
      if (formData.dataSource === "upload" && !formData.uploadedFile) {
        newErrors.upload = "Please upload a PDF file"
      }

      if (formData.dataSource === "linkedin" && !formData.linkedinUsername?.trim()) {
        newErrors.linkedin = "Please enter your LinkedIn username"
      }

      if (formData.dataSource === "freeText" && !formData.freeText?.trim()) {
        newErrors.freeText = "Please enter your resume or profile text"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (!validateStep(currentStep)) {
      return
    }

    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
      setErrors({})
    }
  }

  const handleSubmit = () => {
    const LINKEDIN_PREFIX = "https://www.linkedin.com/in/"
    const result = {
      experienceLevel: formData.experienceLevel,
      dataSource: formData.dataSource,
      ...(formData.uploadedFile && { uploadFileName: formData.uploadedFile.name, fileSize: formData.uploadedFile.size }),
      ...(formData.linkedinUsername && { linkedinUrl: LINKEDIN_PREFIX + formData.linkedinUsername }),
      ...(formData.freeText && { freeText: formData.freeText }),
    }

    console.log("Resume Creation Data:", result)

    setShowSuccess(true)
  }

  const handleFileUpload = (file: File | null) => {
    setFormData((prev) => ({ ...prev, uploadedFile: file }))
    setErrors((prev) => ({ ...prev, upload: undefined }))
  }

  const handleLinkedinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, linkedinUsername: e.target.value }))
    setErrors((prev) => ({ ...prev, linkedin: undefined }))
  }

  const handleFreeTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, freeText: e.target.value }))
    setErrors((prev) => ({ ...prev, freeText: undefined }))
  }

  const getExperienceLevelLabel = (level: ExperienceLevel): string => {
    switch (level) {
      case "entry":
        return "Entry · 0-2 years of exp."
      case "mid":
        return "Mid Level · 2-5 years of exp."
      case "senior":
        return "Senior · 5+ years of exp."
    }
  }

  const getDataSourceLabel = (source: DataSource): string => {
    switch (source) {
      case "upload":
        return "Resume Upload"
      case "linkedin":
        return "LinkedIn"
      case "freeText":
        return "Free Text"
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg">Create Resume</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        {showSuccess ? (
          <>
            <DialogHeader>
              <DialogTitle>Resume Created Successfully!</DialogTitle>
              <DialogDescription>
                Your resume has been created and is ready for use.
              </DialogDescription>
            </DialogHeader>

            <div className="py-8 flex flex-col items-center justify-center gap-4">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-600 dark:text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  All Set!
                </h3>
                <p className="text-sm text-muted-foreground max-w-md">
                  Your resume has been successfully created. You can now proceed to customize it further or download it.
                </p>
              </div>
            </div>

            <DialogFooter>
              <Button onClick={handleClose} className="w-full sm:w-auto">
                Close
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Create Resume</DialogTitle>
              <DialogDescription>
                Step {currentStep} of {TOTAL_STEPS}
              </DialogDescription>
            </DialogHeader>

            {/* Step Progress Indicator */}
            <div className="flex items-center justify-between mb-4">
          {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
            <div key={step} className="flex items-center flex-1">
              <div
                className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                  step === currentStep
                    ? "bg-primary text-primary-foreground"
                    : step < currentStep
                      ? "bg-primary/80 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {step}
              </div>
              {step < TOTAL_STEPS && (
                <div
                  className={`flex-1 h-1 mx-2 rounded transition-colors ${
                    step < currentStep ? "bg-primary/80" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6 py-4">
          {/* Step 1: Experience Level */}
          {currentStep === 1 && (
            <div className="space-y-3">
              <div>
                <Label htmlFor="experience-level" className="text-base font-semibold">
                  Experience Level
                </Label>
                <p className="text-sm text-muted-foreground mt-1">
                  What experience level are you targeting?
                </p>
              </div>
              <RadioGroup
                id="experience-level"
                value={formData.experienceLevel}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, experienceLevel: value as ExperienceLevel }))
                }
                className="space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="entry" id="entry" />
                  <Label htmlFor="entry" className="font-normal cursor-pointer">
                    Entry · 0-2 years of exp.
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mid" id="mid" />
                  <Label htmlFor="mid" className="font-normal cursor-pointer">
                    Mid Level · 2-5 years of exp.
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="senior" id="senior" />
                  <Label htmlFor="senior" className="font-normal cursor-pointer">
                    Senior · 5+ years of exp.
                  </Label>
                </div>
              </RadioGroup>
              {errors.experienceLevel && (
                <p className="text-sm text-destructive">{errors.experienceLevel}</p>
              )}
            </div>
          )}

          {/* Step 2: Data Source */}
          {currentStep === 2 && (
            <div className="space-y-3">
              <div>
                <Label className="text-base font-semibold">Resume Data Source</Label>
                <p className="text-sm text-muted-foreground mt-1">
                  Choose where to get data for this resume.
                </p>
              </div>
              <Tabs
                value={formData.dataSource}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, dataSource: value as DataSource }))
                }
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="upload">Resume Upload</TabsTrigger>
                  <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
                  <TabsTrigger value="freeText">Free Text</TabsTrigger>
                </TabsList>

                <TabsContent value="upload" className="space-y-2 mt-4">
                  <Label>Upload PDF resume</Label>
                  <ResumeFileUpload
                    onFileSelect={handleFileUpload}
                    error={errors.upload}
                  />
                </TabsContent>

                <TabsContent value="linkedin" className="space-y-2 mt-4">
                  <Label htmlFor="linkedin-url">LinkedIn profile URL</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground pointer-events-none select-none">
                      https://www.linkedin.com/in/
                    </div>
                    <Input
                      id="linkedin-url"
                      type="text"
                      // placeholder="yourname"
                      value={formData.linkedinUsername || ""}
                      onChange={handleLinkedinChange}
                      className={`pl-[194px] ${errors.linkedin ? "border-destructive" : ""}`}
                    />
                  </div>
                  {errors.linkedin && <p className="text-sm text-destructive">{errors.linkedin}</p>}
                </TabsContent>

                <TabsContent value="freeText" className="space-y-2 mt-4">
                  <Label htmlFor="free-text">Paste your resume or profile text</Label>
                  <Textarea
                    id="free-text"
                    rows={6}
                    placeholder="Enter your resume details here..."
                    value={formData.freeText || ""}
                    onChange={handleFreeTextChange}
                    className={errors.freeText ? "border-destructive" : ""}
                  />
                  {errors.freeText && <p className="text-sm text-destructive">{errors.freeText}</p>}
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Step 3: Review */}
          {currentStep === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-base font-semibold mb-4">Review Your Details</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Please review your information before submitting.
                </p>
              </div>

              <div className="space-y-4 border rounded-lg p-4 bg-muted/30">
                <div>
                  <Label className="text-sm font-medium text-muted-foreground">
                    Experience Level
                  </Label>
                  <p className="text-base mt-1">{getExperienceLevelLabel(formData.experienceLevel)}</p>
                </div>

                <div className="border-t pt-4">
                  <Label className="text-sm font-medium text-muted-foreground">Data Source</Label>
                  <p className="text-base mt-1">{getDataSourceLabel(formData.dataSource)}</p>
                </div>

                {formData.uploadedFile && (
                  <div className="border-t pt-4">
                    <Label className="text-sm font-medium text-muted-foreground">
                      Uploaded File
                    </Label>
                    <p className="text-base mt-1">{formData.uploadedFile.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {Math.round(formData.uploadedFile.size / 1024)} KB
                    </p>
                  </div>
                )}

                {formData.linkedinUsername && (
                  <div className="border-t pt-4">
                    <Label className="text-sm font-medium text-muted-foreground">
                      LinkedIn URL
                    </Label>
                    <p className="text-base mt-1 break-all">
                      https://www.linkedin.com/in/{formData.linkedinUsername}
                    </p>
                  </div>
                )}

                {formData.freeText && (
                  <div className="border-t pt-4">
                    <Label className="text-sm font-medium text-muted-foreground">Free Text</Label>
                    <p className="text-base mt-1 whitespace-pre-wrap">{formData.freeText}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

            <DialogFooter className="gap-2">
              {currentStep > 1 && (
                <Button variant="outline" onClick={handleBack}>
                  Back
                </Button>
              )}
              <Button variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              {currentStep < TOTAL_STEPS ? (
                <Button onClick={handleNext}>Next</Button>
              ) : (
                <Button onClick={handleSubmit}>Create Resume</Button>
              )}
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
