/* ===== figuras (SVG) usadas nas questões ===== */
const COL=["#38bdf8","#fb7185","#fbbf24","#34d399","#a78bfa","#f97316"];
const SVG=(w,h,s)=>`<svg viewBox="0 0 ${w} ${h}" style="max-width:${Math.min(340,Math.round(w*1.5))}px" focusable="false" aria-hidden="true">${s}</svg>`;
const TX=(x,y,s,z=12,a="middle")=>`<text x="${x}" y="${y}" font-size="${z}" font-weight="700" text-anchor="${a}" fill="currentColor">${s}</text>`;
const nice=m=>{for(const s of[1,2,5,10,20,25,50,100,200,500])if(m/s<=5)return s;return 1000};
const FIG={
 bar(f){const d=f.d,mx=Math.max(...d.map(x=>x[1])),st=nice(mx),top=Math.ceil(mx/st)*st,W=320,H=190,L=34,B=30,Tp=26,pw=W-L-8,ph=H-B-Tp,bw=Math.min(46,pw/d.length*.6);
  let s=TX(W/2,15,f.title,13);
  for(let v=0;v<=top;v+=st){const y=Tp+ph-v/top*ph;s+=`<line x1="${L}" x2="${W-6}" y1="${y}" y2="${y}" stroke="currentColor" opacity=".18"/>`+TX(L-5,y+4,v,10,"end");}
  d.forEach((x,i)=>{const cx=L+pw/d.length*(i+.5),h=x[1]/top*ph;s+=`<rect x="${cx-bw/2}" y="${Tp+ph-h}" width="${bw}" height="${h}" rx="3" fill="${COL[i%6]}"/>`+TX(cx,Tp+ph-h-4,x[1],11)+TX(cx,H-10,x[0],11);});
  return SVG(W,H,s);},
 line(f){const d=f.d,mx=Math.max(...d.map(x=>x[1])),st=nice(mx),top=Math.ceil(mx/st)*st,W=320,H=190,L=34,B=30,Tp=26,pw=W-L-8,ph=H-B-Tp;
  let s=TX(W/2,15,f.title,13);
  for(let v=0;v<=top;v+=st){const y=Tp+ph-v/top*ph;s+=`<line x1="${L}" x2="${W-6}" y1="${y}" y2="${y}" stroke="currentColor" opacity=".18"/>`+TX(L-5,y+4,v,10,"end");}
  const X=i=>L+pw/d.length*(i+.5),Y=v=>Tp+ph-v/top*ph;
  s+=`<polyline points="${d.map((x,i)=>X(i)+","+Y(x[1])).join(" ")}" fill="none" stroke="#7c3aed" stroke-width="3"/>`;
  d.forEach((x,i)=>{s+=`<circle cx="${X(i)}" cy="${Y(x[1])}" r="4.5" fill="#f43f5e" stroke="#fff"/>`+TX(X(i),Y(x[1])-9,x[1],11)+TX(X(i),H-10,x[0],11);});
  return SVG(W,H,s);},
 pie(f){const d=f.d,tot=d.reduce((a,x)=>a+x[1],0),cx=88,cy=100,r=64;let a0=-Math.PI/2,s=TX(160,15,f.title,13);
  d.forEach((x,i)=>{const a1=a0+x[1]/tot*2*Math.PI,lg=a1-a0>Math.PI?1:0;
   s+=`<path d="M${cx} ${cy}L${cx+r*Math.cos(a0)} ${cy+r*Math.sin(a0)}A${r} ${r} 0 ${lg} 1 ${cx+r*Math.cos(a1)} ${cy+r*Math.sin(a1)}Z" fill="${COL[i%6]}" stroke="#fff" stroke-width="2"/>`;
   s+=`<rect x="180" y="${48+i*26}" width="14" height="14" rx="3" fill="${COL[i%6]}"/>`+TX(200,60+i*26,x[0]+": "+x[1]+"%",12,"start");a0=a1;});
  return SVG(320,175,s);},
 table(f){return`<table class="fx-tb"><caption>${f.title}</caption><thead><tr>${f.h.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${f.r.map(r=>`<tr>${r.map((c,i)=>i?`<td>${c}</td>`:`<th>${c}</th>`).join("")}</tr>`).join("")}</tbody></table>`;},
 grid(f){const u=Math.min(34,260/f.w,120/f.h),ox=(300-f.w*u)/2;let s="";
  for(let i=0;i<f.w;i++)for(let j=0;j<f.h;j++)s+=`<rect x="${ox+i*u}" y="${14+j*u}" width="${u}" height="${u}" fill="#bae6fd" stroke="#0369a1"/>`;
  return SVG(300,f.h*u+28,s);},
 rect(f){return SVG(300,150,`<rect x="70" y="35" width="150" height="85" rx="4" fill="#a5f3fc" stroke="#0e7490" stroke-width="4"/>`+TX(145,26,f.top,14)+TX(252,82,f.side,14));},
 tri(f){return SVG(300,150,`<polygon points="70,125 230,125 70,35" fill="#bbf7d0" stroke="#166534" stroke-width="4"/><path d="M70 113H82V125" fill="none" stroke="#166534" stroke-width="2"/>`+TX(150,143,f.top,14)+TX(46,84,f.side,14));},
 tri3(f){const[a,b,c]=f.s,x=(a*a+b*b-c*c)/(2*a),y=Math.sqrt(Math.max(b*b-x*x,0)),k=Math.min(200/a,100/y),A=[50,130],B=[50+a*k,130],C=[50+x*k,130-y*k];
  return SVG(300,160,`<polygon points="${A} ${B} ${C}" fill="#bbf7d0" stroke="#166534" stroke-width="4"/>`+TX((A[0]+B[0])/2,150,a+" cm",13)+TX((A[0]+C[0])/2-10,(A[1]+C[1])/2,b+" cm",13,"end")+TX((B[0]+C[0])/2+10,(B[1]+C[1])/2,c+" cm",13,"start"));},
 poly(f){const n=f.n,r=62,st=-Math.PI/2+(n%2?0:Math.PI/n),p=[...Array(n)].map((_,i)=>{const a=st+i*2*Math.PI/n;return(150+r*Math.cos(a)).toFixed(1)+","+(78+r*Math.sin(a)).toFixed(1)}).join(" ");
  return SVG(300,155,`<polygon points="${p}" fill="#c4b5fd" stroke="#5b21b6" stroke-width="3"/>`);},
 plane(f){const n=f.n||6,W=320,H=190,ox=34,oy=164,u=Math.min((W-ox-16)/n,(oy-16)/n);let s="";
  for(let i=0;i<=n;i++){s+=`<line x1="${ox+i*u}" y1="${oy}" x2="${ox+i*u}" y2="${oy-n*u}" stroke="currentColor" opacity=".15"/><line x1="${ox}" y1="${oy-i*u}" x2="${ox+n*u}" y2="${oy-i*u}" stroke="currentColor" opacity=".15"/>`+TX(ox+i*u,oy+15,i,10)+(i?TX(ox-8,oy-i*u+4,i,10,"end"):"");}
  s+=`<line x1="${ox}" y1="${oy}" x2="${ox+n*u+8}" y2="${oy}" stroke="currentColor" stroke-width="2"/><line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy-n*u-8}" stroke="currentColor" stroke-width="2"/>`;
  const P=p=>(ox+p[0]*u)+","+(oy-p[1]*u);
  if(f.poly)s+=`<polygon points="${f.poly.map(P).join(" ")}" fill="#a5f3fc88" stroke="#0e7490" stroke-width="2"/>`;
  if(f.line)s+=`<polyline points="${f.line.map(P).join(" ")}" fill="none" stroke="#7c3aed" stroke-width="2.5"/>`;
  (f.p||[]).forEach(p=>{s+=`<circle cx="${ox+p[0]*u}" cy="${oy-p[1]*u}" r="4.5" fill="#f43f5e" stroke="#fff"/>`+(p[2]?TX(ox+p[0]*u+10,oy-p[1]*u-7,p[2],13):"");});
  return SVG(W,H,s);},
 nline(f){const a=f.a,b=f.b,L=22,R=298,y=64,X=v=>L+(v-a)/(b-a)*(R-L),dv=f.div||1,ng=v=>v<0?"−"+(-v):v;
  let s=`<line x1="${L-8}" y1="${y}" x2="${R+8}" y2="${y}" stroke="currentColor" stroke-width="2.5"/>`;
  for(let v=a;v<=b;v++){s+=`<line x1="${X(v)}" y1="${y-8}" x2="${X(v)}" y2="${y+8}" stroke="currentColor" stroke-width="2"/>`+TX(X(v),y+26,ng(v),12);
   if(dv>1&&v<b)for(let k=1;k<dv;k++)s+=`<line x1="${X(v+k/dv)}" y1="${y-5}" x2="${X(v+k/dv)}" y2="${y+5}" stroke="currentColor" stroke-width="1.5"/>`;}
  (f.p||[]).forEach(p=>{s+=`<circle cx="${X(p[0])}" cy="${y}" r="5.5" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>`+TX(X(p[0]),y-14,p[1],14);});
  return SVG(320,105,s);},
 solid(f){let s;
  if(f.k==="cubo")s=`<polygon points="60,60 130,60 130,130 60,130" fill="#fecaca" stroke="#7f1d1d" stroke-width="3"/><polygon points="60,60 90,30 160,30 130,60" fill="#fca5a5" stroke="#7f1d1d" stroke-width="3"/><polygon points="130,60 160,30 160,100 130,130" fill="#f87171" stroke="#7f1d1d" stroke-width="3"/><path d="M90 30V100M90 100H160M90 100L60 130" stroke="#7f1d1d" stroke-width="2" stroke-dasharray="5 4" fill="none"/>`;
  else s=`<polygon points="115,125 180,97 145,27 80,55" fill="#f87171" stroke="#7f1d1d" stroke-width="3"/><polygon points="45,125 115,125 80,55" fill="#fecaca" stroke="#7f1d1d" stroke-width="3"/><path d="M45 125L110 97M110 97H180M110 97L145 27" stroke="#7f1d1d" stroke-width="2" stroke-dasharray="5 4" fill="none"/>`;
  return SVG(220,150,s);},
 net(f){let s="";
  if(f.k==="cubo")[[1,0],[0,1],[1,1],[2,1],[3,1],[1,2]].forEach(p=>{s+=`<rect x="${50+p[0]*34}" y="${14+p[1]*34}" width="34" height="34" fill="#fde68a" stroke="#92400e" stroke-width="2.5"/>`;});
  else s=`<rect x="100" y="60" width="40" height="40" fill="#fde68a" stroke="#92400e" stroke-width="2.5"/>`+[["100,60 140,60 120,20"],["100,100 140,100 120,140"],["100,60 100,100 60,80"],["140,60 140,100 180,80"]].map(p=>`<polygon points="${p}" fill="#fcd34d" stroke="#92400e" stroke-width="2.5"/>`).join("");
  return SVG(240,160,s);},
 blocks(f){const c=f.c,l=f.l,a=f.a,u=26,dx=u*.55,dy=u*.45,x0=24,y0=14+l*dy;let s="";
  for(let i=0;i<c;i++)for(let j=0;j<a;j++)s+=`<rect x="${x0+i*u}" y="${y0+j*u}" width="${u}" height="${u}" fill="#bae6fd" stroke="#0369a1"/>`;
  for(let i=0;i<c;i++)for(let k=0;k<l;k++){const x=x0+i*u+k*dx,y=y0-k*dy;s+=`<polygon points="${x},${y} ${x+u},${y} ${x+u+dx},${y-dy} ${x+dx},${y-dy}" fill="#e0f2fe" stroke="#0369a1"/>`;}
  for(let k=0;k<l;k++)for(let j=0;j<a;j++){const x=x0+c*u+k*dx,y=y0+j*u-k*dy;s+=`<polygon points="${x},${y} ${x+dx},${y-dy} ${x+dx},${y+u-dy} ${x},${y+u}" fill="#7dd3fc" stroke="#0369a1"/>`;}
  return SVG(x0+c*u+l*dx+24,y0+a*u+16,s);},
 pict(f){const n=f.n,k=f.k;let s="";
  if(n===100){const u=13;for(let i=0;i<100;i++){s+=`<rect x="${85+(i%10)*u}" y="${8+Math.floor(i/10)*u}" width="${u-1.5}" height="${u-1.5}" fill="${i<k?"#fb7185":"#e2e8f0"}"/>`;}return SVG(300,145,s);}
  const w=Math.min(34,250/n);for(let i=0;i<n;i++)s+=`<rect x="${20+i*(w+3)}" y="26" width="${w}" height="52" rx="5" fill="${i<k?"#fb7185":"#e2e8f0"}" stroke="#94a3b8" stroke-width="2"/>`;
  return SVG(300,104,s);},
 circ(f){return SVG(300,150,`<circle cx="150" cy="75" r="58" fill="#fde68a" stroke="#92400e" stroke-width="3"/><line x1="150" y1="75" x2="208" y2="75" stroke="#92400e" stroke-width="3"/><circle cx="150" cy="75" r="3.5" fill="#92400e"/>`+TX(180,66,f.lab,13));},
 thales(f){const ys=[30,85,140],x1=y=>70+(y-30)*.35,x2=y=>215-(y-30)*.2;let s="";
  ys.forEach(y=>{s+=`<line x1="20" y1="${y}" x2="300" y2="${y}" stroke="#0e7490" stroke-width="3"/>`;});
  s+=`<line x1="${x1(10)}" y1="10" x2="${x1(160)}" y2="160" stroke="currentColor" stroke-width="2"/><line x1="${x2(10)}" y1="10" x2="${x2(160)}" y2="160" stroke="currentColor" stroke-width="2"/>`;
  s+=TX(x1(57)-14,62,f.a,13,"end")+TX(x1(112)-14,117,f.b,13,"end")+TX(x2(57)+14,62,f.c,13,"start")+TX(x2(112)+14,117,f.d,13,"start");
  return SVG(320,170,s);},
 sim(f){const tri=(a,ox)=>{const k=14,p=a[0]*k,q=a[1]*k,oy=146;return`<polygon points="${ox},${oy} ${ox+p},${oy} ${ox},${oy-q}" fill="#bbf7d0" stroke="#166534" stroke-width="3"/>`+TX(ox+p/2,oy+14,a[0],12)+TX(ox-8,oy-q/2+4,a[1],12,"end")+TX(ox+p/2+8,oy-q/2-4,a[2],12,"start");};
  return SVG(320,165,tri(f.a,40)+tri(f.b,150));},
 rt(f){const k=Math.min(170/f.da,110/f.db),p=f.da*k,q=f.db*k,ox=60,oy=140;
  return SVG(300,165,`<polygon points="${ox},${oy} ${ox+p},${oy} ${ox},${oy-q}" fill="#bbf7d0" stroke="#166534" stroke-width="4"/><path d="M${ox} ${oy-12}H${ox+12}V${oy}" fill="none" stroke="#166534" stroke-width="2"/>`+TX(ox+p/2,oy+16,f.a,13)+TX(ox-8,oy-q/2+4,f.b,13,"end")+TX(ox+p/2+10,oy-q/2-6,f.c,13,"start"));},
 emoji(f){return`<div class="fx-emoji">${f.s}</div>`;}
};
const figHTML=f=>FIG[f.t]?FIG[f.t](f):"";

