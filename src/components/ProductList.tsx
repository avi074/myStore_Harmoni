import { motion } from "framer-motion"
import { Product } from "@/types"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card"
import useFetch from "@/hooks/useFetch"
import LazyImage from "./LazyImage"
import { Button } from "./ui/button"
import StarRating from "./StarRating"
import { useCategory } from "@/contexts/CategoryContext";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='md:w-1/4 xl:w-1/5 cursor-pointer m-1'>
      <CardHeader className='justify-center items-center'>
        <LazyImage
          src={product.image}
          alt={product.title}
          className='size-48 object-contain m-2 bg-blend-multiply '
        />
      </CardHeader>
      <CardContent className='lg:p-3'>
        <CardTitle
          title={product.title}
          className='py-4 px-1 text-center truncate font-merriweather'>
          {product.title}
        </CardTitle>
        <div className='flex justify-around items-center flex-col-reverse md:flex-row'>
          <h3 className='font-poppins'>${product.price}</h3>
          <StarRating
            rating={product.rating.rate}
            count={product.rating.count}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className='w-full'>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

export const ProductsByCategory = () => {
  const {category} = useCategory()
  const apiEnpoint = category
    ? `/api/products?category=${category}`
    : "/api/products"

  const { data, loading, error } = useFetch(apiEnpoint)
  const products: Product[] = (data as Product[]) || []
  console.log(category)
  return (
    <>
      {/* Loading & Error Handling */}
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>Error: {error}</p>}
      {/* Products Section */}
      <motion.section
        id='products'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
        className='pt-20 p-4'>

        <h4 className='text-orange-500 text-lg pl-16'>
          <span className='bg-orange-500 border-6 mr-3 rounded-sm'></span>
          Our Products
        </h4>

        <h2 className='text-4xl font-raleway tracking-wide font-bold capitalize text-center my-12'>
          Explore our products
        </h2>

        <motion.div className='flex flex-wrap gap-4 justify-center items-center'>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </motion.section>
    </>
  )
}
