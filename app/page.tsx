import { ResumeWizard } from "@/components/resume-wizard"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary" />
              <span className="text-xl font-bold text-foreground">TechJobs</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Browse Jobs
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Companies
              </a>
              <a href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Resources
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Company Header */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg border p-6">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  K
                </div>
                <div className="flex-1">
                  <h1 className="text-2xl font-bold text-foreground mb-2">
                    Senior Frontend Developer
                  </h1>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      Kickresume Inc.
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Brno, Czech Republic
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Full-time
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                      Remote
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                      Senior Level
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white dark:bg-zinc-900 rounded-lg border p-6 space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">About the Role</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We're looking for a Senior Frontend Developer to join our growing team at Kickresume.
                  You'll be working on our resume builder platform, creating intuitive and beautiful user
                  experiences that help millions of people land their dream jobs.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Responsibilities</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Build and maintain responsive web applications using React and Next.js</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Collaborate with designers to implement pixel-perfect UI components</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Optimize application performance and ensure cross-browser compatibility</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mentor junior developers and contribute to code reviews</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Participate in architectural decisions and technical planning</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Requirements</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>5+ years of experience with React and modern JavaScript/TypeScript</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Strong understanding of HTML, CSS, and responsive design principles</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Experience with state management libraries (Redux, Zustand, or similar)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Familiarity with testing frameworks (Jest, React Testing Library)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Excellent communication skills and team player mentality</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">Nice to Have</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-muted-foreground/40 mt-1">•</span>
                    <span>Experience with Next.js and server-side rendering</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground/40 mt-1">•</span>
                    <span>Knowledge of GraphQL and modern API patterns</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-muted-foreground/40 mt-1">•</span>
                    <span>Experience with design systems and component libraries</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-foreground mb-3">What We Offer</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Competitive salary: €60,000 - €80,000 per year</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Fully remote or hybrid work options</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>25 days of paid vacation + public holidays</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Professional development budget</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Latest MacBook Pro and equipment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Application Card - Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-4">
              <div className="bg-white dark:bg-zinc-900 rounded-lg border p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Salary</span>
                    <span className="font-semibold text-foreground">€60k - €80k</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Experience</span>
                    <span className="font-semibold text-foreground">5+ years</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Work type</span>
                    <span className="font-semibold text-foreground">Remote</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Posted</span>
                    <span className="font-semibold text-foreground">2 days ago</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <ResumeWizard />
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Create a tailored resume for this position
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-lg border p-6">
                <h3 className="font-semibold text-foreground mb-3">About Kickresume</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Kickresume is a leading online resume and cover letter builder trusted by millions of job seekers worldwide.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Tech / SaaS</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span>50-200 employees</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>www.kickresume.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
