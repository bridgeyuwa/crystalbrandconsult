import { useId } from 'react'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({ label, ...props }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Get in touch
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Reach out for more information, inquiries about our services, or to schedule a consultation. We respond promptly to all messages.
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Call or WhatsApp us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          <div className='space-y-6'>
            <div>
              <dt className="font-semibold text-neutral-950">Mr. Moses Ekwu (CEO/MD)</dt>
              <dd className="space-y-1">
                <Link href="tel:+2347038366784" className="text-neutral-600 hover:text-neutral-950 block">
                  0703 836 6784
                </Link>
                <Link href="tel:+2348138676772" className="text-neutral-600 hover:text-neutral-950 block">
                  0813 867 6772
                </Link>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-neutral-950">Mr. Nathan (Coordinator)</dt>
              <dd className="space-y-1">
                <Link href="tel:+2347036600049" className="text-neutral-600 hover:text-neutral-950 block">
                  0703 660 0049
                </Link>
                <Link href="tel:+2347016000401" className="text-neutral-600 hover:text-neutral-950 block">
                  0701 600 0401
                </Link>
              </dd>
            </div>
          </div>

          <div className='space-y-6'>
          <div>
            <dt className="font-semibold text-neutral-950">WhatsApp</dt>
            <dd>
              <Link
                href="https://wa.me/2348138676772"
                className="text-neutral-600 hover:text-neutral-950"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </Link>
            </dd>
          </div>
          
          </div>
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-neutral-950">General Inquiries</dt>
            <dd>
              <Link
                href="mailto:info@crystalbrandconsult.com"
                className="text-neutral-600 hover:text-neutral-950"
              >
                info@crystalbrandconsult.com
              </Link>
            </dd>
          </div>
          <div>
            <dt className="font-semibold text-neutral-950">Academic Support</dt>
            <dd>
              <Link
                href="mailto:support@crystalbrandconsult.com"
                className="text-neutral-600 hover:text-neutral-950"
              >
                support@crystalbrandconsult.com
              </Link>
            </dd>
          </div>
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Our office
        </h2>
        <p className="mt-6 text-base text-neutral-600">
          Suite 18(E) Second Floor, Jinifa Plaza,
          Central Business District, Abuja, FCT, Nigeria.
        </p>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Crystal Brand Educational Consult for inquiries, support, or to schedule a consultation. We look forward to hearing from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s connect">
        <p>
          Whether you have questions about our educational services, want to schedule a session, or need academic support, we’re here to help.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-y-24">
         
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}