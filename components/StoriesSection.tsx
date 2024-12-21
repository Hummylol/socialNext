"use client"

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

const stories = [
  { id: 1, name: 'Your Story' },
  { id: 2, name: 'John Doe' },
  { id: 3, name: 'Jane Smith' },
  { id: 4, name: 'Bob Johnson' },
  { id: 5, name: 'Alice Brown' },
  { id: 6, name: 'Charlie Green' },
]

export default function StoriesSection() {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    // Fetch random images from Unsplash API
    const fetchImages = async () => {
      try {
        const imagePromises = stories.map(() =>
          fetch(`https://source.unsplash.com/random/100x100?sig=${Math.random()}`)
            .then((response) => response.url)
        )
        const fetchedImages = await Promise.all(imagePromises)
        setImages(fetchedImages)
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border dark:bg-[#0c0c0cee]">
      <div className="flex w-max space-x-4 p-4">
        {stories.map((story, index) => (
          <div key={story.id} className="flex flex-col items-center space-y-1">
            <Avatar className="w-16 h-16 ring-2 ring-blue-500 ring-offset-2">
              <AvatarImage src={images[index]} alt={story.name} />
              <AvatarFallback>{story.name[0]}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{story.name}</span>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}