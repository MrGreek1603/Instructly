import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import Cta from '@/components/cta'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard 
        id="123"
        name="Neura The Brainy Explorer"
        topic="Nerual Network of the brain"
        subject="science"
        duration={45}
        color="#ffde6e"/>
            <CompanionCard 
        id="456"
        name="Countcy the number wizard"
        topic="Derivatives and Integrals"
        subject="Maths"
        duration={30}
        color="#e5d0ff"/>
            <CompanionCard 
        id="789"
        name="Verba the Vocabulary Builder"
        topic="English Litrature"
        subject="English"
        duration={30}
        color="#BDE7FF"/>
      </section>

      <section className='home-section'>
        <CompanionsList 
        title="Recent Sessions"
        companions={recentSessions}
        className='w-2/3 max-lg:w-full'
        />
        <Cta />
      </section>
    </main>
  )
}

export default Page