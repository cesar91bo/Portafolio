import { RiReactjsLine } from 'react-icons/ri'; // React
import { FaHtml5 } from "react-icons/fa";
import BlazorIcon from '@iconify-icons/simple-icons/blazor';
import { IoLogoJavascript } from "react-icons/io5";
import { Icon } from '@iconify/react';
import CsharpIcon from '@iconify-icons/simple-icons/csharp';
import SqlserverIcon from '@iconify-icons/simple-icons/microsoftsqlserver';
import GithubIcon from '@iconify-icons/simple-icons/github';
import {animate, motion} from 'framer-motion'

const iconVariants = (duration) =>({
  initial: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse'
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y:0}}
        initial= {{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">Tecnologías
      </motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial= {{opacity: 0, x: -100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
        <motion.div 
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title='C#'>
          <Icon icon={CsharpIcon} className='text-7xl text-purple-800' />
        </motion.div>
         <motion.div 
          variants={iconVariants(3)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title='SQL Server'>
          <Icon icon={SqlserverIcon} className='text-7xl text-red-600' />
        </motion.div>
        <motion.div 
          variants={iconVariants(5)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title='HTML5'>
          <FaHtml5 className='text-7xl text-amber-300'/>
        </motion.div>
        <motion.div 
          variants={iconVariants(2)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title='JavaScript'>
          <IoLogoJavascript className='text-7xl text-green-500'/>
        </motion.div>
        <motion.div 
          variants={iconVariants(6)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title='React'>
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
          variants={iconVariants(4)}
          initial='initial'
          animate='animate'
          className="rounded-2xl border-4 border-neutral-800 p-4"
          title='Blazor'>
            <Icon icon={BlazorIcon} className='text-indigo-700' width="60" height="60" />
          </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
