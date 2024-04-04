import { PropsWithChildren } from 'react'

export default function ProductsLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>Sidebar</div>
      {children}
      <div>Footer</div>
    </div>
  )
}
