"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
export default function ReferenceHeader({active}:{active:string}){
 const [open,setOpen]=useState(false);
 return <header className="reference-header"><Link className="reference-personal-logo" href="/" aria-label="Vivek Pillai home"><span className="monogram">vp</span><span>Vivek Pillai</span></Link><nav id="reference-navigation" aria-label="Main navigation" className={open?"reference-nav open":"reference-nav"}><Link href="/">Home</Link><Link href="/#work">Selected work</Link><Link href="/stories" aria-current={active==="stories"?"page":undefined}>Stories</Link><Link href="/studio" aria-current={active==="studio"?"page":undefined}>Studio</Link></nav><Link className="reference-contact" href="/#cta-section">Let’s connect <ArrowUpRight size={15}/></Link><button className="menu-toggle" aria-label={open?"Close navigation":"Open navigation"} aria-expanded={open} aria-controls="reference-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></header>
}
