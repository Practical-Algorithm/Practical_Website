import React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Close from "@/icons/untitled/x-close.svg";
import { StaticTexts } from "@/consts.ts";

export type LinkItem = {
  title: string;
  href: string;
  icon?: React.ReactNode;
  badges?: string[];
  description?: string;
  subLinks?: LinkItem[];
};

interface Props {
  links: LinkItem[];
}

export default function Navbar() {
  return (
    <NavigationMenu className="mr-8">
      <NavigationMenuList>
        <NavigationMenuItem className="px-4 py-2 text-button-tertiary-fg hover:text-button-tertiary-fg_hover text-md font-semibold font-baijamjuree rounded-md cursor-pointer hover:bg-bg-primary_hover">
          <NavigationMenuLink href="/blog">
            {StaticTexts.NAVBAR.BLOG}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const SingleMenuItem = ({ link }: { link: LinkItem }) => {
  const { title, href, description } = link;

  return (
    <NavigationMenuItem className="px-4 py-2 text-button-tertiary-fg hover:text-button-tertiary-fg_hover text-md font-semibold font-baijamjuree rounded-md cursor-pointer hover:bg-bg-primary_hover">
      <NavigationMenuLink href={href}>{title}</NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MultipleMenuItem = ({ link }: { link: LinkItem }) => {
  const { title, href, description, subLinks } = link;

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-button-tertiary-fg hover:text-button-tertiary-fg_hover text-md font-semibold font-baijamjuree hover:bg-bg-primary_hover">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="rounded-3xl">
        <ListContent className="">
          {subLinks.map((subLink) => (
            <ListItem
              key={subLink.title}
              title={subLink.title}
              href={subLink.href}
            >
              {subLink.description}
            </ListItem>
          ))}
        </ListContent>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
};

const ListContent = React.forwardRef<
  React.ElementRef<"ul">,
  React.ComponentPropsWithoutRef<"ul">
>(({ className, children, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn(
        "grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-bg-primary rounded-md border border-border-primary",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
});

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            "hover:bg-bg-primary/50 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
