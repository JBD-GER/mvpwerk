import { Suspense } from 'react'
import NotFoundClient from '../app/not-found-client'

function Fallback404() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6">
        <div className="rounded-[1.6rem] border border-slate-900/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl">
          <div className="text-[12px] font-medium text-slate-600">Loading…</div>
          <div className="mt-2 h-6 w-2/3 rounded bg-slate-900/10" />
          <div className="mt-3 h-4 w-1/2 rounded bg-slate-900/10" />
        </div>
      </div>
    </main>
  )
}

export default function NotFound() {
  return (
    <Suspense fallback={<Fallback404 />}>
      <NotFoundClient />
    </Suspense>
  )
}
