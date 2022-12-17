# Guide for creating the demo picture

1. Make a screenshot of the demo (e.g. with Firefox's integrated screenshot tool) and save that screenshot somewhere
2. Make sure that the screenshot has no transparent areas
3. Embed the screenshot into the following html document 
    ```html
    <html>
        <head>
            <style>
                body {
                    margin: 0;
                    width: 100%;
                    height: 100%;
                    
                    display: flex;
                    justify-content: center;
                }

                .shadowfilter {
                    padding: 80px;
                    filter: drop-shadow(0 0 30px rgba(0, 0, 0, 0.85));
                }
            </style>
        </head>
        <body>
            <div class="container">
                <img src="screenshot.png" class="shadowfilter"></img>
            </div>
        </body>
    </html>
    ```
4. Screenshot the component again (e.g. with Firefox's integrated screenshot tool)
5. Make the shadow transparent; Gimp example:
    * Open the screenshot
    * Select the area that should not be made transparent
    * Invert the select area 
    * Run Color>Color to Alpha
    * Save the picture
6. Add the screenshot to this folder (and name it ``demo.png``)
