import { w as g } from "./with-props-DLs7YAe3.js";
import { o as s, a as t, t as y } from "./chunk-D4RADZKF-D9WvSiRn.js";
import {
  u as N,
  F as p,
  d as S,
  e as P,
  a as M,
  M as C,
  b as L,
  S as A,
  c as R,
} from "./musicStore-DWEG4hyn.js";
import { y as I } from "./index-Bta7Cqu8.js";
const k = ({ isOpen: n, onClose: e }) =>
    n
      ? s.jsxs("div", {
          className: "modal",
          children: [
            s.jsxs("div", {
              className: "modal-header",
              children: [
                s.jsx("img", {
                  className: "album-cover",
                  src: "../art/imag_1.jpg",
                  alt: "Ballads album cover",
                }),
                s.jsxs("div", {
                  className: "album-info",
                  children: [
                    s.jsx("h2", {
                      className: "album-title",
                      children: "Ballads",
                    }),
                    s.jsx("p", {
                      className: "artist-name",
                      children: "john coltrano",
                    }),
                  ],
                }),
                s.jsx("button", {
                  className: "modal-close",
                  onClick: e,
                  children: "×",
                }),
              ],
            }),
            s.jsx("div", {
              className: "modal-content",
              children: s.jsxs("div", {
                className: "info-grid",
                children: [
                  s.jsx("div", {
                    className: "info-label",
                    children: "Tenor Saxophone",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "John Coltrane",
                  }),
                  s.jsx("div", { className: "info-label", children: "Piano" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "McCoy Tyner",
                  }),
                  s.jsx("div", { className: "info-label", children: "Bass" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Jimmy Garrison",
                  }),
                  s.jsx("div", { className: "info-label", children: "Drums" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Elvin Jones",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Composer",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Richard Rodgers",
                  }),
                  s.jsx("div", { className: "info-label", children: "Lyrics" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Lorenz Hart",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Recorded on",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Nov 13, 1962",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Recorded by",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "By Rudy Van Gelder",
                  }),
                  s.jsx("div", {
                    className: "info-label",
                    children: "Produced by",
                  }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Bob Thiele",
                  }),
                  s.jsx("div", { className: "info-label", children: "Label" }),
                  s.jsx("div", {
                    className: "info-value",
                    children: "Impulse Records",
                  }),
                ],
              }),
            }),
          ],
        })
      : null,
  B = ({ album: n, songs: e }) => {
    var r;
    const {
        selectedSong: l,
        setSelectedSong: i,
        setSelectedPlaListOrAlbum: d,
      } = N(),
      [x, c] = t.useState(!1),
      m = () => Math.floor(Math.random() * e.length),
      u = () => {
        I("Album added succssefuly to your library", {
          position: "bottom-center",
          hideProgressBar: !0,
        });
      },
      o = () => {
        i(e[0]), d(n);
      };
    return s.jsxs("div", {
      className: "album-header-card",
      children: [
        s.jsx("div", {
          className: "image-container",
          children: s.jsx("img", { src: n.imageSrc }),
        }),
        s.jsxs("div", {
          className: "info",
          children: [
            s.jsx("div", { className: "title", children: n.title }),
            s.jsx("div", { className: "artist", children: n.artist }),
            s.jsxs("div", {
              className: "atrist",
              children: [
                "Album • ",
                (r = n.songs) == null ? void 0 : r.length,
                " Songs",
              ],
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => o(),
              children: l != null && l.isPlaying ? s.jsx(p, {}) : s.jsx(S, {}),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => i(e[m()]),
              children: s.jsx("span", {
                className: "icon icon-shuffle",
                children: s.jsx(P, { iconName: "shuffle" }),
              }),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: u,
              children: s.jsx("span", { className: "icon icon-plus" }),
            }),
            s.jsx("button", {
              className: "icon-button",
              onClick: () => c(!0),
              children: s.jsx("span", { className: "icon icon-info" }),
            }),
          ],
        }),
        s.jsx(k, { isOpen: x, onClose: () => c(!1) }),
      ],
    });
  },
  F = g(function () {
    const { selectedSong: e, setSelectedSong: l } = N(),
      { recentlyPlayed: i } = M(),
      [d, x] = t.useState([]),
      [c, m] = t.useState([]),
      u = y(),
      { album: o } = u.state;
    t.useEffect(() => {
      var v;
      const a = i;
      let j = [];
      (v = o == null ? void 0 : o.songs) == null ||
        v.map((f) => j.push(a[f - 1])),
        m(j);
    }, [o]);
    const r = () => (!e || !e.id ? -1 : i.findIndex((a) => a.id === e.id)),
      b = () => {
        const a = r();
        a <= 0 ? l(i[i.length - 1]) : l(i[a - 1]);
      },
      h = () => {
        const a = r();
        a === -1 || a === i.length - 1 ? l(i[0]) : l(i[a + 1]);
      };
    return s.jsxs("div", {
      className: "body",
      children: [
        s.jsx(C, {
          logoSrc: "app/icons/icons/muza.svg",
          logoAlt: "Music Library",
          sections: d,
        }),
        s.jsxs("div", {
          className: "content",
          children: [
            s.jsx(L, {}),
            s.jsxs("main", {
              children: [
                s.jsx(B, { album: o, songs: c }),
                s.jsx("hr", {}),
                s.jsx("div", {
                  className: "album-song-list",
                  children: c.map((a) =>
                    s.jsx(
                      A,
                      {
                        details: a,
                        onClick: () => l(a),
                        isPlaying: a.id === (e == null ? void 0 : e.id),
                      },
                      a.id,
                    ),
                  ),
                }),
                s.jsx("hr", {}),
                e &&
                  s.jsx(R, {
                    details: {
                      audioUrl: e.audioUrl,
                      imageSrc: e.imageSrc,
                      title: e.title,
                      artist: e.artist,
                      album: e.album,
                      year: e.year || new Date().getFullYear(),
                      isPlaying: e.isPlaying,
                      id: e.id,
                    },
                    onUpdate: (a) =>
                      l({ ...e, isPlaying: a.isPlaying, audioUrl: a.audioUrl }),
                    onPrevious: b,
                    onNext: h,
                    onSongEnded: h,
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  });
export { F as default };
