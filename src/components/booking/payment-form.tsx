'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

interface PaymentFormProps {
  totalPrice: number;
  eventTitle: string;
}

export function PaymentForm({ totalPrice, eventTitle }: PaymentFormProps) {
  const upiLink = `upi://pay?pa=recipient@bank&pn=Recipient%20Name&am=${totalPrice.toFixed(2)}&cu=INR&tn=Booking%20for%20${encodeURIComponent(eventTitle)}`;

  const canPay = totalPrice > 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Enter your payment information or pay with UPI.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="expiry-date">Expiry</Label>
                <Input id="expiry-date" placeholder="MM/YY" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="zip">ZIP</Label>
                <Input id="zip" placeholder="12345" />
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={!canPay}>
          <Link href={canPay ? upiLink : '#'}>
            Pay Now with UPI
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
