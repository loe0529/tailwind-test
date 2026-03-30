import { publicUrl } from '../utils/publicUrl'

export default function Hero() {
  return (
    <section className="desktop-section-hero">
      <div className="desktop-section-hero-inner">
        <div className="desktop-section-hero-main-title-box">
          <h2 className="desktop-section-hero-main-title">
            UI/UX<br />
            FRONTEND<br />
            INSTRUCTOR
          </h2>
        </div>
        <div className="desktop-section-hero-text-box">
          <p className="desktop-section-hero-text">
            We train professionals by<br />
            creating high-quality portfolios<br />
            through practical training<br />
            starting from the basics!
          </p>
        </div>
        <div className="desktop-section-hero-image-box">
          <img
            src={publicUrl('images/hero-img.svg')}
            alt="Illustration of a running woman holding a paper airplane and laptop"
            className="desktop-section-hero-image"
          />
        </div>
      </div>
    </section>
  )
}
