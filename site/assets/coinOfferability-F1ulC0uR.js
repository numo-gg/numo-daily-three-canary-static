const t=new Set(["accepted","funded","active","repaid","defaulted"]);function s(e){return!!(e!=null&&e.is_enabled)&&!t.has(e.status??"listed")}export{t as L,s as c};
