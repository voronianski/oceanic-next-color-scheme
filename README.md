# Oceanic Next Color Scheme

[![GitHub Tags](https://img.shields.io/github/tag/voronianski/oceanic-next-color-scheme.svg)](https://github.com/voronianski/oceanic-next-color-scheme/tags)
[![Package Control](https://packagecontrol.herokuapp.com/downloads/Oceanic%20Next%20Color%20Scheme.svg?color=50C32E)](https://packagecontrol.io/packages/Oceanic%20Next%20Color%20Scheme)
[![PayPal](https://camo.githubusercontent.com/e14c85b542e06215f7e56c0763333ef1e9b9f9b7/68747470733a2f2f7777772e70617970616c6f626a656374732e636f6d2f656e5f55532f692f62746e2f62746e5f646f6e6174655f534d2e676966)](https://www.paypal.me/voronianski/5)

> Colorful Sublime Text 2/3 color scheme optimized for [babel-sublime](https://github.com/babel/babel-sublime) JavaScript syntax highlighter.

[<img src="https://cloud.githubusercontent.com/assets/15828926/24619500/5ace50f2-18c4-11e7-9c40-7a247528f99d.png" width="300" />](https://dribbble.com/shots/1921103-Oceanic-Next-Theme)

## Install

- use [Package Control](https://packagecontrol.io/packages/Oceanic%20Next%20Color%20Scheme)
- or manually copy `Oceanic Next.tmTheme` file into `/Packages/User` directory (path to it depends on your OS)
- select scheme from `Sublime Text` `->` `Preferences` `->` `Color Scheme`

## Screenshot

[<img src="https://raw.githubusercontent.com/voronianski/oceanic-next-theme/master/screenshot.png" width="800" />](https://raw.githubusercontent.com/voronianski/oceanic-next-theme/master/screenshot.png)

## Other Editors

_Oceanic Next_ was also ported to:

- [x] [Atom Editor](https://atom.io/themes/oceanic-next) (thanks to [Steve Lombardi](https://github.com/smlombardi)).
- [x] [Vim](https://github.com/chriskempson/base16-builder) (thanks to [Chris Kempson](https://github.com/chriskempson))
- [x] [NeoVim](https://github.com/mhartington/oceanic-next) (thanks to [Mike Hartington](https://github.com/mhartington))
- [x] [XCode](https://github.com/dmcrodrigues/Oceanic-Next-Xcode-Theme) (thanks to [David Rodrigues](https://github.com/dmcrodrigues))
- [x] [iTerm2](https://github.com/mhartington/oceanic-next-iterm) (thanks to [Mike Hartington](https://github.com/mhartington))
- [x] [gnome-terminal](https://github.com/denysdovhan/oceanic-next-gnome-terminal) (thanks to [Denys Dovhan](https://github.com/denysdovhan))
- [x] [Eclipse](http://eclipsecolorthemes.org/?view=theme&id=35308) (thanks to [John Louderback](https://github.com/JohnLouderback))
- [x] [JetBrains Color Scheme](https://github.com/minwe/oceanic-next-jetbrains) (thanks to [Minwe LUO](https://github.com/minwe))
- [x] [JetBrains Theme](https://github.com/rofrol/oceanic-next-jetbrains-theme) (thanks to [Roman Frołow](https://github.com/rofrol))
- [x] [VS Code](https://marketplace.visualstudio.com/items/mhartington.Oceanic-Next) (thanks to [Mike Hartington](https://github.com/mhartington))
- [x] [Komodo IDE/Edit](https://github.com/Defman21/oceanicnext-komodo) (thanks to [Sergey Kislyakov](https://github.com/Defman21))
- [x] [fish shell (VI keybinding)](https://github.com/Jim-Zenn/fish-theme-oceanic-next-vi) (thanks to [Jim Zenn](https://github.com/Jim-Zenn))
- [x] [Emacs](https://github.com/terry3/oceanic-theme) (thanks to [Tengfei Guo](https://github.com/terry3))
- [x] [macOS Terminal](https://github.com/robinbentley/oceanic-next-macos-terminal) (thanks to [Robin Bentley](https://github.com/robinbentley))
- [x] [Sequel Pro](https://github.com/JodusNodus/oceanic-next-sequel-pro) (thanks to [Thomas Billiet](https://github.com/JodusNodus))
- [x] [Netbeans IDE](https://github.com/JodusNodus/oceanic-next-netbeans) (thanks to [Thomas Billiet](https://github.com/JodusNodus))
- [x] [photon.sh](https://photon.sh/demo?language=javascript&theme=oceanic-next) (thanks to [Félix Sanz](https://github.com/felixsanz))
- [x] [Hyper](https://github.com/robinbentley/hyper-oceanic-next) (thanks to [Robin Bentley](https://github.com/robinbentley))

You may also want to look at [base16-oceanic-next](https://github.com/wbinnssmith/base16-oceanic-next). This project generates the Oceanic Next color scheme for a variety of text editors using `base16-builder`.

### PowerShell

You can use `concfg` to install theme for Powershell. First with `iex` install `scoop`, and with `scoop` install `concfg` ([answer on StackOverflow](http://stackoverflow.com/questions/13690223/how-can-i-launch-powershell-exe-with-the-default-colours-from-the-powershell-s/41428132#41428132)):

```powershell
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
scoop install concfg
concfg import oceanicnext
```

### Similar Schemes

_Oceanic Next_ inspired another schemes which extend syntax or change some of its aspects:

- [Yoceanic Next](https://github.com/cameronbourke/yoceanic-next-syntax) by [Cameron Bourke](https://github.com/cameronbourke) is available only for [Atom](https://atom.io/themes/yoceanic-next-syntax) editor
- [Oceanic Next Purple](https://github.com/ergenekonyigit/oceanic-next-purple-syntax) by [Ergenekon Yigit](https://github.com/ergenekonyigit) is available only for [Atom](https://atom.io/themes/oceanic-next-purple) editor
- [Oceanic Plus](https://github.com/marcoms/oceanic-plus) by [Marco  Scannadinari](https://github.com/marcoms) is available only for [VS Code](https://marketplace.visualstudio.com/items?itemName=marcoms.oceanic-plus)

## Color Palette

There is a list of colors used in _Oceanic Next_. Check it before porting the color scheme to another environments.

<img src="https://raw.githubusercontent.com/voronianski/oceanic-next-theme/master/colors.png" width="350" />

```bash
base 00: #1B2B34
base 01: #343D46
base 02: #4F5B66
base 03: #65737E
base 04: #A7ADBA
base 05: #C0C5CE
base 06: #CDD3DE
base 07: #D8DEE9
base 08: #EC5f67
base 09: #F99157
base 0A: #FAC863
base 0B: #99C794
base 0C: #5FB3B3
base 0D: #6699CC
base 0E: #C594C5
base 0F: #AB7967
```

## Companion Sublime UI Themes

- [Broceanic](https://github.com/kenwheeler/broceanic-theme) by [Ken Wheeler](https://github.com/kenwheeler)
- [El Capitan](https://github.com/iccir/El-Capitan-Theme) by [Ricci Adams](https://github.com/iccir)

## References

Theme is inspired by [Base16 Ocean Dark Theme](https://github.com/carloe/spacegray-base16-ocean-dark) which was my long time favorite and based on [Oceanic Eighties Color Scheme](https://github.com/memco/Oceanic-tmTheme).

## Contributing

If you'd like to help with development of the color scheme please follow these simple rules:

- add new styles to the theme inside `.YAML-tmTheme` file
- generate `.tmTheme` xml file with [AAAPackageDev](https://github.com/SublimeText/AAAPackageDev) for Sublime
- to inspect scopes inside Sublime you use `Cmd + Alt + P` command (on MacOS)

## Support

The best way to show your support for the Oceanic Next Color Scheme remains [contributing](https://github.com/voronianski/oceanic-next-color-scheme#contributing) to the community.

If you'd like to show your appreciation in another way please consider donating through PayPal.

[![PayPal](https://camo.githubusercontent.com/e14c85b542e06215f7e56c0763333ef1e9b9f9b7/68747470733a2f2f7777772e70617970616c6f626a656374732e636f6d2f656e5f55532f692f62746e2f62746e5f646f6e6174655f534d2e676966)](https://www.paypal.me/voronianski/5)

---

**MIT Licensed**
