import { CalendarIcon, HomeIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { quickSearchOptions } from "../_constants/search"
import Image from "next/image"

const SidebarSheet = () => {
  return (
    <SheetContent className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex gap-3 border-b border-solid py-5">
        <Avatar className="h-14 w-14">
          <AvatarImage
            alt="avatar"
            src="profile.svg"
            className="h-full w-full object-cover"
          />
        </Avatar>

        <div className="self-center">
          <p className="font-bold">Karina Fuji</p>
          <p className="text-xs">kahfujiteste@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        <SheetClose asChild>
          <Button
            className="justify-start gap-2 rounded-lg"
            variant="ghost"
            asChild
          >
            <Link href="/">
              <HomeIcon size={18} /> Início
            </Link>
          </Button>
        </SheetClose>
        <Button className="justify-start gap-2 rounded-lg" variant="ghost">
          <CalendarIcon size={18} /> Agendamentos
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid py-5">
        {quickSearchOptions.map((option) => (
          <Button
            key={option.title}
            className="justify-start gap-2 rounded-lg"
            variant="ghost"
          >
            <Image
              alt={option.title}
              src={option.imageUrl}
              height={18}
              width={18}
            />
            {option.title}
          </Button>
        ))}
      </div>

      <div className="flex flex-col gap-2 py-5">
        <Button className="justify-start gap-2 rounded-lg" variant="ghost">
          <LogOutIcon size={18} /> Sair da Conta
        </Button>
      </div>
    </SheetContent>
  )
}

export default SidebarSheet
