import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Bug, Download, LayoutGrid, LogOut, Link } from 'lucide-react'
import { signOut } from 'next-auth/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'

interface DefaultLayoutProps {
  children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
  async function handleLogout() {
    await signOut({ redirect: true, callbackUrl: '/login' })
  }

  return (
    <div className="flex h-screen">
      <aside className="flex flex-col gap-3 w-80 p-6 border-r-[1px]">
        <div className="flex items-center justify-between">
          <h1 className="font-bold">
            <span className="text-2xl">DevHub</span>
            <span className="text-xs">Connect</span>
          </h1>
          <ThemeSwitcher />
        </div>
        <nav className="grow">
          <Command>
            <CommandList>
              <CommandGroup className="p-0">
                <CommandItem
                  className="flex gap-2 items-center cursor-pointer p-3"
                  asChild
                >
                  <NextLink href="/" className="flex gap-2 items-center">
                    <LayoutGrid className="h-4 w-4" />
                    Dashboard
                  </NextLink>
                </CommandItem>
                <CommandItem
                  className="flex gap-2 items-center cursor-pointer p-3"
                  asChild
                >
                  <NextLink href="/bugs" className="flex gap-2 items-center">
                    <Bug className="h-4 w-4" />
                    Bugs Track
                  </NextLink>
                </CommandItem>
                <CommandItem
                  className="flex gap-2 items-center cursor-pointer p-3"
                  asChild
                >
                  <NextLink href="/links" className="flex gap-2 items-center">
                    <Link className="h-4 w-4" />
                    Links
                  </NextLink>
                </CommandItem>
                <CommandItem
                  className="flex gap-2 items-center cursor-pointer p-3"
                  asChild
                >
                  <NextLink
                    href="/downloads"
                    className="flex gap-2 items-center"
                  >
                    <Download className="h-4 w-4" />
                    Downloads
                  </NextLink>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </nav>
        <footer className="flex flex-col gap-3 items-center">
          <Select>
            <SelectTrigger aria-label="Select category" id="category">
              <SelectValue placeholder="Organization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="factory">Org 1</SelectItem>
              <SelectItem value="office">Org 2</SelectItem>
              <SelectItem value="warehouse">Org 3</SelectItem>
            </SelectContent>
          </Select>
          <div className="w-full flex gap-3 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button
              className="grow flex gap-3 items-center"
              variant="destructive"
              onClick={handleLogout}
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </footer>
      </aside>
      <main className="p-6 w-full">{children}</main>
    </div>
  )
}
