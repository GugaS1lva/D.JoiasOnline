import Image from 'next/image'

// import { itemsInfo } from '../../data/data.js'
import { itemsInfo } from '../../data/data'

const Cards = () => {
  const { items } = itemsInfo
  
  return (
    <section className='flex flex-col items-center justify-center py-5'>
      <ul className='max-w-[1050px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 2xl:max-w-[2000px]'>
        {items.map((item, index) => {
          const { image, title, description, inCash, inCredit, soldOff, slice } = item

          const idx = index + 1

          return (
            <li
              // className='max-w-[400px] border-[50px]'
              className='max-w-[400px] border-[38px]'
              key={index}
            >
              <div className='relative'>
                <Image
                  className='rounded h-[274px] ring-2 ring-[#DEC8C3]'
                  src={image}
                  alt="product-image"
                  width={1000}
                  height={1000}
                />

                <span className='absolute top-0 right-0 text-[#8D505C] backdrop-blur-[5px] bg-[#FFFFFF33] m-1 px-1 rounded-sm'>
                  ⟬{idx.toString().padStart(2, '0')}⟭
                </span>
              </div>

              <div className='flex flex-col items-center justify-between text-center bg-[#DEC8C3] text-[#8D505C] min-h-[240px] p-5 rounded-b ring-2 ring-[#DEC8C3]'>
                <h2 className='font-semibold text-xl'>{title}</h2>
                <p className='py-5'>{description}</p>

                <div className='flex items-center justify-between font-semibold'>
                  {inCredit && (
                    <div className='flex items-center justify-center'>
                      <h3 className='flex flex-col items-center justify-center bg-[#F4E5E8] w-[100px] py-1 rounded-lg'>
                        <span> {`${slice}x`} </span>
                        <span> {`R$${inCredit}`} </span>
                      </h3>

                      <p className='mx-2'>OU</p>
                    </div>
                  )}

                  {inCash && (
                    <h3 className='flex flex-col items-center justify-center bg-[#F4E5E8] w-[100px] py-1 rounded-lg'>
                      <span> {'À Vista!'} </span>
                      <span> {`R$${inCash}`} </span>
                    </h3>
                  )}

                  {soldOff && (
                    <h3 className='flex flex-col items-center justify-center bg-[#F4E5E8] w-[130px] py-1 rounded-lg h-14'>
                      {soldOff}
                    </h3>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Cards
