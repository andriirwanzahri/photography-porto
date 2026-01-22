import { MotionH1 } from '@/components/motion/MotionH1'
import MotionInView from '@/components/motion/MotionInView'
import { MotionP } from '@/components/motion/MotionP'
import MotionSection from '@/components/motion/MotionSection'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/atoms/Accordion'

import { fadeIn, fadeUp, staggerContainer } from '@/utils/variantsMotion'
import { faqData } from '@/services/faqData'
import type { IFaqProps } from '@/index'

import Skeleton from 'react-loading-skeleton'
import { useQuery } from '@tanstack/react-query'

function FaqSection() {
    const {
        data: Faqs,
        isPending,
        error,
    } = useQuery({
        queryKey: ['FaqData'],
        queryFn: faqData,
    })

    return (
        <MotionSection className="bg-secondary relative mx-auto overflow-hidden py-20 md:py-28">
            <MotionInView className="container">
                <MotionInView
                    variants={staggerContainer}
                    className="mb-16 flex flex-col items-center"
                >
                    <MotionH1
                        variants={fadeUp}
                        className="mb-6 text-center text-4xl font-bold md:text-5xl"
                    >
                        Pertanyaan Umum
                    </MotionH1>
                    <MotionP
                        variants={fadeIn}
                        className="mx-auto max-w-3xl pb-5 text-center text-lg"
                    >
                        Berikut adalah beberapa pertanyaan yang sering diajukan
                        oleh klien kami.
                    </MotionP>
                </MotionInView>

                {/* Accordion component  */}
                <Accordion type="single" collapsible className="w-full">
                    {error ? (
                        <MotionSection>
                            <div className="py-10 text-center text-red-500">
                                {error.message}
                            </div>
                        </MotionSection>
                    ) : isPending ? (
                        // <HeroSkeleton />
                        <div className="container ml-28 gap-4 space-y-9">
                            <Skeleton height={60} width="80%" />
                            <Skeleton height={60} width="80%" />
                            <Skeleton height={60} width="80%" />
                            <Skeleton height={60} width="80%" />
                            <Skeleton height={60} width="80%" />
                            <Skeleton height={60} width="80%" />
                        </div>
                    ) : (
                        Faqs.map((faq: IFaqProps, i: number) => (
                            <MotionInView
                                key={i}
                                variants={fadeIn}
                                className="mx-auto mb-4 max-w-2xl"
                            >
                                <AccordionItem
                                    value={`item-${i}`}
                                    className="data-[state=open]:bg-background/80 rounded-lg transition-colors"
                                >
                                    <AccordionTrigger className="border-b px-6 py-6 text-lg font-medium">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 py-6 text-sm">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </MotionInView>
                        ))
                    )}
                </Accordion>
            </MotionInView>
        </MotionSection>
    )
}

export default FaqSection
