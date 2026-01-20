import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/upcart.png"
          alt="Upcart Logo"
          width={100}
          height={20}
          priority
        />
        <div>
          <h1 className="mb-6 text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Everything You Need, One Cart
          </h1>
          <p className="mb-6 text-lg text-zinc-700 dark:text-zinc-300">
            Upcart is your all-in-one shopping solution, combining groceries,
            electronics, clothing, and more into a single, convenient cart.
            Experience seamless shopping like never before.
          </p>
        </div>
      </main>
    </div>
  );
}
