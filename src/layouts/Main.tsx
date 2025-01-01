interface MainProps {
  children: React.ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <main className="flex-1 w-full">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </main>
  )
}
