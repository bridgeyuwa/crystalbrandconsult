import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoStudyNexus from '@/images/clients/studynexus/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['StudyNexus', logoStudyNexus],
]

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-2xl font-semibold tracking-wider text-white sm:text-left">
            We’ve helped students, families, and professionals achieve their goals
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>

          <div className="text-white mt-5 italic">
            — <span className="font-semibold">Moses Ekwu</span>, CEO, <span className="font-medium">Crystal Brand Educational Consult</span>
          </div>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="Empowering learners for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Crystal Brand Educational Consult, we believe every student can succeed with the right support. Our tailored services help learners overcome academic challenges and achieve their dreams.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />

                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">

                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Services</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.client}
                </p>
                <p className="mt-4 font-display text-base font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>

        <div className="mt-6 flex justify-center">
          <Link
            href="/work"
            className="flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
            aria-label="View all services"
          >
            View all services
            <ArrowIcon className="w-6 flex-none fill-current" />
          </Link>
        </div>


      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Our Services"
        title="Personalized academic support for every learner."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We offer private lessons, exam preparation, adult literacy, and writing support, all tailored to help you reach your academic and professional goals.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Personalized Academic Coaching">
              Private home lessons and one-on-one coaching for kids—whether striving for peak performance or needing extra academic support. We also offer special tutorials for struggling students and homework supervision for those who find assignments challenging.
            </ListItem>
            <ListItem title="Exam & Test Preparation">
              Comprehensive classes for entrance exams into top secondary schools and colleges in Nigeria, as well as intensive tutorials for foreign and local exams such as SAT, IELTS, TOEFL, GRE, WASSCE, UTME, and more.
            </ListItem>
            <ListItem title="English & Literacy Development">
              Intensive phonics, spelling, and language classes for both kids and adults, designed to improve reading, writing, and communication skills quickly. Includes executive adult programs for rapid literacy improvement.
            </ListItem>
            <ListItem title="Writing & Academic Support">
              Professional assistance with essay and script writing, business plans, proposals, and the handling of assignments, projects, and theses for undergraduate and postgraduate students.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'Crystal Brand Educational Consult empowers learners and professionals through personalized academic support, exam preparation, and writing services.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>

      <Container className="mt-24 sm:mt-24 md:mt-24 text-center">
        <FadeIn className="max-w-3xl mx-auto">
          <Image
            src="/logo.png"
            alt="Crystal Brand Educational Consult"
            width={160} // Adjust as needed
            height={80}
            className="mx-auto mb-6"
          />
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 sm:text-7xl">
            Personalized education. Proven results.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Crystal Brand Educational Consult is dedicated to helping learners of all ages achieve academic and professional success through expert guidance and supportive teaching.
          </p>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-block rounded-lg bg-neutral-900 px-6 py-3 text-white hover:bg-neutral-700"
            >
              Explore Our Services →
            </Link>
          </div>
        </FadeIn>
      </Container>



      {/* <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-7xl">
            Personalized education. Proven results.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Crystal Brand Educational Consult is dedicated to helping learners of all ages achieve academic and professional success through expert guidance and supportive teaching.
          </p>
        </FadeIn>
      </Container> */}

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        We chose Crystal Brand Educational Consult because of their outstanding reputation. They provided the academic support we needed, delivering exceptional results in a short time.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}