module.exports = {
    purge: {
        mode: "layers",
        layers: ["base", "components", "utilities"],
        content: ["./src/App.tsx", "./src/components/*.tsx"],
    },
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
};
