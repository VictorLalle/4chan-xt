// ==UserScript==
// @name         4chan X
// @version      1.14.21.6
// @minGMVer     1.14
// @minFFVer     26
// @namespace    4chan-X
// @description  4chan X is a script that adds various features to anonymous imageboards.
// @license      MIT; https://github.com/ccd0/4chan-x/blob/master/LICENSE 
// @include      http://boards.4chan.org/*
// @include      https://boards.4chan.org/*
// @include      http://sys.4chan.org/*
// @include      https://sys.4chan.org/*
// @include      http://www.4chan.org/*
// @include      https://www.4chan.org/*
// @include      http://boards.4channel.org/*
// @include      https://boards.4channel.org/*
// @include      http://sys.4channel.org/*
// @include      https://sys.4channel.org/*
// @include      http://www.4channel.org/*
// @include      https://www.4channel.org/*
// @include      http://i.4cdn.org/*
// @include      https://i.4cdn.org/*
// @include      http://is.4chan.org/*
// @include      https://is.4chan.org/*
// @include      http://is2.4chan.org/*
// @include      https://is2.4chan.org/*
// @include      http://is.4channel.org/*
// @include      https://is.4channel.org/*
// @include      http://is2.4channel.org/*
// @include      https://is2.4channel.org/*
// @include      https://erischan.org/*
// @include      https://www.erischan.org/*
// @include      https://fufufu.moe/*
// @include      https://gnfos.com/*
// @include      https://himasugi.blog/*
// @include      https://www.himasugi.blog/*
// @include      https://kakashi-nenpo.com/*
// @include      https://www.kakashi-nenpo.com/*
// @include      https://kissu.moe/*
// @include      https://www.kissu.moe/*
// @include      https://lainchan.org/*
// @include      https://www.lainchan.org/*
// @include      https://merorin.com/*
// @include      https://ota-ch.com/*
// @include      https://www.ota-ch.com/*
// @include      https://ponyville.us/*
// @include      https://www.ponyville.us/*
// @include      https://smuglo.li/*
// @include      https://notso.smuglo.li/*
// @include      https://smugloli.net/*
// @include      https://smug.nepu.moe/*
// @include      https://sportschan.org/*
// @include      https://www.sportschan.org/*
// @include      https://sushigirl.us/*
// @include      https://www.sushigirl.us/*
// @include      https://tvch.moe/*
// @include      https://www.google.com/recaptcha/api2/anchor?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      https://www.google.com/recaptcha/api2/frame?*&k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      https://www.google.com/recaptcha/api2/frame?*&k=887877714&*
// @include      https://www.google.com/recaptcha/api2/bframe?*&k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      http://www.google.com/recaptcha/api/fallback?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @include      https://www.google.com/recaptcha/api/fallback?k=6Ldp2bsSAAAAAAJ5uyx_lx34lJeEpTLVkP5k04qc*
// @exclude      http://www.4chan.org/advertise
// @exclude      https://www.4chan.org/advertise
// @exclude      http://www.4chan.org/advertise?*
// @exclude      https://www.4chan.org/advertise?*
// @exclude      http://www.4chan.org/donate
// @exclude      https://www.4chan.org/donate
// @exclude      http://www.4chan.org/donate?*
// @exclude      https://www.4chan.org/donate?*
// @exclude      http://www.4channel.org/advertise
// @exclude      https://www.4channel.org/advertise
// @exclude      http://www.4channel.org/advertise?*
// @exclude      https://www.4channel.org/advertise?*
// @exclude      http://www.4channel.org/donate
// @exclude      https://www.4channel.org/donate
// @exclude      http://www.4channel.org/donate?*
// @exclude      https://www.4channel.org/donate?*
// @connect      4chan.org
// @connect      4channel.org
// @connect      4cdn.org
// @connect      4chenz.github.io
// @connect      archive.4plebs.org
// @connect      archive.nyafuu.org
// @connect      warosu.org
// @connect      desuarchive.org
// @connect      boards.fireden.net
// @connect      arch.b4k.co
// @connect      archive.b-stats.org
// @connect      archived.moe
// @connect      thebarchive.com
// @connect      archiveofsins.com
// @connect      www.tokyochronos.net
// @connect      archive.wakarimasen.moe
// @connect      api.clyp.it
// @connect      api.dailymotion.com
// @connect      api.github.com
// @connect      soundcloud.com
// @connect      api.streamable.com
// @connect      vimeo.com
// @connect      www.youtube.com
// @connect      *
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_addValueChangeListener
// @grant        GM_openInTab
// @grant        GM_xmlhttpRequest
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.deleteValue
// @grant        GM.listValues
// @grant        GM.openInTab
// @grant        GM.xmlHttpRequest
// @run-at       document-start
// @updateURL    https://www.4chan-x.net/builds/4chan-X.meta.js
// @downloadURL  https://www.4chan-x.net/builds/4chan-X.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAACVBMVEUAAGcAAABmzDNZt9VtAAAAAXRSTlMAQObYZgAAAF5JREFUeNrtkTESABAQxPD/R6tsE2dUGYUtFJvLDKf93KevHJAjpBorAQWSBIKqFASC4G0pCAkm4GfaEvgYXl0T6HBaE97f0vmnfYHbZOMLZCx9ISdKWwjOWZSC8GYm4SUGwfYgqI4AAAAASUVORK5CYII=
// ==/UserScript==
