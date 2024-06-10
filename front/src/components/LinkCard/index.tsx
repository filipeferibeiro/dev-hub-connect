import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip'
import { ChevronRight, Copy, Ellipsis } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '../ui/badge'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandGroup, CommandItem, CommandList } from '../ui/command'

interface LinkCardProps {
  title: string
  url: string
}

export function LinkCard({ title, url }: LinkCardProps) {
  return (
    <div className="flex flex-col p-4 border-[1px] rounded-md gap-4 hover:scale-105 transition-all">
      <header className="w-full flex justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="ghost">
              <Ellipsis className="w-4 h-4" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-32 p-0">
            <Command>
              <CommandList>
                <CommandGroup>
                  <CommandItem>Edit</CommandItem>
                  <CommandItem>Delete</CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </header>
      <Badge className="self-start" variant="outline">
        Category
      </Badge>
      <div className="flex gap-2 items-center w-full">
        <Button asChild className="flex-1">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="flex gap-1 justify-center items-center"
          >
            Acessar
            <ChevronRight className="w-4 h-4" />
          </a>
        </Button>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <Copy className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy to clipboard</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}
