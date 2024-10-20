import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-blue-800 text-white p-11 relative top-10'>
      <div className='max-w-7xl mx-auto px-6'>
        {/* Footer Top Section */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
          {/* Organization Info */}
          <div className='text-center md:text-left mb-6 md:mb-0'>
            <h3 className='text-xl font-bold'>Pemerintah Kabupaten Sumenep</h3>
            <p>Jl. Raya Sumenep No.1, Sumenep, Jawa Timur</p>
            <p className='mt-2'>Email: info@sumenepkab.go.id</p>
            <p>Phone: +62 123 456 7890</p>
          </div>

          {/* Navigation Links */}

          {/* Social Media Links */}

          <div className='flex space-x-4'>
            <a href='https://facebook.com' className='text-blue-600'>
              <FaFacebook size={24} />
            </a>
            <a href='https://twitter.com' className='text-blue-400'>
              <FaTwitter size={24} />
            </a>
            <a href='https://instagram.com' className='text-pink-600'>
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className='mt-8 text-center text-sm text-gray-400'>
          <p>© 2024 Pemerintah Kabupaten Sumenep. All rights reserved.</p>
          <p>
            <a href='/privacy-policy' className='hover:text-yellow-400'>
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href='/terms-of-service' className='hover:text-yellow-400'>
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
