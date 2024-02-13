import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <ul className="flex">
            <Link href="/" className="btn btn-ghost text-lg">
              SaFi
            </Link>
            <li>
              <Link className="btn btn-ghost round-btn" href="/who">
                Who Are We
              </Link>
            </li>

            <li>
              <Link className="btn btn-ghost round-btn" href="/login">
                Login
              </Link>
            </li>
            <li></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
