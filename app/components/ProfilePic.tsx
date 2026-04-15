import Image from "next/image";

export default function ProfilePic() {
  return (
    <div className="relative w-40 h-40 overflow-hidden rounded-full border-4 border-[#b0a7a2] shadow-xl mx-auto ring-4 ring-[#b0a7a2]/30 hover:ring-[#b0a7a2]/60 transition-all duration-300 transform hover:scale-105 bg-[#b0a7a2]">
      <Image
        src="/profile.png"
        alt="Shyam's Profile Picture"
        fill
        sizes="(max-width: 160px) 100vw, 160px"
        className="object-cover"
        priority
      />
    </div>
  );
}
