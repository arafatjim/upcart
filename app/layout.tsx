const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
        <body className="max-w-11/12 mx-auto font-mono flex flex-col min-h-screen"> 
            {children}
        </body>
    </html>
  );
};

export default RootLayout;