import Image from 'next/image'
import Link from 'next/link'
import Cards from '../../components/Cards'
import djoiasBanner from '../../../public/DJoiasBanner.png'

const Home = () => {
    return (
        <div >
            <section className='relative'>
                <Image
                    className=''
                    src={djoiasBanner}
                    alt="djoiasBanner"
                    width={10000}
                    height={10000}
                    priority
                />
            </section>

            {/* <Search /> */}

            <section>
                {/* 
                    Textos Introdutórios seguindo o padrão do Design Figma


                    Slide Products - 01

                    Slide Products - 02 
                */}

                <Cards />
            </section>
        </div>
    )
}

export default Home