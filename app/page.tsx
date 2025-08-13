// import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
// import { Button } from "./_components/ui/button"
// import { Input } from "./_components/ui/input"
import Image from "next/image"
// import { quickSearchOptions } from "./_constants/search"
import { db } from "./_lib/prisma"
import SalonItem from "./_components/salon-item"
import { getServerSession } from "next-auth"
import { authOptions } from "./_lib/auth"
import BookingItem from "./_components/booking-item"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { getConfirmedBookings } from "./_actions/_data/get-confirmed-bookings"

const Home = async () => {
  const session = await getServerSession(authOptions)
  const salons = await db.salon.findMany({})
  // const employees = await db.employee.findMany({})

  const confirmedBookings = await getConfirmedBookings

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">
          Olá, {session?.user ? session.user.name?.split(" ")[0] : "Bem-vindo!"}
          !
        </h2>
        <p>
          <span className="capitalize">
            {format(new Date(), "EEEE, dd", { locale: ptBR })}
          </span>
          <span>&nbsp;de&nbsp;</span>
          <span className="capitalize">
            {format(new Date(), "MMMM", { locale: ptBR })}
          </span>
        </p>

        {/* <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon size="icon" />
          </Button>
        </div> */}

        {/* <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
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
        </div> */}

        <div className="relative mt-6 h-[150px] w-full">
          <Image
            alt="Beleza com hora marcada"
            src="/banner01.svg"
            fill
            className="rounded-xl object-cover"
          />
        </div>

        {confirmedBookings.length > 0 && (
          <>
            <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
              Agendamentos
            </h2>
            <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              {confirmedBookings.map((booking) => (
                <BookingItem key={booking.id} booking={JSON.parse(JSON.stringify(booking))} />
              ))}
            </div>
          </>
        )}

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Nossa Unidade
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {salons.map((salon) => (
            <SalonItem key={salon.id} salon={salon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
