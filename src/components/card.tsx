import { IGame } from '@/interfaces/interfaces'
import Image from 'next/image'

const Card = ({ name, id, box_art_url: boxArtUrl }: IGame) => {
  return (
      <div key={id} className='flex items-center font-semibold flex-col'>
              <Image
                className='rounded-md hover:scale-110 hover:shadow-none hover:duration-200 shadow-gray-950 shadow-xl'
                src={boxArtUrl.replace('{width}', '198').replace('{height}', '270')}
                alt={name}
                width={198}
                height={270} />
        <h2 className='text-center w-52 mt-4'>{name}</h2>
      </div>

  )
}

export default Card
