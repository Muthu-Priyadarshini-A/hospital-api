Hospital API
-------------

Theme:
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]
- Date

  Routes
  -------
- Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

Installation
--------------

To run this application on your local machine, please follow these steps:

Clone this repository using the following command: https://github.com/Muthu-Priyadarshini-A/hospital-api.git

Install the required dependencies using the following command: $ npm install

Start the application using the following command: $ npm start

Open the application in your postman app by visiting the following URL: http://localhost:8080


Screenshots of routes check in Postman below:
----------------------------------------------
http://localhost:8080/doctors/register
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/04625f49-f4e1-440f-b811-c90430a2a8a3)

http://localhost:8080/doctors/login
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/c1736678-ce80-453b-9c00-960a65d15253)

http://localhost:8080/patients/register
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/e25be671-e8f9-4def-8657-d0e088687dbf)

http://localhost:8080/patients/659d6ccbb9b13df44538a0cb/create-report
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/8bd98c3c-b6a4-4489-aaa7-02ac95b09569)

http://localhost:8080/patients/659d6ccbb9b13df44538a0cb/all_reports
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/8fcfc906-ec86-4e44-9aa6-1665ffd70089)

http://localhost:8080/report/:status
![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/d8372768-a3e0-42fb-8c00-f93c0c1f9b16)






