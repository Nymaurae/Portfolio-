import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <div>
    <div>
      <div className="absolute flex flex-row w-screen gap-5 h-12 px-4 items-center justify-center bg-amber-400">
        <Link href="/"><p className="bg-blue-400 hover:bg-amber-200 transition-all duration-300 py-1 px-4 rounded-full font-bold">Home</p></Link>
        <Link href="/projects"> <p className="bg-white hover:bg-black transition-all duration-300 py-1 px-4 rounded-full font-bold">Projects</p></Link>
        <Link href="/"><p className="bg-white hover:bg-black transition-all duration-300 py-1 px-4
         rounded-full font-bold">Contact Me</p></Link>
        <Link href="/"><p className="bg-blue-400 hover:bg-black transition-all duration-300 py-1 px-4 rounded-full font-bold">About Me</p></Link>
        </div>
      <div className="flex flex-col justify-center items-center h-screen text-white">
        <p className="text-6xl font-bold"></p>
        <p className="text-3xl">Wesley Wu</p>
        <p className="text-6xl font-bold"></p>
      <p className="text-2xl"></p>
        </div>
      </div>
    </div>
  );
}
