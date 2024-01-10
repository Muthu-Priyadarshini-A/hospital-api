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
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/91daec84-ec39-489a-b84f-796ede40d092)

http://localhost:8080/doctors/login
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/c1736678-ce80-453b-9c00-960a65d15253)

http://localhost:8080/patients/register
![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/04d8dda8-b2fd-4bc8-82a2-cf0939fbc6ab)

http://localhost:8080/patients/659d6ccbb9b13df44538a0cb/create-report
 ![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/700d360b-dd21-40a6-9fef-937c9a7736f5)

http://localhost:8080/patients/659d6ccbb9b13df44538a0cb/all_reports
![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/ef0b0da2-94e6-48e1-b834-bea72ecd6094)

http://localhost:8080/report/:status
![image](https://github.com/Muthu-Priyadarshini-A/hospital-api/assets/133015304/850c4312-d4f7-48da-bd52-9ec6a6b70698)







