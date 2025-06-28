import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Assessment & Discovery" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by assessing the academic needs and goals of each learner. Our consultative approach involves detailed discussions with parents, guardians, or adult learners to understand strengths, challenges, and aspirations.
        </p>
        <p>
          Based on this discovery, we craft a personalized academic plan and recommend the most suitable services—be it private lessons, one-on-one coaching, or specialized tutorials.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Steps in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Academic assessment</TagListItem>
        <TagListItem>Goal setting</TagListItem>
        <TagListItem>Personalized planning</TagListItem>
        <TagListItem>Consultation with parents/guardians</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Personalized Instruction" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With the plan in place, we match each learner with an experienced educator or coach. We use proven teaching methodologies, adapting to the learner’s pace and preferred learning style.
        </p>
        <p>
          Our services include regular home lessons, one-on-one coaching, tutorial classes, phonics and spelling, homework supervision, and exam prep—all tailored for academic success.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Lesson Planning">
          Custom lesson plans based on the learner’s assessment and curriculum needs.
        </ListItem>
        <ListItem title="Progress Tracking">
          Regular reviews and feedback sessions with families or adult learners.
        </ListItem>
        <ListItem title="Flexible Methodologies">
          Combining traditional and modern teaching approaches for effective results.
        </ListItem>
      </List>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Results & Support" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We monitor and measure academic progress, celebrating milestones and making adjustments as needed. Our commitment extends beyond lessons—we support homework, projects, and exam success.
        </p>
        <p>
          For adult learners, we offer executive classes, exam tutorials, and English fluency programs. We also assist with essay, script, business plan, and thesis writing.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Ongoing Support">
          Continued supervision, guidance, and communication with clients for best outcomes.
        </ListItem>
        <ListItem title="Comprehensive Reporting">
          Transparent updates on academic progress and recommendations.
        </ListItem>
        <ListItem title="Client Satisfaction">
          We welcome feedback and ensure clients’ goals are always at the center of our process.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Our Commitment to Excellence"
      >
        <p>
          At Crystal Brand Educational Consult, we are driven by our core values: effectiveness, efficiency, quality, results, and client satisfaction for every learner and client.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Effectiveness">
            Every teaching method and lesson is chosen for optimal academic growth.
          </GridListItem>
          <GridListItem title="Efficiency">
            We maximize learning outcomes within the shortest possible time.
          </GridListItem>
          <GridListItem title="Results">
            Our success is measured by the achievements of our clients.
          </GridListItem>
          <GridListItem title="Quality">
            We maintain the highest standards in every service we render.
          </GridListItem>
          <GridListItem title="Affordable Prices">
            Our services are both high-quality and accessible to all.
          </GridListItem>
          <GridListItem title="Client Satisfaction & Innovation">
            We innovate continually and value every client’s feedback.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Our Process',
  description:
    'Our proven process for personalized education and academic excellence at Crystal Brand Educational Consult.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How We Help You Succeed">
        <p>
          Our process is designed to unlock academic excellence for every learner. We assess, personalize, and support—ensuring you or your child reaches academic goals with confidence.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}