'use client'

import Image from 'next/image'
import { useAppStore } from '@/store/useAppStore'
import { Clock } from 'lucide-react'

interface WebinarBannerProps {
  title?: string
  date?: string
  time?: string
  speakerName?: string
  speakerTitle?: string
  speakerImage?: string
  onRegister?: () => void
}

export default function WebinarBanner({
  title = "From Execution to Co-creation: The Strategic Case for ER&D Outsourcing to India",
  date = "29th October, 2025 Wednesday",
  time = "10:00 am (IST)",
  speakerName = "Shwetank Saini",
  speakerTitle = "Deputy Director, Nasscom Insights",
  speakerImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  onRegister
}: WebinarBannerProps) {
  const { openModal } = useAppStore()

  const handleRegisterClick = () => {
    if (onRegister) {
      onRegister()
    } else {
      openModal('newsletter')
    }
  }
  return (
    <div className="relative w-full mx-auto bg-gradient-to-r from-[#C73532] to-[#D04744] overflow-hidden shadow-xl">
      <div className="relative flex items-center justify-between px-8 py-6">
        {/* Left section - Branding and Join Badge */}
        <div className="flex items-center gap-6">
          <div className="text-white">
            <div className="text-lg font-bold leading-tight">nasscom</div>
            <div className="text-sm font-light">insights</div>
          </div>

          <div className="bg-[#8B1F1C] border-2 border-white rounded px-4 py-3">
            <div className="text-white text-base font-bold leading-tight">Join</div>
            <div className="text-white text-base font-bold leading-tight">The</div>
            <div className="text-white text-base font-bold leading-tight">Webinar</div>
          </div>
        </div>

        {/* Center section - Main content */}
        <div className="flex-1 mx-12">
          <h1 className="text-white text-3xl font-bold leading-tight mb-6">
            {title}
          </h1>

          <button
            onClick={handleRegisterClick}
            className="bg-[#F4D03F] hover:bg-[#F7DC6F] text-black font-bold text-sm py-3 px-10 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            REGISTER NOW
          </button>
        </div>

        {/* Right section - Date, time and speaker */}
        <div className="flex items-center gap-8">
          {/* Date and time */}
          <div className="text-white">
            <div className="text-5xl font-bold mb-1">
              29<sup className="text-xl">th</sup>
            </div>
            <div className="text-sm mb-3">
              October, 2025<br />
              Wednesday
            </div>
            <div className="flex items-center gap-2 text-sm bg-white text-black px-3 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              {time}
            </div>
          </div>

          {/* Speaker info */}
          <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow-lg">
            <div className="text-right">
              <div className="bg-[#C73532] text-white text-xs font-semibold px-3 py-1 rounded mb-2 inline-block">
                Insights
              </div>
              <div className="text-gray-600 text-xs mb-1">
                Simplified by
              </div>
              <div className="text-gray-900 text-sm font-bold">
                {speakerName}
              </div>
              <div className="text-gray-600 text-xs">
                {speakerTitle}
              </div>
            </div>

            <div className="w-20 h-20 rounded-lg overflow-hidden shadow-md">
              <Image
                src={speakerImage}
                alt={speakerName}
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}