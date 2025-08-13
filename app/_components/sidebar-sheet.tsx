"use client"

import { CalendarIcon, HomeIcon, LogInIcon, LogOutIcon } from "lucide-react"
import { SheetClose, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet"
import { Button } from "./ui/button"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"
// import { quickSearchOptions } from "../_constants/search"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import { signOut, useSession } from "next-auth/react"
import SignInDialog from "./sign-in-dialog"

const SidebarSheet = () => {
  const { data } = useSession()
  const handleLogoutClick = () => signOut()

  return (
    <SheetContent className="overflow-y-auto [&::-webkit-scrollbar]:hidden">
      <SheetHeader>
        <SheetTitle className="text-left">Menu</SheetTitle>
      </SheetHeader>

      <div className="flex items-center justify-between gap-3 border-b border-solid py-5">
        {data?.user ? (
          <div className="flex items-center gap-2">
            <Avatar className="h-14 w-14">
              <AvatarImage
                alt="avatar"
                src={data?.user?.image ?? ""}
                className="h-full w-full object-cover"
              />
            </Avatar>

            <div className="self-center">
              <p className="font-bold">{data.user.name}</p>
              <p className="text-xs">{data.user.email}</p>
            </div>
          </div>
        ) : (
          <>
            <h2 className="font-bold">Olá, faça seu login!</h2>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="icon">
                  <LogInIcon className="!h-5 !w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] rounded-2xl">
                <SignInDialog />
              </DialogContent>
            </Dialog>
          </>
        )}
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
        <SheetClose asChild>
          <Button className="justify-start gap-2 rounded-lg" variant="ghost" asChild>
            <Link href="/bookings">
              <CalendarIcon size={18} /> Agendamentos
            </Link>
          </Button>
        </SheetClose>
      </div>

      {/* <div className="flex flex-col gap-2 border-b border-solid py-5">
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
      </div> */}

      {data?.user && (
        <div className="flex flex-col gap-2 py-5">
          <Button
            className="justify-start gap-2 rounded-lg"
            variant="ghost"
            onClick={handleLogoutClick}
          >
            <LogOutIcon size={18} /> Sair da Conta
          </Button>
        </div>
      )}
    </SheetContent>
  )
}

export default SidebarSheet
