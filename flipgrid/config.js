const settings = {
  /*=== PLEASE DO NOT MAKE ANY EDITS ABOVE THIS LINE ===*/

    /*This applet creates a spread of flippable index cards, like flash cards.
    The settings of the program and the cards themselves can be configured entirely
    in this JSON file.*/

    title: "Flip Grid",

    //Optionally, you can write instructions at the top of the applet page. Use this to describe functionality to the user. (enclose in quotes)
    promptText: undefined,

    //Similarly, you can add an image prompt to illustrate instructions (this would be an image filename enclosed in quotes)
    promptImage: undefined,

    //Adjust animation settings of the program
    fancyFlip: false, //When set to false, cards simply flip over horizontally. When set to true, cards spin around diagonally for a more interesting animation
    clickFlip: true, //When set to true, cards flip only when the user clicks them. When set to false, cards flip on mouse hover.
    flipSingle: false, //When set to true, only one card can be revealed at a time. When false, users can reveal any number of cards. Only applicable when clickFlip is true.

    styling: {
      /*
      Adjust the colors of the cards with the values below, typically written in HEX format
      Note that the RECOMMENDED settings from CodeCademy are as follows.

      backgroundColor: "#ffffff", //The color of the background of the page
      cardFrontColor: "#10162F",
      cardBackColor: "#1557FF",
      borderColor: "#ffffff",

      This recommendation is based on CodeCademy branding & design guidelines
      */

      backgroundColor: "#10162F", //The color of the background of the page
      cardFrontColor: "#10162F",
      cardBackColor: "#1557FF",
      borderColor: "#ffffff",

      cardSpace: "30px", //How much empty space to place between each card
      minCardWidth: "100px", //How thin the cards can get before wrapping to the next line (adjust this if you have problems with readability in small widths)

      promptTextColor: "black",
      cardTextColor: "white",

      /*Adjust the font used by the program.
      This could just be one font, or a list of fonts (as seen by default).
      Each font is separated by a comma. If the first font is unavailable,
      the program will use the next font. If that is also unavailable, it will
      proceed to the next font, and so forth. It is therefore best to include
      as many workable fonts as possible, in case the user does not have many
      fonts available on their system.
      */
      font: `
      Apercu,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      Ubuntu,
      Cantarell,
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      sans-serif
      `,
    },

    /*The cards are placed in a grid arrangement. This number indicates how
    many cards fit on each row of the grid.
    Adjust to your liking. This may require some experimentation, depending
    on the complexity of your content.*/
    cardsPerRow: 3,

    /*
    The following contains information for the cards themselves and their content.
    Modify the information inside quotes to change the content of the card.
    */
    cards: [
      {
        title: "Chat and Text Completion Endpoint", //The title on the front of the card
        text: "", //The body copy on the front of the card
        backsideTitle: "'chat/completions'", //The title on the back of the card
        backsideText: "Generates and completes text from a single prompt or defines a multi-prompt chat." //The body copy on the back of the card
      },
      {
        title: "Text Completion Endpoint",
        text: "",
        backsideTitle: "'completions'",
        backsideText: "Generates and completes text from a single prompt."
      },
      {
        title: "Available Models Endpoint",
        text: "",
        backsideTitle: "'models'",
        backsideText: "List the available models and corresponding data."
      },
      {
        title: "Image Creation Endpoint",
        text: "",
        backsideTitle: "'images'",
        backsideText: "Create and edit images using a text prompt.",
      },
      {
        title: "Audio Transcription Endpoint",
        text: "",
        backsideTitle: "'audio'",
        backsideText: "Generates text from a given audio file.",
      },
      {
        title: "Content Moderation Endpoint",
        text: "",
        backsideTitle: "'moderations'",
        backsideText: "Analyzes text to see if it violates OpenAI's content policy.",
      },
      /*

      ADDING CARDS - You may add as many cards as you like.
      Do so by copying one of the blocks above, and pasting it
      here, at the end of this list. (Before the closing square bracket)
      Be sure to include the curly braces ({ }) and comma (,) when you
      copy the block, otherwise the program will fail.

      REMOVING CARDS - To remove a card, simply delete one of the card
      blocks above. Be sure to delete everything - including the curly
      braces ({ }) and comma (,).

      */
    ],


  /*=== PLEASE DO NOT MAKE ANY EDITS BELOW THIS LINE ===*/
};
