import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-red-900 px-8 py-3">
      <Link className="text-white font-bold" href="/">
        MongoDB CRUD
      </Link>
      <Link
        className="bg-yellow-200 text-red-900 font-bold p-2 rounded-lg"
        href="/addTopic"
      >
        Add Topic
      </Link>
    </nav>
  )
}
