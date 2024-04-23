import Image from 'next/image'; 

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white px-8">
      <div className="container py-8 flex justify-between items-center">
        <span className="flex items-center px-6">
          <Image
            src="/images/Logo.jpg"
            alt="ming image"
            className='rounded-full'
            width={60}
            height={60}
          />
        </span>
        <p className="text-slate-600 px-6">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;