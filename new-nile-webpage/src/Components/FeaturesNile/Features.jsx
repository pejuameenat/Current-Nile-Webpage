import {features } from '../../utils'
const Features = () => {
  return (
    <section id='features' className='bg-pry2 px-4 py-6 md:py-14 md:my-[72px] '>
      <div className="container md:w-[85%] max-w-[1311px] mx-auto">
        <div className='max-w-[900px] mx-auto text-center'>
          <span className="span-headings">WHAT’S IN THE NILE
           </span>
          <h3 className="section-headers">Features</h3>
        </div>
        <article className='grid md:grid-cols-3 gap-16 mt-16'>
          {features.map((item) => {
            const { img, id, headText, text } = item
            return (
              <div key={ id}>
                <img src={img} className='w-[40px] h-[40px]' alt={`icon ${headText}`}/> 
                <h4 className='font-medium  text-2xl md:text-[32px] my-2'>{headText}</h4>
                <p>{ text}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default Features