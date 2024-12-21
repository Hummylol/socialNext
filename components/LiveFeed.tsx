import Image from 'next/image';
import { Avatar } from "@nextui-org/avatar"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Share2,Bookmark } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const posts = [
  {
    id: 1,
    author: 'John Doe',
    content: 'Just had an amazing day at the beach! 🏖️ #summervibes',
    image: 'https://images.unsplash.com/photo-1719937206498-b31844530a96?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
    likes: 42,
    comments: 5,
  },
  {
    id: 2,
    author: 'Jane Smith',
    content: 'Check out my new painting! 🎨 #art #creativity',
    image: 'https://images.unsplash.com/photo-1732408078285-b01ebd3992f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8',
    likes: 89,
    comments: 12,
  },
];

export default function LiveFeed() {
  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Card key={post.id}>
          <CardHeader className="flex flex-row items-center space-x-4 pb-4">
            <Avatar showFallback />

            <div className='w-full flex justify-between items-center'>
              <h3 className="text-lg font-semibold">{post.author}</h3>
              <Popover>
                <PopoverTrigger className='font-bold text-xl'>...</PopoverTrigger>
                <PopoverContent className='flex justify-between'><p>Bookmark</p><Bookmark/></PopoverContent>
              </Popover>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{post.content}</p>
            <div className="relative w-full">
              <Image
                src={post.image}
                alt="Post image"
                height={512}
                width={512}
                className="rounded-md object-cover"
                priority={post.id === 1} 
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <Button variant="ghost" size="sm">
                <Heart className=" h-4 w-4" />
                {post.likes}
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className=" h-4 w-4" />
                {post.comments}
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
