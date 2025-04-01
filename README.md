# GitHub Follower Checker

A modern web application that helps you analyze your GitHub followers and following relationships. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🔍 Check GitHub user's follower relationships
- 📊 View users who don't follow you back
- 📊 View users you don't follow back
- 📱 Fully responsive design (mobile-first approach)
- 🎨 Modern and clean UI with Tailwind CSS
- ⚡ Fast and efficient data fetching

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- GitHub API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/github-follower-checker.git
cd github-follower-checker
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Enter a GitHub username in the input field
2. Click "Check" to analyze the user's follower relationships
3. View the results in two categories:
   - Users who don't follow you back
   - Users you don't follow back
4. Click on any user to visit their GitHub profile

## Project Structure

```
src/
├── components/         # Reusable UI components
├── layouts/           # Layout components (Header, Main, Footer)
├── services/          # API and data services
├── lib/              # Utility functions and constants
├── App.tsx           # Main application component
└── main.tsx          # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.