"use client"

import Link from "next/link"

interface ContinueSession {
  companionId?: string
  id?: string
  title?: string
  name?: string
  subject?: string
  description?: string
}

interface ContinueSessionProps {
  session: ContinueSession
}

const ContinueSessionCard = ({ session }: ContinueSessionProps) => {
  if (!session) return null

  // companionId yoksa id'yi fallback olarak kullan
  const companionId = session.companionId ?? session.id

  if (!companionId) return null

  return (
    <div className="w-full rounded-2xl border bg-white p-4 md:p-5 shadow-sm">
      <p className="text-sm font-medium text-neutral-500">
        🔄 Continue where you left off
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {session.title || session.name || "Recent lesson"}
      </h3>

      {session.subject && (
        <span className="mt-3 inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          {session.subject}
        </span>
      )}

      {session.description && (
        <p className="mt-2 text-sm text-neutral-600 line-clamp-2">
          {session.description}
        </p>
      )}

      <Link
        href={`/companions/${companionId}`}
        className="mt-4 inline-flex items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition"
      >
        Continue lesson
      </Link>
    </div>
  )
}

export default ContinueSessionCard
