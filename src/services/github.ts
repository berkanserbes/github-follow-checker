const GITHUB_API = 'https://api.github.com'
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN
const PER_PAGE = 100 // GitHub API'nin sayfa başına maksimum limiti

interface GitHubUser {
  login: string
  id: number
  avatar_url: string
  html_url: string
}

async function getAllPages(url: string): Promise<GitHubUser[]> {
  let page = 1
  let allResults: GitHubUser[] = []
  
  while (true) {
    const response = await fetch(`${url}?per_page=${PER_PAGE}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
      },
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const results = await response.json()
    
    if (results.length === 0) {
      break
    }

    allResults = [...allResults, ...results]
    page++

    // GitHub API rate limit kontrolü
    const remaining = response.headers.get('x-ratelimit-remaining')
    if (remaining && parseInt(remaining) === 0) {
      throw new Error('GitHub API rate limit exceeded. Please try again later.')
    }
  }

  return allResults
}

export async function getFollowers(username: string): Promise<GitHubUser[]> {
  try {
    return await getAllPages(`${GITHUB_API}/users/${username}/followers`)
  } catch (error) {
    console.error('Error fetching followers:', error)
    throw new Error('Failed to fetch followers. Please check the username and try again.')
  }
}

export async function getFollowing(username: string): Promise<GitHubUser[]> {
  try {
    return await getAllPages(`${GITHUB_API}/users/${username}/following`)
  } catch (error) {
    console.error('Error fetching following:', error)
    throw new Error('Failed to fetch following list. Please check the username and try again.')
  }
}

export function findNonFollowers(followers: GitHubUser[], following: GitHubUser[]): GitHubUser[] {
  const followerLogins = new Set(followers.map(f => f.login.toLowerCase()))
  return following.filter(f => !followerLogins.has(f.login.toLowerCase()))
}

export function findNotFollowingBack(followers: GitHubUser[], following: GitHubUser[]): GitHubUser[] {
  const followingLogins = new Set(following.map(f => f.login.toLowerCase()))
  return followers.filter(f => !followingLogins.has(f.login.toLowerCase()))
}
