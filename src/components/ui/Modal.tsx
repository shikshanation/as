'use client'

import { useEffect } from 'react'
import { useAppStore } from '@/store/useAppStore'

interface ModalProps {
  children: React.ReactNode
  className?: string
}

export default function Modal({ children, className = '' }: ModalProps) {
  const { isModalOpen, closeModal } = useAppStore()

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen, closeModal])

  if (!isModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 transition-opacity"
        onClick={closeModal}
      />
      
      {/* Modal content */}
      <div className={`relative z-10 max-h-[90vh] w-full max-w-4xl mx-4 overflow-y-auto ${className}`}>
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors"
        >
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        {children}
      </div>
    </div>
  )
}