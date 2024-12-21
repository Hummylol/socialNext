"use client";

import { Bell, MessageCircle, Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Profile from "./Profile";
import DMSection from "./DMSection";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Header() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDmOpen, setIsDmOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm dark:bg-[#0c0c0cee]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold dark:text-white text-black">Socialy</h1>
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full"
            />
            <Search className="absolute top-1/2 right-3 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
            </li>
            <li className="lg:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsDmOpen(true)}>
                <MessageCircle className="h-5 w-5" />
              </Button>
            </li>
            <li>
              <Button variant="ghost" size="icon" onClick={() => setIsProfileOpen(true)}>
                <User className="h-5 w-5" />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Profile Dialog */}
      {isProfileOpen && (
        <Profile isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
      )}

      {/* DM Section Dialog with animation */}
      <Dialog open={isDmOpen} onOpenChange={(open) => setIsDmOpen(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Direct Messages</DialogTitle>
          </DialogHeader>
          <DMSection />
        </DialogContent>
      </Dialog>
    </header>
  );
}
