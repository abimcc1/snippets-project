export const customCSS = [
  {
    id: "css-1",
    title: "Change font on premier themes",
    content: `Replace the input URL, and font family with the ones from Google Fonts`,
    codeblock: [
      {
      location: "Custom CSS",
      code: `@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;700&display=swap'); 

body,
.top-bar .main-menu a,
h1, h2, h3, h4, h5, h6 {
  font-family: 'Sora', sans-serif;
}`
      }
    ],
  },
  {
    id: "css-2",
    title: "Creating a button",
    codeblock: [
      {
      location: "Content Area",
      code: `<p><a class="button" href="INSERT_URL_HERE" target="_blank">This is your button text</a></p>`
      }
    ],
  },
  {
    id: "css-3",
    title: "Facebook Chat overlap",
    codeblock: [
      {
      location: "Custom CSS",
      code: `#return-to-top {
  right: 140px;
}`
      }
    ],

  },
  {
    id: "css-4",
    title: "Hide Email Address",
    theme: "Premier 3",
    codeblock: [
      {
      location: "Custom CSS",
      code: `.footer-email,
.footer-contact-details + .view-header {
        display: none;
}`
      }
    ],
},
{
  id: "css-5",
  title: "Move WhatsApp Chat",
  codeblock: [
    {
      location: "Custom CSS",
      text: "To have WhatsApp and Saved Vehicles",
      code: `.l-chat-icon {
  right: 100px;
  bottom: 40px;
}`
      },
    {
    location: "Custom CSS",
    text: "To have WhatsApp and Back to Top",
    code: `#return-to-top {
  right: 100px;
}
.l-chat-icon {
  bottom: 40px;
}`
    },
    {
      location: "Custom CSS",
      text: "To add WhatsApp to the left of the site",
      code: `.l-chat-icon {
  right: auto;
  left: 20px;
  bottom: 20px;
}`
      }
  ],
},
{
  id: "css-6",
  title: "Anchoring a button to a Finance Form",
  codeblock: [
    {
    location: "Content Area",
    code: `<p><a class="button" href="#finance-form">Apply For Finance</a></p>`
    }
  ],
},
{
  id: "css-7",
  title: "CSS to remove text below manufacturer logos",
  codeblock: [
    {
    location: "Custom CSS",
    code: `.block-logo-search li span {
  display: none;
}`
    }
  ],
},
]