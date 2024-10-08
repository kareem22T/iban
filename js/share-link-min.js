!(function (t) {
  (window.ShareLink = function (e, r) {
    var i,
      n = {},
      l = function (t) {
        var e = "";
        if (n.width && n.height) {
          var r = screen.width / 2 - n.width / 2,
            i = screen.height / 2 - n.height / 2;
          e =
            "toolbar=0,status=0,width=" +
            n.width +
            ",height=" +
            n.height +
            ",top=" +
            i +
            ",left=" +
            r;
        }
        var l = ShareLink.getNetworkLink(t, n),
          s = /^https?:\/\//.test(l);
        open(l, s ? "" : "_self", e);
      },
      s = function () {
        t.each(e.classList, function () {
          var t,
            e =
              (t = this).substr(0, n.classPrefixLength) === n.classPrefix
                ? t.substr(n.classPrefixLength)
                : null;
          if (e)
            return (
              (function (t) {
                i.on("click", function () {
                  l(t);
                }),
                  "button" === i.attr("role") &&
                    i.on("keyup", (e) => {
                      (13 !== e.keyCode && 32 !== e.keyCode) ||
                        (e.preventDefault(), l(t));
                    });
              })(e),
              !1
            );
        });
      };
    t.extend(n, ShareLink.defaultSettings, r),
      ["title", "text"].forEach(function (t) {
        n[t] = n[t].replace("#", "");
      }),
      (n.classPrefixLength = n.classPrefix.length),
      (i = t(e)),
      s();
  }),
    (ShareLink.networkTemplates = {
      twitter: "https://twitter.com/intent/tweet?text={text} {url}",
      "x-twitter": "https://x.com/intent/tweet?text={text} {url}",
      pinterest:
        "https://www.pinterest.com/pin/create/button/?url={url}&media={image}",
      facebook: "https://www.facebook.com/sharer.php?u={url}",
      threads: "https://threads.net/intent/post?text={text} {url}",
      vk: "https://vkontakte.ru/share.php?url={url}&title={title}&description={text}&image={image}",
      linkedin:
        "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={text}&source={url}",
      odnoklassniki:
        "https://connect.ok.ru/offer?url={url}&title={title}&imageUrl={image}",
      tumblr: "https://tumblr.com/share/link?url={url}",
      google: "https://plus.google.com/share?url={url}",
      digg: "https://digg.com/submit?url={url}",
      reddit: "https://reddit.com/submit?url={url}&title={title}",
      stumbleupon: "https://www.stumbleupon.com/submit?url={url}",
      pocket: "https://getpocket.com/edit?url={url}",
      whatsapp: "https://api.whatsapp.com/send?text=*{title}*%0A{text}%0A{url}",
      xing: "https://www.xing.com/spi/shares/new?url={url}",
      print: "javascript:print()",
      email: "mailto:?subject={title}&body={text}%0A{url}",
      telegram: "https://telegram.me/share/url?url={url}&text={text}",
      skype: "https://web.skype.com/share?url={url}",
    }),
    (ShareLink.defaultSettings = {
      title: "",
      text: "",
      image: "",
      url: location.href,
      classPrefix: "s_",
      width: 640,
      height: 480,
    }),
    (ShareLink.getNetworkLink = function (t, e) {
      var r = ShareLink.networkTemplates[t].replace(
        /{([^}]+)}/g,
        function (t, r) {
          return e[r] || "";
        }
      );
      if ("email" === t) {
        if (-1 < e.title.indexOf("&") || -1 < e.text.indexOf("&")) {
          var i = {
            text: e.text.replace(new RegExp("&", "g"), "%26"),
            title: e.title.replace(new RegExp("&", "g"), "%26"),
            url: e.url,
          };
          r = ShareLink.networkTemplates[t].replace(
            /{([^}]+)}/g,
            function (t, e) {
              return i[e];
            }
          );
        }
        return (
          r.indexOf("?subject=&body") && (r = r.replace("subject=&", "")), r
        );
      }
      return r;
    }),
    (t.fn.shareLink = function (e) {
      return this.each(function () {
        t(this).data("shareLink", new ShareLink(this, e));
      });
    });
})(jQuery);
