import { FeatureSteps } from "@/components/FeatureSteps"

const features = [
  { 
    step: 'Step 1', 
    title: 'Schedule Your Visit',
    content: 'Browse properties and book viewings at your convenience with our easy scheduling system.', 
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop' 
  },
  { 
    step: 'Step 2',
    title: 'Property Consultation',
    content: 'Meet with our expert agents who will guide you through the property details and answer all your questions.',
    image: 'https://images.unsplash.com/photo-1556912167-f556f1f39fdf?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 3',
    title: 'Secure Financing',
    content: 'Get connected with trusted financial partners to secure the best mortgage rates and terms.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop'
  },
  { 
    step: 'Step 4',
    title: 'Complete Your Purchase',
    content: 'Finalize paperwork with our legal team and get the keys to your dream home.',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2096&auto=format&fit=crop'
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-muted/30">
      <FeatureSteps 
        features={features}
        title="Your Journey to Home Ownership"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
    </section>
  )
}
