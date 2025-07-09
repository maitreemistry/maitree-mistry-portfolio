import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95">
      <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:gap-2 md:px-0">
          <p className="text-center text-sm italic leading-loose text-muted-foreground md:text-left">
            "Learning never stops and neither does innovation!"
          </p>
          <p className="text-center text-sm text-muted-foreground">
            {/* &copy; {new Date().getFullYear()}*/} ~ Maitree Mistry {/*All Rights Reserved. */}
          </p>
        </div>
      </div>
    </footer>
  );
}
