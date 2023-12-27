import React from 'react'

const About = () => {
  return (
    <div className='bg-[#27292a] w-screen p-16 flex flex-col gap-7'>
      <h2 className='font-TNR sm:text-5xl text-4xl font-bold'>About</h2>
      <div className="flex flex-row gap-2">
        <div className="line sm:w-32 w-20 h-[1px] bg-[#FFDE68]" />
        <p className='sm:text-lg lg:text-xl'>
            I'm a young software/web developer from India. I have a sufficient amount of knowledge about <span className='text-yellow-300'>Problem solving, Web Frontend & Backend</span>. I Still hope to learn a lot more and a gain a bunch of experience in the coming years. In short I'm a <span className="text-yellow-300">trustworthy, reliable and creative person </span>
            on whom you can rely for your work :).
        </p>
      </div>
    </div>
  )
}

export default About

