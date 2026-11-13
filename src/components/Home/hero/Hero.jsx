import React from 'react'
import Comparison from '../Comparison/Comparison'

export default function Hero() {
  return (
    <section className='mx-auto flex  items-center px-6 py-20 bg-surface'>
        <div className=' grid w-full items-center gap-16 lg:grid-cols-2'>
            <div className='Left-Side flex flex-col items-start'>
                <span className='text-small font-semibold uppercase tracking-[0.2em] text-primary'>
                    WebAssembly Security
                </span>

                <h1 className='mt-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-hero'>
                    Know what your components can access.
                </h1>

                <p className=' mt-6 max-w-xl text-body leading-relaxed text-text-muted'>
                    Track capability changes between releases.
                    Detect unexpected permissions before they reach production.
                </p>


                <div className='mt-10 flex flex-wrap items-center gap-4'>
                    <button className='rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-primary'>
                        Explore Ledger..
                    </button>
                </div>
            </div>
        </div>

        <div className='Right-Side min-h-55 rounded-2xl border border-border bg-surface min-w-3xl'>
            <Comparison/>
        </div>
    </section>
  )
}
