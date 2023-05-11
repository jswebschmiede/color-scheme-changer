# color-scheme-changer
Use AI &amp; JavaScript to Generate Amazing Color Schemes

Thanks to Gary Simon
https://www.youtube.com/watch?v=Y5qR2pbKRVs

## Prompts

**Prompt 1:**

"I am going to provide you with the HTML and CSS for my project, and I need you to do the following:

1. Extract all color values from the CSS, and place them into the :root selector at the top of the file with CSS custom properties. This will be the "light mode" version of the design. You should extract these values from the following CSS properties: background, background-color, color, stroke, border, box-shadow, and fill. You should also replace those color values with the corresponding CSS custom properties you create.

2. You do not need to repeat any code that's unchanged, based on the following code. Only include new code. You can use a comment as a placeholder to reference the location of other unchanged code.

Here is the CSS:

(Replace this line with the CSS)"

**Prompt 2**:

"Provide me with 20 color schemes utilizing the previous CSS custom properties you created. They should be in the form of comma separated javascript objects, where you set each custom property name to a new color value, for example: 

{"--property1": "#1f1f1f", "--property2": "#000"},
{"--property1": "#1f1f1f", "--property2": "#000"}, and so on..

Ensure that all color schemes you utilize adhere to good color design principles, and make sure any text adheres to the WCAG 2.0 color contrast guidelines. One of the color schemes should be a dark mode where the body background is dark with light text. One should also be 100% black and white with no grays. Additionally, some color schemes can be monochromatic, others analogous, etc. Ensure that no two color schemes are very similar."
