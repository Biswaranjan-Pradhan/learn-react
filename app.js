import React from "react";
import ReactDOM from 'react-dom/client';

/***
 * AppLayout
 *      Header
 *          Logo
 *          NavList
 *      Body
 *          Search
 *          RestaurantList 
 *              RestaurantCard   
 *      Footer      
 *          Copyright
 *          Links
*           Address
 *          Contact
 */

const Header = () => {
    return (
        <div className="header-container">
            <div className="logoContainer">
                <img className="logo" src="https://i.pinimg.com/originals/02/fd/5c/02fd5cc15841730936c0c5c555dae3a9.png" />
            </div>
            <div className="nav-list-conatiner">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contactus</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Search = () => {
    return (
        <div className="search-container">
            <input className="searchbar" placeholder="Search Restaurants" type="text"/> <button>Search</button>
        </div>
    )
}

const restaurantList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "109787",
        "name": "Chianti",
        "uuid": "c8ee75ae-4884-4064-833b-c55d501fb14b",
        "city": "1",
        "area": "MG Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "byb52jmakvfk71lqd0av",
        "cuisines": [
          "Italian",
          "Pizzas",
          "Salads",
          "Pastas",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 125000,
        "costForTwoString": "₹1250 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.5,
        "slugs": {
          "restaurant": "chianti-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "no.18, Ground floor, Ramanashree Arcade, Chianti Restaurant, MG Road, Opp. Oberoi Hotel",
        "locality": "MG Road",
        "parentId": 7396,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6918659~p=1~eid=00000188-f895-6f95-13bb-46bf00870152~srvts=1687797723029",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "109787",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "271",
        "name": "Meghana Foods",
        "uuid": "6769453d-609b-4798-a846-f25ee329049b",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "sotxv0gury7f7vrfvb2r",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 15,
        "minDeliveryTime": 15,
        "maxDeliveryTime": 15,
        "slaString": "15 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
          "restaurant": "meghana-foods-cmh-road-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "544, First Floor, NearIndiranagar Metro Station, CMH Road, Indiranagar, Bangalore",
        "locality": "CMH Road",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "271",
          "deliveryTime": 15,
          "minDeliveryTime": 15,
          "maxDeliveryTime": 15,
          "lastMileTravel": 1.7999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "428",
        "name": "Biryani Pot",
        "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 7.300000190734863,
        "slugs": {
          "restaurant": "biryani-pot-madiwala-junction-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        "locality": "Maruti Nagar",
        "parentId": 21798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 7100,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 7100,
          "message": "",
          "title": "Delivery Charge",
          "amount": "7100",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "7.3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹499",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "428",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 7.300000190734863,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "IT_IS_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "1286",
        "name": "Leon's - Burgers & Wings (Leon Grill)",
        "uuid": "c2eb01ab-1195-4614-8eff-5535588cf399",
        "city": "1",
        "area": "Jeevan Bhima Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "qdn07nftnqzlxnv9a9o6",
        "cuisines": [
          "American",
          "Snacks",
          "Turkish",
          "Portuguese",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 2.299999952316284,
        "slugs": {
          "restaurant": "leon-grill-hal-3rd-stage-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "1671, 9th Main, 4th Cross, HAL 3rd Stage, Indiranagar",
        "locality": "",
        "parentId": 371281,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7200102~p=10~eid=00000188-f895-6f95-13bb-46c200870a58~srvts=1687797723029",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "1286",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 2.299999952316284,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "427",
        "name": "Hotel Empire",
        "uuid": "ade1100f-32c4-4653-8fae-157081d74aa6",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "vumnivx75awxz9eo1czq",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 2,
        "slugs": {
          "restaurant": "hotel-empire-80-feet-road-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "80ft Road, HAL 2nd Stage, Next to BSNL, Indiranagar,, Bengaluru, Karnataka 560008",
        "locality": "Indiranagar",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "427",
          "deliveryTime": 28,
          "minDeliveryTime": 28,
          "maxDeliveryTime": 28,
          "lastMileTravel": 2,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "29063",
        "name": "Misu",
        "uuid": "e48dab10-bade-4287-b076-ac413a5bae51",
        "city": "1",
        "area": "St Marks Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "lx0tpfgsbqygafwh30wh",
        "cuisines": [
          "Asian",
          "Chinese",
          "Vietnamese",
          "Malaysian",
          "Sushi",
          "Singaporean",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 130000,
        "costForTwoString": "₹1300 FOR TWO",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "slaString": "30 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "misu-st-marks-road-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "4th Floor, Halcyon Complex, Saint Marks Road, Ashok Nagar, Bengaluru, Karnataka 560001",
        "locality": "Ashok Nagar",
        "parentId": 7415,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6918691~p=7~eid=00000188-f895-6f95-13bb-46c10087072e~srvts=1687797723029",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "29063",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "210945",
        "name": "Royal Restaurant",
        "uuid": "9b33bca4-65e6-4a26-af3e-f47c4476ed4d",
        "city": "1",
        "area": "Shivajinagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "yicweopn4lzcjlqy4jvq",
        "cuisines": [
          "Chinese",
          "North Indian",
          "Tandoor"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 5.599999904632568,
        "slugs": {
          "restaurant": "royal-restaurant-central-bangalore-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Broadway Road Police Station, HKP Road, Sulthangunta, Shivajinagar, Bengaluru, Bangalore Urban, Karnataka, India",
        "locality": "Sulthangunta",
        "parentId": 2896,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "210945",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 5.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "196047",
        "name": "New Taj Darbar",
        "uuid": "94a6fc19-e819-4450-b52f-a96c5a32d565",
        "city": "1",
        "area": "Shivajinagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "nfieyqgxk1omknxfbluj",
        "cuisines": [
          "Biryani",
          "Indian",
          "Chinese",
          "Tandoor",
          "Seafood"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "slaString": "38 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "new-taj-darbar-central-bangalore-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "New Taj Darbar, Shivaji Nagar, Bengaluru, Karnataka, India",
        "locality": "Saint Mary's Church Road",
        "parentId": 148190,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "196047",
          "deliveryTime": 38,
          "minDeliveryTime": 38,
          "maxDeliveryTime": 38,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "5937",
        "name": "Burger King",
        "uuid": "41b91124-2ff4-45a8-a11c-4d40171bcbe2",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        "cuisines": [
          "Burgers",
          "American"
        ],
        "tags": [
          
        ],
        "costForTwo": 35000,
        "costForTwoString": "₹350 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.7999999523162842,
        "slugs": {
          "restaurant": "burger-king-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Salarpuria Plaza, No. 543, CMH Road, Nr Indira Nagar Metro station  Bangalore 560 038",
        "locality": "CMH Road",
        "parentId": 166,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.7 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "5937",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.7999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "91103",
        "name": "Brik Oven",
        "uuid": "ddc6aa22-8bba-4e10-89ab-6039550e1e61",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "49352a71022a5b08a8361306ba253892",
        "cuisines": [
          "Italian",
          "Pizzas",
          "Desserts",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
          "restaurant": "brik-oven-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Brik Oven, 872/A, 80 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560044",
        "locality": "HAL 2nd Stage",
        "parentId": 7389,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6918780~p=16~eid=00000188-f895-6f95-13bb-46c400871031~srvts=1687797723029",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "91103",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 2.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "49189",
        "name": "Truffles",
        "uuid": "852cec33-2d9d-4a6d-8268-1f60ed297c4f",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
        "cuisines": [
          "American",
          "Desserts",
          "Italian",
          "Continental"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 2.700000047683716,
        "slugs": {
          "restaurant": "truffles-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "K.p Square,307,Ground floor, 100FT Road Binnamangala 1st stage bangalore 560038",
        "locality": "1st Stage",
        "parentId": 218065,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.7 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "49189",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 2.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "577210",
        "name": "Pablo's Sandwiches",
        "uuid": "0da49689-b9b7-4f65-a607-84de7a1e4ece",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "n5ukbce8eaq0vowbeksl",
        "cuisines": [
          "Indian",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 19,
        "minDeliveryTime": 19,
        "maxDeliveryTime": 19,
        "slaString": "19 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "pablo's-indiranagar-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO 212 A SITUATED AT DOMLUR LAYOUT 2ND STAGE 60 FEET ROAD INDIRANAGAR BANAGALORE KARNATAKA INDIA Sarvagna Nagar B B M P East Karnataka 560071",
        "locality": "Sarvagna Nagar",
        "parentId": 394078,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7188699~p=19~eid=00000188-f895-6f95-13bb-46c500871304~srvts=1687797723029",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "577210",
          "deliveryTime": 19,
          "minDeliveryTime": 19,
          "maxDeliveryTime": 19,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "10584",
        "name": "Pizza Hut",
        "uuid": "aa85709a-161f-42fa-93aa-5bce45570308",
        "city": "1",
        "area": "Indiranagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 2.200000047683716,
        "slugs": {
          "restaurant": "pizza-hut-cmh-road-indiranagar",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "#1/4, ward no 82, NGEF Layout,Binmangala, CMH road, Indiranagar, Bangalore",
        "locality": "Indiranagar",
        "parentId": 721,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.2 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "10584",
          "deliveryTime": 29,
          "minDeliveryTime": 29,
          "maxDeliveryTime": 29,
          "lastMileTravel": 2.200000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "4046",
        "name": "Sri Udupi Park",
        "uuid": "5b811b78-56d2-4d80-9681-7630cb3904c6",
        "city": "1",
        "area": "Residency Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "tfbnpd65irvhp9iwhbtk",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Chaat",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 3.700000047683716,
        "slugs": {
          "restaurant": "veg-feast-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "57, Opposite Galaxy Mall, Residency Road, Bangalore",
        "locality": "Galaxy Mall",
        "parentId": 4284,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3.7 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "4046",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 3.700000047683716,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "52685",
        "name": "Chung Wah",
        "uuid": "db847746-bbd3-4d38-938e-ff682439db6b",
        "city": "1",
        "area": "Koramangala",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "tbcrmz1de0lnpfbifhrd",
        "cuisines": [
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 80000,
        "costForTwoString": "₹800 FOR TWO",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "slaString": "34 MINS",
        "lastMileTravel": 6.599999904632568,
        "slugs": {
          "restaurant": "chung-wah-koramangala-5th-block-koramangala",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "NO 129, 5TH BLOCK, KHB COLONY, KORAMANGALA, BANGALORE - 560095",
        "locality": "KHB Colony",
        "parentId": 271,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 6300,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 6300,
          "message": "",
          "title": "Delivery Charge",
          "amount": "6300",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7184944~p=22~eid=00000188-f895-6f95-13bb-46c600871619~srvts=1687797723029",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "6.5 kms",
        "hasSurge": false,
        "loyaltyDiscoverPresentationInfo": {
          "logoCtx": {
            "text": "BENEFITS",
            "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
          },
          "freedelMessage": "FREE DELIVERY",
          "exclusiveOfferMessage": ""
        },
        "sla": {
          "restaurantId": "52685",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "lastMileTravel": 6.599999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    }
  ]

const RestaurantCard = (props) => {

    const { resData } = props;

    const { name, avgRating, cuisines, costForTwo, cloudinaryImageId } = resData.data;

    return (
        <div className="res-card-container">
            <img className="res-card-img" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
            <div className="res-card-body">
                <div className="res-details">
                    <div>{name}</div>
                    <div>{avgRating} Start</div>
                </div>
                <div className="res-details">
                    <div>{cuisines.join(",")}</div>
                    <div>&#x20B9;{costForTwo / 100}</div>
                </div>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <>
            <Search/>
            <div className="res-card-list-container">
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard resData={restaurant}/>
                    ))
                }
            </div>
        </>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(<AppLayout/>);