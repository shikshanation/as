import { z } from 'zod';

// Newsletter subscription schema
export const newsletterSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  frequency: z.enum(['daily', 'weekly', 'monthly']),
  categories: z.array(z.string()).min(1, 'Select at least one category'),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

// Select options for react-select
export interface SelectOption {
  value: string;
  label: string;
}

export const frequencyOptions: SelectOption[] = [
  { value: 'daily', label: 'Daily Digest' },
  { value: 'weekly', label: 'Weekly Summary' },
  { value: 'monthly', label: 'Monthly Newsletter' },
];

export const categoryOptions: SelectOption[] = [
  { value: 'technology', label: 'Technology' },
  { value: 'business', label: 'Business' },
  { value: 'events', label: 'Events' },
  { value: 'insights', label: 'Insights' },
  { value: 'community', label: 'Community' },
];
