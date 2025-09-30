import { metadata } from "./metadata"


export { metadata }

export default function Page() {
  return (

<main className='p-5'>
      <section>
        <div className='breadcrumbs text-xs'>
          <ul>
            <li>home</li>
            <li>static-metadata</li>
          </ul>
        </div>
        <h1 className='text-2xl font-bold'>Static Metadata Page</h1>
      </section>
      <section className='p-6 max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-green-700'>
          Tentang Purwadhika
        </h1>
        <p className='mt-4 text-gray-700 leading-relaxed'>
          Purwadhika Digital Technology School adalah pelopor pendidikan
          teknologi di Indonesia yang telah meluluskan ribuan talenta digital.
          Kami menyediakan program coding, UI/UX design, data science, dan
          digital marketing yang sesuai kebutuhan industri.
        </p>

        <section className='mt-8'>
          <h2 className='text-3xl font-semibold'>Visi & Misi</h2>
          <ul className='list-disc pl-6 mt-2 text-gray-600'>
            <li>Mengembangkan ekosistem teknologi Indonesia</li>
            <li>Menjembatani talenta dengan dunia industri digital</li>
            <li>
              Mendorong inovasi melalui pendidikan yang relevan dan praktis
            </li>
          </ul>
        </section>
      </section>
    </main>

  )
}