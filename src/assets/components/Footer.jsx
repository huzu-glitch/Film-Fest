import { Link } from 'react-router'
import Logo from '../material/logo.webp'

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 mt-auto w-full">
      <div className="w-full max-w-screen-xl mx-auto p-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse hover:opacity-80 transition-opacity duration-200">
            <img src={Logo} className="h-8 rounded-xl" alt="plottwist Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">Plot-Twist</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-600 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="https://github.com/huzu-glitch" target="_blank"
                rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 me-4 md:me-6">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/huzaifa-amin-09001p" target="_blank"
                rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 me-4 md:me-6">LinkedIn</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-600 lg:my-8" />
        <span className="block text-sm text-gray-600 sm:text-center dark:text-gray-400">© 2026 <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium">
          Plot-Twist™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
