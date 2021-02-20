import { Nav__main } from './Nav.style'
import Link from 'next/link'

const Nav = () => {
  return (
    <Nav__main>
      <Link href="/">
        Home
      </Link>
      <Link href="/dashboard">
        dashboard
      </Link>
      <Link href="/bot">
        bot
      </Link>
      <Link href="/backTest">
        backTest
      </Link>
    </Nav__main>
  )
}

export default Nav