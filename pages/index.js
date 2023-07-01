import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main className="bg-[#F5EBEB]">
        {/* Navbar */}
        <nav class="flex px-12 pt-10">
          <div class="grow">
            <span>Tes</span>
          </div>
          <div class="flex gap-8">
            <span>CASE STUDIES</span>
            <span>WORK</span>
            <span>ABOUT</span>
            <span>CONTACT</span>
          </div>
        </nav>

        {/* Section body */}
        <section>


        </section>
      </main>
    </div>
  );
}
