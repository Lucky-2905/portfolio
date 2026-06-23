@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500&display=swap');
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));

  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card-border: hsl(var(--card-border));

  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-popover-border: hsl(var(--popover-border));

  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));

  --font-sans: var(--app-font-sans);
  --font-serif: var(--app-font-serif);
  
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --background: 0 0% 4%; /* #0a0a0a */
  --foreground: 0 0% 96%; /* #f5f5f5 */
  
  --card: 0 0% 7%; /* #111111 */
  --card-foreground: 0 0% 96%;
  --card-border: 42 49% 55%; /* Gold, opacity via utility */
  
  --popover: 0 0% 7%;
  --popover-foreground: 0 0% 96%;
  --popover-border: 42 49% 55%;
  
  --primary: 42 49% 55%; /* #C9A84C */
  --primary-foreground: 0 0% 4%;
  
  --secondary: 42 43% 50%; /* #B8924A */
  --secondary-foreground: 0 0% 96%;
  
  --muted: 0 0% 12%;
  --muted-foreground: 0 0% 63%; /* #A0A0A0 */
  
  --accent: 42 49% 55%; 
  --accent-foreground: 0 0% 4%;
  
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 96%;
  
  --border: 42 49% 55%;
  --input: 42 49% 55%;
  --ring: 42 49% 55%;
  
  --app-font-sans: 'Inter', sans-serif;
  --app-font-serif: 'Cormorant Garamond', serif;
  --radius: 0.5rem;
}

.dark {
  --background: 0 0% 4%;
  --foreground: 0 0% 96%;
  
  --card: 0 0% 7%;
  --card-foreground: 0 0% 96%;
  --card-border: 42 49% 55%;
  
  --popover: 0 0% 7%;
  --popover-foreground: 0 0% 96%;
  --popover-border: 42 49% 55%;
  
  --primary: 42 49% 55%;
  --primary-foreground: 0 0% 4%;
  
  --secondary: 42 43% 50%;
  --secondary-foreground: 0 0% 96%;
  
  --muted: 0 0% 12%;
  --muted-foreground: 0 0% 63%;
  
  --accent: 42 49% 55%;
  --accent-foreground: 0 0% 4%;
  
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 96%;
  
  --border: 42 49% 55%;
  --input: 42 49% 55%;
  --ring: 42 49% 55%;
}

@layer base {
  * {
    @apply border-border/20;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply font-sans antialiased bg-background text-foreground;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-serif tracking-wide;
  }
}

.glassmorphism {
  @apply bg-card/60 backdrop-blur-md border border-primary/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)];
}
