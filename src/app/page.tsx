import Image from "next/image";
import verified from "../assets/verified-badge.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-6xl text-center font-black text-[color:var(--title)]">Encontre o que voce<br /><span className="bg-gradient-to-r from-blue-700 to-blue-500 inline-block text-transparent bg-clip-text">precisa</span> sem sair de casa</h1>
      <span className="flex items-center gap-2">
        <p>Produtos com qualidade e verificados para garantir sua segurança!</p>
        <Image src={verified} alt="Verified Badge" className="w-5 h-5" />
      </span>
    </main>
  )
}
