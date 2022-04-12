## @tnt-next/node-rig

A rig package for Node.js projects that build using [Heft](https://www.npmjs.com/package/@rushstack/heft)
build system. To learn more about rig packages, consult the
[@rushstack/rig-package](https://www.npmjs.com/package/@rushstack/rig-package) documentation.

This rig contains a single profile: `default`

To enable it, add a **rig.json** file to your project, as shown below:

**config/rig.json**

```js
{
  "$schema": "https://developer.microsoft.com/json-schemas/rig-package/rig.schema.json",

  "rigPackageName": "@tnt-next/heft-rig"
}
```