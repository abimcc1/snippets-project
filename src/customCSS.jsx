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
    title: "Hide Email Address in Footer",
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
{
  id: "css-8",
  title: "Move photo and video count to right of image",
  codeblock: [
    {
    location: "Custom CSS",
    code: `.l-node-used-vehicle--compare-vehicle__photo-overlay, 
.l-node-used-vehicle--search-result__photo-overlay, 
.l-node-used-vehicle--sold-gallery__photo-overlay,
.l-node-used-vehicle--full__photo-overlay {
    text-align: right;
}`
    }
  ],
},
{
  id: "css-9",
  title: "Text, logos and button for reviews section (Additional Text 1)",
  theme: "Premier 10",
  codeblock: [
    {
    location: "Custom CSS",
    code: `<h2>Customer Reviews</h2>
<p>Read what our customers have to say</p>
<div class="reviews-logos">
  <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3625/17e13829-91bf-4c41-8e0b-1c61cff6802c.png" class="fr-fic fr-fil fr-dib" data-id="57256">
  <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3625/c06435ba-1449-4fdd-bcca-c97510699a3a.png" class="fr-fic fr-fil fr-dib" data-id="57259">
</div>
<p><a class="button" href="/reviews/">Read Reviews</a></p>`
    }
  ],
},
{
  id: "css-10",
  title: "Text, logos and button for reviews section (Additional Text 1)",
  theme: "Premier 11",
  codeblock: [
    {
    location: "Custom CSS",
    code: `<h2>Customer Reviews</h2>
<h3>Read what our customers have to say</h3>
<p><img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3742/1709122029-google - png 0 (1).png" class="fr-fic fr-fil fr-dii" data-id="58207"></p>
<p><a class="button" href="">Read Reviews</a></p>`
    }
  ],
},
{
  id: "css-11",
  title: "Finance slider text",
  theme: "Premiers",
  codeblock: [
    {
    location: "Content Area",
    code: `<h4>Used Car</h4>
<h3>Finance Specialist</h3>
<p>If you are looking for great savings on quality used cars, then you have reached the right place. [Dealer] are a specialist used car dealer based in [Town].</p>`
    }
  ],
},
]