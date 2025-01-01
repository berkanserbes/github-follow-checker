import { useState } from 'react'
import { GithubUserForm } from './components/GithubUserForm'
import { FollowerResults } from './components/FollowerResults'
import { Header } from './layouts/Header'
import { Main } from './layouts/Main'
import { Footer } from './layouts/Footer'
import { getFollowers, getFollowing, findNonFollowers, findNotFollowingBack } from './services/github'

interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<{
    username: string
    nonFollowers: GitHubUser[]
    notFollowingBack: GitHubUser[]
  } | null>(null)

  const handleCheckUser = async (username: string) => {
    setIsLoading(true)
    setError(null)
    try {
      const [followers, following] = await Promise.all([
        getFollowers(username),
        getFollowing(username)
      ])

      const nonFollowers = findNonFollowers(followers, following)
      const notFollowingBack = findNotFollowingBack(followers, following)

      setResults({
        username,
        nonFollowers,
        notFollowingBack
      })
    } catch (error) {
      console.error('Error:', error)
      setError('Failed to fetch GitHub data. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <Main>
        <div className="flex flex-col items-center">
          <GithubUserForm onSubmit={handleCheckUser} isLoading={isLoading} />
          {error && (
            <p className="text-destructive mt-4">{error}</p>
          )}
          {results && (
            <FollowerResults
              username={results.username}
              nonFollowers={results.nonFollowers}
              notFollowingBack={results.notFollowingBack}
            />
          )}
        </div>
      </Main>
      <Footer />
    </div>
  )
}

export default App
