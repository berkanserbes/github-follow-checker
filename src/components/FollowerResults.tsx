import { useState } from 'react'
import { Button } from './ui/button'

interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

interface FollowerResultsProps {
  nonFollowers: GitHubUser[]
  notFollowingBack: GitHubUser[]
  username: string
}

export function FollowerResults({ nonFollowers, notFollowingBack, username }: FollowerResultsProps) {
  const [activeTab, setActiveTab] = useState<'nonFollowers' | 'notFollowingBack'>('nonFollowers')

  const activeUsers = activeTab === 'nonFollowers' ? nonFollowers : notFollowingBack
  const title = activeTab === 'nonFollowers' 
    ? `Users ${username} follows but don't follow back` 
    : `Users following ${username} but ${username} doesn't follow back`

  return (
    <div className="w-full mt-8">
      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-center">
        <Button
          variant={activeTab === 'nonFollowers' ? 'default' : 'outline'}
          onClick={() => setActiveTab('nonFollowers')}
          className="w-full sm:w-auto"
        >
          Not Following Back ({nonFollowers.length})
        </Button>
        <Button
          variant={activeTab === 'notFollowingBack' ? 'default' : 'outline'}
          onClick={() => setActiveTab('notFollowingBack')}
          className="w-full sm:w-auto"
        >
          Not Following ({notFollowingBack.length})
        </Button>
      </div>

      <div className="bg-card rounded-lg p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center sm:text-left">{title}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
          {activeUsers.map((user) => (
            <a
              key={user.id}
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-md hover:bg-accent transition-colors"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <span className="font-medium text-sm sm:text-base truncate">{user.login}</span>
            </a>
          ))}
        </div>
        {activeUsers.length === 0 && (
          <p className="text-center text-muted-foreground py-8">
            No users found
          </p>
        )}
      </div>
    </div>
  )
}
