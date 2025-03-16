import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <div className="flex items-center justify-between">
        <Link href={"/"}>
          <div className="flex space-x-2 items-center">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={300}
              height={300}
              className="object-cover h-12 w-12"
            />
            <h1 className="text-5xl font-extrabold">
              <span className="text-[#fc585c]">Swoop</span>
              <span className="text-[#fc0a54]">ify</span>
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
