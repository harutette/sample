function insertAfter(newItem, target) {
    target.parentNode.insertBefore(newItem, target.nextSibling);
}

// var tabURL = window.location.href;
// var queryString = window.location.search;

// アクセストレード：http://h.accesstrade.net/sp/cc?rk=01001aqe00ebvj
// もしも：http://c.af.moshimo.com/af/c/click?a_id=557601&p_id=1&pc_id=1&pl_id=1319&guid=ON
var company = [
    { name: 'a8.net', url: 'px\.a8\.net/' },
    { name: 'affiliate-b', url: 'affiliate-b\.com/' },
    { name: 'affiliate-b', url: 'afi-b\.com/' },
    { name: 'value commerce', url: 'ap\.valuecommerce\.com/' },
    { name: 'value commerce', url: 'dalr\.valuecommerce\.com/' },
    { name: 'rakuten affiliate', url: '\.afl\.rakuten\.co\.jp' },
    { name: 'access trade', url: 'h\.accesstrade\.net/' },
    { name: 'tg affiliate', url: 'ad2\.trafficgate\.net/' },
    { name: 'moshimo affiliate', url: 'af\.moshimo\.com/' },
];

function insertSpan(target, raw) {
    linkinfo = document.createElement("span");
    linkinfo.id = "linkinfo";
    // todo:差し込み文言
    linkinfo.innerHTML = [
        raw.name,
    ].join("");

    linkinfoStyle = document.createElement("style");
    linkinfoStyle.type = "text/css";
    linkinfoStyle.innerHTML = [
        "#linkinfo {",
        "    background-color: red;",
        "    color: white;",
        "}",
    ].join("");

    if (target instanceof HTMLIFrameElement) {
        target.parentNode.insertBefore(linkinfo, el.nextSibling)
        target.parentNode.insertBefore(linkinfoStyle, el.nextSibling)
    } else {
        target.appendChild(linkinfo);
        target.appendChild(linkinfoStyle);
    }
}

// a
for (i = 0; i < document.getElementsByTagName('a').length; i++) {
    el = document.getElementsByTagName('a')[i]
    // todo:検索リンク
    company.forEach(raw => {
        if (el.href.match(raw.url) !== null) {
            insertSpan(el, raw)
        }
    });
}

// iframe
for (i = 0; i < document.getElementsByTagName('iframe').length; i++) {
    el = document.getElementsByTagName('iframe')[i];
    // todo:検索リンク
    company.forEach(raw => {
        if (el.src.match(raw.url) !== null) {
            insertSpan(el, raw)
        }
    });
}