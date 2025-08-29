import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import {motion} from 'motion/react' 

const Services = () => {
   

    const servicesData = [
        {
            title: 'Advertising',
            description: 'We transform bold ideas into unforgettable campaigns that captivate audiences and boost impact.',
            icon: assets.ads_icon,
        },
        {
            title: 'Content Marketing',
            description: 'We craft stories and strategies that inspire, engage, and convert your audience effortlessly.',
            icon: assets.marketing_icon,
        },
        {
            title: 'Content Writing',
            description: 'Words that resonate—creating compelling content that informs, entertains, and drives action.',
            icon: assets.content_icon,
        },
        {
            title: 'Social Media',
            description: 'We build vibrant online communities with strategies that spark conversation and loyalty.',
            icon: assets.social_icon,
        },

    ]
    return (
        <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{once:true}}
            transition={{stagerChildren:0.2}}
        id='services' className='relative flex flex-col items-center gap-7 px-4
        sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70
            -z-1 hide-in-dark' />
            <Title title='How can we help?'desc='From strategy to execution we craft digital soltion that move your business forward.'/>

            <div className='flex flex-col md:grid md:grid-cols-2 gap-4'>
                {servicesData.map((service, index)=>(
                    <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>

        </motion.div>
    )
}

export default Services