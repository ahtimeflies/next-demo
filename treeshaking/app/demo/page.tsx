'use client'
import { test1 } from '@/utils'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      demo{test1()}
    </main>
  )
}
