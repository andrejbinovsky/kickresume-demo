"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Trash2, Upload, FileText } from "lucide-react"
import { useRef, useState } from "react"

interface ResumeFileUploadProps {
  onFileSelect: (file: File | null) => void
  error?: string
  className?: string
}

export function ResumeFileUpload({ onFileSelect, error, className }: ResumeFileUploadProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [fileProgress, setFileProgress] = useState<number>(0)

  const handleFileSelect = (files: FileList | null) => {
    if (!files || files.length === 0) return

    const file = files[0]

    // Validate file type
    if (file.type !== "application/pdf") {
      onFileSelect(null)
      return
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      onFileSelect(null)
      return
    }

    setUploadedFile(file)
    onFileSelect(file)

    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 20
      if (progress >= 100) {
        progress = 100
        clearInterval(interval)
      }
      setFileProgress(Math.min(progress, 100))
    }, 150)
  }

  const handleBoxClick = () => {
    fileInputRef.current?.click()
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add("border-primary", "bg-primary/5")
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove("border-primary", "bg-primary/5")
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove("border-primary", "bg-primary/5")
    handleFileSelect(e.dataTransfer.files)
  }

  const removeFile = () => {
    setUploadedFile(null)
    setFileProgress(0)
    onFileSelect(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className={cn("space-y-3", className)}>
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors",
          error
            ? "border-destructive bg-destructive/5"
            : "border-muted-foreground/25 hover:border-muted-foreground/50 bg-muted/20"
        )}
        onClick={handleBoxClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="mb-3 bg-muted rounded-full p-3">
          <Upload className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">
          Drop your PDF here, or click to browse
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          PDF files only, max 10MB
        </p>
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="application/pdf"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </div>

      {error && <p className="text-sm text-destructive">{error}</p>}

      {uploadedFile && (
        <div className="border border-border rounded-lg p-3 flex items-center gap-3">
          <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center flex-shrink-0">
            <FileText className="h-6 w-6 text-primary" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start gap-2 mb-1">
              <span className="text-sm text-foreground truncate font-medium">
                {uploadedFile.name}
              </span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 w-7 p-0 hover:text-destructive flex-shrink-0"
                onClick={removeFile}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
              <span>{Math.round(uploadedFile.size / 1024)} KB</span>
              {fileProgress === 100 && (
                <span className="text-green-600 dark:text-green-500">• Uploaded</span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <div className="h-1.5 bg-muted rounded-full overflow-hidden flex-1">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{
                    width: `${fileProgress}%`,
                  }}
                />
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap w-10 text-right">
                {Math.round(fileProgress)}%
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
