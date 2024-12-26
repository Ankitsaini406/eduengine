import Image from "next/image";


export default function Home() {
  return (
    <div className="container m-auto">
      <main className="w-full h-screen flex items-center justify-center">
        <Image src="/favicon.ico" alt="Eduengine Logo" width={200} height={200} />
      </main>
    </div>
  );
}
