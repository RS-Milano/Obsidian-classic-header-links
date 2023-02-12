# Obsidian Plugin - Classic Header links

## Description in one sentence

> The plugin replaces all hyphen characters `-` in the attribute `data-href` of all `a` tags in the DOM

## Description

The markdown specification suggests that when you creating links to current document headings that consist of multiple words, several rules must be followed, including:

- replace spaces between words with hyphens `-`

But if in Obsidian I make links according to this rule, they won't work in reading mode.

As far as I can guess, Obsidian uses a different space replacement rule. Spaces are replaced by a UTF-8 space code `%20`.

You need to add some magic to make links look classic. You can check it out in the main.ts file (only 20 lines of code).

The classic style of linking will ensure compatibility of markdown documents with other programs.

But think about it, do you need it? After all, Obsidian is the best!