import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { ProductsByCategory } from "./components/ProductList"
import Features from "./components/Features"
import { CategoryContext } from "./contexts/CategoryContext"
import { useState } from "react"

const App = () => {
  const [category, setCategory] = useState<string>("")

  const changeCategory = (category:string) => setCategory(category)

  return (
    <CategoryContext.Provider value={{category, changeCategory}}>
      <Hero />
      <ProductsByCategory />
      <Features />
      <Footer />
    </CategoryContext.Provider>
  )
}

export default App
