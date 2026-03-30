import { publicUrl } from '../utils/publicUrl'

export default function Skill() {
  return (
    <section className="desktop-section-skill">
      <div className="desktop-section-skill-frame">
        <img src={publicUrl('images/skill-icon1.svg')} alt="" className="desktop-section-skill-icon1" />
        <img src={publicUrl('images/skill-icon2.svg')} alt="" className="desktop-section-skill-icon2" />
        <img src={publicUrl('images/skill-icon3.svg')} alt="" className="desktop-section-skill-icon3" />
        <img src={publicUrl('images/skill-icon4.svg')} alt="" className="desktop-section-skill-icon4" />
        <img src={publicUrl('images/skill-icon5.svg')} alt="" className="desktop-section-skill-icon5" />

        <div className="desktop-section-skill-text desktop-section-skill-text-1">UI/UX</div>
        <div className="desktop-section-skill-text desktop-section-skill-text-2">HTML/CSS</div>
        <div className="desktop-section-skill-text desktop-section-skill-text-3">JAVASCRIPT</div>
        <div className="desktop-section-skill-text desktop-section-skill-text-4">REACT</div>
        <div className="desktop-section-skill-text desktop-section-skill-text-5">PORTFOLIO</div>
        <div className="desktop-section-skill-text desktop-section-skill-text-6">GEMERATIVE AI</div>
        <div className="desktop-section-skill-text desktop-section-skill-text-7">VIBE CODING</div>
      </div>
    </section>
  )
}
