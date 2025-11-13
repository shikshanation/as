'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Select from 'react-select';
import { User, Building, Mail, Phone, MapPin, Briefcase, Globe } from 'lucide-react';

const membershipSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),

  // Professional Information
  companyName: z.string().min(2, 'Company name is required'),
  jobTitle: z.string().min(2, 'Job title is required'),
  industry: z.string().min(1, 'Please select an industry'),
  companySize: z.string().min(1, 'Please select company size'),

  // Location
  country: z.string().min(1, 'Country is required'),
  city: z.string().min(2, 'City is required'),

  // Membership Type
  membershipType: z.enum(['individual', 'corporate', 'student']).refine((val) => val !== undefined, {
    message: 'Please select a membership type',
  }),

  // Interests
  interests: z.array(z.string()).min(1, 'Select at least one area of interest'),

  // Agreement
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
});

type MembershipFormData = z.infer<typeof membershipSchema>;

const industryOptions = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'retail', label: 'Retail' },
  { value: 'other', label: 'Other' },
];

const companySizeOptions = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '501+', label: '501+ employees' },
];

const interestOptions = [
  { value: 'ai', label: 'Artificial Intelligence' },
  { value: 'blockchain', label: 'Blockchain' },
  { value: 'cloud', label: 'Cloud Computing' },
  { value: 'cybersecurity', label: 'Cybersecurity' },
  { value: 'data-science', label: 'Data Science' },
  { value: 'iot', label: 'Internet of Things' },
  { value: 'mobile', label: 'Mobile Development' },
  { value: 'web', label: 'Web Development' },
];

export default function MemberRegistrationForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      interests: [],
      membershipType: 'individual',
    },
  });

  const onSubmit = async (data: MembershipFormData) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log('Registration data:', data);
      alert('Registration successful! We will contact you soon.');
      reset();
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  return (
    <div className="rounded-2xl bg-white p-6 sm:p-8 md:p-10 shadow-2xl">
      {/* Header */}
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="mb-2 sm:mb-3 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Become a Member
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Join our community and unlock exclusive benefits
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-800">
            <User className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF6B35]" />
            Personal Information
          </h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block text-sm font-semibold text-gray-700">
                First Name *
              </label>
              <input
                {...register('firstName')}
                type="text"
                id="firstName"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="John"
              />
              {errors.firstName && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.firstName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block text-sm font-semibold text-gray-700">
                Last Name *
              </label>
              <input
                {...register('lastName')}
                type="text"
                id="lastName"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.lastName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                <Mail className="inline h-4 w-4 mr-1" />
                Email Address *
              </label>
              <input
                {...register('email')}
                type="email"
                id="email"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                <Phone className="inline h-4 w-4 mr-1" />
                Phone Number *
              </label>
              <input
                {...register('phone')}
                type="tel"
                id="phone"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Professional Information */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-800">
            <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF6B35]" />
            Professional Information
          </h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="companyName" className="mb-2 block text-sm font-semibold text-gray-700">
                <Building className="inline h-4 w-4 mr-1" />
                Company Name *
              </label>
              <input
                {...register('companyName')}
                type="text"
                id="companyName"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="Acme Corporation"
              />
              {errors.companyName && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.companyName.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="jobTitle" className="mb-2 block text-sm font-semibold text-gray-700">
                Job Title *
              </label>
              <input
                {...register('jobTitle')}
                type="text"
                id="jobTitle"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="Software Engineer"
              />
              {errors.jobTitle && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.jobTitle.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Industry *
              </label>
              <Controller
                name="industry"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    instanceId="industry-select"
                    options={industryOptions}
                    value={industryOptions.find(opt => opt.value === field.value)}
                    onChange={(option) => field.onChange(option?.value)}
                    className="text-sm sm:text-base"
                    placeholder="Select industry..."
                  />
                )}
              />
              {errors.industry && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.industry.message}</p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Company Size *
              </label>
              <Controller
                name="companySize"
                control={control}
                render={({ field }) => (
                  <Select
                    {...field}
                    instanceId="company-size-select"
                    options={companySizeOptions}
                    value={companySizeOptions.find(opt => opt.value === field.value)}
                    onChange={(option) => field.onChange(option?.value)}
                    className="text-sm sm:text-base"
                    placeholder="Select company size..."
                  />
                )}
              />
              {errors.companySize && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.companySize.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Location */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-lg sm:text-xl font-semibold text-gray-800">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-[#FF6B35]" />
            Location
          </h3>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="country" className="mb-2 block text-sm font-semibold text-gray-700">
                <Globe className="inline h-4 w-4 mr-1" />
                Country *
              </label>
              <input
                {...register('country')}
                type="text"
                id="country"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="United States"
              />
              {errors.country && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.country.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="city" className="mb-2 block text-sm font-semibold text-gray-700">
                City *
              </label>
              <input
                {...register('city')}
                type="text"
                id="city"
                className="w-full rounded-lg border-2 border-gray-300 px-4 py-2 sm:py-3 text-sm sm:text-base focus:border-[#FF6B35] focus:outline-none"
                placeholder="New York"
              />
              {errors.city && (
                <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.city.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Membership Type */}
        <div>
          <h3 className="mb-4 text-lg sm:text-xl font-semibold text-gray-800">
            Membership Type *
          </h3>
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-3">
            <label className="relative cursor-pointer">
              <input
                {...register('membershipType')}
                type="radio"
                value="individual"
                className="peer sr-only"
              />
              <div className="rounded-lg border-2 border-gray-300 p-4 text-center transition-all peer-checked:border-[#FF6B35] peer-checked:bg-orange-50">
                <p className="text-sm sm:text-base font-semibold text-gray-900">Individual</p>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">For professionals</p>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                {...register('membershipType')}
                type="radio"
                value="corporate"
                className="peer sr-only"
              />
              <div className="rounded-lg border-2 border-gray-300 p-4 text-center transition-all peer-checked:border-[#FF6B35] peer-checked:bg-orange-50">
                <p className="text-sm sm:text-base font-semibold text-gray-900">Corporate</p>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">For companies</p>
              </div>
            </label>

            <label className="relative cursor-pointer">
              <input
                {...register('membershipType')}
                type="radio"
                value="student"
                className="peer sr-only"
              />
              <div className="rounded-lg border-2 border-gray-300 p-4 text-center transition-all peer-checked:border-[#FF6B35] peer-checked:bg-orange-50">
                <p className="text-sm sm:text-base font-semibold text-gray-900">Student</p>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">For students</p>
              </div>
            </label>
          </div>
          {errors.membershipType && (
            <p className="mt-2 text-xs sm:text-sm text-red-600">{errors.membershipType.message}</p>
          )}
        </div>

        {/* Areas of Interest */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-gray-700">
            Areas of Interest * (Select multiple)
          </label>
          <Controller
            name="interests"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                instanceId="interests-select"
                isMulti
                options={interestOptions}
                value={interestOptions.filter(opt => field.value?.includes(opt.value))}
                onChange={(options) => field.onChange(options.map(opt => opt.value))}
                className="text-sm sm:text-base"
                placeholder="Select your areas of interest..."
              />
            )}
          />
          {errors.interests && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.interests.message}</p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              {...register('agreeToTerms')}
              type="checkbox"
              className="mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded border-gray-300 text-[#FF6B35] focus:ring-[#FF6B35]"
            />
            <span className="text-xs sm:text-sm text-gray-700">
              I agree to the{' '}
              <a href="#" className="text-[#FF6B35] hover:underline">
                Terms and Conditions
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#FF6B35] hover:underline">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="mt-1 text-xs sm:text-sm text-red-600">{errors.agreeToTerms.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-[#FF6B35] px-6 py-3 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg transition-all hover:bg-[#e55a2b] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting...' : 'Complete Registration'}
        </button>
      </form>
    </div>
  );
}
