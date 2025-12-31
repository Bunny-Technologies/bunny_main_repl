interface LogoProps {
  className?: string;
  size?: number;
}

export function BunnyLogo({ className = "", size = 36 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer green circle */}
      <circle cx="50" cy="50" r="46" stroke="#16a34a" strokeWidth="4" fill="none" />
      
      {/* Network lines - creating spherical web pattern */}
      <g stroke="#16a34a" strokeWidth="1.5" opacity="0.8">
        {/* Horizontal ellipses */}
        <ellipse cx="50" cy="50" rx="35" ry="12" />
        <ellipse cx="50" cy="50" rx="35" ry="25" />
        <ellipse cx="50" cy="50" rx="35" ry="35" />
        
        {/* Vertical ellipses */}
        <ellipse cx="50" cy="50" rx="12" ry="35" />
        <ellipse cx="50" cy="50" rx="25" ry="35" />
        
        {/* Diagonal connections */}
        <line x1="20" y1="30" x2="80" y2="70" />
        <line x1="80" y1="30" x2="20" y2="70" />
        <line x1="25" y1="50" x2="75" y2="50" />
        <line x1="50" y1="20" x2="50" y2="80" />
        
        {/* Additional web lines */}
        <line x1="30" y1="25" x2="70" y2="75" />
        <line x1="70" y1="25" x2="30" y2="75" />
        <line x1="35" y1="30" x2="65" y2="50" />
        <line x1="65" y1="30" x2="35" y2="50" />
        <line x1="35" y1="50" x2="65" y2="70" />
        <line x1="65" y1="50" x2="35" y2="70" />
      </g>
      
      {/* Network nodes - colorful dots */}
      {/* Center node */}
      <circle cx="50" cy="50" r="5" fill="#f97316" />
      
      {/* Top nodes */}
      <circle cx="50" cy="20" r="4" fill="#0ea5e9" />
      <circle cx="35" cy="25" r="3.5" fill="#16a34a" />
      <circle cx="65" cy="25" r="3.5" fill="#16a34a" />
      
      {/* Middle row nodes */}
      <circle cx="20" cy="40" r="4" fill="#0ea5e9" />
      <circle cx="80" cy="40" r="4" fill="#0ea5e9" />
      <circle cx="35" cy="38" r="3" fill="#f97316" />
      <circle cx="65" cy="38" r="3" fill="#f97316" />
      
      {/* Center row nodes */}
      <circle cx="18" cy="55" r="3.5" fill="#16a34a" />
      <circle cx="82" cy="55" r="3.5" fill="#16a34a" />
      <circle cx="35" cy="50" r="3" fill="#0ea5e9" />
      <circle cx="65" cy="50" r="3" fill="#0ea5e9" />
      
      {/* Lower nodes */}
      <circle cx="25" cy="70" r="4" fill="#f97316" />
      <circle cx="75" cy="70" r="4" fill="#f97316" />
      <circle cx="35" cy="62" r="3" fill="#16a34a" />
      <circle cx="65" cy="62" r="3" fill="#16a34a" />
      
      {/* Bottom nodes */}
      <circle cx="50" cy="80" r="4" fill="#0ea5e9" />
      <circle cx="40" cy="75" r="3" fill="#f97316" />
      <circle cx="60" cy="75" r="3" fill="#f97316" />
    </svg>
  );
}

export function BunnyLogoWithText({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <BunnyLogo size={36} />
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-tight">
          <span className="text-primary">BUNNY</span>
        </span>
        <span className="text-lg font-bold leading-tight text-green-600">INNOVATIONS</span>
        <span className="text-[10px] text-muted-foreground tracking-wider">AI + IoT Solutions</span>
      </div>
    </div>
  );
}
