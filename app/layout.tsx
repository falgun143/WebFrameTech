import ThemeProviderWrapper from "./theme_provider";

import "./global.css"; // Import global CSS

export const metadata = {
  title: "Weframe Tech",
  viewport: "minimum-scale=1, initial-scale=1, width=device-width",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>{children}</ThemeProviderWrapper>
      </body>
    </html>
  );
}
