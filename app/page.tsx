'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const categories = [
  {
    id: 'why-space',
    title: 'Why Space?',
    content: {
      type: 'thesis',
      items: [
        {
          number: '01',
          title: 'Space is the backbone for Earth\'s digital infrastructure',
          image: '/outliers-deck/images/img_1.jpg',
        },
        {
          number: '02',
          title: 'Space is the boundary for cutting-edge deep technology, demonstrating lots of technology transfers',
          image: '/outliers-deck/images/img_2.jpg',
        },
        {
          number: '03',
          title: 'Space ushers in the next generation of abundance',
          image: '/outliers-deck/images/img_3.jpg',
        },
      ],
    },
  },
  {
    id: 'why-now',
    title: 'Why Now?',
    content: {
      type: 'market',
      sections: [
        {
          title: 'Market Overview',
          image: '/outliers-deck/images/figure_19_v1.png',
          points: [
            { label: 'Historical Outcomes and Growth', text: 'We project robust overall growth outlook in the space sector and predict that the emerging space market is at a takeoff point.' },
            { label: 'Digital Infrastructure', text: 'Our current digital infrastructure is increasingly reliant on space-based technologies.' },
            { label: 'Emerging technology', text: 'Emerging technology may soon kickoff the next paradigm for business opportunities. Falcon9 is already a decade-old paradigm, with Starship on the horizon.' },
            { label: 'Technology transfer', text: 'Technologies developed in space have historically been horizontally integrated on Earth-based ventures.' },
          ],
        },
        {
          title: 'New Economics of Space Launch',
          text: 'Launch costs have dropped by 300x in the last 45 years; 100x in the last 20 years (mostly contributed by SpaceX). Starship is projected to reduce costs to ~$50-200/kg to LEO.',
        },
        {
          title: 'Historical Outcomes and Growth Forecast',
          text: 'Our analysis covering 1,552 U.S.-based space companies founded between 2000 to 2025 reveals: 9 companies achieved >10,000x valuation growth multiples, 23 between 1,000-10,000x, and 59 between 100-1,000x. A theoretical $1M investment in each company\'s first round would yield 40x returns (16% IRR) over a 25-year period.',
        },
        {
          title: 'Digital Infrastructure Stacks',
          text: 'Private capital fueled innovation across three satellite technology stacks: GPS, GEOINT, and SatCom. Each stack comprises three layers: Infrastructure, Distribution, and Applications.',
        },
        {
          title: 'Emerging Technologies',
          text: 'We are beginning to see founders raise capital and build around four Emerging Industries: Stations, Lunar, Logistics, and Industrials. With Starship expected to come online soon, we are entering a new phase that will fundamentally change the economics of space.',
        },
        {
          title: 'Geopolitical Play',
          text: 'The Dec. 18 Executive Order "Ensuring American Space Superiority" signed by President Donald J. Trump signals that space is a generational frontier. Goals include returning Americans to the Moon by 2028, attracting $50B+ investment, and establishing a permanent lunar outpost by 2030.',
        },
      ],
    },
  },
  {
    id: 'why-outliers',
    title: 'Why Outliers?',
    content: {
      type: 'strategy',
      sections: [
        {
          title: 'Deal Sourcing',
          text: 'We identify companies across three stacks — infrastructure, distribution, and applications — of space-based technologies. We emphasize founders of known unknowns as areas of greatest potential.',
          partnerships: [
            'Government and regulatory bodies: NASA, U.S. Space Force, DARPA, FAA, FCC',
            'Prime contractors: Lockheed Martin, Boeing, Raytheon',
            'Launch providers: SpaceX, Blue Origin, Rocket Lab, Relativity Space',
            'Research universities: MIT, Caltech-JPL, Johns Hopkins APL',
            'Federal research labs: Los Alamos, Sandia, Lawrence Livermore',
          ],
        },
        {
          title: 'Proprietary Software: Space Technology Atlas',
          text: 'We\'ve developed a first-of-its-kind Space Technology Atlas, an interactive data visualization designed to reveal the intricate landscape of space technology through comprehensive analysis of U.S. federal funding data.',
          link: 'https://model.outliers.fund/sector-space/',
        },
        {
          title: 'Space Ecosystem Map',
          text: 'Our comprehensive network mapping of the space economy\'s key players and themes, from Earth Observation to Human Spaceflight, revealing strategic insights and partnership opportunities.',
          link: 'https://model.outliers.fund/ecosystem-map/',
        },
        {
          title: 'Track Records',
          points: [
            { label: 'Fund History', text: 'Outliers Fund was founded by research scientists, venture builders and investors from MIT in 2016. Outliers Blockchain Fund I / II have returned over 16x / 11x respectively.' },
            { label: 'Team', text: 'We are an experienced and complementary team of early investors of 20+ unicorns and scientists and engineers of flagship space missions.' },
            { label: 'Atlas', text: 'Space systems are complex and require expertise across a spread of domains. Our team\'s holistic skillset uniquely positions us to drive forward the next frontier.' },
          ],
        },
      ],
    },
  },
  {
    id: 'featured-portfolios',
    title: 'Featured Portfolios',
    content: {
      type: 'portfolios',
      companies: [
        {
          name: 'Vast',
          description: 'Vast Space is developing and manufacturing next-generation commercial space stations, starting with Haven-1, with the long-term vision of enabling long-term human habitation in space, including with artificial gravity systems.',
          highlights: [
            { label: 'Market Shift', text: 'With ISS retiring ~2030, NASA is deploying up to $2.1B through its CLD program to seed the next generation of commercial space stations.' },
            { label: 'Team', text: 'Highly technical team with deep SpaceX pedigree - 83% of engineering talent are SpaceX alumni. Jed McCaleb (co-founder of Mt. Gox, Stellar, Ripple) has self-funded Vast for over $1B.' },
          ],
          link: 'https://www.vastspace.com',
        },
        {
          name: 'AstroForge',
          description: 'AstroForge builds deep-space mining technologies, starting with the Odin and DeepSpace-2 missions, which will enable the collection of metal-rich asteroids powering industries on Earth and beyond.',
          highlights: [
            { label: 'Market and Geopolitical Need', text: 'The global Platinum Group Metals market is valued at $24B with 96% supply from just three countries. One M-type asteroid contains ore 5,000x the PGM concentration of Earth-based sources.' },
            { label: 'Strong Dual-Use Case', text: 'Paid contracts on Earth to refine gold, spacecraft sales to DoD and NASA, and hosted payloads for deep space missions de-risk their ambitious goal.' },
          ],
          link: 'https://www.astroforge.com',
        },
      ],
    },
  },
  {
    id: 'fund-terms',
    title: 'Fund Terms',
    content: {
      type: 'terms',
      terms: [
        { label: 'Legal Structure', value: 'Outliers Scientific Fund G.P. (Cayman Islands)\nOutliers Scientific Fund L.P. (Cayman Islands)' },
        { label: 'Fund Size', value: '$300M USD (GP commitment capital being at least $10M USD): minimum 5% of all LPs\' total capital contributions' },
        { label: 'Investment Stage', value: 'Pre-Seed to Series A round' },
        { label: 'Fund Life', value: '5 Years Investment Period (2026-2030)\n5 Years Exit Period (2031-2035)\n1+1 Years Optional Extension (2036-2037)' },
        { label: 'Management Fee', value: '2% of capital commitment during Investment Period\n2% of remaining AUM during Exit/Extension Period' },
        { label: 'Carried Interest', value: '25% deal-based payout under American Waterfall with Clawback Provision' },
        { label: 'Minimum Check', value: '$1M USD for LP; $20M USD for LPAC' },
        { label: 'Capital Call Schedule', value: '40% wired 2026/01/01-01/15\n30% wired 2027/01/01-01/15\n30% wired 2028/01/01-01/15' },
      ],
    },
  },
]

export default function Home() {
  const [expandedId, setExpandedId] = useState<string | null>(null)
  const [expandedSubId, setExpandedSubId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleCategory = (id: string) => {
    setExpandedId(expandedId === id ? null : id)
    setExpandedSubId(null) // Reset sub-accordion when main accordion changes
  }

  const toggleSubCategory = (id: string) => {
    setExpandedSubId(expandedSubId === id ? null : id)
  }

  const searchInContent = (content: any, query: string): boolean => {
    const q = query.toLowerCase()
    const contentStr = JSON.stringify(content).toLowerCase()
    return contentStr.includes(q)
  }

  const filteredCategories = categories.filter((cat) => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return cat.title.toLowerCase().includes(q) || searchInContent(cat.content, q)
  })

  const renderContent = (content: any, categoryId?: string) => {
    if (content.type === 'thesis' && content.items) {
      return (
        <div className="grid md:grid-cols-3 gap-8">
          {content.items.map((item: any) => (
            <div key={item.number} className="flex flex-col">
              <span
                className="text-3xl text-black mb-3"
                style={{ fontFamily: "'Druk Wide', sans-serif", fontWeight: 700 }}
              >
                {item.number}
              </span>
              <p className="text-black/80 text-base leading-snug h-20 mb-6">{item.title}</p>
              {item.image && (
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )
    }

    if (content.type === 'market' && content.sections) {
      return (
        <div className="space-y-3">
          {content.sections.map((section: any, idx: number) => {
            const subId = `market-${idx}`
            return (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSubCategory(subId)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white">{section.title}</h3>
                  <motion.svg
                    animate={{ rotate: expandedSubId === subId ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {expandedSubId === subId && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 bg-white/[0.02] border-t border-white/10">
                        {section.points ? (
                          <div className={section.image ? 'flex flex-col md:flex-row md:items-center gap-6' : ''}>
                            {section.image && (
                              <div className="md:w-1/3 flex-shrink-0">
                                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                                  <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-contain"
                                  />
                                </div>
                              </div>
                            )}
                            <div className={section.image ? 'md:w-2/3' : ''}>
                              <ul className="space-y-3">
                                {section.points.map((point: any, pidx: number) => (
                                  <li key={pidx} className="flex gap-3">
                                    <span className="text-[#9DCA53]">•</span>
                                    <div>
                                      <span className="font-medium text-white">{point.label}: </span>
                                      <span className="text-white/70">{point.text}</span>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            <p className="text-white/70 leading-relaxed">{section.text}</p>
                            {section.image && (
                              <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
                                <Image
                                  src={section.image}
                                  alt={section.title}
                                  fill
                                  className="object-contain"
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      )
    }

    if (content.type === 'strategy' && content.sections) {
      return (
        <div className="space-y-3">
          {content.sections.map((section: any, idx: number) => {
            const subId = `strategy-${idx}`
            return (
              <div key={idx} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSubCategory(subId)}
                  className="w-full flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white">{section.title}</h3>
                  <motion.svg
                    animate={{ rotate: expandedSubId === subId ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-5 h-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {expandedSubId === subId && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 py-4 bg-white/[0.02] border-t border-white/10">
                        <p className="text-white/70 leading-relaxed">{section.text}</p>
                        {section.partnerships && (
                          <ul className="space-y-2 mt-4">
                            {section.partnerships.map((p: any, pidx: number) => (
                              <li key={pidx} className="flex gap-3 text-white/60">
                                <span className="text-[#9DCA53]">•</span>
                                {p}
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.points && (
                          <ul className="space-y-3 mt-4">
                            {section.points.map((point: any, pidx: number) => (
                              <li key={pidx} className="flex gap-3">
                                <span className="text-[#9DCA53]">•</span>
                                <div>
                                  <span className="font-medium text-white">{point.label}: </span>
                                  <span className="text-white/70">{point.text}</span>
                                </div>
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.link && (
                          <a
                            href={section.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-4 text-[#9DCA53] hover:underline"
                          >
                            {section.link} →
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      )
    }

    if (content.type === 'portfolios' && content.companies) {
      return (
        <div className="space-y-10">
          {content.companies.map((company: any) => (
            <div key={company.name} className="space-y-4">
              <h3 className="text-2xl font-bold text-white">{company.name}</h3>
              <p className="text-white/70 leading-relaxed">{company.description}</p>
              <ul className="space-y-3">
                {company.highlights.map((h: any, idx: number) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-[#5DC0D9]">•</span>
                    <div>
                      <span className="font-medium text-white">{h.label}: </span>
                      <span className="text-white/70">{h.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={company.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[#5DC0D9] hover:underline"
              >
                {company.link} →
              </a>
            </div>
          ))}
        </div>
      )
    }

    if (content.type === 'terms' && content.terms) {
      return (
        <div className="space-y-6">
          {content.terms.map((term: any, idx: number) => (
            <div key={idx} className="grid md:grid-cols-[200px_1fr] gap-4 border-b border-white/10 pb-4">
              <span className="font-medium text-[#9DCA53]">{term.label}</span>
              <span className="text-white/80 whitespace-pre-line">{term.value}</span>
            </div>
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Title */}
      <div className="flex flex-col items-center justify-center py-24 px-6">
        <Image
          src="/outliers-deck/images/logo.png"
          alt="Outliers"
          width={200}
          height={60}
          className="mb-8"
          priority
        />
        <h1
          className="text-4xl md:text-6xl lg:text-7xl text-white text-center uppercase tracking-wide"
          style={{ fontFamily: "'Druk Wide', sans-serif" }}
        >
          Scientific Fund
        </h1>
        <p
          className="mt-6 text-base md:text-lg lg:text-xl text-white/80 text-center whitespace-nowrap"
          style={{
            fontFamily: "'Aeonik', sans-serif",
            fontStyle: 'italic',
            fontWeight: 300,
          }}
        >
          Pushing the boundaries of science by investing in defense & commercial Space technologies.
        </p>
      </div>

      {/* Search Box */}
      <div className="sticky top-0 z-20 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#5DC0D9] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="space-y-4">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center justify-between px-6 py-5 bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h2 className="text-xl md:text-2xl font-semibold text-white">
                  {category.title}
                </h2>
                <motion.svg
                  animate={{ rotate: expandedId === category.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              {/* Expandable Content */}
              <AnimatePresence>
                {expandedId === category.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`px-6 py-8 border-t border-white/10 ${
                        category.id === 'why-space' ? 'bg-[#BFBFBF]' : 'bg-white/[0.02]'
                      }`}
                    >
                      {renderContent(category.content, category.id)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
