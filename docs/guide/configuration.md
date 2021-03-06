# Configuration

## Configuring phpDocumentor

> These instructions are for phpDocumentor 2. phpDocumentor 3 is not _yet_ compatible.

You need to tell phpDocumentor (1) where are your PHP source files, (2) where to generate the API documentation and (3) where is the template (for a Composer project, is ). You can, also, (4) configure which elements include by its visibility.

In order to accomplish this, you must create a configuration file named `phpdoc.dist.xml` and setup (1, 2, and 3).

:::tip Template location [3]
If you installed via Composer, the template will be located at `vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress` directory.

```xml
<transformations>
  <template name="vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress" />
</transformations>
```

:::

You can use the configuration of this project as example and guide. Just edit the values that suits your project.

### Example

Here is the explained phpDocumentor configuration for this project:

<<< @/phpdoc.dist.xml

Then, you can just run `phpdoc`.

> For further information, check the [Configuring phpDocumentor page](http://www.phpdoc.org/docs/latest/references/configuration.html).

## Configuring VuePress

If you don't already have configured your VuePress, you can follow the [setup instructions](https://vuepress.vuejs.org/guide/getting-started.html).

> Depending on version you are using, the **`docs/.vuepress/config.js`** file you created should following the **_Config Reference_** according to [v0.x](https://v0.vuepress.vuejs.org/config/) or [v1.x](https://vuepress.vuejs.org/config/).

Once done, you only need to include the files generated by **_phpDocumentor_** in your sidebar as you like.

This template generates this files:

- `README.md`: Introduction to your API documentation. [extra]
- `classes.md`: Documentation of your classes.
- `interfaces.md`: Documentation of your interfaces.
- `traits.md`: Documentation of your traits.
- `functions.md`: Documentation of your global/namespaced functions.
- `constants.md`: Documentation of your global/namespaced constants.

### Example

Here is the explained VuePress configuration for this project. Use it as example and guide:

<<< @/docs/.vuepress/config.js

Then, you can just run `vuepress build docs`.

::: tip
If you installed VuePress as project dependency, you can configure scripts in your `package.json`:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

And then just run `npm run docs:build` :sunglasses:.
:::

> Read about recommended directory structure at [https://vuepress.vuejs.org/guide/directory-structure.html](https://vuepress.vuejs.org/guide/directory-structure.html)

::: warning
You can use any directory as the target for your API, but you need to use the same route level for them in order link references work. For example, all under '/demo/' as the above example.
:::

## Extras

### Running `phpDocumentor` without a configuration file

Is not recommended, but for small projects (not using many directories), you can build your documentation without a configuration file by passing the arguments to the `phpdoc` command directly.

For example, if your code is under `demo/` directory and your VuePress resides in `docs/`, and your route `/api/`, you may use:

```
$ phpdoc -d demo/ -t docs/api/ --template=vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress
```

::: warning
The target directory (`-t`) will be used by phpDocumentor as cache too, so there will be some extra files populating your documentation directory. In order to avoid this, use the `--cache-folder` option.
:::

::: tip
You can add the command as Composer script:

```json
"scripts": {
    "phpdoc": [
        "phpdoc -d demo/ -t docs/api/ --template=vendor/nelson6e65/phpdoc-vuepress/data/templates/vuepress --ansi"
    ]
},
```

And then just run `composer phpdoc` :sunglasses:.

:::

> For further information, check the [Runing phpDocumentor documentation](https://docs.phpdoc.org/2.9/guides/running-phpdocumentor.html).
