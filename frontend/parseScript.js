/* This script parses the html found at the hardcoded url and extracts characters from dom and joins them to create a
*  new url according to the specified format:
*
*  <section data-id="92*">
*   <article data-class="*45">
*     <div data-tag="*78*">
*       <b class="ref" value="VALID_CHARACTER"></b>
*    </div>
*   </article>
* </section>
*
* The url is created by extracting the characters from the value attribute of the <b> tags
* and the url leads to a page that displays an english word. In this case, the flag was "heroics".
*/

async function loadHtmlContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const htmlContent = await response.text(); // The raw HTML as a string
        return htmlContent;
    } catch (error) {
        console.error('Error fetching HTML:', error);
        return null;
    }
}

let url = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge';

loadHtmlContent(url).then(html => {
    if (html) {
        let retArr = [];
        const jsdom = require("jsdom");
        const dom = new jsdom.JSDOM(html);
        const parsedDoc = dom.window.document;

        const sectionsWithCorrectDataId = parsedDoc.querySelectorAll('section[data-id^="92"]');
        sectionsWithCorrectDataId.forEach(section => {
            console.log(section.getAttribute('data-id')); 
            const articlesWithCorrectDataClass = section.querySelectorAll('article[data-class$="45"]');
            articlesWithCorrectDataClass.forEach(article => {
                console.log(article.getAttribute('data-class')); 
                const divsWithCorrectDataTag = article.querySelectorAll('div[data-tag*="78"]');
                divsWithCorrectDataTag.forEach(div => {
                    console.log(div.getAttribute('data-tag')); 
                    const bElements = div.querySelectorAll('b.ref[value]');
                    bElements.forEach(b => {
                        const value = b.getAttribute('value');
                        console.log(value); 
                        retArr.push(value);
                    });
                });
            });
        });
        let ans = retArr.join("");
        console.log(`Final URL: ${ans}`);
    }
});