import { Link } from 'react-router'
import Logo from '../material/logo.webp'

export const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={Logo} className="h-8" alt="plottwist Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Plot-Twist</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="https://github.com/huzu-glitch" target="_blank"
                rel="noopener noreferrer" className="hover:underline me-4 md:me-6">GitHub</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/huzaifa-amin-09001p" target="_blank"
                rel="noopener noreferrer" className="hover:underline me-4 md:me-6">LinkedIn</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2026 <Link to="/" className="hover:underline">
          Plot-Twist™</Link>. All Rights Reserved.</span>
      </div>
    </footer>
  )
}
