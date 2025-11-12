'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Select from 'react-select';
import { newsletterSchema, type NewsletterFormData, frequencyOptions, categoryOptions } from '@/types/schemas';
import { useAppStore } from '@/store/useAppStore';

export default function NewsletterModal() {
  const { closeModal } = useAppStore();
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      frequency: 'weekly',
      categories: [],
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log('Newsletter subscription:', data);

      // Show success message (you can use a toast library here)
      alert('Successfully subscribed to newsletter!');

      reset();
      closeModal(); // Close modal after successful submission
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-linear-to-r from-[#FF6B35] to-[#f44336] px-8 py-6">
        <h2 className="text-3xl font-bold text-white text-center">
          Register for Webinar
        </h2>
        <p className="text-white/90 text-center mt-2">
          Subscribe to get webinar updates and latest insights
        </p>
      </div>

      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address *
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              className="w-full rounded-lg border-2 border-gray-300 px-4 py-3 text-gray-900 transition-all focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm font-medium text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Frequency - react-select */}
          <div>
            <label htmlFor="frequency" className="mb-2 block text-sm font-semibold text-gray-700">
              Email Frequency *
            </label>
            <Controller
              name="frequency"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  instanceId="frequency-select-modal"
                  options={frequencyOptions}
                  value={frequencyOptions.find(opt => opt.value === field.value)}
                  onChange={(option) => field.onChange(option?.value)}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Select frequency..."
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderWidth: '2px',
                      borderColor: state.isFocused ? '#FF6B35' : '#d1d5db',
                      boxShadow: state.isFocused ? '0 0 0 3px rgba(255, 107, 53, 0.1)' : 'none',
                      '&:hover': {
                        borderColor: '#FF6B35',
                      },
                      minHeight: '48px',
                      borderRadius: '0.5rem',
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isSelected
                        ? '#FF6B35'
                        : state.isFocused
                        ? '#fff7ed'
                        : 'white',
                      color: state.isSelected ? 'white' : '#1f2937',
                      cursor: 'pointer',
                    }),
                  }}
                />
              )}
            />
            {errors.frequency && (
              <p className="mt-2 text-sm font-medium text-red-600">{errors.frequency.message}</p>
            )}
          </div>

          {/* Categories - react-select multi */}
          <div>
            <label htmlFor="categories" className="mb-2 block text-sm font-semibold text-gray-700">
              Interested Topics * (Select multiple)
            </label>
            <Controller
              name="categories"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  instanceId="categories-select-modal"
                  isMulti
                  options={categoryOptions}
                  value={categoryOptions.filter(opt => field.value?.includes(opt.value))}
                  onChange={(options) => field.onChange(options.map(opt => opt.value))}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  placeholder="Select categories..."
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderWidth: '2px',
                      borderColor: state.isFocused ? '#FF6B35' : '#d1d5db',
                      boxShadow: state.isFocused ? '0 0 0 3px rgba(255, 107, 53, 0.1)' : 'none',
                      '&:hover': {
                        borderColor: '#FF6B35',
                      },
                      minHeight: '48px',
                      borderRadius: '0.5rem',
                    }),
                    multiValue: (base) => ({
                      ...base,
                      backgroundColor: '#fff7ed',
                      borderRadius: '0.375rem',
                    }),
                    multiValueLabel: (base) => ({
                      ...base,
                      color: '#FF6B35',
                      fontWeight: 600,
                    }),
                    multiValueRemove: (base) => ({
                      ...base,
                      color: '#FF6B35',
                      ':hover': {
                        backgroundColor: '#FF6B35',
                        color: 'white',
                      },
                    }),
                    option: (base, state) => ({
                      ...base,
                      backgroundColor: state.isSelected
                        ? '#FF6B35'
                        : state.isFocused
                        ? '#fff7ed'
                        : 'white',
                      color: state.isSelected ? 'white' : '#1f2937',
                      cursor: 'pointer',
                    }),
                  }}
                />
              )}
            />
            {errors.categories && (
              <p className="mt-2 text-sm font-medium text-red-600">{errors.categories.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 rounded-lg border-2 border-gray-300 px-8 py-4 text-lg font-bold text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 rounded-lg bg-[#FF6B35] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#e55a2b] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-[#FF6B35]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Registering...
                </span>
              ) : (
                'Register Now'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}