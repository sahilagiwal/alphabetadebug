"use client";
import { useState } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu>
      <Link href="/" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Home
        </NavigationMenuLink>
      </Link>
      <Link href="/about" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          About
        </NavigationMenuLink>
      </Link>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Bootcamps
        </NavigationMenuLink>
      </Link>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Resources
        </NavigationMenuLink>
      </Link>
      <Link href="/docs" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Projects
        </NavigationMenuLink>
      </Link>
      <Link href="/login" legacyBehavior passHref>
        <NavigationMenuLink>
          <Button variant="outline" className="mx-2">
            Login
          </Button>
        </NavigationMenuLink>
      </Link>
      <Link href="/signup" legacyBehavior passHref>
        <NavigationMenuLink>
          <Button>Signup</Button>
        </NavigationMenuLink>
      </Link>
    </NavigationMenu>
  );
}
