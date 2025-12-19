'use client';

import { Armchair, Tv, Square } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Event } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';

interface SeatSelectorProps {
  event: Event;
  selectedSeats: string[];
  onSelectedSeatsChange: (seats: string[]) => void;
}

export function SeatSelector({ event, selectedSeats, onSelectedSeatsChange }: SeatSelectorProps) {
  const { seating, price } = event;

  if (!seating) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tickets</CardTitle>
                <CardDescription>This is a general admission event.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Select number of tickets</p>
                {/* Basic ticket quantity selector can be added here */}
            </CardContent>
        </Card>
    )
  }

  const { rows, cols, unavailable } = seating;
  const seats = Array.from({ length: rows }, (_, rowIndex) =>
    Array.from({ length: cols }, (_, colIndex) => {
      const rowLabel = String.fromCharCode(65 + rowIndex);
      const colLabel = colIndex + 1;
      return `${rowLabel}${colLabel}`;
    })
  );

  const toggleSeat = (seatId: string) => {
    onSelectedSeatsChange(
      selectedSeats.includes(seatId)
        ? selectedSeats.filter((s) => s !== seatId)
        : [...selectedSeats, seatId]
    );
  };

  const totalPrice = selectedSeats.length * price;

  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle>Select Your Seats</CardTitle>
            <CardDescription>Choose your desired seats from the map below.</CardDescription>
        </CardHeader>
      <CardContent className="flex flex-col items-center gap-8">
        <div className="w-full max-w-md flex flex-col items-center gap-2">
            <Tv className="w-1/2 h-auto text-muted-foreground"/>
            <p className="text-sm text-muted-foreground">Screen</p>
        </div>
        
        <div className="flex flex-col gap-2">
          {seats.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-2">
              <span className="w-4 text-center text-sm text-muted-foreground">
                {String.fromCharCode(65 + rowIndex)}
              </span>
              <div className="flex gap-2">
              {row.map((seatId) => {
                const isUnavailable = unavailable.includes(seatId);
                const isSelected = selectedSeats.includes(seatId);
                return (
                  <button
                    key={seatId}
                    disabled={isUnavailable}
                    onClick={() => toggleSeat(seatId)}
                    className={cn(
                      'w-7 h-7 rounded-md flex items-center justify-center transition-colors',
                      isUnavailable && 'bg-muted text-muted-foreground cursor-not-allowed',
                      !isUnavailable && 'bg-secondary/50 text-secondary-foreground hover:bg-secondary',
                      isSelected && 'bg-primary text-primary-foreground hover:bg-primary/90'
                    )}
                    aria-label={`Seat ${seatId}`}
                  >
                    <Armchair className="w-5 h-5"/>
                  </button>
                );
              })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Square className="w-4 h-4 text-secondary-foreground bg-secondary/50"/> Available</div>
            <div className="flex items-center gap-2"><Square className="w-4 h-4 text-primary-foreground bg-primary"/> Selected</div>
            <div className="flex items-center gap-2"><Square className="w-4 h-4 text-muted-foreground bg-muted"/> Unavailable</div>
        </div>

      </CardContent>
      {selectedSeats.length > 0 && (
          <>
            <Separator />
            <CardContent className="p-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-semibold">Selected Seats:</p>
                        <p className="text-muted-foreground text-sm">{selectedSeats.join(', ')}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-semibold">Total Price:</p>
                        <p className="text-2xl font-bold font-headline">₹{totalPrice.toFixed(2)}</p>
                    </div>
                </div>
            </CardContent>
          </>
        )}
    </Card>
  );
}
