import CHOTAIN from '../../assets/maps/chotain.webp'
import MEAUX from '../../assets/maps/meaux.webp'

export type ServerStatus = 'online' | 'offline' | 'restarting'
export type ServerMap = 'chotain' | 'meaux'

const getStatusColor = (status: ServerStatus) => {
  switch (status) {
    case 'online':
      return 'bg-emerald-500'
    case 'offline':
      return 'bg-red-800'
    case 'restarting':
      return 'bg-yellow-500'
  }
}

type ServerItem = {
  status: ServerStatus
  name: string
  map: ServerMap
  maxSlots: number
  totalPlayers: number
}

export const ServerItem = ({ status, name, map, maxSlots, totalPlayers }: ServerItem) => {
  const statusColor = getStatusColor(status)

  return (
    <div className='flex flex-col gap-2 '>
      <div className='w-[140px] md:max-w-[200px] overflow-clip rounded-lg border-[4px] border-gray-300 border-opacity-90'>
        <img src={map === 'chotain' ? CHOTAIN : MEAUX} width={'100%'} height={'auto'} className='brightness-90' />
      </div>

      <div className='p-0.5'>
        <div className='flex items-center justify-between gap-2'>
          <h3 className='text-xl font-semibold'>{name}</h3>
          <div className={`w-4 h-4 rounded-md border-[1px] border-gray-700 animate-glow ${statusColor}`}></div>
        </div>

        <div className='flex items-center justify-between gap-2'>
          <p className='font-semibold text-md'>Players</p>
          <p className='text-md'>
            {totalPlayers}/{maxSlots}
          </p>
        </div>
      </div>
    </div>
  )
}
