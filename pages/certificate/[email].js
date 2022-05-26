import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Pdf from "react-to-pdf";
import Certificate from "../../models/Certificate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sn from '../../public/sn.png'
import cttt from '../../public/cttt.jpg'
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
  return (
    <>
      <Navbar wid='600px' name={cert.name} />
      <div className=' flex flex-col max-w-xl min-w-max m-auto' style={{ maxWidth: '600px', minWidth: '600px' }}>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <title>{email}</title>
        </Head>
        <ToastContainer />
        <div ref={ref} className='flex justify-center'  >
          <Image src={cttt} height={480} width={600} alt={'title'} />
          <div className='pt-40 w-96 pl-40 absolute font-Italianno text-2xl '>This is to certify that, <span>{cert.pre}</span> </div>
          <div className='absolute pt-48 text-5xl font-Parisienne min-w-max'>{cert.name}</div>
          <div className=' absolute pt-60 mt-2 w-128 text-xl leading-5 font-Italianno'>Roll No - <span className='font-semibold'>{cert.roll}</span>, Year - <span className='font-semibold'>{cert.year} year</span> of ECE, RKMGEC, Purulia has successfully contributed creative content for departmental cultural magazine of ECE named  &quot;
            <span className='font-semibold'>MOUNISH</span> - The Conqueror of minds&quot;, 2022</div>
          <div className='ml-6  absolute pt-72 mt-6 pr-72 max-w-xl ' style={{ minWidth: '400px' }}>
            {/* Id:{cert.id } */}
            <Image src={scan} height={90} width={90} alt='scanqr' />
          </div>

          <div className='absolute pt-80 mt-8 max-w-xl pl-96 mr-24 leading-4  ' style={{ minWidth: '600px' }} ><span className='overline decoration-wavy ml-6'>Koushik Bishayee</span> <br />
            Convenor of Committee,<br /><span className='mx-8'>ECE, RKMGEC </span></div>

          <div className=' absolute pt-72 mt-4  pl-64 ml-6 ' style={{ minWidth: '400px' }}>
            <Image src={sn} height={50} width={100} alt='' />
          </div>
        </div>
        <Pdf targetRef={ref} filename={"magazine_" + cert.name.split(' ',)[0] + ".pdf"} options={options} scale={1.5} x={-4} renderMode="svg">
          {({ toPdf }) => <button className=' z-10 py-2 px-8 my-6 mx-auto bg-lime-600 text-white rounded-full hover:shadow-orange-300 hover:shadow-xl hover:text-lime-600 hover:bg-white hover:border-2 hover:border-lime-500' onClick={toPdf}>Download</button>}
        </Pdf>
      </div>
      <Footer wid='600px' />
    </>
  )
}

export async function getStaticProps(query) {
  const email = query.query.email;
  const cert = await Certificate.findOne({ email:"abc@gmail.com" }).lean();
  return {
    props: {
      cert: JSON.parse(JSON.stringify(cert)),
    },
  };
}