"use client";

import { Button } from "@/components/ui/button";
import {
  UserButton,
  SignInButton,
  SignOutButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";
import { UserCircle } from "lucide-react";

export const AuthButton = () => {
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add menu items for Studio and User profile */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <Button
            variant="outline"
            className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none"
          >
            <UserCircle />
            Sign in
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  );
};
