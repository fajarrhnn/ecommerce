import Link from "next/link";

export default function App() {
  return (
    <section className="w-full mx-auto flex justify-center items-center min-h-screen">
      <div className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/profile"}>Profile</Link>
      </div>
    </section>
  );
}
