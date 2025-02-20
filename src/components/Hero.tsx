import { ShoppingCartIcon, UserCircle } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { motion } from "framer-motion"
import Searchbar from "./Searchbar"


const Hero = () => {
  const NavBar = () => (
    <>
      <nav className='flex items-center justify-end md:w-1/2 font-semibold tracking-wide gap-3 xl:gap-10'>
        <a href='#home'>Home</a>
        <a href='#products'>Products</a>
        <a href='#features'>Features</a>
        <a href='#contact'>Contact</a>
      </nav>
  
      <Searchbar />
    </>
  )


  const scale = 0

  return (
    <>
      <motion.div id='home' initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className='w-[100vw] max-w-full p-4 lg:px-8 bg-amber-400 text-gray-950 flex items-center gap-2 fixed top-0 z-50'>
          <a className='text-xl font-bold tracking-wider' href='#'>
            MyStore
          </a>

          <div className='flex-grow hidden md:flex items-center justify-end lg:justify-evenly mx-2 gap-4'>
            <NavBar />
          </div>

          <div className='flex items-center mx-3 gap-4 justify-evenly'>
            <div className='flex items-center relative hover:bg-white rounded-full p-2 cursor-pointer active:scale-90'>
              <ShoppingCartIcon size={24} className='text-gray-950' />
              <Badge className='absolute -top-2.25 -right-2 rounded-full'>
                {scale}
              </Badge>
            </div>

            <UserCircle size={24} className='text-gray-950' />
          </div>
        </motion.header>

        {/* Home Section */}
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          exit={{ opacity: 0, y: -100 }}
          className='flex flex-col items-center justify-center h-screen md:min-h-[800px] xl:h-screen bg-gray-300'>
          <h1 className='text-4xl font-bold tracking-wider merriweather-bold'>
            Welcome to MyStore
          </h1>
          <p className='text-lg mt-4 merriweather-regular'>
            Your one-stop shop for all things awesome!
          </p>
          <Button
            onClick={() =>
              document
                .getElementById("products")
                ?.scrollIntoView({ behavior: "smooth", block: "nearest" })
            }
            className='mt-8 px-4 py-2 bg-violet-500 text-gray-50 font-medium tracking-wide rounded-md hover:bg-violet-600 poppins-semibold'>
            Shop Now
          </Button>
        </motion.section>
      </motion.div>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='w-full bg-gray-950 text-gray-50 flex flex-col gap-6 py-12 px-6 items-start justify-center'>
        <h3 className='text-3xl font-merriweather font-medium tracking-wide capitalize'>
          Discover your next favorite item
        </h3>
        <p className='font-merriweather tracking-wider'>
          Browse our exclusive collection and find the perfect product tailored
          just for you.
        </p>
        <Button variant='secondary' className='mt-4'>
          Learn More
        </Button>
      </motion.div>
    </>
  )
}

export default Hero
