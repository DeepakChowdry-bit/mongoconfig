"use server";
import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { redirect } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { IoLogoApple, IoLogoGithub } from "react-icons/io5";
import { DropdownMenuSeparator } from "./ui/dropdown-menu";

export async function SignIn() {
  const session = await auth();

  if (session?.user) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Card className="w-[90%] md:w-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>login to your account in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-full flex flex-col items-center gap-2">
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <FcGoogle className="text-xl" /> Google
              </Button>
            </form>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
              className="w-full"
            >
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <IoLogoApple className="text-xl" /> Apple
              </Button>
            </form>

            <DropdownMenuSeparator />

            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className="w-full"
            >
              <Button
                variant="default"
                className="w-full flex items-center gap-2"
              >
                <IoLogoGithub className="text-xl" /> Github
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
