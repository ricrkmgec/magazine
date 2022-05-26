import Head from 'next/head'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();
  const [reseterror, setReseterror] = useState(false)
  const [email, setEmail] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const certApi = await fetch("./api/certificate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    }).catch((error) => {
      setReseterror(true)
      toast.error(error)
    });

    let data = await certApi.json();
    if (data.success) {
      router.push(`https://rkmgecece.vercel.app/certificate/${data._id}`);
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
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <title>ECE-RKMGEC</title>
          <metadata></metadata>
        </Head>
        {reseterror ? (<ToastContainer />) : ""}
        <Navbar href={`https://rkmgecece.vercel.app/verify`} text={'Verify'} />
        <form onSubmit={handleSubmit}>
          <div className=' flex flex-col  align-middle relative m-auto  p-4 sm:p-16 '>
            <div className='bold text-xl sm:text-4xl  m-4 text-lime-500 mx-auto'><h1>Welcome to <span className='font-semibold  text-green-600'>ECE</span> magazine, Rkmgec</h1></div>
            <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required={true} className='py-2 px-6 border-double border-2 rounded-full border-orange-600 justify-center mx-auto focus:outline-0' placeholder='Enter your email *' />
            <button type='submit' className='bg-orange-600 p-2 w-40 border-2 border-orange-600 rounded-full text-white text-3xl my-4 mx-auto shadow-gray-600 hover:bg-white hover:text-orange-600 focus:bg-white focus:text-orange-600 '>Check</button>
            <p className='mb-52 m-auto'>* when you Fill up the form this mail is enter</p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}
