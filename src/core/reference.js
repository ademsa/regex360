export const reference = [
    {
        group: "Flags",
        expression: "g",
        description: `
        Flag to do global matching (all occurences)
        `,
        links: [
            {
                title: "MDN - Regular expressions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
            },
            {
                title: "MDN - RegExp.prototype.global",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global"
            },
        ]
    },
    {
        group: "Flags",
        expression: "i",
        description: `
        Flag to do case-insensitive matching
        `,
        links: [
            {
                title: "MDN - Regular expressions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
            },
            {
                title: "MDN - RegExp.prototype.ignoreCase",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase"
            },
        ]
    },
    {
        group: "Flags",
        expression: "m",
        description: `
        Flag to do multiline matching
        `,
        links: [
            {
                title: "MDN - Regular expressions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
            },
            {
                title: "MDN - RegExp.prototype.multiline",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline"
            },
        ]
    },
    {
        group: "Flags",
        expression: "s",
        description: `
        Flag to allow matching newline characters
        `,
        links: [
            {
                title: "MDN - Regular expressions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
            },
            {
                title: "MDN - RegExp.prototype.dotAll",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll"
            },
        ]
    },
    {
        group: "Flags",
        expression: "u",
        description: `
        Flag to indicate string is unicode
        `,
        links: [
            {
                title: "MDN - Regular expressions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
            },
            {
                title: "MDN - RegExp.prototype.unicode",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode"
            },
        ]
    },
    {
        group: "Flags",
        expression: "y",
        description: `
        Flag to do "sticky" matching from specified index
        `,
        links: [
            {
                title: "MDN - Regular expressions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions"
            },
            {
                title: "MDN - RegExp.prototype.sticky",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "^",
        description: `
        Match the beginning of string
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "$",
        description: `
        Match the end of string
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "\\b",
        description: `
        Match boundaries of word.
        For example, in "Yellow pencil", pattern "\\bp" (flags: "g") 
        should match "p" from all words that start with "p".
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "\\B",
        description: `
        Match non-boundaries of word.
        For example, in "Yellow pencil", pattern "\\Be" (flags: "g") 
        should match "e" from all words that contain, but not start with, "e".
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "a(?=b)",
        description: `
        Match "a" if it is followed by "b"
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "a(?!b)",
        description: `
        Match "a" if it is NOT followed by "b"
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "(?<=a)b",
        description: `
        Match "b" if it is preceeded by "a"
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Assertions",
        expression: "(?<!a)b",
        description: `
        Match "b" if it is NOT preceeded by "a"
        `,
        links: [
            {
                title: "MDN - Assertions",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: ".",
        description: `
        Match any single character except line terminators
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\d",
        description: `
        Match any digit. Alternatively you can write it as [0-9]
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\D",
        description: `
        Match any non-digit character. Alternatively you can write it as [^0-9]
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\w",
        description: `
        Match any alphanumeric character. Alternatively you can write it as [A-Za-z0-9_]
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\W",
        description: `
        Match any non-alphanumeric character. Alternatively you can write it as [^A-Za-z0-9_]
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\s",
        description: `
        Match white space character (incl. space, tabs, etc.)
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\S",
        description: `
        Match any non-white space character
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\t",
        description: `
        Match horizontal tab
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\n",
        description: `
        Match line ending
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "[\\b]",
        description: `
        Match backspace
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\0",
        description: `
        Match a NUL character
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\u{hhhh}",
        description: `
        Match character with unicode value hhhh (hexadecimal digits)
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Character Classes",
        expression: "\\",
        description: `
       "Escape" character that follows. For example, "\\b" indicates it should match word boundary and not (only) "b" character.
        `,
        links: [
            {
                title: "MDN - Character classes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "a|b",
        description: `
        Match "a" OR "b"
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "[abc]",
        description: `
        Match any character from set ("a", "b" OR "c"). 
        Alternatively you can write this as [a-c]. 
        "-" means all characters in alphabet in range from "a" until "c". 
        This is applicable also to other types of characters (numbers, etc.).
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "[^abc]",
        description: `
        Match any character NOT from set ("a", "b" OR "c"). 
        Alternatively you can write this as [^a-c].
        This is applicable also to other types of characters (numbers, etc.).
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "(a)",
        description: `
        Match character "a" as capturing group and remember it for later usage. 
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "\\n",
        description: `
        Reference capturing group by it's number ("n"). 
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "(?<name>a)",
        description: `
        Match character "a" as capturing group with "name" as name
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "\\k<name>",
        description: `
        Reference capturing group by it's name inside < >
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Groups and Ranges",
        expression: "(?:a)",
        description: `
        Match character "a" as capturing group and DOES NOT remember it for later usage
        `,
        links: [
            {
                title: "MDN - Groups and ranges",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Quantifiers",
        expression: "ab*",
        description: `
        Match character "a", followed by "b" zero or more times
        `,
        links: [
            {
                title: "MDN - Quantifiers",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Quantifiers",
        expression: "ab+",
        description: `
        Match character "a", followed by "b" one or more times
        `,
        links: [
            {
                title: "MDN - Quantifiers",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Quantifiers",
        expression: "ab?",
        description: `
        Match character "a", followed by "b" zero or one time
        `,
        links: [
            {
                title: "MDN - Quantifiers",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Quantifiers",
        expression: "ab{n}",
        description: `
        Match character "a", followed by "b" exactly n times
        `,
        links: [
            {
                title: "MDN - Quantifiers",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Quantifiers",
        expression: "ab{n,}",
        description: `
        Match character "a", followed by "b" at least n times
        `,
        links: [
            {
                title: "MDN - Quantifiers",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Quantifiers",
        expression: "ab{n,m}",
        description: `
        Match character "a", followed by "b" at at least n and at most m times
        `,
        links: [
            {
                title: "MDN - Quantifiers",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Quantifiers",
        expression: "ab*? OR ab+? OR ab{n}? OR ab{n,}? OR ab{n,m}?",
        description: `
        Non-greedy (expanding as much as possible) versions of quantifiers listed above.
        `,
        links: [
            {
                title: "MDN - Quantifiers",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
        ]
    },
    {
        group: "Unicode Property Escapes",
        expression: "\\p{Emoji} OR \\p{White_Space} ...",
        description: `
        Match characters that belong to unicode property / category
        `,
        links: [
            {
                title: "MDN - Unicode property escapes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
            {
                title: "Unicode - PropList",
                url: "https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt"
            },
        ]
    },
    {
        group: "Unicode Property Escapes",
        expression: "\\P{Emoji} OR \\P{White_Space} ...",
        description: `
        Match characters that do NOT belong to unicode property / category
        `,
        links: [
            {
                title: "MDN - Unicode property escapes",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes"
            },
            {
                title: "MDN - Regular expression syntax cheatsheet",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet"
            },
            {
                title: "Unicode - PropList",
                url: "https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt"
            },
        ]
    },
];

export default reference;