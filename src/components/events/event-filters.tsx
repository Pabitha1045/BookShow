'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function EventFilters() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="relative w-full sm:max-w-xs">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input placeholder="Search by event name..." className="pl-10" />
      </div>
    </div>
  );
}
