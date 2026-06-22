import { Hero }             from '@/components/sections/Hero'
import { OriginStory }      from '@/components/sections/OriginStory'
import { FeatureStrip }     from '@/components/sections/FeatureStrip'
import { AboutTeaser }      from '@/components/sections/AboutTeaser'
import { SignatureFan }     from '@/components/sections/SignatureFan'
import { Testimonials }     from '@/components/sections/Testimonials'
import { ReservationsCTA }  from '@/components/sections/ReservationsCTA'
import { DeliveryBanner }   from '@/components/sections/DeliveryBanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <OriginStory />
      <FeatureStrip />
      <AboutTeaser />
      <SignatureFan />
      <Testimonials />
      <ReservationsCTA />
      <DeliveryBanner />
    </>
  )
}
