import { FaTwitch } from 'react-icons/fa'

const Header = () => {
  return (
    <header className='h-20 flex items-center rounded-lg shadow m-4'>
        <div className='flex items-center justify-center'>
            <FaTwitch className='text-4xl ml-8 text-[#a970ff]' />
            <h1 className='text-2xl font-bold ml-3'>Twitch Games</h1>
        </div>
    </header>
  )
}

export default Header
