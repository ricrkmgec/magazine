import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Index() {
  const router = useRouter();
  const [reseterror, setReseterror] = useState(false)
  const [roll, setRoll] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const verifyApi = await fetch("https://rkmgecece.netlify.app/api/certificate/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        roll,
      }),
    }).catch((error) => {
      setReseterror(true)
      toast.error(error)
    });
    let data = await verifyApi.json();
    if (data.success) {
      router.push(`../verify/${data.user.roll}`);
      toast.success(data.message);
    } else {
      setReseterror(true)
      toast.error(data.message);
    }
  }
  return (
    <>
      <div className='bg-gradient-to-r from-violet-100 to-fuchsia-100'>
        <Head>
          <title>ECE-RKMGEC Verify</title>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
          <metadata></metadata>
        </Head>
        {reseterror ? (<ToastContainer />) : ""}
        <Navbar href={`https://rkmgecece.netlify.app/`} text={'Home'} />
        <form onSubmit={handleSubmit}>
          <div className=' flex flex-col  align-middle relative m-auto  p-4 sm:p-16 '>

            <div className='bold text-xl sm:text-4xl  m-4 text-lime-500 mx-auto'><h1>Welcome to <span className='font-semibold  text-green-600'>ECE</span> magazine, Rkmgec</h1></div>

            <input type='number' name='roll' value={roll} onChange={(e) => setRoll(e.target.value)} required={true} className='py-2 px-6 border-double border-2 rounded-full border-orange-600 justify-center mx-auto focus:outline-0' placeholder='Enter Roll No to varify ' />

            <button type='submit' className='bg-orange-600 p-2 w-40 border-2 border-orange-600 rounded-full text-white text-3xl my-4 mx-auto shadow-gray-600 hover:bg-white hover:text-orange-600 focus:bg-white focus:text-orange-600 '>Check</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}