import { UsersPage } from '@/modules/users'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UsersPage/>
}
