---
author: el
datetime: 2023-01-26T20:09:04.866Z
title: essentials
slug: essentialVim

featured: false
draft: false
tags:
  - vim
ogImage: ""
---

whttps://vimsheet.com/

## [Copy (yank), cut and paste](https://vim.fandom.com/wiki/Copy,_cut_and_paste)

<mark style="background: #FFB86CA6;">&#60;N&#62;</mark>

`y` `{motion}`: where {motion} is a Vim motion. For example, `y` `w` copies to the beginning of the next word. Other helpful yanking commands include:

- `y` `y` or `Y` – yank the current line, including the newline character at the end of the line
- `y` `$` – yank to the end of the current line (but don't yank the newline character); note that many people like to remap `Y` to `y` `$` in line with C and D
- `y` `i` `w` – yank the current word (excluding surrounding whitespace)
- `y` `a` `w` – yank the current word (including leading or trailing whitespace)
- `y` `t` `x` – yank from the current cursor position up to and before the character (til x)
- `y` `f` `x` – yank from the current cursor position up to and including the character (find x)

Cutting can be done using `d` `{motion}`, including:

- `d` `d` - cut the current line, including the newline character at the end of the line
- yank into clipboard: `"` `+` `y`

- [pasting resgiter](https://vim.fandom.com/wiki/Pasting_registers)

## [Surround Text](https://vi.stackexchange.com/questions/21113/vimscript-surround-word-under-cursor-with-quotes)

<mark style="background: #FFB86CA6;">&#60;V&#62;</mark>

`c` `[textbefore]` `<` `c-r` `>` `"` `[textafter]`

[How do I add text before and after the visual selection?](https://vi.stackexchange.com/questions/15478/how-do-i-add-text-before-and-after-the-visual-selection)

<mark style="background: #FFB86CA6;">&#60;N&#62;</mark>

`c` `i` `w` `[text]` `EscP` : surround the word currently under the cursor with `[text]`

You can surround the word currently under the cursor in quotes with the following normal mode commands:

`c` `i` `w` `"` `"` `EscP`

- Replace `iw` with any other Vim motion/text object to surround other things with quotes\*. Or `""` with any other pair of characters to surround the object with different things.

- Or use `c` from visual mode to surround text that is hard to describe with a single motion.

- If you want to surround the object with a longer piece of text, such as an HTML `<p>` tag, you can use Ctrl-R instead of the `P` put command:

`c` `i` `w` `<` `p` `>` `c-R` `"` `<` `/` `p` `>` `Esc`

See [`:help i_CTRL-R`](https://vimhelp.org/insert.txt.html#i_CTRL-R) for more details.

Objects smaller than a line can also be surrounded using the [small delete register](https://vimhelp.org/change.txt.html#quote-), and as of Vim 8.2.2189, this is repeatable via the dot command, making it easy to apply the edit quickly in several different places.

So e.g. to go from this:

```
one two three four
```

to this:

```
(one two) (three four)
```

type:

`c` `2` `w` `(` `c-R` `-` `)` `Esc` `w` `.`

_Thanks to Christian Brabandt for [letting us know about the fix](https://vi.stackexchange.com/a/28528/343), and for [implementing it](https://github.com/vim/vim/releases/tag/v8.2.2189)!_

However, as dicussed in the comments, if you attempt to use Ctrl-R to surround an object larger than a single line (or prior to v8.2.2189), when you repeat this with the dot command, it will enter the text from the _original_ change command. As [@user938271 explains](https://vi.stackexchange.com/questions/21113/vimscript-surround-word-under-cursor-with-quotes/21119#comment37003_21119), you can workaround this by using \<c-R\>\<c-O\> or \<c-R\>\<c-P\> instead of a plain \<c-R\> when inserting the contents of the register.

So to go from:

```
<li>one
<li>two

<li>three
<li>four
```

to:

```
<ul>
<li>one
<li>two
</ul>

<ul>
<li>three
<li>four
</ul>
```

You can type:

`c` `2` `c` `<` `u` `l` `>` `Return` `c-R` `c-O` `"` `<` `/` `u` `l` `>` `Esc` `j` `j` `.`

## Find and Replace

<mark style="background: #FFB86CA6;">&#60;N&#62;</mark>

[How to insert text at beginning of a multi-line selection](https://stackoverflow.com/questions/253380/how-to-insert-text-at-beginning-of-a-multi-line-selection-in-vi-vim)

[How to Search in Vim / Vi](https://linuxize.com/post/vim-search/)
[Find and Replace in Vim / Vi](https://linuxize.com/post/vim-find-replace/#substituting-whole-word)

### Slash and Dot

- `/` + `[keyword]` + `Enter`: to find any keyword and jump to the first occurrence;
- `cgn`: find the last thing we searched for, delete it and push into insert mode. Press \<esc\> key after finishing editing and return to normal mode;
- `N`: jump to the next occurrence;
- repeat with `.` for auto-replace

### _Substitute_ Command

#### Basic

The general form of substitute command:

```vim
:[range]s/{pattern}/{string}/[flags] [count]
```

- The command searches each line in `[range]` for a `{pattern}`, and replaces it with a `{string}`. `[count]` is a positive integer that multiplies the command.

- If no `[range]` and `[count]` are given, only the pattern found in the current line is replaced. The current line is the line where the cursor is placed.

- For example, to search for the first occurrence of the string ‘foo’ in the current line and replace it with ‘bar’, you would use:

```vim
:s/foo/bar/
```

- To replace all occurrences of the search pattern in the current line, add the g flag:

```vim
:s/foo/bar/g
```

- If you want to search and replace the pattern in the entire file, use the percentage character % as a range. This character indicates a range from the first to the last line of the file:

```vim
:%s/foo/bar/g
```

- If the {string} part is omitted, it is considered as an empty string, and the matched pattern is deleted. The following command deletes all instances of the string ‘foo’ in the current line:

```vim
:s/foo//g
```

To confirm each substitution, use the c flag:

```vim
:s/foo/bar/gc
```

```Output
replace with bar (y/n/a/q/l/^E/^Y)?
```

Press `y` to replace the match or `l` to replace the match and quit. Press n to skip the match and q or Esc to quit substitution. The a option substitutes the match and all remaining occurrences of the match. To scroll the screen down, use CTRL+Y, and to scroll up, use CTRL+E.

You can also use regular expressions as a search pattern. The command bellow replaces all lines starting with ‘foo’ with ‘Vim is the best’:

```vim
:%s/^foo.\*/Vim is the best/gc

```

The ^ (caret) symbol matches the beginning of a line and .\* matches any number of any characters.

## [Shifting blocks visually](https://vim.fandom.com/wiki/Shifting_blocks_visually)

<mark style="background: #FFB86CA6;">&#60;N&#62;</mark>

- `>>`: indent current line
- `<<`: unindent current line
- +`.`: repeat operation

<mark style="background: #FFB8EBA6;">&#60;V&#62;</mark>

- `>`: indent current line
- `<`: unindent current line
- +`.`: repeat operation

<mark style="background: #ADCCFFA6;">&#60;I&#62;</mark>

- \<c-T\> indent current line
- \<c-D\> unindent current line
