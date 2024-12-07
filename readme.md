
# School Management API

This is a Node.js API for managing school data. The API allows users to:
- Add new schools to the database.
- Retrieve a list of schools sorted by proximity to a specified location.

## Features
- **Add School**: API to add new schools with relevant details.
- **List Schools**: API to list all schools, sorted by proximity to the user's location.
- **Geographical Sorting**: Uses the Haversine formula to calculate the distance between the user and each school.

## Deployed Links

- **Base API**: [https://school-management-api-9wlx.onrender.com](https://school-management-api-9wlx.onrender.com)
- **Add School Endpoint**: [https://school-management-api-9wlx.onrender.com/api/addSchool](https://school-management-api-9wlx.onrender.com/api/addSchool)
- **List Schools Endpoint (Example with Random Latitude & Longitude)**: [https://school-management-api-9wlx.onrender.com/api/listSchools?latitude=28.6139&longitude=77.2090](https://school-management-api-9wlx.onrender.com/api/listSchools?latitude=28.6139&longitude=77.2090)

---

## API Endpoints

### 1. Add School
- **Endpoint**: `POST /api/addSchool`
- **Description**: Adds a new school to the database.
- **Request Body**:
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 28.678101,
    "longitude": 77.435859
  }
  ```
  
#### **Postman Example**:
1. **Set the HTTP method** to `POST`.
2. **Set the URL** to the deployed API:
   ```
   https://school-management-api-9wlx.onrender.com/api/addSchool
   ```
3. **Set the Headers**:
   - Key: `Content-Type`
   - Value: `application/json`
4. **In the Body tab**, choose `raw` and select `JSON` format from the dropdown.
5. **Insert the JSON Payload** (Example):
   ```json
   {
     "name": "DPSG Meerut Road",
     "address": "Meerut Road, Ghaziabad",
     "latitude": 28.6758,
     "longitude": 77.4321
   }
   ```

#### **Expected Response**:
```json
{
  "message": "School added successfully"
}
```

---

### 2. List Schools
- **Endpoint**: `GET /api/listSchools`
- **Description**: Retrieves a list of schools, sorted by proximity to the user's location based on the latitude and longitude parameters provided.
- **Query Parameters**:
  - `latitude` (float): Latitude of the user's location.
  - `longitude` (float): Longitude of the user's location.

#### **Postman Example**:
1. **Set the HTTP method** to `GET`.
2. **Set the URL** to the deployed API:
   ```
   https://school-management-api-9wlx.onrender.com/api/listSchools?latitude=28.67810159242281&longitude=77.43585918068791
   ```
3. **Insert the query parameters** in Postman:
   - `latitude`: `28.67810159242281`
   - `longitude`: `77.43585918068791`

#### **Expected Response**:
```json
[
  {
    "id": 1,
    "name": "DPSG Meerut Road",
    "address": "Meerut Road, Ghaziabad",
    "latitude": 28.6758,
    "longitude": 77.4321,
    "distance": 0.35
  },
  {
    "id": 2,
    "name": "St. Joseph's Academy",
    "address": "Mariam Nagar, Ghaziabad",
    "latitude": 28.6825,
    "longitude": 77.4389,
    "distance": 1.12
  }
]
```

---

## How to Run Locally

### Prerequisites
- **Node.js** (>= 14.x)
- **MySQL** or **Database Setup (RDS)**

### Steps to Run

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/school-management-api.git
   cd school-management-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:
   ```env
   DB_HOST=your-db-host
   DB_USER=your-db-username
   DB_PASSWORD=your-db-password
   DB_NAME=your-db-name
   DB_PORT=3306
    PORT=3003
   ```

4. **Run the Application**:
   ```bash
   npm start
   ```
   The API will be running on `http://localhost:3000`.

---

## Testing with Postman

You can test the API endpoints using Postman.

### Add School
- **Method**: `POST`
- **URL**: `http://localhost:3000/api/addSchool`
- **Body (JSON)**:
  ```json
  {
    "name": "DPSG Meerut Road",
    "address": "Meerut Road, Ghaziabad",
    "latitude": 28.6758,
    "longitude": 77.4321
  }
  ```

### List Schools
- **Method**: `GET`
- **URL**: `http://localhost:3000/api/listSchools?latitude=28.678101&longitude=77.435859`
  
---

## Technologies Used
- **Node.js**: Backend runtime for building APIs.
- **Express.js**: Web framework for building the API.
- **MySQL**: Database to store school information.
- **Haversine Formula**: Used to calculate the distance between two geographical points.
- **Render**: Hosting platform for deploying the API.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

