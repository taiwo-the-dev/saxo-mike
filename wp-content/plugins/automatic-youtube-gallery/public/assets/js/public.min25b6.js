!function(a){"use strict";function e(){if(!0==window.ayg_is_ready)return!1;window.ayg_is_ready=!0,a(document).trigger("ayg.ready"),a(".ayg-theme-classic").each(function(){(function e(t){++ayg_public.gallery_index,t.addClass("ayg-theme-initialized");var r=t.data("params"),l=t.find(".ayg-item").eq(0),s=l.find(".ayg-thumbnail").data("id"),d="ayg-player-"+ayg_public.gallery_index;t.find(".ayg-player-iframe").attr("id",d);var c=t.find(".ayg-pagination"),g=null,y="none";c.length>0&&(y=(g=c.find(".ayg-pagination-next-btn")).data("type"));var p=i(d,{custom:{params:r,image:l.find(".ayg-thumbnail-image").attr("src")},events:{onStateChange:function(a){if(a.data==YT.PlayerState.PLAYING&&o(d),a.data==YT.PlayerState.ENDED){if(1==r.autoadvance){if(p.stop(),l.is(":visible")){if(l.is(":last-child")){if("more"==y||"none"==y)1==r.loop&&t.find(".ayg-item").eq(0).trigger("click");else if(g.is(":visible")){g.trigger("click");var e=setInterval(function(){0==t.find(".ayg-pagination.ayg-loading").length&&(clearInterval(e),t.find(".ayg-item").eq(0).trigger("click"))},1e3)}}else l.next(".ayg-item").trigger("click")}else t.find(".ayg-item").eq(0).trigger("click")}else 1==r.loop?p.play():p.stop()}}}});t.on("click",".ayg-item",function(){if(l=a(this),t.find(".ayg-active").removeClass("ayg-active"),l.addClass("ayg-active"),s=l.find(".ayg-thumbnail").data("id"),p.change({id:s,image:l.find(".ayg-thumbnail-image").attr("src")}),1==r.player_title){var e=l.find(".ayg-thumbnail").data("title");t.find(".ayg-player-title").html(e)}if(1==r.player_description){var i=l.find(".ayg-thumbnail-description").html();t.find(".ayg-player-description").html(i)}a("html, body").animate({scrollTop:t.offset().top-ayg_public.top_offset},500,function(){var a=l.find(".ayg-thumbnail").data("url");""!=a&&window.history.replaceState(null,null,a)}),1==r.autoadvance&&"more"==y&&l.is(":last-child")&&g.is(":visible")&&g.trigger("click")}),c.length>0&&(n(c),c.on("gallery.updated",function(){!(t.find(".ayg-active").length>0)&&t.find(".ayg-item-"+s).length>0&&(l=t.find(".ayg-item-"+s).addClass("ayg-active"))}))})(a(this))}),a(".ayg-theme-single").each(function(){(function e(t){++ayg_public.gallery_index,t.addClass("ayg-theme-initialized");var n=t.data("params"),r="ayg-player-"+ayg_public.gallery_index;t.find(".ayg-player-iframe").attr("id",r);var l=i(r,{custom:{params:n,image:a("#"+r).data("image")},events:{onStateChange:function(a){a.data==YT.PlayerState.PLAYING&&o(r),a.data==YT.PlayerState.ENDED&&1==n.loop&&l.play()}}})})(a(this))}),a(".ayg-theme-livestream").each(function(){t(a(this))})}function t(e){++ayg_public.gallery_index,e.addClass("ayg-theme-initialized");var t=e.data("params"),n="ayg-player-"+ayg_public.gallery_index;e.find(".ayg-player-iframe").attr("id",n);var r=i(n,{custom:{params:t,image:"none"},events:{onReady:function(t){t.target.getVideoUrl().indexOf("watch?v=live_stream")>0?e.find(".ayg-player-wrapper").fadeOut("fast",function(){e.find(".ayg-fallback-message").fadeIn()}):a("#"+n).show()},onStateChange:function(a){a.data==YT.PlayerState.PLAYING&&o(n),a.data==YT.PlayerState.ENDED&&r.stop()}}})}window.ayg_is_ready=!1;var i=function(e,t){var i=null,n=a("#"+e).closest("div"),o=a("#"+e).data("id"),r=t.custom.params,l=function(){var n="https://www.youtube.com";1==ayg_public.privacy_enhanced_mode&&(n="https://www.youtube-nocookie.com");var l=n+"/embed/"+o+"?enablejsapi=1";r.hasOwnProperty("is_live")&&(l=n+"/embed/live_stream?channel="+o+"&enablejsapi=1"),l+="&playsinline=1",l+="&rel=0",ayg_public.origin&&(l+="&origin="+ayg_public.origin),r.hasOwnProperty("autoplay")&&(l+="&autoplay="+parseInt(r.autoplay)),r.hasOwnProperty("muted")&&(l+="&mute="+parseInt(r.muted)),r.hasOwnProperty("controls")&&(l+="&controls="+parseInt(r.controls)),r.hasOwnProperty("modestbranding")&&(l+="&modestbranding="+parseInt(r.modestbranding)),r.hasOwnProperty("cc_load_policy")&&(l+="&cc_load_policy="+parseInt(r.cc_load_policy)),r.hasOwnProperty("iv_load_policy")&&(l+="&iv_load_policy="+parseInt(r.iv_load_policy)),r.hasOwnProperty("hl")&&(l+="&hl="+r.hl),r.hasOwnProperty("cc_lang_pref")&&(l+="&cc_lang_pref="+r.cc_lang_pref),"iframe"==a("#"+e).prop("tagName").toLowerCase()?a("#"+e).attr("src",l):a("#"+e).replaceWith('<iframe id="'+e+'" class="ayg-player-iframe" width="100%" height="100%" src="'+l+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'),i=new YT.Player(e,{events:t.events})};if(1==ayg_public.cookie_consent){var s='<div class="ayg-privacy-wrapper" style="background-image: url('+t.custom.image+');">';s+='<div class="ayg-privacy-consent-block">',s+='<div class="ayg-privacy-consent-message">'+ayg_public.consent_message+"</div>",s+='<div class="ayg-privacy-consent-button">'+ayg_public.button_label+"</div>",s+="</div>",s+="</div>",n.append(s),n.on("click",".ayg-privacy-consent-button",function(){a(this).html("...");var e={action:"ayg_set_cookie",security:ayg_public.ajax_nonce};a.post(ayg_public.ajax_url,e,function(a){a.success&&(ayg_public.cookie_consent=0,r.autoplay=1,l(),n.find(".ayg-privacy-wrapper").remove())})})}else l();return{play:function(){i&&i.playVideo&&i.playVideo()},change:function(a){i&&i.loadVideoById?i.loadVideoById(a.id):(o=a.id,1==ayg_public.cookie_consent&&n.find(".ayg-privacy-wrapper").css("background-image","url("+a.image+")"))},stop:function(){i&&i.stopVideo&&i.stopVideo()},destroy:function(){i?(i.stopVideo&&i.stopVideo(),i.destroy&&i.destroy()):a("#"+e).remove(),1==ayg_public.cookie_consent&&n.find(".ayg-privacy-wrapper").remove()}}};window.ayg_init_player=i;var n=function(e){var t=e.data("params");t.action="ayg_load_more_videos",t.security=ayg_public.ajax_nonce;var i=parseInt(t.total_pages),n=1,o=[""],r=e.closest(".ayg").find(".ayg-gallery");e.on("click",".ayg-pagination-next-btn",function(){var l=a(this);e.addClass("ayg-loading");var s=l.data("type");t.pageToken=t.next_page_token,o[n]=t.next_page_token,a.post(ayg_public.ajax_url,t,function(a){if(a.success){switch(n=Math.min(n+1,i),t.next_page_token="",n<i&&a.data.next_page_token&&(t.next_page_token=a.data.next_page_token),s){case"more":r.append(a.data.html);break;case"next":e.find(".ayg-pagination-prev-btn").show(),e.find(".ayg-pagination-current-page-number").html(n),r.html(a.data.html)}""==t.next_page_token&&l.hide(),e.trigger("gallery.updated")}e.removeClass("ayg-loading")})}),e.on("click",".ayg-pagination-prev-btn",function(){var i=a(this);e.addClass("ayg-loading"),n=Math.max(n-1,1),t.pageToken=o[n-1],a.post(ayg_public.ajax_url,t,function(a){a.success&&(t.next_page_token="",a.data.next_page_token&&(t.next_page_token=a.data.next_page_token),r.html(a.data.html),e.find(".ayg-pagination-next-btn").show(),e.find(".ayg-pagination-current-page-number").html(n),1==n&&i.hide(),e.trigger("gallery.updated")),e.removeClass("ayg-loading")})})};window.ayg_init_pagination=n;var o=function(e){if(ayg_public.active_player_id||(ayg_public.active_player_id=e),e==ayg_public.active_player_id)return!1;ayg_public.active_player_id=e,a("iframe.ayg-player-iframe:not(#"+e+")").each(function(){this.contentWindow.postMessage('{"event":"command", "func":"pauseVideo", "args":""}',"*")})};window.ayg_pause_other_players=o,a(function(){if(void 0===window.YT){var i,n,o=document.createElement("script");o.src="https://www.youtube.com/iframe_api";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(o,r)}void 0===window.onYouTubeIframeAPIReady?window.onYouTubeIframeAPIReady=function(){e()}:void 0!==window.YT&&e();var l=setInterval(function(){void 0!==window.YT&&window.YT.loaded&&(clearInterval(l),e())},10),s=ayg_public.gallery_id;""!=s&&a("#ayg-"+s).length&&(history.scrollRestoration?history.scrollRestoration="manual":window.onbeforeunload=function(){window.scrollTo(0,0)},a("html, body").animate({scrollTop:a("#ayg-"+s).offset().top-ayg_public.top_offset},500)),a(document).on("click",".ayg-player-description-toggle-btn",function(e){e.preventDefault();var t=a(this),i=t.closest(".ayg-player-description"),n=i.find(".ayg-player-description-dots"),o=i.find(".ayg-player-description-more");n.is(":visible")?(t.html(ayg_public.i18n.show_less),n.hide(),o.fadeIn()):o.fadeOut(function(){t.html(ayg_public.i18n.show_more),n.show()})}),"undefined"!=typeof wp&&void 0!==wp.hooks&&wp.hooks.addFilter("ayg_block_init","automatic-youtube-gallery/block",function(e){return"livestream"==e.type&&(n>0&&clearInterval(i),n=0,i=setInterval(function(){n++;var e=a(".ayg-theme-livestream:not(.ayg-theme-initialized)");(e.length>0||n>=10)&&(clearInterval(i),n=0,e.each(function(){t(a(this))}))},1e3)),e})})}(jQuery);