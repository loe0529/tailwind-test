import { publicUrl } from '../utils/publicUrl'

export default function About() {
  return (
    <section
      className="desktop-section-about"
      style={{
        '--about-check-icon-url': `url(${publicUrl('images/check-icon.svg')})`,
      }}
    >
      <div className="desktop-section-about-inner">
        <div className="desktop-section-about-main-title">
          <h2 className="desktop-section-about-main-title-text">ME</h2>
          <div className="desktop-section-about-deco-title">
            <span className="desktop-section-about-deco-title-text">ABOUT</span>
          </div>
          <img
            src={publicUrl('images/paper-airplane%201.svg')}
            alt="Paper airplane icon"
            className="desktop-section-about-airplane"
          />
        </div>

        <div className="desktop-section-about-main-text">
          <div className="desktop-section-about-text-box">
            <h3 className="desktop-section-about-sub-title">
              &quot;UI/UX, FrontEnd [Practical + Lecture]&quot;
              <br />
              25years of experience!
            </h3>
            <p className="desktop-section-about-sub-text">
              &quot;UI/UX, 프론트엔드[실무 + 강의]25년차! 최신 트렌드를 분석하여,
              <br />
              실무에서 인정받는 인재 양성을 목표로 열정을 다하는 강사 J.young입니다&quot;
            </p>
          </div>

          <div className="desktop-section-about-bottom-box">
            <p className="desktop-section-about-edu-title">Educational Goals</p>
            <ul className="desktop-section-about-edu-list">
              <li>최신트렌드를 분석하여 내것화 시킬수 있는 UI디자이너</li>
              <li>사용자의 니즈와 문제를 도출하여 솔루션을 제시하는 UX디자이너</li>
              <li>html/css/js/react를 통한 최신 트렌드에 적합한 웹사이트를 구현하는 개발자</li>
              <li>면접관의 눈길을 사로잡는 포폴제작으로 합격하는 디자이너</li>
              <li>생성형AI로 업무 생산성과 효율을 극대화하는 인재</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
