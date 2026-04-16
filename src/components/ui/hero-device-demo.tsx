"use client";

import { HeroDeviceAssemble } from "@/components/ui/hero-device-assemble";

export function HeroDeviceDemo() {
  return (
    <div className="w-full absolute inset-0 overflow-hidden bg-black z-0">
      <HeroDeviceAssemble className="w-full h-full" />
    </div>
  );
}
