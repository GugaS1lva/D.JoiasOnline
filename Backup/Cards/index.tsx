import Image from 'next/image.js'

import { itemsInfo } from '../../data/data.js'

const Cards = () => {
  const { items } = itemsInfo

  return (
    <section className='flex flex-col items-center justify-center relative px-5 py-20 text-black'>
      <ul className='grid grid-cols-1 max-w-[800px] gap-y-5 gap-x-5 sm:grid-cols-2 md:grid-cols-3'>
        {items.map((item, index) => {
          const { image, title, description, inCash, inCredit, soldOff, slice } = item
          return (
            <li className='max-w-[250px] backdrop-blur-[5px] bg-[#FFFFFF33] rounded-md border-2' key={index}>
              <span className='absolute top-0 right-[13px] mt-[13px] p-1 z-10 backdrop-blur-[5px] bg-[#FFFFFF33] text-zinc-700 text-[10px] font-bold uppercase rounded'>⟬{index.toString().padStart(2, '0')}⟭</span>
            
              <Image
                className='w-[250px] h-[250px] bg-zinc-400 rounded scale-90'
                src={image}
                alt="item-image"
                width={1000}
                height={1000}
              />

              <div className='h-28 gap-y-2 flex flex-col items-center justify-center rounded text-center'>
                <h2 className='uppercase text-lg font-semibold tracking-widest'>{title}</h2>
                <p>{description}</p>
              </div>

              <div className='h-20 font-bold flex flex-col items-center justify-center rounded'>
                {inCredit && (
                  <>
                    <h2>
                      <span className="text-[#EF3F32] text-lg"> {`${slice}x`} </span>
                      {`R$${inCredit}`}
                    </h2>

                    <p>OU</p>
                  </>
                )}
                {inCash && (
                  <h2>
                    <span className="text-[#EF3F32]"> {'À Vista!'} </span>
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
    </section>
  )
}

export default Cards