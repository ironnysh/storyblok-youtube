# Embed a YouTube video in Storyblok with Astro

Take home task for a Technical Writer position.

**Author:** Ronny Shani

[Live demo of the site](https://storyblok-youtube.vercel.app).

## Table of Contents

- [Directory structure](#directory-structure)
- [Blocks JSON schema](#blocks-json-schema)
- [The tutorial](#the-tutorial)

## Directory structure

To keep the scope reasonable (and meet the assignment's word limit), the tutorial doesn't cover the non-YouTube embed blocks included in this repository (dynamic navigation menu, CSS styles, Astro Content collections, etc.).

To replicate the directory structure of this repository, make sure you create all the Storyblok blocks and import them into your Astro project.

To save time on manually recreating the schema, use the Storyblok CLI ([see instructions below](#blocks-json-schema)).

```bash

├── astro.config.mjs
├── package.json
├── public
├── src
|  ├── components
|  |  └── Header.astro
|  ├── layouts
|  |  └── BaseLayout.astro
|  ├── pages
|  |  ├── 404.astro
|  |  ├── [...slug].astro
|  |  └── blog
|  |  |  ├── [...slug].astro
|  ├── scripts
|  |  └── lite-yt-embed.js
|  ├── storyblok
|  |  ├── Article.astro
|  |  ├── ArticleList.astro
|  |  ├── Config.astro
|  |  ├── Page.astro
|  |  ├── Teaser.astro
|  |  └── Youtube.astro
|  └── styles
|     └── global.css
└── storyblok-youtube-components.json

```

## Blocks JSON schema

You can import the blocks schema used in this tutorial into your space or recreate the blocks yourself in the Storyblok dashboard.

To import the schema, install the [Storyblok CLI](https://github.com/storyblok/storyblok-cli#push-components) package, and use [the ￼`push-components`￼ command](https://github.com/storyblok/storyblok-cli#push-components), like so:

```bash
storyblok push-components storyblok-youtube-components.json --space <YOUR_SPACE_ID>
```

This is the complete schema:

```json

Filename: storyblok-youtube-components.json

{
  "tutorial-bloks": [
    {
      "name": "article",
      "display_name": "Article",
      "description": null,
      "created_at": "2025-01-09T16:47:10.071Z",
      "updated_at": "2025-01-10T21:00:12.846Z",
      "id": 6773761,
      "schema": {
        "title": {
          "type": "text",
          "pos": 0,
          "id": "nxVpSlGDQCqOrAqTcmjQEQ"
        },
        "lead": {
          "type": "text",
          "pos": 1,
          "id": "U6DL-A15QiWlvL3ZTboKqA",
          "display_name": "Lead"
        },
        "content": {
          "type": "richtext",
          "pos": 2,
          "id": "2xjg2MfPSyuGON49cvAblg",
          "customize_toolbar": true,
          "toolbar": [
            "blok",
            "bold",
            "list",
            "copy",
            "cut",
            "h1",
            "h2",
            "h3",
            "hrule",
            "unset",
            "link",
            "undo"
          ],
          "restrict_type": "",
          "restrict_components": true,
          "component_whitelist": [
            "teaser",
            "embed_youtube"
          ],
          "allow_custom_attributes": true
        }
      },
      "image": null,
      "preview_field": null,
      "is_root": true,
      "preview_tmpl": null,
      "is_nestable": false,
      "all_presets": [],
      "preset_id": null,
      "real_name": "Article",
      "component_group_uuid": "all",
      "color": null,
      "icon": null,
      "internal_tags_list": [],
      "internal_tag_ids": [],
      "content_type_asset_preview": null,
      "component_group_name": ""
    },
    {
      "name": "embed_youtube",
      "display_name": "YouTube",
      "description": null,
      "created_at": "2025-01-09T23:07:27.656Z",
      "updated_at": "2025-01-10T18:44:34.139Z",
      "id": 6774716,
      "schema": {
        "youtube_url": {
          "type": "text",
          "pos": 0,
          "id": "5Yfd-0TyQJeZvqGiiTl7SA",
          "display_name": "YouTube URL"
        },
        "youtube_title": {
          "type": "text",
          "pos": 1,
          "id": "R6dfrtmRRdqykfBd6sB4UQ",
          "display_name": "YouTube Title"
        }
      },
      "image": null,
      "preview_field": null,
      "is_root": false,
      "preview_tmpl": null,
      "is_nestable": true,
      "all_presets": [],
      "preset_id": null,
      "real_name": "YouTube",
      "component_group_uuid": "all",
      "color": "#ef6252",
      "icon": "block-share",
      "internal_tags_list": [],
      "internal_tag_ids": [],
      "content_type_asset_preview": null,
      "component_group_name": ""
    }
  ]
}

```

## The tutorial

From landing pages to eCommerce to corporate blogs—a headless content management system (CMS) like Storyblok allows you to create any type of website. And no matter how simple or complex they are, what most online projects have in common is the need to feature multimedia: Images, embedded videos, third-party

YouTube, the world’s leading video platform, provides an endless source of quality videos. How would you go about presenting them on your site? That's exactly what you’ll learn in this tutorial.

## What will you build

A small Storyblok website with an Astro frontend that includes the following:

1. A blok that allows you to embed a YouTube video
2. A block that includes a Richtext field in which you can embed YouTube videos

Here’s a demo of the final website. You can find the complete code on GitHub.

## Prerequisites

- A [Storyblok](http://app.storyblok.com/) space; preferably new.
- An Astro frontend connected to this space.

> [!NOTE]
> If you’re new to Astro, check out [The Storyblok Astro Ultimate Tutorial](https://www.storyblok.com/tp/the-storyblok-astro-ultimate-tutorial)

## Set up your Storyblok blocks

The first thing you need to do is create two blocks in your space:

- The YouTube embed block: a **Nestable block** that works both as a standalone block and a component you can insert into [the **Richtext** field](https://www.storyblok.com/docs/richtext-field).
- The article block: a **Content type** block that includes a **Richtext** field.

To create these two blocks, navigate to the **Block Library** in your Storyblok Space.

### Create a Nestable block

1. Click **+ New Block**, name it `embed_youtube`, and click **Add Block**.

> [!TIP]
> When you name blocks and fields, use underscores (_). For example, `embed_youtube`.

> [!TIP]
> The default block type is **Nestable block**, which is what you need.

YouTube supports [multiple parameters](https://developers.google.com/youtube/player_parameters#Parameters) that let you customize an embedded video, including start and end time, player controls, and more.

Add two fields for the essential parameters: URL and title: 3. In the **Edit** window, create a **Text** field named `youtube_url`, and click **Add**. 4. Create another **Text** field named `youtube_title`, and click **Add**.

> [!TIP]
> The default field type is **Text**, which is what you need.

5. Click **Save**.

**Optional:** Depending on your needs, you can define either or both fields as a **Required field**, add description labels for editors, default values, and more. To configure these properties, click on the field.

> [!IMPORTANT]
> An `iframe` element that contains videos must include the `title` attribute to comply with [the Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value#examples) (WCAG).

Let’s continue to the other block.

### Create a Content type block with a Richtext field

1. Click **+ New Block** and name it `article`.
2. Select the **Content type block** and click **Add Block**.
3. In the **Edit** window, create a **Text** field named `title`, and click **Add**.
4. Create another **Text** field named `lead`, and click **Add**.
5. Create a **Richtext** field named `content`, and click **Add**.
6. Click **Save**.

## Add the block to your Story

The `embed_youtube` block you’ve just created is a **Nestable block** that works both as a standalone block and a component supported in [the **Richtext** field](https://www.storyblok.com/docs/richtext-field).

To embed a YouTube video as a standalone block—in a landing page or other, follow the steps below. To insert it into a **Richtext** field, skip to the [Insert the block into a rich text editor](bear://x-callback-url/open-note?id=808DFD5F-D744-4086-B7FE-719E9DF43CE4&header=Insert%20the%20block%20into%20a%20Richtext%20editor) section:

### Add the standalone block to a page

1. Navigate to the **Content** section.
2. Click **+ Create new content > Story**.
3. Name it and click **Create**.
4. Hover over the list of blocks on the right sidebar, and click the round **+** button.
5. Fill in the details in the two fields you have created before: The video URL and its title.
6. Click **Save**.

### Insert the block into a rich text editor

1. Navigate to the **Content** section.
2. Click **+ Create new content > Story**.
3. Name it and click the **Content type** dropdown on the bottom to set it to an **Article** content type.
4. Click **Create**.
5. Add a title and lead, and type some text in the **Content** field.
6. Click inside the **Richtext** field, and position your cursor where you would like to add a video.
7. Click the **Add Block** icon and select the `embed_youtube` block you created before.
8. Click the block you inserted and fill in the details in the two fields: The video URL and its title.
9. Click **Save**.

## Intermission

Now that we’re halfway through, let’s take a short pause for a recap. If you completed the steps above, you have two new Storyblok blocks—one for the video embed and one that allows you to feature it inside Storyblok’s **Richtext** editor.

You’ve also created two new stories—a landing page and an article—and added the video embed into both of these stories.

Congratulate yourself and take a few minutes to make sure everything’s in order.

You might notice that even if you reload the preview area of the **Visual Editor**, you don’t see the videos, or worse, are greeted with an Astro error message. That’s because you need to configure these new Storyblok blocks in your frontend.

Let’s do that. Launch your code editor and open your Astro project.

> [!NOTE]
> This tutorial uses Astro, but you can use other frameworks. Check out [the full list of platforms](https://www.storyblok.com/technologies) Storyblok supports.

## Set up your Astro project

We will use the [**Astro Embed**](https://astro-embed.netlify.app/)’s [YouTube](https://astro-embed.netlify.app/components/youtube/) component to render the YouTube videos.

As you may know, loading external resources, such as videos, affects your site’s performance. Furthermore, your visitors might not watch the video at all, causing useless energy and data consumption. **Astro Embed** helps prevent both issues.

> [!TIP]
> While all major browsers [support lazy loading](https://caniuse.com/loading-lazy-attr) of `iframe` HTML elements, this attribute leaves the decision of when to load the video with the browser, _not the user_.

You can add as many embedded videos as you'd like without worrying about performance. The player only becomes interactive once a user clicks it, so YouTube’s scripts will not affect the page loading speed or your site visitors’ experience.

### Install dependencies

Before you begin, install the following NPM packages:

- [Astro Embed](https://astro-embed.netlify.app/)’s [YouTube](https://astro-embed.netlify.app/components/youtube/) component
- [clone-deep](https://github.com/jonschlinkert/clone-deep) (we’ll cover this below)

```bash
npm install --save-dev @astro-community/astro-embed-youtube clone-deep
```

The next step is to register the blocks as Astro components.

### The Astro config

Open your project’s configuration file (usually `astro.config.mjs`) and add the `embed_youtube` block and the `article` block below your previously-registered components:

```js
Filename: astro.config.mjs

components: {
		// All your other components //

        article: "storyblok/Article",
        embed_youtube: 'storyblok/Youtube'
      },

```

Finally, let’s create the actual components.

## Create the Astro components

Create two new files in your `src/stroyblok` directory:

- `Youtube.astro`
- `Article.astro`

### The `<YouTube>` Astro component

The code below integrates the **Astro Embed** component with your Storyblok `embed_youtube` block:

```js
Filename: Youtube.astro

---
import { YouTube } from "@astro-community/astro-embed-youtube";
const { blok } = Astro.props;
---

<YouTube id={blok.youtube_url} title={blok.youtube_title} />

```

Remember that the `{X.youtube_url}` and `{X.youtube_title}` variables must match the corresponding **Text** fields names you’ve defined in Storyblok.

> [!NOTE]
> The `<YouTube>` component supports several props besides the required `id`. To learn more, [consult the official documentation](https://astro-embed.netlify.app/components/youtube/).

### The `<Article>` Astro component

Storyblok’s **Richtext** field allows you to insert **Nestable** blocks, but it doesn’t render them automatically. The `iframe` is one of the native HTML elements that are still not supported out of the box.

To be able to display the embedded video in Storyblok’s **Visual Editor** (and on the site), you’d need to adapt the default **Richtext** field’s schema using the `renderRichText` function available in [Storyblok’s Astro SDK](https://github.com/storyblok/storyblok-astro).

### Swap the Astro component with native HTML

The `renderRichText` function only parses native HTML elements included in the rich text editor; and does not map custom Storyblok **Nestable** blocks to Astro components. You’d need a third-party package for that.

To avoid unnecessary dependencies, keep the component lean, and have the added benefit of accommodating other frameworks, we use the built-in `RichTextSchema` function to adapt the schema with the JavaScript [String.prototype.replace](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method.

> [!TIP]
> Customizing multiple elements of the **Richtext** field’s schema leads to complex code that’s hard to maintain. If your use case has a wider scope than this tutorial, check the [Storyblok Rich Text Renderer for Astro](https://github.com/NordSecurity/storyblok-rich-text-astro-renderer) package or the [recently-launched Storyblok Richtext](https://www.storyblok.com/mp/announcing-official-storyblok-richtext-package) package.==

Since we opted for the built-in alternative, we cannot use the `<YouTube>` component. However, 
self-imposed limits can have positive outcomes: **Astro Embed** bundles the original [`lite-youtube-embed`](https://github.com/paulirish/lite-youtube-embed) custom element. This means that we can swap the unsupported Astro component with the `<lite-youtube>` HTML element.

### Create a custom schema in an Astro component

Here’s how you can create an Astro component that integrates the `lite-youtube-embed` package with your custom Storyblok schema blok:

1. Import the `renderRichText` and `RichTextSchema` functions.
2. Import the `cloneDeep` function from the package you installed before.
3. Define your copy of the default schema.
4. Pass the options to the `renderRichText` function.
5. Manipulate the output of your existing `embed_youtube` block with JavaScript.
6. Import the `lite-yt-embed.js` script.

```js
Filename: Article.astro

---
import {
  storyblokEditable,
  RichTextSchema,
  renderRichText,
} from "@storyblok/astro";
import cloneDeep from "clone-deep";

const { blok } = Astro.props;

const mySchema = cloneDeep(RichTextSchema);
const content = renderRichText(blok.content, {
  schema: mySchema,
  resolver: (component, blok) => {
    switch (component) {
      case "embed_youtube":
        // console.log(`The output of the ${component} blok is:`, blok);
        const player = `<lite-youtube videoid=${blok.youtube_url} title="${blok.youtube_title}"></lite-youtube>`;
        const liteYT = player.replace("https://www.youtube.com/watch?v=", "");
        // console.log(`The output of liteYT is: ${liteYT}`);
        return `${liteYT}`;
        break;
      default:
        return `<p class="warning">Can't display the <mark>${component}</mark> blok</p>`;
    }
  },
});
---

<article {...storyblokEditable(blok)}>
  <h2>{blok.title}</h2>
  <p>{blok.lead}</p>
  <Fragment set:html={content} />
</article>

<script>
  import "../scripts/lite-yt-embed.js";
</script>


```

The [`lite-youtube-embed`](https://github.com/paulirish/lite-youtube-embed) package requires two files:

- `lite-yt-embed.css`
- `lite-yt-embed.js`

**Astro Embed** loads the relevant stylesheet for you, but you’d need to load the required JavaScript file in `Article.astro`.

To do that, copy the file `lite-yt-embed.js` from the `node_modules/lite-youtube-embed/src` directory into your `src/scripts` directory, and import it as demonstrated in the snippet above.

### Limit which Nestable blocks are allowed

You’ll notice that the `default` clause of the resolver’s `switch` statement returns an error:

```js
default:
        return `<p class="warning">Can't display the <mark>${component}</mark> blok</p>`;
```

You might recall that Storyblok’s **Richtext** field allows you to insert **Nestable** blocks, but doesn’t render them automatically. In the Storyblok UI, open the article, and add a **Teaser** block.

After you hit **Save** and reload the **Visual Editor** on the left, you’ll see the error displayed:

To prevent this error message from appearing in the **Visual Editor**, limit which **Nestable** blocks are allowed:

1. Navigate to the **Block Library** in your Storyblok Space.
2. Select **Allow only specific components to be inserted > Component(s)**.
3. Select **Component(s)**.
4. Click the **Choose components** dropdown on the bottom and select the ones allowed.
5. Click **Save & Back to Fields**.

## Conclusion

Once the files are in place, and you've connected all the moving parts, it’s time to test drive your creation.

Run `npm run dev` in your terminal and open your Storyblok dashboard or preview site. Click around and ensure the videos are loading properly.

> [!NOTE]
> This tutorial explains how to embed YouTube videos with Astro. If you need to embed elements from other platforms or use other frameworks, refer to these resources:
> - [How to create embedded StackBlitz blocks with Nuxt and Vue](https://www.storyblok.com/tp/how-to-create-embedded-blocks-as-a-way-of-integration)
> - [How to add YouTube to Storyblok with the JavaScript SDK](https://www.storyblok.com/tp/add-youtube-to-headless-cms)
> - [How to embed Vimeo videos in Storyblok using a custom fields plugin](https://www.storyblok.com/tp/how-to-add-vimeo-video-headless-cms)
> - [Embedding media in a Laravel Storyblok project](https://ls.sirric.co.uk/docs/2.9/embedding-media)
> - [Discover the official Storyblok Richtext package](https://www.storyblok.com/mp/announcing-official-storyblok-richtext-package)

Consider subscribing to [our YouTube channel](https://www.youtube.com/c/Storyblok-com), to get more ideas for more inspiring web projects. Coupled with an Astro frontend, Storyblok delivers unlimited possibilities to experiment, extend, and innovate. What will you create next?

---

Thanks for reading! I hope you enjoyed :-)
