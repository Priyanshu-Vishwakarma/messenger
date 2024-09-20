**Name** : Priyanshu  Vishwakarma
**Institute**: IIT, (BHU) Varanasi



![alt text](image.png)
Home Page

 ![image](https://github.com/user-attachments/assets/35a5751c-7a94-491b-a53a-6e537adb5d2d)
Register page

 ![image](https://github.com/user-attachments/assets/31e8a58a-feef-4848-96d3-43a8c649f585)
Sign In Page

![image](https://github.com/user-attachments/assets/777ec5f2-a290-4755-8a42-458ef7a2c090)
Chats Page

The schema design of my database is 
![image](https://github.com/user-attachments/assets/e639029c-bf8c-4445-95cc-e70e23f470a4)


### API Endpoints

-- **`POST /auth/register`**: Create a new user account using email, username, and password.
- **`POST /auth/login`**: Authenticate an existing user and return a JWT token for session management.
- **`GET /auth/users`**: Get a list of all users, excluding the one currently authenticated (JWT required).
- **`POST /messages`**: Send a message from the authenticated user to another user (JWT required).
- **`GET /messages/{otherUserId}`**: Retrieve the conversation history between the authenticated user and a specified user (JWT required).

For the Frontend I have used `react` with `vite` and for routing i have used `react-router-dom`, the frontend code is made with `@shadcn/ui` components and is available in the `client` folder.
