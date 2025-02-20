import React from "react"
import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className='bg-gray-900 text-gray-50 p-8 mt-16'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-around gap-4 md:gap-0'>
          <div className='footer-sections'>
            <h5 className='uppercase font-bold mb-2'>Company</h5>
            <ul>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  About Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Careers
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-sections'>
            <h5 className='uppercase font-bold mb-2'>Support</h5>
            <ul>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Help Center
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Contact Us
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Returns
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-sections'>
            <h5 className='uppercase font-bold mb-2'>Legal</h5>
            <ul>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Terms of Service
                </a>
              </li>
              <li className='mb-2'>
                <a href='#' className='hover:underline'>
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-sections'>
            <h5 className='uppercase font-bold mb-2'>Follow Us</h5>
            <ul className='flex mt-4 justify-center'>
              <li className='mr-4'>
                <a href='#' className='hover:underline flex items-center'>
                  <Facebook className='mr-1' />
                  <span className='sr-only'>Facebook</span>
                </a>
              </li>
              <li className='mr-4'>
                <a href='#' className='hover:underline flex items-center'>
                  <Twitter className='mr-1' />
                  <span className='sr-only'>Twitter</span>
                </a>
              </li>
              <li className='mr-4'>
                <a href='#' className='hover:underline flex items-center'>
                  <Instagram className='mr-1' />
                  <span className='sr-only'>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-8 text-center'>
          <div className='flex justify-center flex-wrap gap-4 mb-4'>
            <div className='flex items-center mr-6'>
              <Mail className='mr-2' /> contact@mystore.com
            </div>
            <div className='flex items-center'>
              <Phone className='mr-2' /> +1 234 567 890
            </div>
          </div>
          <p>&copy; 2025 MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
