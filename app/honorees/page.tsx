"use client"

import { useEffect, useState } from "react"

export default function AdbaPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Ne rend rien pendant le SSR
  }

  return (
    <>
      <div style={{ height: '100vh' }}>
        <iframe
          src="https://adinkra-institute-murex.vercel.app/honorees"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          title="Adba Honorees"
        />
      </div>
    </>
  )
}
