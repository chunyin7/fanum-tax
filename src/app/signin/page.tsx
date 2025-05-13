'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/context/authcontext";
import { useState } from "react";

export default function SignInPage() {
  const [details, setDetails] = useState({
    email: "",
    password: ""
  });

  const { login, isAuthenticated } = useAuth();

  return (
    <main className="min-h-[calc(100vh-9rem)] w-full flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign in with Fanum Tax</CardTitle>
          <CardDescription>Choose how to sign in</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col justify-center space-y-5">
          <Button className="w-full" variant="highlight" size="lg">Sign in with Digital ID</Button>
          <Button className="w-full" variant="highlight" size="lg">Sign in with Passkey</Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-background px-2 text-muted-foreground">
                or
              </span>
            </div>
          </div>
          <form
            onSubmit={() => {
              login(details.email, details.password);
            }}
          >
          <div className="flex-col space-y-2">
            <Label htmlFor="email">Username or Email</Label>
            <Input
              id="email"
              value={details.email}
              onChange={(e) => {
                setDetails((prev) => ({...prev, email: e.target.value}));
              }}
              type="email"
            />
            <Button variant="highlight_link" className="text-xs px-0">Forgot your username?</Button>
          </div>
          <div className="flex-col space-y-2">
            <Label htmlFor="pw">Password</Label>
            <Input
              id="pw"
              type="password"
              value={details.password}
              onChange={(e) => {
                setDetails((prev) => ({...prev, password: e.target.value}));
              }}
            />
            <Button variant="highlight_link" className="text-xs px-0">Forgot your password?</Button>
          </div>
          <Button type="submit" className="w-full" variant="highlight" size="lg">Sign In</Button>
          </form>
        </CardContent>
        <CardFooter>
          <Button variant="highlight_link" className="text-sm px-0">Already have a Fanum Tax account?</Button>
        </CardFooter>
      </Card>
    </main>
  )
}
