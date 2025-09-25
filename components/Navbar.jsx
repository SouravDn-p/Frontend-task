import Image from "next/image";
import Button from "./ui/Button";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex justify-between items-center px-4 py-4">
      <div className="flex items-center">
        <Image
          src="/assets/logo.png"
          alt="ScapeSync Logo"
          width={140}
          height={140}
        />
      </div>
      <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg cursor-pointer">
        Get Started
      </Button>
    </nav>
  );
}
