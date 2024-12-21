import React, { useState } from "react";
import { Avatar } from "@nextui-org/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProfileProps {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}

const Profile: React.FC<ProfileProps> = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState("johndoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("");

  const handleUpdate = () => {
    alert("Profile updated!");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Profile Settings</DialogTitle>
        </DialogHeader>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">Your Profile</CardTitle>
          </CardHeader>
          <CardContent>
            {/* Profile Top Section */}
            <div className="flex items-center space-x-8 mb-8">
              {/* Avatar */}
              <div className="w-1/4 flex justify-center">
                <Avatar showFallback className="h-24 w-24" />
              </div>
              {/* Username and Followers */}
              <div className="w-2/4">
                <p className="text-2xl font-bold">{username}</p>
                <p className="text-sm mt-2">Professional orange cat hater</p>
              </div>
              {/* Change Picture Button */}
              <div className="flex justify-center space-x-8 mt-2">
                  <div className="-mt-2 text-center">
                    <p className="text-lg font-semibold">36</p>
                    <p className="text-sm text-muted-foreground">Followers</p>
                  </div>
                  <div className="-mt-2 text-center">
                    <p className="text-lg font-semibold">36</p>
                    <p className="text-sm text-muted-foreground">Following</p>
                  </div>
                </div>
            </div>
            
            <div className="w-1/4 -mt-6 mb-4 flex justify-center">
                <Button variant="outline">Change Picture</Button>
              </div>

            <Separator className="mb-6" />

            {/* Editable Fields */}
            <div className="space-y-6">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a new password"
                />
              </div>
            </div>

            <Separator className="my-6" />

            {/* Action Buttons */}
            <div className="flex justify-end">
              <Button variant="outline" className="mr-2" onClick={() => onClose(false)}>
                Cancel
              </Button>
              <Button onClick={handleUpdate}>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default Profile;
