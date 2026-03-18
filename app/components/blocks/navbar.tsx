import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

const navLinks = [
  // { label: "Home", href: "/" },
  // { label: "About", href: "/about" },
  // { label: "Projects", href: "/projects" },
  // { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("/");
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-foreground hover:opacity-80 transition-opacity">
          <Zap className="h-5 w-5 text-primary" />
          <span>Onyx Tracker</span>
        </Link>

        {/* <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={cn(
                "px-3 py-1.5 rounded-md text-sm font-medium transition-colors",
                active === link.href ?
                  "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
              )}>
              {link.label}
            </a>
          ))}
        </nav> */}

        <div className="hidden md:flex items-center gap-2">
          <Link to={"/sign-in"}>
            <Button
              variant={location.pathname === "/sign-in" ? "default" : "ghost"}
              size="sm">
              Sign In
            </Button>
          </Link>

          <Link to={"/get-started"}>
            <Button
              variant={
                location.pathname === "/get-started" ? "default" : "ghost"
              }
              size="sm">
              Get Started
            </Button>
          </Link>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 px-6 py-8">
            <div className="flex items-center justify-between mb-6">
              <a href="/" className="flex items-center gap-2 font-semibold">
                <Zap className="h-5 w-5 text-primary" />
                <span>Onyx Tracker</span>
              </a>
            </div>

            <Separator className="mb-6" />

            {/* <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                    active === link.href ?
                      "bg-accent text-accent-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
                  )}>
                  {link.label}
                </a>
              ))}
            </nav> */}

            {/* <Separator className="my-6" /> */}

            <div className="flex flex-col gap-2">
              <Link to={"/sign-in"}>
                <Button variant="outline" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Button className="w-full">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
