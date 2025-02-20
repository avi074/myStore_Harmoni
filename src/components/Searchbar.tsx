import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Check, Search } from "lucide-react"
import { useMemo, useState } from "react"
import { Button } from "./ui/button"
import useFetch from "@/hooks/useFetch"
import { useCategory } from "@/contexts/CategoryContext";

export default function Searchbar() {
  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>("")
  const {changeCategory} = useCategory()
  const {
    data: categories,
    loading,
    error,
  } = useFetch("/api/products/categories")

  const memoizedCategories = useMemo(() => {
    const data: { label: string; value: string }[] = []
    if (categories) {
      ;(categories as string[]).forEach((category) => {
        data.push({
          label: category
            .split(" ")
            .map((e) => e[0].toUpperCase() + e.substring(1))
            .join(" "),
          value: category,
        })
      })
    }
    return data
  }, [categories])

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              role='combobox'
              aria-expanded={open}
              className='pop-width justify-between'>
              <span className='truncate'>
                {value
                  ? memoizedCategories.find(
                      (category) => category.value === value,
                    )?.label
                  : "Search products by category..."}
              </span>
              <Search size={24} />
            </Button>
          </PopoverTrigger>
          <PopoverContent asChild className='pop-width p-0'>
            <Command>
              <CommandInput
                placeholder='Enter product category...'
                className='h-9'
              />
              <CommandList>
                <CommandEmpty>No category found.</CommandEmpty>
                <CommandGroup>
                  {memoizedCategories.map((category) => (
                    <CommandItem
                      key={category.value}
                      value={category.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                        changeCategory(currentValue === value ? "" : currentValue)
                      }}>
                      {category.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === category.value
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    </>
  )
}
