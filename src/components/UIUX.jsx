import { publicUrl } from '../utils/publicUrl'

export default function UIUX() {
  return (
    <section className="desktop-section-uiux">
      <div className="desktop-section-uiux-inner">
        <div className="desktop-section-uiux-small-title-box">
          <h2 className="desktop-section-uiux-small-main-title">UIUX</h2>
          <div className="desktop-section-uiux-small-sub-box">
            <p className="desktop-section-uiux-small-sub-title">We designed the user experience</p>
            <p className="desktop-section-uiux-small-sub-text">
              데스크 리서치를 통한 사용자의 니즈와 문제점을 파악하여
              <br />
              개선점을 도출한 UIUX process
            </p>
          </div>
        </div>

        <div className="desktop-section-uiux-box">
          <div className="desktop-section-uiux-list-box">
            <div className="desktop-section-uiux-heart-box">
              <img src={publicUrl('images/heart.svg')} alt="" />
            </div>
            <img src={publicUrl('images/uiux-img-1.png')} alt="" className="desktop-section-uiux-image" />
            <div className="desktop-section-uiux-name-box">
              <p className="desktop-section-uiux-img-name">Tamburins Cosmetic</p>
              <p className="desktop-section-uiux-date">2025.08</p>
            </div>
          </div>
          <div className="desktop-section-uiux-list-box">
            <div className="desktop-section-uiux-heart-box">
              <img src={publicUrl('images/heart.svg')} alt="" />
            </div>
            <img src={publicUrl('images/uiux-img-2.png')} alt="" className="desktop-section-uiux-image" />
            <div className="desktop-section-uiux-name-box">
              <p className="desktop-section-uiux-img-name">Tamburins Cosmetic</p>
              <p className="desktop-section-uiux-date">2025.08</p>
            </div>
          </div>
          <div className="desktop-section-uiux-list-box">
            <div className="desktop-section-uiux-heart-box">
              <img src={publicUrl('images/heart.svg')} alt="" />
            </div>
            <img src={publicUrl('images/uiux-img-3.png')} alt="" className="desktop-section-uiux-image" />
            <div className="desktop-section-uiux-name-box">
              <p className="desktop-section-uiux-img-name">Tamburins Cosmetic</p>
              <p className="desktop-section-uiux-date">2025.08</p>
            </div>
          </div>
          <div className="desktop-section-uiux-list-box">
            <div className="desktop-section-uiux-heart-box">
              <img src={publicUrl('images/heart.svg')} alt="" />
            </div>
            <img src={publicUrl('images/uiux-img-4.png')} alt="" className="desktop-section-uiux-image" />
            <div className="desktop-section-uiux-name-box">
              <p className="desktop-section-uiux-img-name">Tamburins Cosmetic</p>
              <p className="desktop-section-uiux-date">2025.08</p>
            </div>
          </div>
          <div className="desktop-section-uiux-list-box">
            <div className="desktop-section-uiux-heart-box">
              <img src={publicUrl('images/heart.svg')} alt="" />
            </div>
            <img src={publicUrl('images/uiux-img-5.png')} alt="" className="desktop-section-uiux-image" />
            <div className="desktop-section-uiux-name-box">
              <p className="desktop-section-uiux-img-name">Tamburins Cosmetic</p>
              <p className="desktop-section-uiux-date">2025.08</p>
            </div>
          </div>
          <div className="desktop-section-uiux-list-box">
            <div className="desktop-section-uiux-heart-box">
              <img src={publicUrl('images/heart.svg')} alt="" />
            </div>
            <img src={publicUrl('images/uiux-img-6.png')} alt="" className="desktop-section-uiux-image" />
            <div className="desktop-section-uiux-name-box">
              <p className="desktop-section-uiux-img-name">Tamburins Cosmetic</p>
              <p className="desktop-section-uiux-date">2025.08</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
