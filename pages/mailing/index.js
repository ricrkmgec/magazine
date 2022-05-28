import React from 'react'

import { ToastContainer,toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
function index() {


  async function handleSubmit(e) {
    e.preventDefault();
    const emailsentApi = await fetch("../api/mailing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email:'ricrkmgecsquad@gmail.com',
      }),
    }).catch((error) => {
      toast.error(error)
    });

    let data = await emailsentApi.json();
    if (data.success ) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  }
  return (
  //   html: `
  //   <h3 >Dear <span style='font-size:bold'>${allUser[i].name}</span>, </h3>
  //   <p>Congratulations!!🎊🎉🪘  your content is selected for ECE,RKMGEC departmental magazine - "MOUNISH" - 2022.You can collect your certificate from <a target="_" href="${process.env.DOMAIN}">here</a></p>
  //   <p>Thank You🙏</p>
  //   <h4>RKMGEC ECE MAGAZINE TEAM</h4>
  // `,
    <div className='flex pt-20'>
      <ToastContainer/>
        <button className='z-10 py-2 px-8 my-6 mx-auto bg-lime-600 text-white rounded-full hover:shadow-orange-300 hover:shadow-xl hover:text-lime-600 hover:bg-white hover:border-2 hover:border-lime-500' onClick={handleSubmit}>Send Mail</button>
    </div>
  )
}

export default index