module.exports = {
  plugins: [
    require("postcss-uncss")({
      html: ["./src/index.html"],
      ignore: [
        ".form", ".form-button", ".text", ".anim", ".complete", ".error", "._req", "._email", "._error", "._error-anim", "._error", ".lex-logo", ".about-text-anim", ".about-img-anim", ".show-anim", ".hamburger-cover", ".hamburger-menu-cover", ".hamburger-link", ".open", ".second.text.anim", ".second.text.anim.complete", ".third.text.anim.complete", ".second.text.anim.error", ".fourth.text.anim.error", ".first.text.anim", ".hamburger-menu-cover.open", ".hamburger-cover.open", "body.open", ".hamburger-cover.open span", ".hamburger-cover.open span::after", ".hamburger-cover.open span::before", ".hamburger-cover span", ".hamburger-cover span::after", ".hamburger-cover span::before", ".hamburger-cover.open span::after", ".hamburger-cover.open span::before"
      ]
    })
  ]
}