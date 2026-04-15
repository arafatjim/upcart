const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
        <body className="max-w-[98%] mx-auto font-mono flex flex-col min-h-screen bg-[#BFC9D1]"> 
            {children}
        </body>
    </html>
  );
};

export default RootLayout;