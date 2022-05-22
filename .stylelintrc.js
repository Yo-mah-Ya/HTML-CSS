/**
 * @type {import('stylelint').Config}
 */
module.exports = {
    // customSyntax: "post-scss",
    extends: [
        "stylelint-config-standard-scss",
        "stylelint-config-recess-order",
        // Turns off all rules that are unnecessary or might conflict with Prettier.
        "stylelint-config-prettier",
        // and "stylelint-prettier" is deprecated so that we don't use it.
    ],
    rules: {
        "max-line-length": [
            120,
            {
                ignore: ["comments"],
                ignorePattern: ["/^.*https?://.*$/"],
            },
        ],
        "selector-pseudo-class-no-unknown": true,
        "declaration-no-important": true,
        "block-opening-brace-newline-after": "always",
        indentation: 4,
    },
    ignoreFiles: ["**/node_modules/**"],
};
