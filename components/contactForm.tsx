'use client';

import { useState } from 'react';
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
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(1, 'Message is required'),
  referrals: z.array(z.string()),
});

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
      referrals: [],
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || '',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: data.fullName,
            email: data.email,
            phoneNumber: data.phoneNumber,
            message: data.message,
            referrals: data.referrals.join(', '),
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      window.scrollTo(0, 0);
      setIsSuccess(true);
      form.reset();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
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
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your full name"
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
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
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
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={referral.id}
                              className="flex flex-row items-center space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(referral.id)}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([
                                          ...field.value,
                                          referral.id,
                                        ])
                                      : field.onChange(
                                          field.value?.filter(
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
                          );
                        }}
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
