import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
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
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { userBookings, userProfile } from '@/lib/data';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export default function AccountPage() {
  return (
    <div className="container mx-auto max-w-4xl py-8 px-4 md:px-6 animate-in fade-in-50 duration-500">
      <div className="flex items-center gap-6 mb-8">
        <Avatar className="h-24 w-24 border-2 border-primary">
          <AvatarImage src="https://picsum.photos/seed/avatar1/100/100" />
          <AvatarFallback>
            {userProfile.name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="font-headline text-3xl font-bold">{userProfile.name}</h1>
          <p className="text-muted-foreground">{userProfile.email}</p>
        </div>
      </div>
      <Tabs defaultValue="bookings">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bookings">Booking History</TabsTrigger>
          <TabsTrigger value="profile">Profile Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="bookings" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Booking History</CardTitle>
              <CardDescription>
                View and manage your past and upcoming bookings.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {userBookings.length > 0 ? (
                userBookings.map((booking) => (
                  <div key={booking.id} className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="flex-1">
                      <h3 className="font-semibold font-headline">{booking.eventTitle}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(booking.eventDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">Seats: {booking.seats.join(', ')}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-bold text-lg">${booking.totalPrice.toFixed(2)}</p>
                        <Button variant="outline" size="sm" asChild className="mt-2">
                            <Link href={`/events/${booking.eventId}`}>View Event</Link>
                        </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground text-center py-8">
                  You have no bookings yet.
                </p>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="profile" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>
                Update your personal information.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue={userProfile.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue={userProfile.email} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
