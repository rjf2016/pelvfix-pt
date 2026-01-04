'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircleIcon, Loader2 } from 'lucide-react';

import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const referrals = [
  {
    id: 'doctor',
    label: 'Doctor Referral',
  },
  {
    id: 'friend-family',
    label: 'Friend or Family',
  },
  {
    id: 'social-media',
    label: 'Social Media',
  },
  {
    id: 'google',
    label: 'Google',
  },
  {
    id: 'other',
    label: 'Other',
  },
] as const;

const FormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Invalid email address'),
  phone: z.string().trim().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().trim().min(1, 'Message is required'),
  referrals: z.array(z.string()),
  // Honeypot
  company: z.string().optional(),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const referralLabelById = useMemo(() => {
    const map = new Map<string, string>();
    for (const r of referrals) map.set(r.id, r.label);
    return map;
  }, []);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      referrals: [],
      company: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    try {
      const formData = new FormData();

      // Formspree special fields
      formData.append('subject', 'PelvFix Contact Form Submission');
      formData.append('_gotcha', data.company ?? '');

      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('message', data.message);

      for (const id of data.referrals) {
        formData.append('referrals', referralLabelById.get(id) ?? id);
      }

      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      window.scrollTo(0, 0);
      setIsSuccess(true);
      form.reset();
    } catch {
      toast({
        title: 'Uh oh! Something went wrong',
        variant: 'destructive',
        description:
          'There was an error sending your message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[500px] flex flex-col justify-center">
      {isSuccess ? (
        <div className="flex flex-col h-full items-center space-y-4 animate-slide-down">
          <CheckCircleIcon className="text-emerald-500 w-16 h-16" />
          <div>
            <h1 className="text-pretty text-center text-xl text-primary tracking-tighter mt-2">
              Your message has been sent!
            </h1>
            <p>I will get back to you within 24 hours</p>
          </div>
          <Button asChild className="w-44 mt-4">
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl text-primary font-medium tracking-tight text-center">
            Contact Us
          </h1>
          <p className="text-foreground text-center">
            Fill out the form below and we will get back to you within 24 hours.
          </p>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 pt-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your name"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder="Enter your email"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        {...field}
                        placeholder="Enter your phone number"
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Write a short message"
                        disabled={isLoading}
                        rows={3}
                        className="min-h-[90px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Honeypot (hidden) */}
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        autoComplete="off"
                        tabIndex={-1}
                        disabled={isLoading}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referrals"
                render={() => (
                  <FormItem>
                    <FormLabel>How Did You Hear About PelvFix?</FormLabel>

                    {referrals.map((referral) => (
                      <FormField
                        key={referral.id}
                        control={form.control}
                        name="referrals"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(referral.id)}
                                onCheckedChange={(checked) => {
                                  const current = field.value ?? [];
                                  return checked
                                    ? field.onChange([...current, referral.id])
                                    : field.onChange(
                                        current.filter(
                                          (value) => value !== referral.id
                                        )
                                      );
                                }}
                                disabled={isLoading}
                              />
                            </FormControl>
                            <FormLabel className="font-normal text-sm text-foreground cursor-pointer">
                              {referral.label}
                            </FormLabel>
                          </FormItem>
                        )}
                      />
                    ))}

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center pt-6">
                <Button type="submit" className="w-44" disabled={isLoading}>
                  {isLoading ? <Loader2 className="animate-spin" /> : 'Submit'}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
}
