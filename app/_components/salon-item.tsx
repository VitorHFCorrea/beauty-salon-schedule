import Link from "next/link"
import { Salon } from "../generated/prisma"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

interface SalonItemProps {
  salon: Salon
}

const SalonItem = ({ salon }: SalonItemProps) => {
  return (
    <Card className="min-w-full rounded-2xl">
      <CardContent className="p-0 px-2 py-2">
        <div className="relative h-[200px] w-full">
          <Image
            alt={salon.name}
            fill
            className="rounded-2xl object-cover"
            src={salon.imageUrl}
          />
        </div>

        <div className="p-2">
          <h3 className="truncate font-semibold">{salon.name}</h3>
          <p className="truncate text-sm text-gray-400">{salon.address}</p>
          <Button className="mt-3 w-full text-base" asChild>
            <Link href={`/salons/${salon.id}`}>Reservar</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default SalonItem
