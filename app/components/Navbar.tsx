import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <Link href={"/"}>
        <div className="flex space-x-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={300}
            height={300}
            className="object-cover h-12 w-12"
          />
          <h1 className="text-3xl font-extrabold">Swoopify</h1>
        </div>
      </Link>
    </div>
  );
}
