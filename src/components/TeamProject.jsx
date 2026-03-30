import { publicUrl } from '../utils/publicUrl'

export default function TeamProject() {
  return (
    <section className="desktop-section-teamproject">
      <div className="desktop-section-teamproject-image">
        <img
          src={publicUrl('images/teamproject-img-girl.svg')}
          alt="Team project main visual"
          className="desktop-section-teamproject-image-girl"
        />
        <img src={publicUrl('images/team-img-sun.svg')} alt="Sun icon" className="desktop-section-teamproject-image-sun" />
      </div>

      <div className="desktop-section-teamproject-box">
        <div className="desktop-section-teamproject-small-title-box">
          <h2 className="desktop-section-teamproject-small-main-title">Team Project</h2>
          <div className="desktop-section-teamproject-small-sub-box">
            <p className="desktop-section-teamproject-small-sub-title">K-brand renewal project in progress</p>
            <p className="desktop-section-teamproject-small-sub-text">
              This is a UI/UX renewal project that identifies
              <br />
              analyzes user issues and redesigns the UI/UX.
            </p>
          </div>
        </div>

        <div className="desktop-section-teamproject-list">
          <div className="desktop-section-teamproject-left-box">
            <p className="desktop-section-teamproject-num-title">01</p>
            <div className="desktop-section-teamproject-text-box">
              <div className="desktop-section-teamproject-title-box">
                <p className="desktop-section-teamproject-project-name">SM Entertainment</p>
                <p className="desktop-section-teamproject-big-caption">-Redisign Project</p>
              </div>
              <div className="desktop-section-teamproject-desc">
                <p className="desktop-section-teamproject-en-text">
                  This is a UI/UX renewal project that identifies analyzes user issues and redesigns the UI/UX.
                </p>
                <p className="desktop-section-teamproject-kr-text">
                  사용자 문제를 분석 파악하여 사용자 문제 해결 방안을 제시한 UI/UX를 재설계한 UI/UX 리뉴얼 프로젝트입니다.
                </p>
              </div>
              <p className="desktop-section-teamproject-small-caption">Team Project</p>
            </div>
          </div>
          <div className="desktop-section-teamproject-list-image-box">
            <img src={publicUrl('images/teamproject-img-1.png')} alt="" className="desktop-section-teamproject-list-image" />
          </div>
        </div>

        <div className="desktop-section-teamproject-list">
          <div className="desktop-section-teamproject-left-box">
            <p className="desktop-section-teamproject-num-title">02</p>
            <div className="desktop-section-teamproject-text-box">
              <div className="desktop-section-teamproject-title-box">
                <p className="desktop-section-teamproject-project-name">SM Entertainment</p>
                <p className="desktop-section-teamproject-big-caption">-Redisign Project</p>
              </div>
              <div className="desktop-section-teamproject-desc">
                <p className="desktop-section-teamproject-en-text">
                  This is a UI/UX renewal project that identifies analyzes user issues and redesigns the UI/UX.
                </p>
                <p className="desktop-section-teamproject-kr-text">
                  사용자 문제를 분석 파악하여 사용자 문제 해결 방안을 제시한 UI/UX를 재설계한 UI/UX 리뉴얼 프로젝트입니다.
                </p>
              </div>
              <p className="desktop-section-teamproject-small-caption">Team Project</p>
            </div>
          </div>
          <div className="desktop-section-teamproject-list-image-box">
            <img src={publicUrl('images/teamproject-img-2.png')} alt="" className="desktop-section-teamproject-list-image" />
          </div>
        </div>

        <div className="desktop-section-teamproject-list">
          <div className="desktop-section-teamproject-left-box">
            <p className="desktop-section-teamproject-num-title">03</p>
            <div className="desktop-section-teamproject-text-box">
              <div className="desktop-section-teamproject-title-box">
                <p className="desktop-section-teamproject-project-name">SM Entertainment</p>
                <p className="desktop-section-teamproject-big-caption">-Redisign Project</p>
              </div>
              <div className="desktop-section-teamproject-desc">
                <p className="desktop-section-teamproject-en-text">
                  This is a UI/UX renewal project that identifies analyzes user issues and redesigns the UI/UX.
                </p>
                <p className="desktop-section-teamproject-kr-text">
                  사용자 문제를 분석 파악하여 사용자 문제 해결 방안을 제시한 UI/UX를 재설계한 UI/UX 리뉴얼 프로젝트입니다.
                </p>
              </div>
              <p className="desktop-section-teamproject-small-caption">Team Project</p>
            </div>
          </div>
          <div className="desktop-section-teamproject-list-image-box">
            <img src={publicUrl('images/teamproject-img-3.png')} alt="" className="desktop-section-teamproject-list-image" />
          </div>
        </div>
      </div>
    </section>
  )
}
