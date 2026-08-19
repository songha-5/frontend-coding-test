interface cartItems {
  id: number,
  name: string
  price: number,
  isSelected: boolean
}

interface TagProps {
  cartItems: cartItems[]
  onToggle: (id: number) => void
}

export default function Tag({ cartItems, onToggle }: TagProps) {
  
  // 추가할 아이템 컴포넌트화
  return (
    cartItems.map((item) => (
      <button 
        type="button" 
        onClick={() => onToggle(item.id)}
        key={item.id} 
        className={`border rounded px-2 py-1 cursor-pointer ${item.isSelected ? 'text-green-500 border-green-400' : 'text-gray-500 border-gray-400'}`}
      >
        {item.name}
      </button>
    ))
  )
}