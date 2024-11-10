'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useState } from 'react';

import { Loader2 } from 'lucide-react';
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
import SuccessMessage from '@/components/successMessage';

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
  referrals: z
    .array(z.string())
    .refine((value) => value.some((referral) => referral), {
      message: 'You have to select at least one item.',
    }),
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
    // try {
    //   const response = await fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Failed to send email');
    //   }

    setIsSuccess(true);
    form.reset();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // } catch (error) {
    //   toast({
    //     title: 'Uh oh! Something went wrong',
    //     variant: 'destructive',
    //     description:
    //       'There was an error sending your message. Please try again later.',
    //   });
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <div className="min-h-[600px]">
      {isSuccess ? (
        <SuccessMessage />
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
      )}
    </div>
  );
}
