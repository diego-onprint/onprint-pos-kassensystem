"use client"

import { useEffect, useState } from "react"
import { socket } from "@/socket"
import NewProductForm from "./pos/_components/forms/new-product/NewProductForm"

export default function Home() {

  //TODO set to context state
  const [connected, setConnected] = useState<boolean>()

  useEffect(() => {
    setConnected(socket.connected)
  }, [])

  console.log(connected)

  const handleClose = () => {
    const event = new Event("close-browser-event");
    window.dispatchEvent(event);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NewProductForm />
      <button onClick={handleClose}>
        Test
      </button>
    </main>
  );
}
