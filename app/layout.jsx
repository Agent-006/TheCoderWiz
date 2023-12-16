import Nav from '@/components/Navbar';
import '../styles/globals.css';

export const metadata = {
  title: 'TheCoderWiz',
  description: 'The service to your needs',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
  
}

export default RootLayout;