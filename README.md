**Name** : Nikhil Raj
**University/college**: Indian Institute of Technology, (BHU) Varanasi
**Department** : Pharmaceutical Engineering and Technology (PHE)


![alt text](image.png)
Home Page

![image](https://github.com/user-attachments/assets/8107750d-bfa2-42aa-bdc9-ee3b037eed4a)
Sign Up page

![image](https://github.com/user-attachments/assets/074f2afd-71fe-4f6a-8fe6-1088ea59d5d7)
Sign In Page

![image](https://github.com/user-attachments/assets/777ec5f2-a290-4755-8a42-458ef7a2c090)
Chats Page

The schema design of my database is 
![image](https://github.com/user-attachments/assets/e639029c-bf8c-4445-95cc-e70e23f470a4)


### API Endpoints

- **`POST /auth/register`**: Register a new user with email, username, and password.
- **`POST /auth/login`**: Log in an existing user and receive a JWT token for authentication.
- **`GET /auth/users`**: Retrieve a list of all users except the authenticated one (JWT required).
- **`POST /messages`**: Send a message from the authenticated user to another user (JWT required).
- **`GET /messages/{otherUserId}`**: Fetch the message history between the authenticated user and another user (JWT required).

For the Frontend I have used `react` with `vite` and for routing i have used `react-router-dom`, the frontend code is made with `@shadcn/ui` components and is available in the `client` folder.
