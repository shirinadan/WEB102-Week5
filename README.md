# Web Development Project 4 - *Trippin' on Cats*

Submitted by: **Shirina Shaji Daniel**

This web app: **is a StumbleUpon-style cat explorer that fetches random cats from The Cat API and lets you ban certain attributes so they never show up again.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Application features a button that creates a new API fetch request on click and displays at least three attributes and an image obtained from the returned JSON data**
  - The app uses the Cat API to display the cat’s breed, weight, origin, and life span along with an image for each result.
- [x] **Only one item/data from API call response is viewable at a time and at least one image is displayed per API call**
  - Only a single cat card is shown at any time, and every API call includes at least one image that matches the displayed attributes.
- [x] **API call response results should appear random to the user**
  - Clicking the Discover button performs a new fetch and chooses a random cat from the response so results feel random, with occasional repeats.
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
  - At least one attribute (origin, and optionally breed) is clickable on each cat card.
  - Clicking a clickable attribute not on the ban list immediately adds it to the ban list.
  - Clicking an attribute in the ban list immediately removes it from the ban list.
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**
  - When the Discover button is clicked, the app filters out cats whose origin is in the ban list before choosing a random result.
  - When a value is removed from the ban list, cats with that value can appear again on future Discover clicks.
  - [x] _Recording shows that when clicked, an attribute in the ban list is immediately removed from the list of banned attributes._

The following **optional** features are implemented:

- [x] Multiple types of attributes are clickable and can be added to the ban list (breed and origin buttons can both be used to ban values).
- [x] Users can see a stored history of their previously displayed results from this session
  - A dedicated History section of the application displays all the previous cats seen before.
  - Each time the Discover button is clicked, the history updates with the newest API result at the top.

The following **additional** features are implemented:

- [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough:

<img src="veni-vici-clean\walkthrough.gif" title="Video Walkthrough" width="" alt="Video Walkthrough" />

## Notes

Describe any challenges encountered while building the app.

- Debugging API responses that sometimes came back without breed data.
- Getting the ban list logic right so that it filters results without causing the app to show no cats at all.

## License

    Copyright 2026 Shirina Shaji Daniel

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.