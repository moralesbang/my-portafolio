/**
 * Theme Configuration
 * 
 * Modify colors here to update the entire site's color scheme.
 * All values should be in HSL format (Hue, Saturation, Lightness)
 * 
 * Example: "220 90% 56%" means:
 * - Hue: 220 (blue)
 * - Saturation: 90%
 * - Lightness: 56%
 */

export const themeConfig = {
  light: {
    // Main background and text
    background: "0 0% 100%",
    foreground: "222.2 84% 4.9%",
    
    // Card surfaces
    card: "0 0% 100%",
    cardForeground: "222.2 84% 4.9%",
    
    // Primary brand color (main accent)
    primary: "221 83% 53%",
    primaryForeground: "210 40% 98%",
    
    // Secondary surfaces
    secondary: "210 40% 96.1%",
    secondaryForeground: "222.2 47.4% 11.2%",
    
    // Muted backgrounds and text
    muted: "210 40% 96.1%",
    mutedForeground: "215.4 16.3% 46.9%",
    
    // Accent color (secondary highlights)
    accent: "199 89% 48%",
    accentForeground: "210 40% 98%",
    
    // Border and input
    border: "214.3 31.8% 91.4%",
    input: "214.3 31.8% 91.4%",
    ring: "221 83% 53%",
  },
  
  dark: {
    // Main background and text
    background: "222.2 84% 4.9%",
    foreground: "210 40% 98%",
    
    // Card surfaces
    card: "222.2 84% 4.9%",
    cardForeground: "210 40% 98%",
    
    // Primary brand color
    primary: "221 83% 53%",
    primaryForeground: "210 40% 98%",
    
    // Secondary surfaces
    secondary: "217.2 32.6% 17.5%",
    secondaryForeground: "210 40% 98%",
    
    // Muted backgrounds and text
    muted: "217.2 32.6% 17.5%",
    mutedForeground: "215 20.2% 65.1%",
    
    // Accent color
    accent: "199 89% 48%",
    accentForeground: "210 40% 98%",
    
    // Border and input
    border: "217.2 32.6% 17.5%",
    input: "217.2 32.6% 17.5%",
    ring: "221 83% 53%",
  },
  
  // Custom colors for specific use cases
  custom: {
    // Gradient colors
    gradientStart: "221 83% 53%",
    gradientEnd: "199 89% 48%",
    
    // Success, warning, error
    success: "142 76% 36%",
    warning: "38 92% 50%",
    error: "0 84.2% 60.2%",
  }
};
