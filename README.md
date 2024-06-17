# Guess The God

A link to the website is **[here](https://shlackka.github.io/guess-the-god/)**.

Guess the God is an engaging and educational quiz where players are presented with images of gods from various mythologies. The objective is to correctly identify which pantheon each god belongs to—Greek, Norse, Egyptian, or Aztec. This fun and interactive game helps players familiarize themselves with the distinctive visual characteristics and attributes of deities from different cultures. Perfect for mythology enthusiasts and curious learners alike, this quiz offers a visual and entertaining way to deepen your knowledge of ancient pantheons.

![Responsive Mockup](assets/images/readme/gladiatour-mockup.png)

**Table of contents:**

- [Title](#guess-the-god)
- [User Experience](#user-experience-ux)
  - [Design](#design)
    - [Colour Scheme](#colour-scheme)
    - [Typography](#typography)
    - [Imagery](#imagery)
  - [Wireframes](#wireframes)
- [Features](#features)
  - [Languages Used](#languages-used)
  - [Existing Features](#existing-features)
  - [Features Not Yet Implemented](#features-not-yet-implemented)
- [Testing](#testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)


## User Experience (UX)

  - ### User Journey
    - **Landing Page**: Users are welcomed with a nicely styled door which upon clicking the button in the centre of the screen will open to the main menu.  
    This experience is slightly different on mobile as the first screen will be the main menu.

    - **Main Menu**: A clear choice of either start game or how to play is shown to the user.

    - **Question Screens**: Each question displays an 
    image of a god with multiple-choice options to select the correct pantheon with the option to also get a hint.

    - **Feedback**: After selecting an answer, users 
    receive immediate feedback on whether they were correct, with additional information about the god.

    - **Completion**: At the end of the quiz, users are offered an encouraging message on their performance  
    and offered a choice to play again or to end the game and be returned to the main menu/closed door depending on platform.

- ### Design
  - #### Colour Scheme
    - The color scheme uses a light background (Papayawhip) for a warm, inviting feel. 
        <div style="display: flex; align-items: center;">
        <div style="width: 50px; height: 50px; background-color: papayawhip; margin-right: 10px;"></div> Papayawhip (#ffefd5)
        </div>
    - Dark red (#8b0000) is used for headings, buttons and the alert box to provide strong visual contrast.
        <div style="display: flex; align-items: center;">
        <div style="width: 50px; height: 50px; background-color: #8b0000; margin-right: 10px;"></div> Dark Red (#8b0000)
        </div>
    - White (#ffffff) is used for text and backgrounds of key elements to ensure readability and focus. 
        <div style="display: flex; align-items: center;">
        <div style="width: 50px; height: 50px; background-color: #ffffff; margin-right: 10px;"></div> White (#ffffff)
        </div>
    - Accents include various shades of black for shadows, adding depth and highlighting elements.
        <div style="display: flex; align-items: center;">
        <div style="width: 50px; height: 50px; background-color: #000000; margin-right: 10px;"></div> Black (#000000)
        </div>
  - #### Typography
    - The primary font is 'Lato', sans-serif for general text, providing a clean and modern look. 
    - 'Vollkorn', serif is used for headings to add a touch of elegance and distinction.
    - All fonts were acquired through **[Google Fonts](https://fonts.google.com/)**.

  - #### Imagery
    - High-quality images of gods from different mythologies are used to create a visually engaging and educational experience.  
    The images are central to the quiz, helping users associate visual characteristics with each god.
    - All god images were created with the help of **[ChatGPT](https://chatgpt.com/?oai-dm=1)**.

- ### Wireframes

Please see below the original mockups of the site made using Balsamiq Wireframes.

- Site Layout Draft

![Site Layout Draft](assets/images/readme/layout-draft-gladiatour.png)

- Main Page Mockup

![Main Page Mockup](assets/images/readme/main-page-draft-gladiatour.png)

- Information Page Mockup

    - The design for the information page has changed from my initial designs due to user feedback about ease of use and readability.

![Information Page Mockup](assets/images/readme/information-page-draft-gladiatour.png)

- Signup Page Mockup

![Signup Page Mockup](assets/images/readme/signup-page-draft-gladiatour.png)

- Thank You Page Mockup

![Thank You Page Mockup](assets/images/readme/form-submission-page-draft-gladiatour.png)

## Features

Below I will go into a brief explanation of the features I have encorporated into the site.

- ### Languages Used

- ### Existing Features

- __Navigation Bar__

    - Shown at the top of all pages within the site, the navigation or 'nav' bar will make traversing the site as easy as it can be without having to resort to using any of the browsers navigation options.
    - The nav bar is also fully responsive meaning even when viewing on a mobile or tablet it should be just as easy without sacraficing the quality of the experience.

![Navigation Bar](assets/images/readme/navigation-bar.png)

![Navigation Bar Mobile(closed)](assets/images/readme/navigation-bar-mobile.png)

![Navigation Bar Mobile(open)](assets/images/readme/navigation-bar-mobile-open.png)

- __Landing Page__

    - The landing page has been designed in a way that really captures the grandeur of ancient rome with vibrant colours which compliment eachother whislt also staying loyal to the source content.
    - Below the main heading of the landing page is a brief introduction to the website aswell as giving an ideal starting point through the site in the way of a button to the information page.

![Main Heading](assets/images/readme/main-heading.png)

![Main Page Introduction](assets/images/readme/main-page-introduction.png)

- __Gladiators Page__

    - The Gladiators page is designed to flow easily from the landing page so as to keep the same feeling throughout the whole site.
    - All images within this page have been styled the same in order to keep the page uniform and maintain quality.
    - Below each image an audio control can be found which plays an audio clip of the pronunciation of the names in a phonetic style.

![Gladiator Information](assets/images/readme/gladiator-information.png)

- __Sign Up Page__

    - The sign up page was designed to be as simple as possible whilst still keeping the overall feel of the site. 
    - Minimal usage of elements was chosen to make best use of the background image to encourage a feeling of positivity and victory.

![Signup Form](assets/images/readme/signup-page.png)

- __Thank You Page__

    - A thank you page has been implemented to show once a user has successfully signed up to enforce a positive response from the user.
    - The custom message thanks the user for signing up whilst also giving them a button to return the main page.

![Thank You Page](assets/images/readme/thank-you-page.png)

- __The Footer__

    - The footer has been designed to keep in line with the navbar of a minimal look using the exact same colours and styles.
    - Icons have been used rather than words as the pages they link to have become second nature to most users.

![Footer](assets/images/readme/footer.png)

- __404 Error Page__

    - The 404 error page has been designed to be simple but stay within the design of the rest of the site.
    - A button directing back to the main page has been implemented and has the same styling as all other primary buttons.

![404 Error Page](assets/images/readme/error-page.png)

### Features Not Yet Implemented

- __Gladiator Dropdown__

    - I had planned to implement a dropdown on the gladiators information page to work on smaller screens much like the nav menu.
    - This would have only shown the relevant information for the chosen gladiator rather than having the whole page as a long scrollable page.

## Testing

Each feature of the site has been tested upon integration and also tested again upon completion of development, these tests will be outlined below.

- The Nav bar was tested by confirming each link lead to the correct page which I can confirm is the case this was repeated for each page where the nav bar was present.

- The footer, similarly to the nav bar was tested by confirming each link lead to the correct social media page, this was repeated for every page with the footer bar.

- All buttons that are present within the site have been tested by confirming that once activated they perform the correct action, the button on the index leads to the information page and the buttons on the 404 and thank you pages leads back to the index page.

- The audio playback features on the information page have all been confirmed to play the correct audio clip for their relevant section. 

- The sign up form has had all relevant inputs tested to confirm that they will request input when left empty with the email input specifically requesting for an email format with an @ symbol.

- The submit button is confirmed to lead to the thank you page upon successful completion of all relevant inputs on the form.

Along with feature testing I have also run lighthouse tests, these have come back very positive as seen below with the screen captures.

- Lighthouse report for main page

![Lighthouse Report Index](assets/images/readme/lighthouse-report-index.png)

- Lighthouse report for information page

![Lighthouse Report Information](assets/images/readme/lighthouse-report-information.png)

- Lighthouse report for signup form page

![Lighthouse Report Signup Form](assets/images/readme/lighthouse-report-signup-form.png)


### Validator Testing

- __HTML__
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fshlackka.github.io%2FGladiatour%2F)
- __CSS__
    - No errors were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fshlackka.github.io%2FGladiatour%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

To the best of my knowledge after testing all aspects of the site I have been unable to find any unfixed bugs.

## Deployment

The site has been deployed to GitHub pages, in order to do this the following steps were completed.

- From within the Gladiatour repo I navigated to the settings tab

- In settings navigate to the Pages section under "Code and automation"

- Once in Pages, I chose to deploy from a branch as my source and then chose the Main branch before clicking save

- The deployed site can be found at **https://shlackka.github.io/Gladiatour/index.html**

If you wish to fork the repo this can be achieved by using the "Fork" button at the top of the repo.

If you wish to clone the repo this can be achieved by using the drop down on the green "code" button and copying the URL into a workspace of your choosing such as **[Gitpod](https://www.gitpod.io/)** or **[CodeAnywhere](https://codeanywhere.com/)**.

## Credits 

In the below section I will go over all of the external sources where I either drew inspiration or used their tools to assist in the development of Gladiatour.

### Content

 - The text for the main index page and information page was taken from **[ChatGPT](https://chatgpt.com/?oai-dm=1)** with minor changes by myself. (All text within the README has been typed by myself).

 - **[ChatGPT](https://chatgpt.com/?oai-dm=1)** has been used to help explain any concepts I may have been struggling to understand, this was used more at the beginning of development with it tapering off as I became more confident.

 - The icons for the footer and the arrow for the dropdown on mobile were taken from **[Font Awesome](https://fontawesome.com/)**.

 - For the initial development of this site I took inspiration from the practice project I completed prior, which can be found **[here](https://github.com/Shlackka/Love-Running)**.

 - Fonts for the site were found using **[Google Fonts](https://fonts.google.com/)**.

### Media

- The audio clips for the information page were created using **[Voice Generator](https://voicegenerator.io/)**.

- All images including those used as backgrounds have been created using the DALL-E AI image creator through **[ChatGPT](https://chatgpt.com/?oai-dm=1)** by OpenAI.

- Favicon was created using **[Red Ketchup](https://redketchup.io/favicon-generator)**.