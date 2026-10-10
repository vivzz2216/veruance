import Link from "next/link";
import CreativeGallery from "../components/creative-gallery";
import ReferenceHeader from "../reference-header";
import {ArrowUpRight} from "lucide-react";
export const metadata={title:"Creative Stories — Vivek Pillai",description:"Original visual explorations in color, light, and creative technology. An interactive portfolio gallery."};
export default function Stories(){return <div className="reference-page"><a href="#stories-main" className="skip-link">Skip to stories</a><ReferenceHeader active="stories"/><main id="stories-main"><CreativeGallery standalone/><section className="story-close"><h2>Every idea starts with<br/><em>a different perspective.</em></h2><Link className="button secondary" href="/studio">Inside the studio <ArrowUpRight size={18}/></Link></section></main><footer className="reference-footer"><Link className="reference-personal-logo" href="/"><span className="monogram">vp</span><span>Vivek Pillai</span></Link><span>Visual expression. Human connection.</span><Link href="/#cta-section">Start a conversation <ArrowUpRight size={15}/></Link></footer></div>}
