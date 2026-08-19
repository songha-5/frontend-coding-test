interface cartItems {
  id: number,
  name: string
  price: number,
  count: number,
  isSelected: boolean
}

interface TagProps {
  cartItems: cartItems[]
}

export default function Tag({ cartItems }: TagProps) {
  return (
    cartItems.map((item) => (
      <span key={item.id} className="border border-gray-400 rounded px-2 py-1 text-gray-500">
        {item.name}
      </span>
    ))
  )
}