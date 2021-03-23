# Ramen Rater

Today you'll be building an app for rating ramen. You will be using a local API and building out the frontend for our app.

## Demo

Use this gif as an example of how the app should work.

![demo](assets/demo.gif)

## Setup

- Run `json-server --watch db.json` to get the backend started
- Open the `index.html` file on your browser
- Write your code in the `index.js` file

## Endpoints

Your base URL for your API will be: http://localhost:3000

The endpoints you will need are:

- GET `/ramens`
- GET `/ramens/:id`
- PATCH `/ramens/:id`

## Core Deliverables

As a user, I can:

- See all ramen images in the `div` with the id of `ramen-menu`. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an an `img` tag inside the `#ramen-menu` div.
- Click on an image from the `#ramen-menu` div and see all the info about that ramen displayed inside the `#ramen-detail` div, as well as the current rating and comment for the ramen displayed in the `#ramen-rating` form.
- Update the rating and comment for a ramen. When the `#ramen-rating` form is submitted, it should update the value on the server. Changes should also be reflected on the frontend (you can test this by submitting the form; clicking a different ramen image; then clicking the image for the ramen you updated - you should see the rating and comment that you submitted previously).

## Advanced Deliverables

You'll need a these endpoints for the advanced deliverables:

- POST `/ramens`
- DELETE `/ramens/:id`

These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

> Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

- See the details for the first ramen as soon as the page loads (without clicking on an image)
- Create a new ramen. You can add this form to the `index.html` file to get started:

```html
<form id="new-ramen">
  <h4>Add New Ramen</h4>
  <label for="name">Name: </label>
  <input type="text" name="name" id="new-name" />
  <label for="restaurant">Restaurant: </label>
  <input type="text" name="restaurant" id="new-restaurant" />
  <label for="image">Image: </label>
  <input type="text" name="image" id="new-image" />
  <label for="rating">Rating: </label>
  <input type="number" name="rating" id="new-rating" />
  <label for="new-comment">Comment: </label>
  <textarea name="new-comment" id="new-comment">Insert Comment Here</textarea>
  <input type="submit" value="Create" />
</form>
```

- Delete a ramen (you can add a "delete" button if you'd like, or use an existing element to handle the delete action). The ramen should be removed from the `ramen-menu` div, and should not be displayed in the `ramen-detail` div.

## Rubric

You can find the rubric for this assessment [here](https://github.com/learn-co-curriculum/se-rubrics/blob/master/module-3.md).
