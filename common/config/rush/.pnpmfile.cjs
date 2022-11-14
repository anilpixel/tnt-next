//.pnpmfile.cjs
module.exports = {
  hooks: {
    readPackage(pkg) {
      if (pkg.name !== '@tntd/website') {
        const deps = ["@algolia/client-search", "@docusaurus/core", "@docusaurus/preset-classic", "@docusaurus/theme-common", "@docusaurus/theme-live-codeblock"]
          deps.forEach((p) => {
              delete pkg.dependencies?.[p]
          })
      }

      return pkg
    }
  }
}
