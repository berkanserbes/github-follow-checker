import { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface GithubUserFormProps {
  onSubmit: (username: string) => void
  isLoading?: boolean
}

export function GithubUserForm({ onSubmit, isLoading = false }: GithubUserFormProps) {
  const [username, setUsername] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      onSubmit(username.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto px-4">
      <div className="space-y-3 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">GitHub Follower Checker</h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Enter a GitHub username to check their followers
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          disabled={isLoading}
          className="flex-1"
        />
        <Button 
          type="submit" 
          disabled={isLoading || !username.trim()}
          className="w-full sm:w-auto"
        >
          {isLoading ? 'Checking...' : 'Check'}
        </Button>
      </div>
    </form>
  )
}
