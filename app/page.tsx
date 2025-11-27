import { ResumeWizard } from "@/components/resume-wizard"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-black dark:text-zinc-50">
            Resume Builder Demo
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Create a professional resume with our wizard. This is a frontend-only demo - no data will be uploaded or stored.
          </p>
        </div>
        <ResumeWizard />
      </main>
    </div>
  );
}
