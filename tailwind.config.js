/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cobalt: "#0647d8",
        shell: "#ededed",
        panel: "#d8d8d8",
        line: "#8f8f8f"
      },
      fontFamily: {
        mono: [
          '"Courier New"',
          '"Lucida Console"',
          '"Monaco"',
          "monospace"
        ]
      },
      boxShadow: {
        insetPanel:
          "inset 1px 1px 0 #ffffff, inset -1px -1px 0 #777777",
        pressed:
          "inset 1px 1px 0 #777777, inset -1px -1px 0 #ffffff"
      }
    }
  },
  plugins: []
};
