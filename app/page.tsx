import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { quickSearchOptions } from "./_constants/search"
import { db } from "./_lib/prisma"
import SalonItem from "./_components/salon-item"

const Home = async () => {
  const salons = await db.salon.findMany({})

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Karina!</h2>
        <p>Segunda-feira, 05 e agosto</p>

        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon size="icon" />
          </Button>
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button className="gap-2" variant="secondary" key={option.title}>
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Beleza com hora marcada"
            src="/banner01.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
            </div>

            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">14:00</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-5 pt-0">
        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Nossa Unidade
        </h2>
        <div className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {salons.map((salon) => (
            <SalonItem key={salon.id} salon={salon} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="flex flex-col gap-2 px-5 py-6">
            <p className="text-sm text-gray-400">
              © 2025 Copyright <span className="font-semibold">Beauty</span>
            </p>
            <p className="text-xs text-gray-400">
              Powered By <span className="font-semibold">Kahfujii</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
