import { format, isFuture } from "date-fns"
import { Prisma } from "../generated/prisma"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { ptBR } from "date-fns/locale"

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: { service: true }
  }>
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isConfirmed = isFuture(booking.date)

  return (
    <>
      <Card className="min-w-[85%]">
        <CardContent className="flex justify-between p-0">
          <div className="flex flex-col gap-2 py-5 pl-5">
            <Badge
              className="w-fit"
              variant={isConfirmed ? "default" : "secondary"}
            >
              {isConfirmed ? "Confirmado" : "Finalizado"}
            </Badge>
            <h3 className="font-semibold">{booking.service.name}</h3>
          </div>

          <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
            <p className="text-sm first-letter:uppercase">
              {format(booking.date, "MMMM", { locale: ptBR })}
            </p>
            <p className="text-2xl">
              {format(booking.date, "dd", { locale: ptBR })}
            </p>
            <p className="text-sm">
              {format(booking.date, "HH:mm", { locale: ptBR })}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItem
