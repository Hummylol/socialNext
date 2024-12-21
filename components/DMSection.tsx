'use client';

import { useState } from 'react';
import { Avatar } from "@nextui-org/avatar";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatBox from './ui/Chatbox';

const messages = [
  { id: 1, name: 'Alice Brown', pfp: '/', message: 'Hey, how are you?' },
  { id: 2, name: 'Bob Johnson', pfp: '/', message: 'Did you see the game last night?' },
  { id: 3, name: 'Charlie Green', pfp: '/', message: 'Let\'s meet up this weekend!' },
  { id: 4, name: 'David White', pfp: '/', message: 'Can you help me with something?' },
  { id: 5, name: 'Eva Black', pfp: '/', message: 'Thanks for your help earlier!' },
];

export default function DMSection() {
  const [selectedUser, setSelectedUser] = useState<typeof messages[0] | null>(null);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Direct Messages</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex items-center space-x-4 mb-4 cursor-pointer hover:bg-gray-100 dark:hover:text-black p-2 rounded-md"
              onClick={() => setSelectedUser(message)} // Now we store the entire message object
            >
              <Avatar showFallback/>
              <div>
                <h4 className="text-sm font-semibold">{message.name}</h4>
                <p className="text-sm text-gray-500">{message.message}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      {selectedUser && (
        <ChatBox user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}
    </Card>
  );
}
