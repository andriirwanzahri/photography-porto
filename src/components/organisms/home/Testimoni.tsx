import { MotionH1 } from '@/components/motion/MotionH1'
import MotionInView from '@/components/motion/MotionInView'
import { MotionP } from '@/components/motion/MotionP'
import MotionSection from '@/components/motion/MotionSection'
import { fadeIn, staggerContainer } from '@/utils/variantsMotion'

const nameBrand = 'Photography'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/atoms/Carousel'
import { useEffect, useState } from 'react'

const Testimoni = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [direction, setDirection] = useState<'forward' | 'backward'>(
        'forward'
    )

    // Ambil total slide + posisi aktif
    useEffect(() => {
        if (!api) return

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    // AUTO SLIDE BOLAK-BALIK
    useEffect(() => {
        if (!api) return

        const interval = setInterval(() => {
            if (direction === 'forward') {
                if (current === count - 1) {
                    setDirection('backward')
                    api.scrollPrev()
                } else {
                    api.scrollNext()
                }
            } else {
                if (current === 0) {
                    setDirection('forward')
                    api.scrollNext()
                } else {
                    api.scrollPrev()
                }
            }
        }, 2500)

        return () => clearInterval(interval)
    }, [api, current, count, direction])

    // Handler klik bullet
    const goTo = (index: number) => {
        api?.scrollTo(index)
    }

    return (
        <MotionSection>
            <MotionInView>
                <MotionH1
                    variants={fadeIn}
                    className="mb-6 text-center text-3xl font-bold md:text-5xl"
                >
                    Testimoni Klien
                </MotionH1>
                <MotionP
                    variants={fadeIn}
                    className="text-primary/80 mx-auto max-w-3xl pb-5 text-center text-lg"
                >
                    Apa kata klien tentang pengalaman mereka bersama
                    {' ' + nameBrand}
                </MotionP>
                <MotionInView
                    variants={staggerContainer}
                    className="mx-auto mt-10 flex items-center justify-center"
                >
                    <div className="mx-auto flex h-full w-full flex-col items-center">
                        <Carousel setApi={setApi} className="h-full w-full">
                            <CarouselContent className="h-full">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-full"
                                    >
                                        <div className="flex w-full flex-col items-center gap-8 rounded-3xl border border-white/5 bg-[#111111] p-8 shadow-xl md:flex-row">
                                            {/* LEFT SIDE — PROFILE */}
                                            <div className="flex flex-col items-center text-center md:w-1/3">
                                                {/* Foto Profile */}
                                                <div className="relative">
                                                    <img
                                                        src="/mnt/data/dc97cf17-cab5-41cb-a130-b2dc9193ef79.png"
                                                        alt="client"
                                                        className="h-32 w-32 rounded-full border-4 border-white/10 object-cover shadow-lg"
                                                    />

                                                    {/* Rating */}
                                                    <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-1 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-lg">
                                                        {Array.from({
                                                            length: 5,
                                                        }).map((_, i) => (
                                                            <svg
                                                                key={i}
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                                className="h-4 w-4 text-yellow-400 drop-shadow-md"
                                                            >
                                                                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.728 1.48 8.121L12 18.896l-7.416 4.259 1.48-8.121L0 9.306l8.332-1.151z" />
                                                            </svg>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Nama & Role */}
                                                <h3 className="mt-6 text-xl font-semibold text-white">
                                                    Mardian & Lisa
                                                </h3>
                                                <p className="text-sm text-gray-400">
                                                    Engagement Client
                                                </p>
                                            </div>

                                            {/* RIGHT SIDE — QUOTE */}
                                            <div className="relative md:w-2/3">
                                                {/* Quote icon besar samar */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.2"
                                                    stroke="currentColor"
                                                    className="absolute -top-4 left-0 h-12 w-12 text-white/5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M7 8h4m-2 0v8m6-8h4m-2 0v8"
                                                    />
                                                </svg>

                                                {/* Text Testimonial */}
                                                <p className="text-lg leading-relaxed font-light text-gray-300 italic">
                                                    "Berkat PhotoGraphy, momen
                                                    engagement kami terabadikan
                                                    dengan sangat indah. Tim
                                                    fotografer sangat ramah dan
                                                    profesional. Kami
                                                    mendapatkan banyak pilihan
                                                    foto yang bagus dan albumnya
                                                    sangat berkualitas."
                                                </p>

                                                {/* Quote icon kanan bawah */}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.2"
                                                    stroke="currentColor"
                                                    className="absolute right-0 bottom-0 h-12 w-12 text-white/5"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M7 8h4m-2 0v8m6-8h4m-2 0v8"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        {/* BULLET INDICATOR */}
                        <div className="flex items-center justify-center gap-2 py-4">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goTo(index)}
                                    className={`h-3 w-3 rounded-full transition-all ${
                                        current === index
                                            ? 'bg-primary scale-125'
                                            : 'bg-muted-foreground/40 hover:bg-muted-foreground/70'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </MotionInView>
            </MotionInView>
        </MotionSection>
    )
}

export default Testimoni
