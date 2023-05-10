import Image from 'next/image'

import { BlueGradientText } from '@/components/BlueGradientText'
import { Button } from '@/components/Button'

import verified from '../assets/verified-badge.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-32 px-6">
      <header className="w-full max-w-7xl h-20 flex items-center justify-between">
        <h1 className="text-6xl font-black">
          <BlueGradientText>MP</BlueGradientText>
        </h1>
        <div className="flex items-center justify-between gap-4">
          <Button color="transparent">Entrar</Button>
          <BlueGradientText>
            <Button color="blue" outlined>
              Cadastre-se
            </Button>
          </BlueGradientText>
        </div>
      </header>
      <section className="max-w-7xl h-full flex flex-col items-center justify-center gap-4">
        <h1 className="text-6xl text-center font-black text-[color:var(--title)]">
          Encontre <BlueGradientText>o que voce</BlueGradientText>
          <br />
          <BlueGradientText>precisa</BlueGradientText> sem sair de casa
        </h1>
        <span className="flex items-center gap-2">
          <p>
            Produtos em conta com qualidade e verificados para garantir sua
            segurança!
          </p>
          <Image src={verified} alt="Verified Badge" className="w-5 h-5" />
        </span>
      </section>
    </main>
  )
}
