'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Avatar } from '@nextui-org/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Send,Images } from 'lucide-react'

interface ChatBoxProps {
  user: {
    id: number
    name: string
    pfp: string
  }
  onClose: () => void
}

export default function ChatBox({ user, onClose }: ChatBoxProps) {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'user', text: 'Hey there!' },
    { id: 2, sender: 'other', text: 'Hi! How can I help you?' },
  ])
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: 'user', text: newMessage }])
      setNewMessage('')
    }
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Avatar showFallback/>
            <span>{user.name}</span>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 ${
                message.sender === 'user' ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  message.sender === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </ScrollArea>
        <div className="flex items-center mt-4">
          <Input
            type="text"
            placeholder="Type a message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} className="ml-2">
            <Images className="h-4 w-4" />
          </Button>
          <Button onClick={handleSendMessage} className="ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

