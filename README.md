# Recipe App
We'd like a very simple mobile app for using our recipes. It should allow users to search for recipes and view them.

## Essential requirements
* Built using React Native and modern JavaScript. Do not use ClojureScript, Dart, Elm, F#/Fable, Go, ....<sup id="reqs">[1](#footnote-1)</sup>
* Works on both iOS and Android devices
* Makes good use of the viewport on mobiles and tablets in portrait and landscape
* Provides a simple, but responsive, recipe search using our GraphQL API (details at the end of this document)

## Guidance
The goal of this test is for you to demonstrate your experience and abilities for building cross-platform mobile apps. Show us an app that's simple to maintain and behaves well on different mobile devices. We may test your app on real or emulated mobile devices, running Android, iOS or iPadOS; you needn't support smart watches!

Your app should look good, perform smoothly, and not consume gigabytes of storage on the device.

More recipes are added all the time.

Use whatever third-party modules you feel are appropriate, but be prepared to justify your choices.

Sophisticated searching, e.g. using facets, is out-of-scope; you can use whatever results the API returns from a simple text search.

## Submission
Please host your submission on GitHub by forking this repository. Let me know when you're happy with it by emailing a link to [richardturner@riverford.co.uk](mailto:richardturner@riverford.co.uk); when you do so, please give me an indication of how long you spent on the test.

Have fun!

## API
Use our `recipe_search` and `recipe` API queries to fetch recipe information. The API uses GraphQL, and is accessible at https://next.riverford.co.uk/graphql.
The `recipe` query takes a slug as its sole parameter; the `recipe_search` query takes the following parameters, where `q` is the search query string:
<table>
    <caption><code>recipe_search</code> params</caption>
    <tr><th>Param</th><th>Type</th><th>Default</th></tr>
    <tr><td>page</td><td><code>Int</code></td><td>1</td></tr>
    <tr><td>page_size</td><td><code>Int</code></td><td>100</td></tr>
    <tr><td>q</td><td><code>String</code></td><td>-</td></tr>
</table>
 
Relevant response types:
<table>
    <caption>RecipeSearchResult</caption>
    <tr><th>Field</th><th>Type</th></tr>
    <tr><td>total_hits</td><td><code>Int</code></td></tr>
    <tr><td>hits</td><td><code>[RecipeSearchHit]</code></td></tr>
</table>
<table>
    <caption>RecipeSearchHit</caption>
    <tr><th>Field</th><th>Type</th></tr>
    <tr><td>recipe</td><td><code>Recipe</code></td></tr>
    <tr><td>score</td><td><code>Decimal</code></td></tr>
</table>
<table>
    <caption>Recipe</caption>
    <tr><th>Field</th><th>Type</th></tr>
    <tr><td>cook_time</td><td><code>Duration</code></td></tr>
    <tr><td>ingredients</td><td><code>[RecipeIngredientSection]</code></td></tr>
    <tr><td>introduction</td><td><code>String</code></td></tr>
    <tr><td>media</td><td><code>[Media]</code></td></tr>
    <tr><td>method</td><td><code>[RecipeMethodSection]</code></td></tr>
    <tr><td>name</td><td><code>String</code></td></tr>
    <tr><td>notes</td><td><code>String</code></td></tr>
    <tr><td>prep_time</td><td><code>Duration</code></td></tr>
    <tr><td>serves</td><td><code>Long</code></td></tr>
    <tr><td>short_description</td><td><code>String</code></td></tr>
    <tr><td>slug</td><td><code>String</code></td></tr>
    <tr><td>tags</td><td><code>[String]</code></td></tr>
    <tr><td>total_time</td><td><code>Duration</code></td></tr>
</table>
<table>
    <caption>RecipeIngredientSection</caption>
    <tr><th>Field</th><th>Type</th></tr>
    <tr><td>component</td><td><code>String</code></td></tr>
    <tr><td>ingredients</td><td><code>[String]</code></td></tr>
</table>
<table>
    <caption>RecipeMethodSection</caption>
    <tr><th>Field</th><th>Type</th></tr>
    <tr><td>component</td><td><code>String</code></td></tr>
    <tr><td>steps</td><td><code>[String]</code></td></tr>
</table>
<table>
    <caption>Media</caption>
    <tr><th>Field</th><th>Type</th></tr>
    <tr><td>alt</td><td><code>String</code></td></tr>
    <tr><td>caption</td><td><code>String</code></td></tr>
    <tr><td>content_type</td><td><code>String</code></td></tr>
    <tr><td>height</td><td><code>Int</code></td></tr>
    <tr><td>master_uri</td><td><code>String</code></td></tr>
    <tr><td>optimised</td><td><code>Boolean</code></td></tr>
    <tr><td>tags</td><td><code>[String]</code></td></tr>
    <tr><td>uri</td><td><code>String</code></td></tr>
    <tr><td>width</td><td><code>Int</code></td></tr>
</table>

<hr>
<span id="footnote-1"><a href="#reqs"><sup>1</sup></a> Much as I might like to see these, they're not appropriate for this test.</span>
