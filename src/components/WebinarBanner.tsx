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
  speakerImage = "https://img.freepik.com/free-photo/business-man-owner-company-office_1303-15851.jpg",
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
      <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between px-4 sm:px-8 py-4 sm:py-6 gap-4 lg:gap-0">
        {/* Left section - Branding and Join Badge */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="text-white">
            <div className="text-sm sm:text-lg font-bold leading-tight">nasscom</div>
            <div className="text-xs sm:text-sm font-light">insights</div>
          </div>

          <div className="bg-[#8B1F1C] border-2 border-white rounded px-3 py-2 sm:px-4 sm:py-3">
            <div className="text-white text-sm sm:text-base font-bold leading-tight">Join</div>
            <div className="text-white text-sm sm:text-base font-bold leading-tight">The</div>
            <div className="text-white text-sm sm:text-base font-bold leading-tight">Webinar</div>
          </div>
        </div>

        {/* Center section - Main content */}
        <div className="flex-1 lg:mx-12 w-full lg:w-auto">
          <h1 className="text-white text-lg sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 sm:mb-6">
            {title}
          </h1>

          <button
            onClick={handleRegisterClick}
            className="bg-[#F4D03F] hover:bg-[#F7DC6F] text-black font-bold text-xs sm:text-sm py-2 px-6 sm:py-3 sm:px-10 rounded-full shadow-lg transition-all duration-200 hover:shadow-xl animate-pulse"
          >
            REGISTER NOW
          </button>
        </div>

        {/* Right section - Date, time and speaker */}
        <div className="flex flex-row lg:flex-row items-start gap-4 sm:gap-8 w-full lg:w-auto">
          {/* Date and time */}
          <div className="text-white">
            <div className="text-3xl sm:text-5xl font-bold mb-1">
              29<sup className="text-base sm:text-xl">th</sup>
            </div>
            <div className="text-xs sm:text-sm mb-2 sm:mb-3">
              October, 2025<br />
              Wednesday
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm bg-white text-black px-2 sm:px-3 py-1 rounded-full">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
              {time}
            </div>
          </div>

          {/* Speaker info */}
          <div className="bg-white rounded-lg p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-lg">
            <div className="text-left sm:text-right">
              <div className="bg-[#C73532] text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded mb-1 sm:mb-2 inline-block">
                Insights
              </div>
              <div className="text-gray-600 text-xs mb-1">
                Simplified by
              </div>
              <div className="text-gray-900 text-xs sm:text-sm font-bold">
                {speakerName}
              </div>
              <div className="text-gray-600 text-xs">
                {speakerTitle}
              </div>
            </div>

            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shadow-md shrink-0">
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