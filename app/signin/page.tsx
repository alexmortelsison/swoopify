import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function SigninPage() {
  return (
    <div className="select-none">
      <div className="bg-black/90 ">
        <Image
          src={
            "https://tinder.com/static/build/f527e47b80b40fa123bc1093175cb7dd.webp"
          }
          alt="bg"
          fill
          className="object-cover h-[100vh] brightness-30 -z-50"
        />
      </div>
      <div className="flex items-center py-8 lg:px-16 px-4 justify-between space-x-2">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={300}
          height={300}
          className="object-cover h-12 w-12"
        />
        <h1 className="text-5xl font-extrabold flex-1">
          <span className="text-[#fc585c]">Swoop</span>
          <span className="text-[#fc0a54]">ify</span>
        </h1>
        <Button className="bg-gradient-to-r from-[#fc585c] to-[#fc0a54] text-xl py-7 px-12 font-bold cursor-pointer font-sans">
          Log in
        </Button>
      </div>
      <div className="mt-44 lg:mt-64 justify-center items-center flex flex-col relative">
        <h1 className="text-white font-sans text-5xl md:text-6xl lg:text-9xl font-extrabold tracking-tight">
          Swoop Right. <span className=" absolute text-9xl">&reg;</span>
        </h1>
        <Button className="bg-gradient-to-r from-[#fc585c] to-[#fc0a54] text-xl py-7 px-12 font-bold cursor-pointer mt-12 font-sans">
          Create account
        </Button>
      </div>
    </div>
  );
}
