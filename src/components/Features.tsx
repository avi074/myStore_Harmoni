import { motion } from "framer-motion"
import {
  BadgeCheck,
  Headset,
  HeartHandshake,
  ShieldCheck,
  Truck,
  Undo,
} from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: BadgeCheck,
      title: "Quality Assurance",
      description: "Only the best products",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get your order in no time",
    },
    {
      icon: Undo,
      title: "Easy Returns",
      description: "Hassle-free returns",
    },
    {
      icon: HeartHandshake,
      title: "Customer Satisfaction",
      description: "We guarantee your satisfaction",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description: "We're here for you, always",
    },
    {
      icon: ShieldCheck,
      title: "Secure Payment",
      description: "Safe and secure transactions",
    },
  ]
  return (
    <motion.div
      id='features'
      className='pt-20 px-4'
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}>
      <h2 className='text-orange-500 text-lg pl-16'>
        <span className='bg-orange-500 border-6 mr-3 rounded-sm'></span>
        Our Features
      </h2>

      <div className='mt-8 grid lg:grid-cols-3 px-16 gap-8'>
        {features.map((feature, index) => (
          <div
            key={index}
            className='flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:scale-105 transition-all ease-linear '>
            <feature.icon className='w-12 h-12 text-orange-500 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
            <p className='text-gray-600 text-center'>{feature.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Features
