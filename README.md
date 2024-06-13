# **Tailor Fit Hub** - Online Tailoring Platform

*Welcome to **Tailor Fit Hub***, an online tailoring platform that connects local tailors with customers seeking custom-fitted clothing. Tailor Fit Hub allows individual tailors to showcase their unique designs and provides a seamless experience for customers to order bespoke clothing with precise measurements and serves as a dynamic platform connecting customers and tailors, 
enhancing the traditional tailoring experience.




![HomePage](https://i.postimg.cc/Z5yr9Xvh/snip3.png)

![HomePage](https://i.postimg.cc/WbrJ7g8B/snip2.png)


## Introduction

**Tailor Fit Hub** is designed to bridge the gap between talented local tailors and fashion-conscious customers. Our platform offers a space for tailors to display their creations, while customers can easily order custom-made clothing from the comfort of their homes.


## Features

* **Tailor Profiles** - Tailors can create profiles to showcase their skills, designs, and previous works.

* **Design Showcase** - A dedicated section for tailors to upload and display their clothing designs.

* **Custom Orders** - Customers can place orders for custom-fitted clothing based on their measurements.

* **Measurement Guide** - Step-by-step guide for customers to accurately take their measurements.

* **Order Tracking** - Customers can track the status of their orders.

* **Reviews and Ratings** - Customers can leave reviews and ratings for tailors based on their experience


## Usage

For Tailors:

- Sign up and create a profile.
- Upload your clothing designs and set prices.
- Manage orders.

For Customers:

- Sign up and browse through tailor profiles and designs.
- Select a design and provide your measurements.
- Place an order and make a payment.
- Track your order, review tailors, and receive your custom-made clothing.




## Technologies Used

* **Client:** React, Redux, TailwindCSS

* **Server:** Node.js , Express.js

* **Frontend:** HTML, CSS, JavaScript, React

* **Database:** MongoDB

* **Authentication:** JWT (JSON Web Tokens)

* **Payment Gateway:** Razor Pay (Testing)

* **Media Management:** Cloudinary
## Installation

To get a local copy up and running, follow these simple steps:

#### **Step - 1**
Clone the repository to your local computer
```bash
  git clone https://github.com/sachGit1/FinalFinal
  cd FinalFinal
```
#### **Step - 2 : Installing Dependencies**
Installing Dependency for both client and Server
```bash
cd FinalFinal
```
To Install Dependency for client
```bash
  cd client
  npm i
```
To Install Dependency for server
```bash
  cd server
  npm i
```
#### **Step - 3 : Adding Environment Variables**
`PORT` : 4000

`MONGODB_CONNECTION` : Your database on Mongo Cloud

`SECRET_KEY` : Random combinations of characters or digits

`CLOUDINARY_CLOUD_NAME` : From Cloudinary website

`CLOUDINARY_API_KEY` : From Cloudinary Website

`CLOUDINARY_API_SECRET` : From Cloudinary Website

`KEY_ID` : Razorpay Key Id

`KEY_SECRET` : Razorpay Secret Key

`EMAIL` : Email for Email Services

`PASS` : Password of Email

#### **Step - 4 : Start the Application on local computer**
**To Start Frontend Server(or client):**\
Move into client directory and start frontend server 
```bash
  cd client
  npm start
```
**To Start Backend Server(or server):**\
Move into server directory and start backend server
```bash
  cd server
  npm start
```
after starting the both Frontend and Backend servers, you can access application on the browser.
