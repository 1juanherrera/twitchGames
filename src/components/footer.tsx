import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FaGitlab } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='rounded-lg shadow m-4'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>© 2024 <a href='https://my-portfolio-peach-omega-53.vercel.app/' className='hover:underline'>Juan Herrera</a>
        </span>
        <ul className='flex h-6 justify-around w-52 text-2xl mt-3 font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='https://www.linkedin.com/in/juanherreramu%C3%B1oz/' className='hover:underline me-4 md:me-6'> <FaLinkedin /> </a>
          </li>
          <li>
            <a href='https://github.com/1juanherrera' className='hover:underline me-4 md:me-6'> <FaGithub /> </a>
          </li>
          <li>
            <a href='https://gitlab.com/juansebas751' className='hover:underline me-4 md:me-6'> <FaGitlab /> </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
