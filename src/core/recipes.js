export const recipeGroups = [
    { id: 1, name: "Strings" },
    { id: 2, name: "Numbers" },
    { id: 3, name: "Misc" },
];

export const recipes = [
    {
        group: 1,
        pattern: "(b|f).+?(?=\\s)",
        flags: "g",
        description: "Match strings that begin with b or f character, followed by one or more characters and ending with space"
    },
    {
        group: 1,
        pattern: "\\b...\\b",
        flags: "g",
        description: "Match \"words\" that are three characters long"
    },
    {
        group: 2,
        pattern: "(?<=\\$)\\d",
        flags: "g",
        description: "Match numbers that are preceeded by $ character"
    },
    {
        group: 3,
        pattern: "\\p{Emoji}",
        flags: "gu",
        description: "Match emojis"
    },
    {
        group: 3,
        pattern: "\\u{1F600}",
        flags: "gu",
        description: "Match 😀 emoji"
    },
];

export default recipes;