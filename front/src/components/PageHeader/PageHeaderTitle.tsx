interface PageHeaderTitleProps {
  title: string
}

export function PageHeaderTitle({ title }: PageHeaderTitleProps) {
  return <h1 className="grow text-2xl font-medium">{title}</h1>
}
