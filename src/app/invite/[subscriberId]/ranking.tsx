import { getRanking } from '@/services/api'
import Image from 'next/image'
import cooper from '../../../assets/medal-cooper.svg'
import gold from '../../../assets/medal-gold.svg'
import silver from '../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()
  return (
    <div className="w-full max-w-[400px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        {ranking.map((item, index) => {
          const rankPosition = index + 1
          return (
            <div
              key={item.id}
              className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3"
            >
              <span className="text-sm text-gray-300 leading-none">
                <span className="font-semibold">
                  {rankPosition} | {item.name}{' '}
                </span>
                Diego Fern
              </span>
              <span className="font-heading text-2xl font-semibold text=gray=200 leading-none">
                {item.score}
              </span>

              {rankPosition === 1 && (
                <Image
                  src={gold}
                  alt="gold"
                  className="absolute top-0 right-8"
                />
              )}
              {rankPosition === 2 && (
                <Image
                  src={silver}
                  alt="silver"
                  className="absolute top-0 right-8"
                />
              )}
              {rankPosition === 3 && (
                <Image
                  src={cooper}
                  alt="cooper"
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
