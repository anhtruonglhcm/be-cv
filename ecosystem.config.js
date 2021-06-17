module.exports = {
    apps: [
        {
            name: "qa-beautyup",
            script: "./dist/main.js",
            env: {
                "NODE_ENV": "qa"
            }
        },
        {
            name: "beautyup",
            script: "./dist/main.js",
            env: {
                "NODE_ENV": "production"
            }
        }
    ]
}