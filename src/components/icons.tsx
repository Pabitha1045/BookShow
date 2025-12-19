import type { SVGProps } from 'react';

export const Logo = (props: SVGProps<SVGSVGElement>) => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <rect width="32" height="32" rx="8" className="fill-primary" />
        <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="font-headline font-bold"
            fontSize="18"
            fill="hsl(var(--primary-foreground))"
        >
            BS
        </text>
    </svg>
);
