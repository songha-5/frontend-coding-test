'use client'

import { useState } from "react";
import Tag from "./_components/tag/Tag";

// 선택된 과일만 계산하도록 추가하기 위한 과일 리스트
const initialCartItems = [
  { id: 1, name: "사과", price: 1000, isSelected: true },
  { id: 2, name: "바나나", price: 2000, isSelected: false },
  { id: 3, name: "오렌지", price: 1500, isSelected: true },
  { id: 4, name: "포도", price: 5000, isSelected: true },
  { id: 5, name: "수박", price: 12000, isSelected: false }
]

export default function Home() {
  // selected 값 변경을 위한 useState
  // 선택한 과일만 계산에 반영하기 위한 코드
  const [cartItems, setCartItems] = useState(initialCartItems)

  // 버튼 선택시 기존의 값은 유지한채, isSelected만 값을 반전하여 선택여부를 변경
  const handleToggle = (id: number) => {
    setCartItems((prevItems) => prevItems.map((item) => item.id === id ? { ...item, isSelected: !item.isSelected } : item))
  }

  // 선택된 과일 가격 계산
  // filter로 선택된 과일들만 계산을 할 수 있음
  const totalAmount = cartItems.filter((item) => {
    return item.isSelected
  }).reduce((acc, currentItem) => {
    return acc + currentItem.price
  }, 0)

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex gap-2">
        <Tag cartItems={cartItems} onToggle={handleToggle} />
      </div>
      
      <p className="mbs-4">총가격: {totalAmount}</p>
    </div>
  )
}
