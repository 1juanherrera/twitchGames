'use client'
import React from 'react'
import { useApi } from '@/hooks/useApi'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { settings } from '@/helper/settingSlider'

export const TopGames = () => {
  const { data } = useApi()

  return (
    <div className='ml-5 mr-5'>
      <h1 className='my-4 text-3xl font-bold'>Top Games</h1>
      <Slider {...settings} className='container'>
        {data && data.map((game) => (
          <div key={game.id} className='flex items-center font-semibold flex-col m-2'>
            <Image
              className='rounded-md hover:scale-110 hover:shadow-none hover:duration-200 shadow-gray-950 shadow-xl'
              src={game.box_art_url.replace('{width}', '158').replace('{height}', '210')}
              alt={game.name}
              width={158}
              height={230} />
            <h2 className='text-center w-40 mt-3'>{game.name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  )
}
