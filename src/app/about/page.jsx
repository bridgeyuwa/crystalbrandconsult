import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'

export const metadata = {
  title: 'About Us',
  description:
    'Crystal Brand Educational Consult: Leading educational services for academic excellence, personalized coaching, and curriculum mastery.',
}

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our core values"
        title="Driven by Excellence, Integrity, and Client Satisfaction"
        invert
      >
        <p>
          At Crystal Brand Educational Consult, our values guide every lesson, every interaction, and every achievement.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Effectiveness" invert>
            We choose proven methods and tailor them for each learner&apos;s unique needs.
          </GridListItem>
          <GridListItem title="Efficiency" invert>
            We maximize learning outcomes in the shortest possible time.
          </GridListItem>
          <GridListItem title="Results" invert>
            Our clients’ progress and success are the truest measures of our own.
          </GridListItem>
          <GridListItem title="Quality" invert>
            We uphold the highest standards in curriculum and instruction.
          </GridListItem>
          <GridListItem title="Affordable/Fair Prices" invert>
            Top-tier education should be accessible. We keep our services affordable and fair.
          </GridListItem>
          <GridListItem title="Client Satisfaction" invert>
            Your satisfaction is our priority — we listen, adapt, and deliver.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            We embrace new ideas and approaches for continuous improvement.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About us" title="Facilitating Academic Excellence">
        <p>
          Crystal Brand Educational Consult is a leading educational firm, offering top-notch, high-quality services that enhance excellent academic performance and help clients realize their goals. Whether you want to secure your future or that of your children through qualitative education, we are here for you.
        </p>
        <p className="mt-2">
          We provide a personalized approach for every learner, whether they are preparing for exams, struggling in class, or striving for the top.
        </p>

      </PageIntro>
      <Container className="mt-16">
        <SectionIntro title="Our Vision" />
        <div className="mb-6 text-neutral-800">
          To be an ever-leading educational service firm, helping our clients attain academic excellence in all their pursuits.
        </div>
        <SectionIntro title="Our Mission" />
        <div className="mb-6 text-neutral-800">
          To combine both refined and practical teaching methodologies in attaining academic excellence for our clients.
        </div>
        <StatList>
          <StatListItem value="1000+" label="Students served" />
          <StatListItem value="10+" label="Years of experience" />
          <StatListItem value="98%" label="Exam success rate" />
        </StatList>
      </Container>

      <Values />


      <ContactSection />
    </>
  )
}