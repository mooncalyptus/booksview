import Head from 'next/head';
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main className="bg-[#F5EBEB] divide-y divide-black">
        {/* Navbar */}
        <div className="navbar bg-[#F5EBEB]">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">Booksview</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Home</a>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Category</summary>
                  <ul className="p-2">
                    <li>
                      <a>Book of the month</a>
                    </li>
                    <li>
                      <a>Category</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>About us</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>

        {/* Section body */}
        <section>
        <Image
        src="/images/books.png"
        width={300}
        height={300}
        alt="Picture of the author"
      />
        </section>
      </main>
    </div>
  );
}
