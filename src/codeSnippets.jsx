export const codeSnippets = [
    {
      id: "style-1",
      image: "/assets/style1.png",
      category: "text",
      codeblock: [
        {
          title: "Narrow",
          code: `<div class='additional-style additional-style-1 clearfix'>
          <div class='additional-style-wrap'>
              <div class='additional-style-inner'>
                  <h2>Looking to quickly sell your car online? You&rsquo;ve come to the right place!</h2>
                  <p>If you&rsquo;re wondering how to go about selling your car, we&rsquo;re here to help you find the ideal way to maximise the return for your current vehicle.</p><a class='button' href='PUT_LINK_HERE'>CTA</a></div></div>
          </div>`
        },
        {
          title: "Full Width",
          content: "Add to Custom CSS",
          code: `.additional-style.additional-style-2 .additional-style-inner {
            width: 100%;
            }`
        },
        {
          title: "Background Colour",
          code: `<div class="additional-style additional-style-2 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <h2>Looking to quickly sell your car online? You&rsquo;ve come to the right place!</h2>
                  <p>If you&rsquo;re wondering how to go about selling your car, we&rsquo;re here to help you find the ideal way to maximise the return for your current vehicle.</p><a class="button" href="PUT_LINK_HERE">CTA</a></div></div>
          </div>
          `
        }
      ]
    },
    {
      id: "style-3",
      image: "/assets/style3.png",
      category: "images",
      codeblock: [
        {
          title: "Without Links",
          code: `<div class="additional-style additional-style-3 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <ul>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                  </ul>
              </div></div></div>
      `
        },
        {
          title: "With Links",
          code: `<div class="additional-style additional-style-3 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <ul>
                      <li><a href="PUT_LINK_HERE"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></a></li>
                      <li><a href="PUT_LINK_HERE"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></a></li>
      <li><a href="PUT_LINK_HERE"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></a></li>
      <li><a href="PUT_LINK_HERE"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></a></li>
      <li><a href="PUT_LINK_HERE"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></a></li>
                  </ul>
              </div></div></div>`
        },
        {
          title: "With Text (no links)",
          code: `<div class="additional-style additional-style-3 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-text">
                   <p>We really value your feedback, therefore we’d be super grateful if you could take a minute to leave us a review!</p>
                  </div>
                  <ul>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                  </ul>
              </div></div></div>`
        }
      ]
    },
    /*{
      id: "style-4",
      image: "/assets/style4.png",
      category: "blocks",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-4 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-text">
                      <h3><strong>Every Vehicle Comes With</strong></h3>
                  </div>
                  <ul>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-checkbox.png" class="fr-fic fr-dii" data-id="13501">
                          <p>12 Month MOT</p>
                      </li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-checkbox.png" class="fr-fic fr-dii" data-id="13501">
                          <p>12 Month MOT</p>
                      </li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-checkbox.png" class="fr-fic fr-dii" data-id="13501">
                          <p>12 Month MOT</p>
                      </li>
                  </ul><a class="button" href="PUT_LINK_HERE">CTA</a></div></div></div>
      `
        }
      ]
    },
    {
      id: "style-5",
      image: "/assets/style5.png",
      category: "blocks",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-5 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-text">
                      <h3><strong>Every Vehicle Comes With</strong></h3>
                  </div>
                  <ul>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-checkbox.png" class="fr-fic fr-dib" data-id="13501">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p>
                      </li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-checkbox.png" class="fr-fic fr-dib" data-id="13501">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p>
                      </li>
                      <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-checkbox.png" class="fr-fic fr-dib" data-id="13501">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p> 	
                      </li>
                  </ul><a class="button" href="PUT_LINK_HERE">CTA</a></div></div></div>`
        }
      ]
    },*/
    {
      id: "style-6",
      image: "/assets/style6.png",
      category: "reviews",
      codeblock: [
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-6 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-review-icon">
                      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-message-1.png" class="fr-fic fr-dib" data-id="13504">
                  </div>
                  <div class="additional-style-text">
                      <p>“We have over 20 years of experience building car dealer websites for dealerships across the country, so you can be assured that you’re in the hands of experts. Our ethos is to keep things simple and our packages and pricing reflect this.”</p>
      <p class="name">Katie, MD, Spidersnet</p>
                  </div></div></div></div>
      `
        },
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-7 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-review-icon"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-message-2.png" class="fr-fic fr-dib" data-id="13507"></div>
                  <div class="additional-style-text">
                      <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                      <p class="name">Numan, CEO FN Motors</p>
                  </div></div></div></div>      
      `
        }
      ]
    },
    /*{
      id: "style-8",
      image: "/assets/style8.png",
      category: "text",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-8 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
      <h2>Short Titles Goes here</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p>
                      <a href="PUT_LINK_HERE" class="button">CTA</a>
                  </div></div></div>      
      `
        }
      ]
    },
    {
      id: "style-9",
      image: "/assets/style9.png",
      category: "text",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-9 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <a href="PUT_LINK_HERE">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-right.png" class="fr-fic fr-dii" data-id="13510">
                  </a></div></div></div>         
      `
        }
      ]
    },
    {
      id: "style-10",
      image: "/assets/style10.png",
      category: "partners",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-10 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-text">
                      <p><strong>You Are in Safe Hands! This dealer has signed our Dealer Promise</strong></p>
                  </div>
      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/aa-warranty.png" class="fr-fic fr-dib" data-id="13513"></div></div></div>          
      `
        }
      ]
    },
    {
      id: "style-12",
      image: "/assets/style12.png",
      category: "partners",
      codeblock: [
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-11 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <p>Proud to be a</p>
      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/car-gurus-1.png" class="fr-fic fr-dib" data-id="13516">
      <h3>Top Rated Dealer 2020 & 2021</h3>
      <a href="PUT_LINK_HERE" class="button">CTA</a>
              </div></div></div>      
      `
        },
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-12 clearfix">
          <div class="additional-style-cargurus-top">
              <div class="additional-style-wrap">
                  <div class="additional-style-inner">
                      
                          <p>Proud to be a</p>
                      </div></div></div><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/car-gurus-1.png" class="fr-fic fr-dib" data-id="13516">
                      <div class="additional-style-cargurus-bottom">
             <div class="additional-style-wrap">
                  <div class="additional-style-inner">
                          <h3>Top Rated Dealer 2020 &amp; 2021</h3><a class="button" href="PUT_LINK_HERE">CTA</a></div></div></div></div>
      `
        }
      ]
    },*/
    {
      id: "style-13",
      image: "/assets/style13.png",
      category: "partners",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-13 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <h3>Proud to be a <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/car-gurus-2.png" class="fr-fic fr-dii" data-id="13519">&nbsp;top rated dealer 2022</h3><a class="button" href="PUT_LINK_HERE">CTA</a></div></div></div>        
      `
        }
      ]
    },
    {
      id: "style-15",
      image: "/assets/style15.png",
      category: "partners",
      codeblock: [
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-15 clearfix">
          <div class="additional-style-cargurus-top">
              <br>
          </div><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/autotrader-1.png" class="fr-fic fr-dib" data-id="13522">
          <div class="additional-style-cargurus-bottom">
              <div class="additional-style-wrap">
                  <p>Highly rated
                      <br>for our customer service 2022</p><a class="button" href="https://www.autotrader.co.uk/INSERT-DEALERS-OWN-AT-URL-HERE #reviews-container">View Reviews</a></div></div></div>  
      `
        },
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-14 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
      <div class="additional-style-logo">
      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/autotrader-1.png" class="fr-fic fr-dib" data-id="13522"></div>
                  <p><span>Highly rated</span> for our customer service 2022</p><a class="button" href="PUT_LINK_HERE">CTA</a></div></div></div>      
      `
        }
      ]
    },
    {
      id: "style-16",
      image: "/assets/style16.png",
      category: "social",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-16 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <h3><span>FOLLOW US ON INSTAGRAM</span> / @spidersnetuk</h3><a class="button" href="PUT_LINK_HERE"target="_blank">Follow</a></div></div></div>      
      `
        }
      ]
    },
    {
      id: "style-17",
      image: "/assets/style17.png",
      category: "social",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-17 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <h3>Follow Us On Instagram</h3>
                  <div class="instagram-profile">
                      <div class="instagram-profile__left">
                          <div class="instagram-profile__image"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-right.png" class="fr-fic fr-dii" data-id="13510"></div>
                          <div class="instagram-profile__name">
                              <p><strong>Dealer Name</strong></p>
                              <p>@username</p>
                          </div></div><a class="button" href="PUT_LINK_HERE"target="_blank">Follow</a></div></div></div></div>
      `
        }
      ]
    },
    {
      id: "style-18",
      image: "/assets/style18.png",
      category: "reviews",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-18 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-header">
                      <h3>Read what our customers have to say about us</h3>
                      <div class="rating">
                          <div class="rating-inner"><span>Reviews Rating</span> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"></div></div>
                      <div class="reviews-button"><a class="button" href="PUT_LINK_HERE">View Reviews</a></div></div>
                  <ul class="additional-style-reviews">
                      <li>
                          <div class="additional-style-review">
                              <div class="additional-style-review-icon"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-message-1.png" class="fr-fic fr-dib" data-id="13504"></div>
                              <div class="additional-style-text">
                                  <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                                  <p class="name">Numan, CEO FN Motors</p>
                              </div></div>
                      </li>
                      <li>
                          <div class="additional-style-review">
                              <div class="additional-style-review-icon"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-message-1.png" class="fr-fic fr-dib" data-id="13504"></div>
                              <div class="additional-style-text">
                                  <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                                  <p class="name">Numan, CEO FN Motors</p>
                              </div></div>
                      </li>
                      <li>
                          <div class="additional-style-review">
                              <div class="additional-style-review-icon"><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/icon-message-1.png" class="fr-fic fr-dib" data-id="13504"></div>
                              <div class="additional-style-text">
                                  <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                                  <p class="name">Numan, CEO FN Motors</p>
                              </div></div>
                      </li>
                  </ul>
              </div></div></div>      
      `
        }
      ]
    },
    {
      id: "style-19",
      image: "/assets/style19.png",
      category: "text",
      codeblock: [
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-19 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                        <div class="additional-style-19__image">
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/0d54348d-dd8d-4eca-b3dd-50ba892b4b4f.png" class="fr-fic fr-dib" data-id="56617">
                        </div>
                        <div class="additional-style-19__title">
                          <h3>Looking to quickly sell your car online?</h3>
                        </div>
                        <div class="additional-style-19__text">
                          <p>If you're wondering how to go about selling your car, we're here to help you find the ideal way to maximise the return for your current vehicle.</p>
                        </div>
                        <div class="additional-style-19__button">
                          <a href="PUT_LINK_HERE" class="button">Sell Your Car</a>
                        </div>
              </div>
          </div>
      </div>      
      `
        },
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-19 clearfix" style="background-color: PUT_COLOUR_HERE;">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                        <div class="additional-style-19__image">
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/0d54348d-dd8d-4eca-b3dd-50ba892b4b4f.png" class="fr-fic fr-dib" data-id="56617">
                        </div>
                        <div class="additional-style-19__title">
                          <h3>Looking to quickly sell your car online?</h3>
                        </div>
                        <div class="additional-style-19__text">
                          <p>If you're wondering how to go about selling your car, we're here to help you find the ideal way to maximise the return for your current vehicle.</p>
                        </div>
                        <div class="additional-style-19__button">
                          <a href="PUT_LINK_HERE" class="button">Sell Your Car</a>
                        </div>
              </div>
          </div>
      </div>
      `
        }
      ]
    },
    {
      id: "style-20",
      image: "/assets/style20.png",
      category: "images",
      codeblock: [
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-20 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-20__title">
                      <h2>Proud To Work With</h2>
                  </div>
                  <div class="additional-style-20__images">
                      <ul>
                          <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                          <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                          <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      `
        },
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-20 clearfix" style="background-color: PUT_COLOUR_HERE;">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-20__title">
                      <h2>Proud To Work With</h2>
                  </div>
                  <div class="additional-style-20__images">
                      <ul>
                          <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                          <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                          <li><img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/add-text-icon-1.png" class="fr-fic fr-dib" data-id="13498"></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      `
        }
      ]
    },
    {
      id: "style-21",
      image: "/assets/style21.png",
      category: "blocks",
      codeblock: [
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-21 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-text">
                      <h2>Every Vehicle Comes With</h2>
                  </div>
                  <ul>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p>
                          <p><a href="PUT_LINK_HERE">Learn More</a></p>
                      </li>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p>
                          <p><a href="PUT_LINK_HERE">Learn More</a></p>
                      </li>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p> 	
                          <p><a href="PUT_LINK_HERE">Learn More</a></p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      `
        },
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-21 clearfix" style="background-color: PUT_COLOUR_HERE;>
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-text">
                      <h2><strong>Every Vehicle Comes With</strong></h2>
                  </div>
                  <ul>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p>
                          <p><a href="PUT_LINK_HERE">Learn More</a></p>
                      </li>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p>
                          <p><a href="PUT_LINK_HERE">Learn More</a></p>
                      </li>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius sem tortor, nec sodales mi lacinia sit amet.</p> 	
                          <p><a href="PUT_LINK_HERE">Learn More</a></p>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      `
        }
      ]
    },
    {
      id: "style-22",
      image: "/assets/style22.png",
      category: "blocks",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-22 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <ul>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                      </li>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                      </li>
                      <li>
                          <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      `
        }
      ]
    },
    {
      id: "style-23",
      image: "/assets/style23.png",
      category: "reviews",
      codeblock: [
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-23 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-header">
                      <div class="reviews-title">
                          <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii">
                          <h3>What our customers say about us</h3>
                      </div>
                      <div class="reviews-button"><a class="button" href="PUT_LINK_HERE">View Reviews</a></div></div>
                  <ul class="additional-style-reviews">
                      <li>
                          <div class="additional-style-review">
                              <div class="additional-style-text">
                                  <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                                  <p class="name">Numan, CEO FN Motors</p>
                              </div></div>
                      </li>
                      <li>
                          <div class="additional-style-review">
                              <div class="additional-style-text">
                                  <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                                  <p class="name">Numan, CEO FN Motors</p>
                              </div></div>
                      </li>
                  </ul>
              </div></div></div>      
      `
        },
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-23 clearfix" style="background: #F5F5F5;">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-header">
                      <div class="reviews-title">
                          <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii"> <img src="/basemedia/star.svg" class="fr-fic fr-dii">
                          <h3>What our customers say about us</h3>
                      </div>
                      <div class="reviews-button"><a class="button" href="PUT_LINK_HERE">View Reviews</a></div></div>
                  <ul class="additional-style-reviews">
                      <li>
                          <div class="additional-style-review">
                              <div class="additional-style-text">
                                  <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                                  <p class="name">Numan, CEO FN Motors</p>
                              </div></div>
                      </li>
                      <li>
                          <div class="additional-style-review">
                              <div class="additional-style-text">
                                  <p>&ldquo;Our fantastic team are passionate about delivering outstanding customer experiences and our mission is to ensure that you love both the FN car buying experience and the car&rdquo;</p>
                                  <p class="name">Numan, CEO FN Motors</p>
                              </div></div>
                      </li>
                  </ul>
              </div></div></div>       
      `
        },
        {
          title: "Add background colour to review area",
          content: "Add to Custom CSS and replace colours as desired",
          code: `.additional-style.additional-style-23 .additional-style-inner .additional-style-reviews .additional-style-review {
            background: #fff;
            color: #000;
        }`
        },
      ]
    },
    {
      id: "style-24",
      image: "/assets/style24.png",
      category: "partners",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-24 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-24__logo">
                      <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/16f50b48-e6d7-48cb-a08b-3b2aba928544.svg" class="fr-fic fr-dib" data-id="56632">
                  </div>
                  <div class="additional-style-24__text">
                      <h3>You are in safe hands!</h3>
                      <p>This dealer has signed our Dealer Promise</p>
                  </div>
                  <div class="additional-style-24__image">
                      <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/2401c765-55e0-42a2-a271-7c3878214c72.png" class="fr-fic fr-dib" data-id="56635">
                  </div>
              </div>
          </div>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      `
        }
      ]
    },
    {
      id: "style-25",
      image: "/assets/style25.png",
      category: "partners",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-25 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-25__logo">
                      <img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/4e896cd7-4315-4226-986d-8dfa400cb419.png" class="fr-fic fr-dib" data-id="56638">
                  </div>
                  <div class="additional-style-25__text">
                      <h3>You are in safe hands!</h3>
                  </div>
                  <div class="additional-style-25__text">
                      <h3 style="font-weight: 300;">This dealer has signed our Dealer Promise</h3>
                  </div>
              </div>
          </div>
      </div>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
      `
        }
      ]
    },
    {
      id: "style-26",
      image: "/assets/style26.png",
      category: "partners",
      codeblock: [
        {
          title: "No Background",
          code: `<div class="additional-style additional-style-26 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-26__logo">
                      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/car-gurus-1.png" class="fr-fic fr-dib" data-id="13516">
                  </div>
                  <div class="additional-style-26__text">
                      <h3><span style="font-weight: 300;">Proud to be a</span>&nbsp;Top Rated Dealer 2022</h3>
                  </div>
                  <div class="additional-style-26__button">
                      <a href="PUT_LINK_HERE" class="button">Read More</a>
                  </div>
              </div>
          </div>
      </div>       
      `
        },
        {
          title: "With Background",
          code: `<div class="additional-style additional-style-26 clearfix" style="background: #F5F5F5;">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-26__logo">
                      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/car-gurus-1.png" class="fr-fic fr-dib" data-id="13516">
                  </div>
                  <div class="additional-style-26__text">
                      <h3><span style="font-weight: 300;">Proud to be a</span>&nbsp;Top Rated Dealer 2022</h3>
                  </div>
                  <div class="additional-style-26__button">
                      <a href="PUT_LINK_HERE" class="button">Read More</a>
                  </div>
              </div>
          </div>
      </div>      
      `
        }
      ]
    },
    {
      id: "style-27",
      image: "/assets/style27.png",
      category: "partners",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-27 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-27__logo">
                      <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/car-gurus-1.png" class="fr-fic fr-dib" data-id="13516">
                  </div>
                  <div class="additional-style-27__right">
                      <h2><span style="font-weight: 300;">Cargurus 2023</span>&nbsp;Top Rated Dealer</h2>
                      <p>We are proud to be recognized for exceptional customer service!</p>
                  </div>
              </div>
          </div>
      </div>
      `
        }
      ]
    },
    {
      id: "style-28",
      image: "/assets/style28.png",
      category: "text",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-28 clearfix">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <div class="additional-style-bg" style="background: #F5F5F5;">
                      <h2>Looking to quickly sell your car online? You've come to the right place!</h2>
                      <a class="button" href="PUT_LINK_HERE">Read More</a>
                  </div>
              </div>
          </div>
      </div>
      `
        }
      ]
    },
    {
      id: "style-29",
      image: "/assets/style29.png",
      category: "blocks",
      codeblock: [
        {
          code: `<div class="additional-style additional-style-29 clearfix" style="background-color: #F5F5F5;">
          <div class="additional-style-wrap">
              <div class="additional-style-inner">
                  <h2>Every Vehicle Comes With</h2>
                  <ul>
                      <li><img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                      </li>
                      <li><img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                      </li>
                      <li><img src="https://s3-eu-west-1.amazonaws.com/files.autopromotor/3736/websiteMedia/3475/88a2ae33-804a-4588-a181-544581146385.svg" class="fr-fic fr-dib" data-id="56623">
                          <h4>12 Month MOT</h4>
                      </li>
                  </ul>
              </div></div></div>
      `
        }
      ]
    },
    {
      id: "slide-1",
      image: "/assets/slide1.png",
      category: "slides",
      title: "Premier 1",
      codeblock: [
        {
          title: "Default (Centre aligned)",
          code: `<div class="hero-caption">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Right aligned",
          code: `<div class="hero-caption right">
              <h2>Buy Your Next Car From The Comfort of Your Home</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>`
        },
        {
          title: "Left aligned",
          code: `<div class="hero-caption left">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        }
      ]
    },
    {
      id: "slide-2",
      image: "/assets/slide2.png",
      category: "slides",
      title: "Premier 2",
      codeblock: [
        {
          title: "Default (Left aligned)",
          code: `<div class="hero-caption">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Right aligned",
          code: `<div class="hero-caption right">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Centre aligned",
          code: `<div class="hero-caption center">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        }
      ]
    },
    {
      id: "slide-3",
      image: "/assets/slide3.png",
      category: "slides",
      title: "Premier 3",
      codeblock: [
        {
          content: "Does not support button click through - consider an additional text box",
          code: `<div class="hero-caption">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        }
      ]
    },
    {
      id: "slide-4",
      image: "/assets/slide4.png",
      category: "slides",
      title: "Premier 4",
      codeblock: [
        {
          title: "Default (Left aligned)",
          code: `<div class="hero-caption">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Right aligned",
          code: `<div class="hero-caption right">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Centre aligned",
          code: `<div class="hero-caption center">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        }
      ]
    },
    {
      id: "slide-5",
      image: "/assets/slide5.png",
      category: "slides",
      title: "Premier 5",
      codeblock: [
        {
          title: "Default (Left aligned)",
          code: `<div class="hero-caption">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Right aligned",
          code: `<div class="hero-caption right">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Centre aligned",
          code: `<div class="hero-caption center">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        }
      ]
    },
    {
      id: "slide-6",
      image: "/assets/slide6.png",
      category: "slides",
      title: "Premier 6",
      codeblock: [
        {
          title: "Default (Left aligned)",
          code: `<div class="hero-caption">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Right aligned",
          code: `<div class="hero-caption right">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        },
        {
          title: "Centre aligned",
          code: `<div class="hero-caption center">
          <h2>Buy Your Next Car From The Comfort of Your Home</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
      </div>`
        }
      ]
    },
    {
      id: "slide-7",
      image: "/assets/slide7.png",
      category: "slides",
      title: "Premier 7",
      codeblock: [
        {
          title: "Default (line above and below)",
          code: `<div class="hero-caption style">
          <h2>We can help you to</h2>
          <p>Finance your next car</p>
          </div>`
        },
        {
          title: "Right aligned",
          code: `<div class="hero-caption style right">
          <h2>We can help you to</h2>
          <p>Finance your next car</p>
          </div>`
        },
        {
          title: "Centre aligned",
          code: `<div class="hero-caption style center">
          <h2>We can help you to</h2>
          <p>Finance your next car</p>
          </div>`
        },
        {
          title: "Plain",
          code: `<div class="hero-caption">
          <h2>We can help you to</h2>
          <p>Finance your next car</p>
          </div>`
        }
        ,
        {
          title: "With Icon",
          code: `<div class="hero-caption style icon">
          <img src="https://s3.eu-west-1.amazonaws.com/processed-files.autopromotor.co.uk/shared/assets/hero-icon-p7.png" class="fr-fic fr-dib" data-id="13495">
              <h2>Buy Your Next Car From The Comfort of Your Home</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>`
        }
      ]
    },
    {
      id: "slide-essential",
      image: "/assets/slide-essential.png",
      category: "slides",
      title: "Essentials",
      codeblock: [
        {
          title: "Default (Centre aligned)",
          code: `<div class="hero-caption">
              <h2>Buy Your Next Car From The Comfort of Your Home</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>`
        },
        {
          title: "Right aligned",
          code: `<div class="hero-caption right">
              <h2>Buy Your Next Car From The Comfort of Your Home</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>`
        },
        {
          title: "Left aligned",
          code: `<div class="hero-caption left">
              <h2>Buy Your Next Car From The Comfort of Your Home</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
          </div>`
        }
      ]
    }
  ];
