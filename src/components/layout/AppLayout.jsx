import Header from '../common/Header.jsx'
import Footer from '../common/Footer.jsx'

export default function AppLayout({ children }) {
  return (
    <div className="desktop-page">
      <div className="wrap w-full max-w-page mx-auto overflow-x-hidden">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}
