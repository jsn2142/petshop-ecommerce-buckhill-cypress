# Test Scenarios and Test Cases of the Admin Journey 📜
### Test Scenario

1. Check system response with valid Admin credentials to login to the application's Admin panel
2. Check if the dashboard shows all the information 
3. Check system reponse for shipment location with different filters
4. Check Customer information from the list using the data from User Listing API
5. Check if Customer information can be added

### Test Case
| Test Case # | Prerequisite | Test Case Description | Test Data | Expected Result | Actual Result | Pass/Fail |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | Valid Admin login credentials must be available | Login using Admin credentials | Admin Email: admin@buckhill.co.uk; Admin Password: admin | Admin login will be successful | Admin login is successful | Passed |
| 02 | Valid Admin login credentials must be available | Check dashboard elements | Admin Email: admin@buckhill.co.uk; Admin Password: admin | The dashboard must show all the data properly | The dashboard shows all the data properly | Passed |
| 03 | Valid Admin login credentials must be available | Check Shipment location with different filters | Admin Email: admin@buckhill.co.uk; Admin Password: admin | Different filters should show information accordingly | Different filters shows information accordingly | Passed |
| 04 | Valid Admin login credentials must be available | Check Customer information from the list (using the data from User Listing API) | Admin Email: admin@buckhill.co.uk; Admin Password: admin | Customer data should match with the data fetched from the User Listing API | Customer data matches with the data fetched from the User Listing API | Passed |
| 05 | Valid Admin login credentials must be available | Add a new Customer information | Admin Email: admin@buckhill.co.uk; Admin Password: admin; { A User Info } | Customer information can be added to the list and then verified | Customer information can be added to the list and then verified | Passed |

