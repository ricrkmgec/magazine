import React from 'react'
import Head from 'next/head'
import Certificate from "../../models/Certificate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Certificates({ cert }) {
  return (
    <>
      <Navbar wid='390px' name={cert.name.split(" ")[0]} />
      <div className=' flex flex-col max-w-xl min-w-max m-auto'>
        <Head>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <title>{cert.name}</title>
        </Head>
        <ToastContainer />
        <div className='flex flex-col w-96 shadow-zinc-500 shadow-xl min-h-max max-h-96 my-10 p-10 list-none leading-10 font-mono justify-center rounded-xl place-content-center mx-auto text-2xl '>
          <li>Name : {cert.name}</li>
          <li> Roll No : {cert.roll}</li>
          <li> Year: {cert.year} </li>
          <li>Id : {cert.id}</li>
        </div>

      </div>
      <Footer wid='390px' />
    </>
  )
}

export async function getServerSideProps(query) {
  const roll = query.query.roll;
  // console.log(roll)
  const cert = await Certificate.findOne({ roll }).lean();
  return {
    props: {
      cert: JSON.parse(JSON.stringify(cert)),
    },
  };
}