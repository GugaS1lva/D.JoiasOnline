import Image from 'next/image.js'

import { itemsInfo } from '../../data/data.js'

const Cards = () => {
  const { items } = itemsInfo

  return (
    <div className='flex flex-col items-center justify-center p-5'>
      <ul className='grid grid-cols-1 max-w-[800px] gap-y-5 gap-x-5 sm:grid-cols-2 md:grid-cols-3'>
        {items.map((item, index) => {
          const { image, title, description, inCash, inCredit, soldOff, slice } = item
          return (
            <li className='max-w-[250px]' key={index}>
              <Image
                className='w-[250px] h-[250px] bg-zinc-400 rounded'
                src={image}
                alt="item-image"
                width={'auto'}
                height={'auto'}
              />

              <div className='h-28 gap-y-2 flex flex-col items-center justify-center rounded text-center'>
                <h2 className='uppercase text-lg tracking-widest'>{title}</h2>
                <p>{description}</p>
              </div>

              <div className='bg-zinc-200 h-20 font-bold flex flex-col items-center justify-center rounded'>
                {inCredit && (
                  <>
                    <h2>
                      <span class="text-[#EF3F32] text-lg"> {`${slice}x`} </span>
                      {`R$${inCredit}`}
                    </h2>

                    <p>OU</p>
                  </>
                )}
                {inCash && (
                  <h2>
                    <span class="text-[#EF3F32]"> {'À Vista!'} </span>
                    {`R$${inCash}`}
                  </h2>
                )}
                {soldOff && (
                  <h2 className='text-[#EF3F32] text-lg border-y-2 border-[#EF3F32] uppercase'>
                    {soldOff}
                  </h2>
                )}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Cards
