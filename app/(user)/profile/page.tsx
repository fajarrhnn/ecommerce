import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import LogoutButton from "@/components/btn-logout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  const { name, image, email } = session?.user || {};
  return (
    <section className="w-11/12 mx-auto min-h-screen flex justify-center items-center">
      {session ? (
        <Card>
          {image && (
            <CardHeader>
              <Image
                src={image || ""}
                alt={name || ""}
                width={120}
                height={120}
              />
            </CardHeader>
          )}
          <CardContent className={`${!image && "pt-6"}`}>
            <CardTitle>{name}</CardTitle>
            <CardDescription className="mt-3 mb-0 pb-0">
              You're sign in from {email}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <LogoutButton />
          </CardFooter>
        </Card>
      ) : (
        <div className="space-y-5">
          <h1>Kamu belum login </h1>
          <Button variant={"link"}>
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      )}
    </section>
  );
}
