import { RiReactjsLine } from 'react-icons/ri'; // React
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { Icon } from '@iconify/react';
import CsharpIcon from '@iconify-icons/simple-icons/csharp';
import SqlserverIcon from '@iconify-icons/simple-icons/microsoftsqlserver';
import GithubIcon from '@iconify-icons/simple-icons/github';

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tecnologías</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <Icon icon={CsharpIcon} className='text-7xl text-fuchsia-600' />
        </div>
         <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <Icon icon={SqlserverIcon} className='text-7xl text-red-600' />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaHtml5 className='text-7xl text-amber-300'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className='text-7xl text-green-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <Icon icon={GithubIcon} width="60" height="60" />
          </div>
      </div>
    </div>
  );
};

export default Technologies;
