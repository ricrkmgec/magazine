import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Pdf from "react-to-pdf";
import dbConnect from '../../lib/mongodb'
import Certificate from "../../models/Certificate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ct from '../../public/ct.jpg'
import sn from '../../public/sn.jpeg'
import cttt from '../../public/cttt.jpg'
import RKMGEC from '../../public/RKMGEC .jpeg'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
export default function Certificates({ cert }) {
  const router = useRouter();
  const ref = React.createRef();
  const { email} = router.query;
  const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [400, 500]
  }
  return (
    <>
    <Navbar wid='600px' name={cert.name}/>
    <div className=' flex flex-col max-w-xl min-w-max m-auto'>
      <Head>
        <link rel="icon" type="image/jpeg" sizes="16x16" href="/public/ece logo.jpg" />
        <title>{email}</title>
      </Head>
      <ToastContainer />
      <div ref={ref} className='flex justify-center'  >
        <Image src={cttt} height={480} width={600} alt={'title'} />
        <div className='pt-40 w-96 absolute font-Italianno text-2xl'>Lorem ipsum dolor sit amet c Laborum, corporis.</div>
        <div className='absolute pt-48 text-5xl font-Parisienne min-w-max'>{cert.name}</div>
        <div className=' absolute pt-60 w-96 text-2xl font-Italianno'>this jdjjdjd Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, fuga vero iste unde blanditiis cupiditate possimus </div>
          <div className='ml-6 mt-8 absolute pt-80 pr-72 max-w-xl ' >Id:{cert.id }</div>
        
          <div className='absolute pt-96 max-w-xl pl-96 mr-24  overline decoration-wavy' style={{minWidth:'600px'}}>Chairmain of Committee</div>
        
        <div className=' absolute pt-80  pl-64 ml-6 ' style={{minWidth:'400px'}}>
          <Image src={sn} height={50} width={100} alt='' />
        </div>
      </div>
      <Pdf targetRef={ref} filename={"magazine_" + email + ".pdf"} options={options} scale={1.5} x={-4} renderMode="svg">
        {({ toPdf }) => <button className=' z-10 py-2 px-8 my-6 mx-auto bg-lime-600 text-white rounded-full hover:shadow-orange-300 hover:shadow-xl hover:text-lime-600 hover:bg-white hover:border-2 hover:border-lime-500' onClick={toPdf}>Download</button>}
      </Pdf>
    </div>
    <Footer wid='600px'/>
    </>
  )
}

export async function getServerSideProps(query) {
  const { db } = await dbConnect();
  const email = query.query.email;
  const cert = await Certificate.findOne({ email }).lean();
  console.log(cert)
  return {
    props: {
      cert: JSON.parse(JSON.stringify(cert)),
    },
  };
}