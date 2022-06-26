import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Life Saver</span>
              <span>Gobe</span>
            </h1>
            <h2>Anigyie!!</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Just Order Gobe :)</p>
      </footer>
    </div>
  )
}