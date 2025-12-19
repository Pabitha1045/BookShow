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

export function PaymentForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment Details</CardTitle>
        <CardDescription>Enter your payment information to complete the booking.</CardDescription>
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
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Pay Now</Button>
      </CardFooter>
    </Card>
  );
}
