
"use client";

import Image from 'next/image';
import Link from 'next/link';

const Stagethird = () => {
  const data = [
    {
      image: '/image.png',
      text: 'Reduce failed payments'
    },
    {
      image: '/image.png',
      text: 'Reduce failed payments'
    },
    {
      image: '/image.png',
      text: 'Reduce failed payments'
    },
    {
      image: '/image.png',
      text: 'Reduce failed payments'
    },
    {
      image: '/image.png',
      text: 'Reduce failed payments'
    },
    {
      image: '/image.png',
      text: 'Reduce failed payments'
    },
  ];

  const styles = {
    loginContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      marginLeft: 'auto',
    },
    loginText: {
      color: 'black',
      fontSize: '12px',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    arrow: {
      marginLeft: '8px',
      transition: 'transform 0.2s ease',
    },
  };

  return (
    <div>
      <div className="absolute top-1 left-0 z-40 p-4">
        <Image
          src="/four.png"
          alt="Logo"
          width={16}
          height={50}
        />
      </div>
      <div className='absolute top-0 right-0 mt-3 z-40 p-4'>
        <div style={styles.loginContainer}>
          <Link href="/login">
            <div style={styles.loginText}>
              Skip to dashboard
              <span style={styles.arrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </Link>
        </div>
      </div>
      <center>
        <h1 className='mt-16 text-2xl'>What&apos;s your goal with Franchain?</h1>
        <p className='text-1xl mt-1'>No wrong answers here. And it doesn&apos;t matter if you change your mind later.</p>
        <br /><br /><br />
        <div className="parent-container">
          {data.map((item, index) => (
            <div className="class-container" key={index}>
              <Image 
                src={item.image}
                alt='image'
                width={100}
                height={100}
                className="responsive-image"
              />
            
              <p className='text mt-4 font-bold'>{item.text.replace('<br />', ' ')}</p>
              <input type="checkbox" className="checkbox" />
              <hr />
            </div>
          ))}
        </div>
        <div className="mt-3 text-center">
          <button className="button text-white py-2 px-4 text-sm" type="submit">Continue</button>
        </div>
      </center>
      
      <p className='mt-3 ml-4 text-1xl'>Franchain is a financial technology company, not a bank. Banking services are provided by trusted regulated banking partners including but not <br /> limited to JP Morgan, Barclays and Credit Suisse.</p>
      <br />
      <p className='font-bold m-4'>Need A Help? <span className='m-4'>Back to dashboard</span> <span>Terms</span> <span className='ml-4'>Privacy policy</span> <span className='ml-4'>Sign out and continue later</span></p>
    </div>
  )
}

export default Stagethird;
