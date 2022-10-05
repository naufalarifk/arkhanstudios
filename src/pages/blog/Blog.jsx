import React from 'react'
import Wrapper from '../../component/wrapper'
import { AiOutlineArrowRight } from 'react-icons/ai'
const blogItems = [
  {
    src: require('../../common/assets/blog/stock.webp'),
    title: 'lorem ipsum',
    content: 'lorem ipsum sit'
  },
  {
    src: require('../../common/assets/blog/stock.webp'),
    title: 'lorem ipsum2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },  {
    src: require('../../common/assets/blog/stock.webp'),
    title: 'lorem ipsum3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },  {
    src: require('../../common/assets/blog/stock.webp'),
    title: 'lorem ipsum4',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
]
const Blog = () => {
  return (
    <Wrapper>
        <section className='container p-16 flex flex-row justify-between bg-[#512995] text-white'>
          <div className='grid grid-cols-2 w-3/4 gap-8'>
          {blogItems.map((item)=>
          <div>
            <img src={item.src} alt=''/>
            <h1 className='text-2xl font-semibold'>{item.title}</h1>
            <p>{item.content}</p>
            <div className='flex flex-row items-center gap-2'>
            <p>Read More</p>
            <AiOutlineArrowRight className='mt-1'/>
            </div>
          </div>
          )}
          </div>
        </section>
    </Wrapper>
  )
}

export default Blog