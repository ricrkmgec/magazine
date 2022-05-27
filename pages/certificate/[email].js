import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Pdf from "react-to-pdf";
import Certificate from "../../models/Certificate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sn from '../../public/sn.png'
import CTTT from '../../public/CTTT.png'
import scan from '../../public/scan.png'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
export default function Certificates({ cert }) {
  const router = useRouter();
  const ref = React.createRef();
  const { email } = router.query;
  const options = {
    orientation: 'landscape',
    unit: 'px',
    format: [400, 500]
  }
  // var textt=document.getElementById('#cname');
  // textt.innerText.split("")
  return (
    <><>
      <Navbar wid='600px' name={cert.name} />
      <div className=' flex flex-col max-w-xl min-w-max m-auto' style={{ maxWidth: '600px', minWidth: '600px' }}>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta charSet="utf-8" />
          <meta name="description" content="Ramkrishna Mahato Goverment Engineering College ,Purulia" />
          <meta name="description" content="Electronices and Communication Engineering" />
          <meta name="description" content="rkmgecece" />
          <meta name="description" content="ece" />
          <meta property="og:title" content="My page title" key="title" />
          <meta property="type" content="Certificate ganerator" />
          <title>{email}</title>
        </Head>
        <ToastContainer />
        <div ref={ref} className='flex justify-center'>
          <div className='absolute z-10 pt-32 mt-2 text-teal-600 text-lg w-[28rem]'>Ramkrishnna Mahato Government Engineering College</div>
          <Image src={CTTT} height={480} width={600} alt={'title'} />
          <div className='pt-44 -m-1 w-64 pl-10 absolute font-Italianno text-2xl '>This is to certify that, <span>{cert.pre}</span> </div>
          <div className='absolute pt-48 mt-2 text-4xl font-Parisienne min-w-max'>{cert.name}</div>
          <div className=' absolute pt-60 mt-2 w-128 text-xl leading-5 font-Italianno'>Roll No - <span className='font-semibold'>{cert.roll}</span>, Year - <span className='font-semibold'>{cert.year} year</span> of ECE, RKMGEC, Purulia has successfully contributed creative content for departmental cultural magazine of ECE named  &quot;
            <span className='font-semibold'>MOUNISH</span> - The Conqueror of minds&quot;, 2022</div>
          <div className='ml-6  absolute pt-72 mt-6 pr-72 max-w-xl ' style={{ minWidth: '400px' }}>
            {/* Id:{cert.id } */}
            <Image src={scan} height={90} width={90} alt='scanqr' />
          </div>
         
          <div className='absolute pt-80 mt-8 max-w-xl pl-96 mr-24 leading-4 text-emerald-700 ' style={{ minWidth: '600px' }}><span className='overline decoration-wavy ml-4 text-xl leading-3 '>(Koushik Bishayee)</span> <br />
          <span className='text-xs'>Convenor, Magazine Committee,</span>
            <br /><span className='mx-8 text-xl leading-4'>ECE, RKMGEC </span></div>

          <div className=' absolute pt-72 mt-4  pl-64 ml-6 ' style={{ minWidth: '400px' }}>
            <Image src={sn} height={50} width={100} alt='' />
          </div>
        </div>
        <Pdf targetRef={ref} filename={"magazine_" + cert.name.split(' ')[0] + ".pdf"} options={options} scale={1.5} x={-2} renderMode="svg">
          {({ toPdf }) => <button className=' z-10 py-2 px-8 my-6 mx-auto bg-lime-600 text-white rounded-full hover:shadow-orange-300 hover:shadow-xl hover:text-lime-600 hover:bg-white hover:border-2 hover:border-lime-500' onClick={toPdf}>Download</button>}
        </Pdf>
      </div>
      <Footer wid='600px' />
     
    </></>
  )
}

export async function getServerSideProps(query) {
  const email = query.query.email;
  const cert = await Certificate.findOne({ email }).lean();
  return {
    props: {
      cert: JSON.parse(JSON.stringify(cert)),
    },
  };
}