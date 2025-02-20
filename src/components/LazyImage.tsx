import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"

const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string
  alt: string
  className?: string
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 },
    )

    if (imgRef.current) observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <motion.img
      whileInView={{ scale: 1.1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5 }}
      ref={imgRef}
      src={isVisible ? src : ""}
      data-src={src}
      alt={alt}
      className={className}
      loading='lazy'
    />
  )
}
export default LazyImage
