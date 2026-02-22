export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{margin:0,fontFamily:"sans-serif",background:"#070A12",color:"white"}}>
        {children}
      </body>
    </html>
  );
}
