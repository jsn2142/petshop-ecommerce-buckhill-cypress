# Test Scenarios and Test Cases of the User Journey 
### Test Scenario

1. Check system response with valid user credentials to login to the application
2. Check system response when promotions are being checked in the homepage
3. Check whether the products can be browsed in the homepage
4. Check if a specific product can be searched and can be added to cart
5. Check whether the shipping and billing address can be added for the selected product in cart
6. Check if the shipping address can be edited after insertion
7. Check if the order can be completed

### Test Case
| Test Case # | Prerequisite | Test Case Description | Test Data | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | Accessing User Listing API is required to fetch the User Email address dynamically | Login using user credentials from User Listing API | Admin Email: admin@buckhill.co.uk; Admin Password: admin; User Password: userpassword | User login will be successful with the User Email extracted from User Listing API | User login is successful with the User Email extracted from User Listing API | Passed |
| 02 | User login credentials must be available | Check Promotions in the Homepage | User Email: { user email }; User Password: userpassword | The promotions carousel can be traversed using the arrow keys | The promotions carousel can be traversed using the arrow keys | Passed |
| 03 | User login credentials must be available | Browse through the products in the Homepage | User Email: { user email }; User Password: userpassword | Different products in different section will be visible | Different products in different section is visible | Passed |
| 04 | User login credentials must be available | Search and select a product | User Email: { user email }; User Password: userpassword | 1. A product can be searched and selected to see the details 2. Product can be added to cart | 1. A product can be searched and selected to see the details 2. Product can be added to cart | Passed |
| 05 | User login credentials must be available | Add shipping and billing address | User Email: { user email }; User Password: userpassword; "User Shipping Address Data" | 1. From the Shooping Cart, checkpout can be done 2. Shipping and Billing address can be inserted 3. Payment information can be selected and inserted | 1. From the Shooping Cart, checkpout can be done 2. Shipping and Billing address can be inserted 3. Payment information can be selected and inserted | Passed |
| 06 | User login credentials must be available | Edit the shipping address | User Email: { user email }; User Password: userpassword; "Other User Shipping Address Data" | Shipping address can be edited | Shipping address can be edited | Passed |
| 07 | User login credentials must be available | Confirm the order | User Email: { user email }; User Password: userpassword | With all the user, product info and address, the order should be done and can be confirmed | The order got failed to confirm | Failed |