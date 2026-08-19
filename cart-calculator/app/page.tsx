import Tag from "./_components/tag/Tag";

const cartItems = [
  { id: 1, name: "사과", price: 1000, count: 2, isSelected: true },
  { id: 2, name: "바나나", price: 2000, count: 1, isSelected: false },
  { id: 3, name: "오렌지", price: 1500, count: 3, isSelected: true },
  { id: 4, name: "포도", price: 5000, count: 1, isSelected: true },
  { id: 5, name: "수박", price: 12000, count: 1, isSelected: false }
]

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex gap-2">
        <Tag cartItems={cartItems} />
      </div>
      
      <p>총가격: </p>
    </div>
  )
}
