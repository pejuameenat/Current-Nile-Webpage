import { aboutImages } from '../utils'
import { OurValues, Footer, OurTeam } from '../Components'
const About = () => {
  return (
    <section className='px-4 lg:px-0'>
      <div className="container mx-auto lg:w-4/5 max-w-[1311px] mt-[72px] ">
        <h1 className='text-[32px] md:text-[40px] text-center'>Our Mission Is To Revolutionize Business Operations For African Entrepreneurs By Leveraging The Power Of Artificial Intelligence, Driving Efficiency, And Empowering Growth.</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-[25px] mt-8 md:*:mt-[25px]'>
          {aboutImages.map((item, index) => <img src={item.img } alt='group of people working to achieve a goal' loading='lazy' className={index===0 ? 'col-span-4 hidden md:block w-full':'col-span-2 w-full '} key={item.id } />)}
        </div>
        <OurValues />
        <OurTeam/>
      </div>
      <Footer/>
    </section>
  )
}

export default About